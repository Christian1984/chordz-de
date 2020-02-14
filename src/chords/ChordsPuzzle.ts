import { Chord, ChordNotes } from "./ChordsEnums.js";
import { ChordsGame } from "./ChordsGame.js";

export class ChordsPuzzle {
    private chord: Chord;
    private reversal: number;
    private leftHand: boolean;
    private seconds: number;
    private solved: boolean = false;

    private chordsGame: ChordsGame;

    private intervalId: number = 0;

    constructor(game: ChordsGame) {
        this.chord = this.randomEnum(Chord);
        this.reversal = Math.floor(Math.random() * 3); //generates 0, 1 or 2
        this.leftHand = Math.random() < 0.5;
        this.seconds = 0;

        this.chordsGame = game;
    }

    public getChord(): Chord {
        return this.chord;
    }

    public getReversal(): number {
        return this.reversal;
    }

    public getLeftHand(): boolean {
        return this.leftHand;
    }

    public getSeconds(): number {
        return this.seconds;
    }

    public isSolved(): boolean {
        return this.solved;
    }

    public getNotes(): string[] {
        switch (this.chord) {
            case Chord.C:
                return this.rotateNotes(ChordNotes.C, this.reversal);
            case Chord.F:
                return this.rotateNotes(ChordNotes.F, this.reversal);
            case Chord.G:
                return this.rotateNotes(ChordNotes.G, this.reversal);
            default:
                return [];
        }
    }

    public startClock(): void {
        this.intervalId = setInterval(() => this.tickClock(), 1000);
    }

    public stopClock(): void {
        clearInterval(this.intervalId);
    }

    public solve(): void {
        this.solved = true;
        this.chordsGame.puzzleUpdate();
    }

    private tickClock() {
        this.seconds++;
        this.chordsGame.puzzleUpdate();
    }

    private randomEnum<T>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        const randomEnumValue = enumValues[randomIndex];
        return randomEnumValue;
    }

    private rotateNotes(notes: string[], reversal: number): string[] {
        let copy = JSON.parse(JSON.stringify(notes));

        for (let i = 0; i < reversal; i++) {
            let first = copy.shift();
            if (first) {
                copy.push(first);
            }
        }

        return copy;
    }
}