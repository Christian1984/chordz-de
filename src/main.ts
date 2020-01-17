import { Knowtes } from './knowtes.js';
import { KnowtesController } from './knowtesController.js';

(function() {
    let knowtes = new Knowtes();

    let keyPad: HTMLElement | null = document.querySelector("#name-buttons");

    if (keyPad) {
        let buttonController = new KnowtesController(keyPad);
        buttonController.setModel(knowtes);
    }


    console.log("done!");
})();