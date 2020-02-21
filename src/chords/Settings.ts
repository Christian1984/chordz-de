import { SettingsViewController } from "./SettingsViewController";

export class Settings {
    private view: SettingsViewController | null = null;

    private enabledBaseNotes: {[key: string]: boolean} = {
        "c": true,
        "d": false,
        "e": false,
        "f": true,
        "g": true,
        "a": false,
        "b": false,

        "cis": false,
        "dis": false,
        "fis": false,
        "gis": false,
        "ais": false
    };

    private enabledTone: {[key: string]: boolean} = {
        "major": true,
        "minor": false
    }

    constructor() {
        this.loadAll();
    }

    public enableBaseNote(note: string, enabled: boolean) {
        this.enableAndSave(this.enabledBaseNotes, note, enabled);
    }

    public isBaseNoteEnabled(note: string) {
        return this.isEnabled(this.enabledBaseNotes, note);
    }

    public enableTone(tone: string, enabled: boolean) {
        this.enableAndSave(this.enabledTone, tone, enabled);
    }

    public isToneEnabled(tone: string) {
        return this.isEnabled(this.enabledTone, tone);
    }

    public getActiveNotes(): string[] {
        return Object.keys(this.enabledBaseNotes)
            .filter(key => this.enabledBaseNotes[key]);
    }

    // helper
    private isOnlyOneActive(object: {[key: string]: boolean}) {
        return Object.keys(object)
            .map(key => object[key])
            .filter(e => e === true).length <= 1;
    }

    private enableAndSave(object: {[key: string]: boolean}, key: string, value: boolean) {
        if (object[key] == undefined) {
            return;
        }

        if (value == false && this.isOnlyOneActive(object))
        {
            return;
        }

        object[key] = value;
        this.updateView();
        this.saveAll();
    }

    private isEnabled(object: {[key: string]: boolean}, key: string): boolean {
        return object[key] != undefined ? object[key] : false;
    }

    private loadAll() {
        this.load("settingsEnabledBadeNotes", this.enabledBaseNotes);
        this.load("settingsEnabledTone", this.enabledTone);
    }

    private load(storageKey: string, settingsObject: {[key: string]: boolean}) {
        const loadedString: string | null = localStorage.getItem(storageKey);
        if (!loadedString) return;

        const loaded: {[key: string]: boolean} | null = JSON.parse(loadedString);
        if (!loaded) return;

        for (const key of Object.keys(settingsObject)) {
            if (loaded[key] !== null && loaded[key] !== undefined) {
                settingsObject[key] = loaded[key];
            }
        }
    }

    private saveAll() {
        this.save("settingsEnabledBadeNotes", this.enabledBaseNotes);
        this.save("settingsEnabledTone", this.enabledTone);
    }

    private save(storageKey: string, settingsObject: {[key: string]: boolean}) {
        localStorage.setItem(storageKey, JSON.stringify(settingsObject));
    }

    // view
    public addView(view: SettingsViewController) {
        this.view = view;
        this.updateView();
    }

    private updateView() {
        setTimeout(() => this.view?.update(), 0);
    }
}