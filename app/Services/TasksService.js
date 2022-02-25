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
        const task = new Task(rawTask)
        ProxyState.tasks = [...ProxyState.tasks, task]
        const res = await sandboxApi.post("gage/todos", task)
        console.log(res.data);
        console.log(ProxyState.tasks);
    }
}


export const tasksService = new TasksService()