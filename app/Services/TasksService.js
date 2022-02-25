import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { sandboxApi } from "./AxiosService.js"

class TasksService{
    async _getTasks(){
        const res = await sandboxApi.get("gage/todos")
        console.log(res.data);
        ProxyState.tasks = res.data.map(t => new Task(t))
    }
   async addTask(rawTask){
      
        const res = await sandboxApi.post("gage/todos", rawTask)
        let createdTask = new Task(res.data)
        ProxyState.tasks = [...ProxyState.tasks, createdTask]
        console.log(res.data);
        console.log(ProxyState.tasks);
    }
    async removeTask(id){
        const res = await sandboxApi.delete(`gage/todos/${id}`)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
   async checked(id){
        let task = ProxyState.tasks.find(t => t.id == id)
        if (task.completed) {
            task.completed = false
        } else {
            task.completed = true
        }

        const res = await sandboxApi.put(`gage/todos/${id}`, task)
        ProxyState.tasks = ProxyState.tasks

        console.log(task);
    }
}


export const tasksService = new TasksService()