import { IKnowtesView } from "./IKnowtesView";

export class Knowtes {
    private initialActiveKeys = {
        "c": false,
        "d": false,
        "e": false,
        "f": false,
        "g": false,
        "a": false,
        "b": false,
        
        "c1": false,
        "d1": false,
        "e1": false,
        "f1": false,
        "g1": false,
        "a1": false,
        "b1": false,

        "c2": false,

        "cis": false,
        "dis": false,
        "fis": false,
        "gis": false,
        "ais": false,

        "cis1": false,
        "dis1": false,
        "fis1": false,
        "gis1": false,
        "ais1": false,
    };

    private activeKeys = JSON.parse(JSON.stringify(this.initialActiveKeys));;

    views: IKnowtesView[] = [];

    setNote(name: string, active: boolean) {
        if (this.activeKeys[name] == undefined) {
            console.warn("setNote called with illegal name:", name);
            return;
        }

        this.activeKeys[name] = active;
        this.updateViews();
    }

    toggleNote(name: string) {
        if (this.activeKeys[name] == undefined) {
            console.warn("toggleNote called with illegal name:", name);
            return;
        }

        this.activeKeys[name] = !this.activeKeys[name];
        this.updateViews();
    }

    resetNotes() {
        this.activeKeys = JSON.parse(JSON.stringify(this.initialActiveKeys));
    }

    getNote(name: string): boolean {
        if (this.activeKeys[name] == undefined) {
            console.warn("getNote called with illegal name:", name);
            return false;
        }

        return this.activeKeys[name];
    }

    addView(view: IKnowtesView) {
        this.views.push(view);
    }

    private updateViews(): void {
        for (let view of this.views) {
            view.update(this);
        }
    }
}