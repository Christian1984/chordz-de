import { ChordsGame } from "./ChordsGame.js";

export interface IChordsView {
    update(game: ChordsGame): void;
}