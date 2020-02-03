import { ChordsGame } from "./ChordsGame.js";
import { ChordsView } from "./ChordsView.js";

(function() {
    let view = new ChordsView();
    let game = new ChordsGame();
    game.addView(view);

    console.log("done!");
})();