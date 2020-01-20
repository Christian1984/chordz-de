import { Knowtes } from './Knowtes.js';
import { KnowtesViewController } from './KnowtesViewController.js';

(function() {
    let knowtes = new Knowtes();

    let keyPad: HTMLElement | null = document.querySelector("#name-buttons");

    if (keyPad) {
        let buttonViewController = new KnowtesViewController(keyPad, "li");
        buttonViewController.setModel(knowtes);
        knowtes.addView(buttonViewController);
    }

    let keyboard: HTMLElement | null = document.querySelector("#keyboard");

    if (keyboard) {
        let keyboardViewController = new KnowtesViewController(keyboard, "li");
        keyboardViewController.setModel(knowtes);
        knowtes.addView(keyboardViewController);
    }

    console.log("done!");
})();