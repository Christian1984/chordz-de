import { IChordsView } from "./IChordsView.js";
import { ChordsPuzzle } from "./ChordsPuzzle.js";
import { Knowtes } from "../knowtes/Knowtes.js";
import { NoteValues } from "./ChordsEnums.js";
import { IKnowtesView } from "../knowtes/IKnowtesView.js";

export class ChordsGame {
    //settings
    //history
    //current
    private puzzle: ChordsPuzzle | null = null;
    //knowtes
    private knowtes: Knowtes;
    //stats
    //views
    private views: IChordsView[] = [];

    constructor() {
        this.knowtes = new Knowtes();
    }

    public addView(view: IChordsView) {
        this.views.push(view);
        this.updateViews();
    }

    public addKnowtesView(view: IKnowtesView) {
        this.knowtes.addView(view);
    }

    public getPuzzle() {
        return this.puzzle;
    }

    public solvePuzzle() {
        if (this.puzzle) {
            this.puzzle.stopClock();
            this.puzzle.solve();
        }
    }

    public puzzleUpdate() {
        this.updateViews();
    }

    public nextPuzzle() {
        this.puzzle = new ChordsPuzzle(this);
        this.updateKnowtes();

        this.puzzle.startClock();
        this.updateViews();
    }

    private updateKnowtes() {
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