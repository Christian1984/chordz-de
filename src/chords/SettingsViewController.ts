import { Settings } from "./Settings";

export class SettingsViewController {
    private settings: Settings;
    private baseNotesCbs: HTMLInputElement[] = [];
    private toneCbs: HTMLInputElement[] = [];
    private baseKeysCbs: HTMLInputElement[] = [];

    constructor(settings: Settings,
        baseNotesParent: HTMLElement | null,
        toneParent: HTMLElement | null,
        baseKeysParent: HTMLElement | null) {
        this.settings = settings;

        if (baseNotesParent) {
            baseNotesParent.addEventListener("click", e => {
                const input = <HTMLInputElement>e.target;

                if (!input || !input.value) {
                    return;
                }

                e.preventDefault();
                settings.enableBaseNote(input.value, input.checked);
            });
    
            this.baseNotesCbs = [...baseNotesParent.querySelectorAll("input")];
        }

        if (toneParent) {
            toneParent.addEventListener("click", e => {
                const input = <HTMLInputElement>e.target;

                if (!input || !input.value) {
                    return;
                }

                e.preventDefault();
                settings.enableTone(input.value, input.checked);
            });
    
            this.toneCbs = [...toneParent.querySelectorAll("input")];
        }

        if (baseKeysParent) {
            baseKeysParent.addEventListener("click", e => {
                const input = <HTMLInputElement>e.target;

                if (!input || !input.value) {
                    return;
                }

                e.preventDefault();
                settings.enableBaseKeys(input.value, input.checked);
            });
    
            this.baseKeysCbs = [...baseKeysParent.querySelectorAll("input")];
        }
    }

    public update() {
        for (const cb of this.baseNotesCbs) {
            cb.checked = this.settings.isBaseNoteEnabled(cb.value);
        }

        for (const cb of this.toneCbs) {
            cb.checked = this.settings.isToneEnabled(cb.value);
        }

        for (const cb of this.baseKeysCbs) {
            cb.checked = this.settings.isBaseKeyEnabled(cb.value);
        }
    }
}