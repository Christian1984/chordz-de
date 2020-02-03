import { ChordsGame } from "./ChordsGame.js";
import { ChordsView } from "./ChordsView.js";

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
        let view = new ChordsView(chordsDisplay, reversalDisplay, handDisplay, timerDisplay);
        let game = new ChordsGame();
        game.addView(view);
    }

    console.log("done!");
})();