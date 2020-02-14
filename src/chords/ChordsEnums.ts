export enum Chord { C, F, G };

export const ChordNotes = {
    C: ["c", "e", "g"],
    F: ["f", "a", "c"],
    G: ["g", "b", "d"]
}

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
    "b": 11,
}