import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  tasksController = new TasksController();
  imageController = new ImageController()
  weatherController = new WeatherController()
  quoteController = new QuoteController()
}

window["app"] = new App();
