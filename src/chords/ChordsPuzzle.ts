import { Chord } from "./ChordsEnums.js";

export class ChordsPuzzle {
    private chord: Chord;
    private reversal: number;
    private leftHand: boolean;
    private seconds: number;

    constructor() {
        this.chord = this.randomEnum(Chord);
        this.reversal = Math.floor(Math.random() * 3); //generates 0, 1 or 2
        this.leftHand = Math.random() < 0.5;
        this.seconds = 0;
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

    private startClock(): void {
        //TODO
    }

    private stopClock(): void {
        //TODO
    }

    private randomEnum<T>(anEnum: T): T[keyof T] {
        const enumValues = Object.keys(anEnum)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        const randomEnumValue = enumValues[randomIndex];
        return randomEnumValue;
    }
}