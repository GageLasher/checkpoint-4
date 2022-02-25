import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js";

async function _getTasks(){
    await tasksService._getTasks()
}
  function _drawTasks(){
        let template = ""
        ProxyState.tasks.forEach(t => template += t.Template)
        document.getElementById("tasks").innerHTML = template
        const completedTask = ProxyState.tasks.filter(t => t.completed == true)
        document.getElementById("completed").innerText = `${completedTask.length}/${ProxyState.tasks.length}`
    }

export class TasksController{
    constructor(){
        ProxyState.on('tasks', _drawTasks)
        _getTasks()
        _drawTasks()
        console.log("TasksController Loaded");
    }

  async addTask(){
      try {
        window.event.preventDefault()
        let form = window.event.target
        const rawTask ={
            description: form.name.value
        }
        await tasksService.addTask(rawTask)
        form.reset()
          
      } catch (error) {
          console.error(error);
      }
        
    }
    async removeTask(id){
        try {
            if(await Pop.confirm()) {
                await tasksService.removeTask(id)
            }
        } catch (error) {
            console.error(error);
        }
       
    }
   async checked(id){
       try {
           await tasksService.checked(id)
       } catch (error) {
           console.error(error);
       }
        
    }
}