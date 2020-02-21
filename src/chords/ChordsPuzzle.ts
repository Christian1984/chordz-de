import { ChordEnum, ChordNotes } from "./Chord.js";
import { ChordsGame } from "./ChordsGame.js";
import { Chord, ToneEnum } from "./Chord.js";
import { Settings } from "./Settings.js";

export class ChordsPuzzle {
    private chord: Chord;
    private reversal: number;
    private leftHand: boolean;
    private seconds: number;
    private solved: boolean = false;

    private chordsGame: ChordsGame;

    private intervalId: number = 0;

    constructor(game: ChordsGame, settings: Settings) {
        let activeNotes = settings.getActiveNotes();
        let baseNote = activeNotes[Math.floor(Math.random() * activeNotes.length)];

        let tone = ToneEnum.major;

        if (!settings.isToneEnabled("major") && settings.isToneEnabled("minor")) {
            tone = ToneEnum.minor;
        }
        else if (settings.isToneEnabled("major") && settings.isToneEnabled("minor")) {
            tone = Math.random() < 0.5 ? ToneEnum.major : ToneEnum.minor;
        }

        this.reversal = Math.floor(Math.random() * 3); //generates 0, 1 or 2
        this.leftHand = Math.random() < 0.5;
        this.seconds = 0;

        this.chord = new Chord(baseNote, tone, this.reversal);

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
        return this.chord.notes();
    }

    public getChordName(): string {
        return this.chord.name();
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
}