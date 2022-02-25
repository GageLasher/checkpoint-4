import { ImageController } from "./Controllers/ImageController.js";
import { TasksController } from "./Controllers/TasksController.js";


class App {
  tasksController = new TasksController();
  imageController = new ImageController()
}

window["app"] = new App();
