export enum ToneEnum { major, minor };

export const NoteValues: {[key: string]: number} = {
    "c": 0,
    "cis": 1,
    "d": 2,
    "dis": 3,
    "e": 4,
    "f": 5,
    "fis": 6,
    "g": 7,
    "gis": 8,
    "a": 9,
    "ais": 10,
    "b": 11
}

export const NoteValuesInv: {[key: number]: string} = {
    0: "c",
    1: "cis",
    2: "d",
    3: "dis",
    4: "e",
    5: "f",
    6: "fis",
    7: "g",
    8: "gis",
    9: "a",
    10: "ais",
    11: "b"
}

export class Chord {
    private baseNote: string;
    private tone: ToneEnum;
    private reversal: number;

    constructor(baseNote: string, tone: ToneEnum, reversal: number) {
        this.baseNote = baseNote;
        this.tone = tone;
        this.reversal = reversal;
    }

    public name(): string {
        return this.baseNote.toUpperCase() + (this.tone == ToneEnum.minor ? "-Moll" : "");
    }

    public notes(): string[] {
        return this.rotateNotes(calcChordNotes(this.baseNote, this.tone), this.reversal);
    }
    
    private calcChordNotes(baseNote: string, tone: ToneEnum): string[] {
        let ret = [baseNote];

        if (tone == ToneEnum.major) {
            ret.push(NoteValuesInv[(NoteValues[baseNote] + 4) % 12])
        }
        else {
            ret.push(NoteValuesInv[(NoteValues[baseNote] + 3) % 12])
        }

        ret.push(NoteValuesInv[(NoteValues[baseNote] + 7) % 12])

        return ret;
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

// TODO: remove
function calcChordNotes(baseNote: string, tone: ToneEnum): string[] {
    let ret = [baseNote];

    if (tone == ToneEnum.major) {
        ret.push(NoteValuesInv[(NoteValues[baseNote] + 4) % 12])
    }
    else {
        ret.push(NoteValuesInv[(NoteValues[baseNote] + 3) % 12])
    }

    ret.push(NoteValuesInv[(NoteValues[baseNote] + 7) % 12])

    return ret;
}

export const ChordNotes = {
    C: calcChordNotes("c", ToneEnum.major),
    F: calcChordNotes("f", ToneEnum.major),
    G: calcChordNotes("g", ToneEnum.major)
}

export enum ChordEnum { C, F, G };