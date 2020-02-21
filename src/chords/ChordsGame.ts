import { IChordsView } from "./IChordsView.js";
import { ChordsPuzzle } from "./ChordsPuzzle.js";
import { Knowtes } from "../knowtes/Knowtes.js";
import { NoteValues } from "./ChordsEnums.js";
import { IKnowtesView } from "../knowtes/IKnowtesView.js";
import { Settings } from "./Settings.js";

export class ChordsGame {
    //settings
    private settings: Settings;
    //history
    //current
    private puzzle: ChordsPuzzle | null = null;
    //knowtes
    private knowtes: Knowtes;
    private keyboardWrapper: HTMLElement | null = null;
    //stats
    //views
    private views: IChordsView[] = [];

    constructor(settings: Settings) {
        this.settings = settings;
        this.knowtes = new Knowtes();
    }

    public addView(view: IChordsView) {
        this.views.push(view);
        this.updateViews();
    }

    public addKeyboardView(view: IKnowtesView) {
        this.knowtes.addView(view);
    }

    public setKeyboardWrapper(node: HTMLElement) {
        this.keyboardWrapper = node;
    }

    public getPuzzle() {
        return this.puzzle;
    }

    public solvePuzzle() {
        if (this.puzzle) {
            this.puzzle.stopClock();
            this.puzzle.solve();

            this.showKeyboard();
        }
    }

    public puzzleUpdate() {
        this.updateViews();
    }

    public nextPuzzle() {
        this.puzzle = new ChordsPuzzle(this, settings);
        this.updateKeyboard();

        this.puzzle.startClock();
        this.updateViews();

        this.hideKeyboard();
    }

    private showKeyboard() {
        if (this.keyboardWrapper) {
            this.keyboardWrapper.classList.remove("hidden");
        }
    }

    private hideKeyboard() {
        if (this.keyboardWrapper) {
            this.keyboardWrapper.classList.add("hidden");
        }
    }

    private updateKeyboard() {
        if (this.puzzle && this.knowtes) {
            this.knowtes.resetNotes();
            let notes = this.puzzle.getNotes();

            let currOctave = 0;
            for (let i = 0; i < notes.length; i++) {
                let noteString = notes[i];

                if (i > 0) {
                    if (NoteValues[notes[i]] < NoteValues[notes[i - 1]]) {
                        // make one ocatev higher
                        currOctave++;
                    }

                    //append octave to string
                    if (currOctave > 0) {
                        noteString += currOctave;
                    }
                }

                //console.log(">" + noteString + "<");
                this.knowtes.setNote(noteString, true);
            }
        }
    }

    private updateViews() {
        for (let view of this.views) {
            view.update(this);
        }
    }
}