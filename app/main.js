import { ImageController } from "./Controllers/ImageController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  tasksController = new TasksController();
  imageController = new ImageController()
  weatherController = new WeatherController()
}

window["app"] = new App();
