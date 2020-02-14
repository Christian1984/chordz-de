import { IChordsView } from "./IChordsView.js";
import { ChordsGame } from "./ChordsGame.js";
import { Chord } from "./ChordsEnums.js";

export class ChordsView implements IChordsView {
    private chordDisplay: HTMLElement;
    private reversalDisplay: HTMLElement;
    private handDisplay: HTMLElement;
    private timerDisplay: HTMLElement;

    constructor(
        chordDisplay: HTMLElement,
        reversalDisplay: HTMLElement,
        handDisplay: HTMLElement,
        timerDisplay: HTMLElement
    ) {
        this.chordDisplay = chordDisplay;
        this.reversalDisplay = reversalDisplay;
        this.handDisplay = handDisplay;
        this.timerDisplay = timerDisplay;
    }

    public update(game: ChordsGame) {
        let puzzle = game.getPuzzle();

        if (puzzle)
        {
            this.chordDisplay.textContent = this.chordToString(puzzle.getChord());
            this.reversalDisplay.textContent = this.reversalToString(puzzle.getReversal());
            this.handDisplay.textContent = this.handToString(puzzle.getLeftHand());
            this.timerDisplay.textContent = this.secondsToString(puzzle.getSeconds());

            if (puzzle.isSolved()) {
                //TODO: show keyboard
            }
            else
            {
                //TODO: hide keyboard
            }
        }
    }

    private chordToString(chord: Chord): string {
        switch (chord) {
            case Chord.C:
                return "C";
            case Chord.F:
                return "F";
            case Chord.G:
                return "G";
        }
    }

    private reversalToString(reversal: number): string {
        if (reversal < 1) {
            return "Grundstellung";
        }
        else {
            return reversal + ". Umkehrung"
        }
    }

    private handToString(leftHand: boolean): string {
        return leftHand ? "Linke Hand" : "Rechte Hand";
    }

    private secondsToString(seconds: number) : string {
        let minuteNumber = Math.floor(seconds / 60);
        let minuteString = minuteNumber > 0 ? minuteNumber.toString() : "0";

        let secondsNumber = Math.floor(seconds % 60);
        let secondsString = secondsNumber > 9 ? secondsNumber.toString() : "0" + secondsNumber.toString();

        return minuteString + ":" + secondsString;
    }
}