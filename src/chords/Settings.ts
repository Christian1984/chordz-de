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

    public enableBaseNote(note: string, enabled: boolean) {
        this.enable(this.enabledBaseNotes, note, enabled);
    }

    public isBaseNoteEnabled(note: string) {
        return this.isEnabled(this.enabledBaseNotes, note);
    }

    public enableTone(tone: string, enabled: boolean) {
        this.enable(this.enabledTone, tone, enabled);
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

    private enable(object: {[key: string]: boolean}, key: string, value: boolean) {
        if (object[key] == undefined) {
            return;
        }

        if (value == false && this.isOnlyOneActive(object))
        {
            return;
        }

        object[key] = value;
        this.updateView();
    }

    private isEnabled(object: {[key: string]: boolean}, key: string): boolean {
        return object[key] != undefined ? object[key] : false;
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