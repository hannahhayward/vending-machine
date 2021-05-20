import { GardettosController } from "./Controllers/GardettosController.js";
import { ReesesController } from "./Controllers/ReesesController.js";

class App {
gardettosController = new GardettosController()
reesesController = new ReesesController()

}

window["app"] = new App();
