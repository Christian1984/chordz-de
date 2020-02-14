import { ChordsGame } from "./ChordsGame.js";
import { ChordsView } from "./ChordsView.js";
import { NoteValues } from "./ChordsEnums.js";
import { KnowtesViewController } from "../knowtes/KnowtesViewController.js";

(function() {
    let chordsDisplay = document.getElementById("chord-name");
    let reversalDisplay = document.getElementById("chord-reversal");
    let handDisplay = document.getElementById("chord-hand");
    let timerDisplay = document.getElementById("chord-timer");

    console.log('NoteValues.a', NoteValues.a);
    console.log('NoteValues["d"]', NoteValues["d"]);

    let a = "x";
    console.log('NoteValues["x"]', NoteValues[a]);

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
            game.addKnowtesView(keyboardViewController);
        }

        game.nextPuzzle();
    }

    console.log("done!");
})();