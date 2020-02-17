import { ChordsGame } from "./ChordsGame.js";
import { ChordsView } from "./ChordsView.js";
import { NoteValues } from "./ChordsEnums.js";
import { KnowtesViewController } from "../knowtes/KnowtesViewController.js";

(function() {
    let chordsDisplay = document.getElementById("chord-name");
    let reversalDisplay = document.getElementById("chord-reversal");
    let handDisplay = document.getElementById("chord-hand");
    let timerDisplay = document.getElementById("chord-timer");

    if (
        chordsDisplay &&
        reversalDisplay &&
        handDisplay &&
        timerDisplay
    ) {
        // create chords view
        let view = new ChordsView(chordsDisplay, reversalDisplay, handDisplay, timerDisplay);

        let game = new ChordsGame();
        game.addView(view);

        // create keyboard view
        let keyboard: HTMLElement | null = document.querySelector("#keyboard");

        if (keyboard) {
            let keyboardViewController = new KnowtesViewController(keyboard, "li");
            game.addKeyboardView(keyboardViewController);
        }

        let keyboardWrapper: HTMLElement | null = document.querySelector("#keyboard-wrapper");

        if (keyboardWrapper) {
            game.setKeyboardWrapper(keyboardWrapper);
        }

        game.nextPuzzle();
    }

    console.log("done!");
})();