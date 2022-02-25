export class Task{
    constructor(data){
        this.id = data.id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }
    get Template(){
        return `
        <div class="d-flex justify-content-between p-3">
        <input id="${this.id}" ${this.completed ? "checked" : ''} onclick="app.tasksController.checked('${this.id}')"  type="checkbox" id="vehicle1" name="vehicle1" value="${this.name}">
          <label for="vehicle1">${this.description}</label>
          <i class="mdi mdi-delete selectable" title="Delete ${this.description}" onclick="app.tasksController.removeTask('${this.id}')"></i>
          <br>
          </div>
        `
    }
}