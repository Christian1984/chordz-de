import { Knowtes } from './knowtes.js';
import { KnowtesViewController } from './knowtesViewController.js';

(function() {
    let knowtes = new Knowtes();

    let keyPad: HTMLElement | null = document.querySelector("#name-buttons");

    if (keyPad) {
        let buttonViewController = new KnowtesViewController(keyPad);
        buttonViewController.setModel(knowtes);
        knowtes.addView(buttonViewController);
    }

    console.log("done!");
})();