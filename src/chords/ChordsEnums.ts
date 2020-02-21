export enum Chord { C, F, G };
export enum Tone { major, minor };
export enum Keys { white, black };

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

function calcChordNotes(baseNote: string, tone: Tone): string[] {
    let ret = [baseNote];

    if (tone == Tone.major) {
        ret.push(NoteValuesInv[(NoteValues[baseNote] + 4) % 12])
    }
    else {
        ret.push(NoteValuesInv[(NoteValues[baseNote] + 3) % 12])
    }

    ret.push(NoteValuesInv[(NoteValues[baseNote] + 7) % 12])

    return ret;
}

export const ChordNotes = {
    C: calcChordNotes("c", Tone.major),
    F: calcChordNotes("f", Tone.major),
    G: calcChordNotes("g", Tone.major)
}