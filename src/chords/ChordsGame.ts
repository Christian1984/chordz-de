import { IChordsView } from "./IChordsView.js";
import { ChordsPuzzle } from "./ChordsPuzzle.js";

export class ChordsGame {
    //settings
    //history
    //current
    private puzzle: ChordsPuzzle | null = null;
    //stats
    //views
    private views: IChordsView[] = [];

    constructor() {
        this.nextPuzzle();
    }

    public addView(view: IChordsView) {
        this.views.push(view);
        this.updateViews();
    }

    public getPuzzle() {
        return this.puzzle;
    }

    public solvePuzzle() {
        if (this.puzzle) {
            this.puzzle.stopClock();
        }
    }

    public nextPuzzle() {
        this.puzzle = new ChordsPuzzle();
        this.puzzle.startClock();
        this.updateViews();
    }

    private updateViews() {
        for (let view of this.views) {
            view.update(this);
        }
    }
}