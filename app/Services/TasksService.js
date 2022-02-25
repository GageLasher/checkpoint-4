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
}


export const tasksService = new TasksService()