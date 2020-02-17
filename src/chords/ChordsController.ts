import { ChordsGame } from "./ChordsGame.js";

export class ChordsController {
    private chordsGame: ChordsGame;
    private solveButton: HTMLElement | null;
    private nextButton: HTMLElement | null;

    constructor(chordsGame: ChordsGame, solveButton: HTMLElement | null, nextButton: HTMLElement | null) {
        this.chordsGame = chordsGame;
        this.solveButton = solveButton;
        this.nextButton = nextButton;

        solveButton?.addEventListener("click", (e) => {
            e.preventDefault();
            chordsGame.solvePuzzle();

            this.showNextButton();
            this.hideSolveButton();

            this.focusNextButton();
        });

        nextButton?.addEventListener("click", (e) => {
            e.preventDefault();
            chordsGame.nextPuzzle();

            this.showSolveButton();
            this.hideNextButton();

            this.focusSolveButton();
        });

        this.hideNextButton();
        this.focusSolveButton();
    }

    private showSolveButton() {
        this.solveButton?.classList.remove("hidden");
    }
    private showNextButton() {
        this.nextButton?.classList.remove("hidden");
    }
    private hideSolveButton() {
        this.solveButton?.classList.add("hidden");
    }
    private hideNextButton() {
        this.nextButton?.classList.add("hidden");
    }
    private focusSolveButton() {
        this.solveButton?.focus();
    }
    private focusNextButton() {
        this.nextButton?.focus();
    }
}