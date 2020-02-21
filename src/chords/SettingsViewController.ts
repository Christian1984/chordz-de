import { Settings } from "./Settings";

export class SettingsViewController {
    private settings: Settings;

    private baseNotesCbs: HTMLInputElement[] = [];
    private toneCbs: HTMLInputElement[] = [];

    constructor(settings: Settings,
        baseNotesParent: HTMLElement | null,
        baseNotesParent2: HTMLElement | null,
        toneParent: HTMLElement | null) {
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

        if (baseNotesParent2) {
            baseNotesParent2.addEventListener("click", e => {
                const input = <HTMLInputElement>e.target;

                if (!input || !input.value) {
                    return;
                }

                e.preventDefault();
                settings.enableBaseNote(input.value, input.checked);
            });
    
            this.baseNotesCbs.push(...baseNotesParent2.querySelectorAll("input"));
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
    }

    public update() {
        for (const cb of this.baseNotesCbs) {
            cb.checked = this.settings.isBaseNoteEnabled(cb.value);
        }

        for (const cb of this.toneCbs) {
            cb.checked = this.settings.isToneEnabled(cb.value);
        }
    }
}