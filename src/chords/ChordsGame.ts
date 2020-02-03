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
        this.generatePuzzle();
    }

    public addView(view: IChordsView) {
        this.views.push(view);
        this.updateViews();
    }

    public getPuzzle() {
        return this.puzzle;
    }

    private generatePuzzle() {
        this.puzzle = new ChordsPuzzle();
        this.updateViews();
    }

    private updateViews() {
        for (let view of this.views) {
            view.update(this);
        }
    }
}