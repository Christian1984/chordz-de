import { IChordsView } from "./IChordsView.js";
import { ChordsGame } from "./ChordsGame.js";

export class ChordsView implements IChordsView {
    public update(game: ChordsGame) {
        let puzzle = game.getPuzzle();

        if (puzzle)
        {
            console.log(
                "Chord:", puzzle.getChord(),
                ", Reversal:", puzzle.getReversal(),
                ", LeftHand;", puzzle.getLeftHand(),
                ", Seconds;", puzzle.getSeconds()
            );
        }
    }
}