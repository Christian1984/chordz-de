import { IKnowtesView } from "./IKnowtesView";

export class Knowtes {
    private initialActiveKeys = {
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        a: false,
        b: false,
        c2: false,
        cis: false,
        dis: false,
        fis: false,
        gis: false,
        ais: false
    };

    private activeKeys = JSON.parse(JSON.stringify(this.initialActiveKeys));;

    views: IKnowtesView[] = [];

    setNote(name: string, active: boolean) {
        switch (name) {
            case "c":
                this.activeKeys.c = active;
                break;
            case "d":
                this.activeKeys.d = active;
                break;
            case "e":
                this.activeKeys.e = active;
                break;
            case "f":
                this.activeKeys.f = active;
                break;
            case "g":
                this.activeKeys.g = active;
                break;
            case "a":
                this.activeKeys.a = active;
                break;
            case "b":
                this.activeKeys.b = active;
                break;
            case "c2":
                this.activeKeys.c2 = active;
                break;
            case "cis":
                this.activeKeys.cis = active;
                break;
            case "dis":
                this.activeKeys.dis = active;
                break;
            case "fis":
                this.activeKeys.fis = active;
                break;
            case "gis":
                this.activeKeys.gis = active;
                break;
            case "ais":
                this.activeKeys.ais = active;
                break;
            default:
                console.warn("setNote called with illegal name.");
                return;
        }

        this.updateViews();
    }

    toggleNote(name: string) {
        switch (name) {
            case "c":
                this.activeKeys.c = !this.activeKeys.c;
                break;
            case "d":
                this.activeKeys.d = !this.activeKeys.d;
                break;
            case "e":
                this.activeKeys.e = !this.activeKeys.e;
                break;
            case "f":
                this.activeKeys.f = !this.activeKeys.f;
                break;
            case "g":
                this.activeKeys.g = !this.activeKeys.g;
                break;
            case "a":
                this.activeKeys.a = !this.activeKeys.a;
                break;
            case "b":
                this.activeKeys.b = !this.activeKeys.b;
                break;
            case "c2":
                this.activeKeys.c2 = !this.activeKeys.c2;
                break;
            case "cis":
                this.activeKeys.cis = !this.activeKeys.cis;
                break;
            case "dis":
                this.activeKeys.dis = !this.activeKeys.dis;
                break;
            case "fis":
                this.activeKeys.fis = !this.activeKeys.fis;
                break;
            case "gis":
                this.activeKeys.gis = !this.activeKeys.gis;
                break;
            case "ais":
                this.activeKeys.ais = !this.activeKeys.ais;
                break;
            default:
                console.warn("toggleNote called with illegal name.");
                return;
        }

        this.updateViews();
    }

    resetNotes() {
        this.activeKeys = JSON.parse(JSON.stringify(this.initialActiveKeys));
    }

    getNote(name: string): boolean {
        switch (name) {
            case "c":
                return this.activeKeys.c;
            case "d":
                return this.activeKeys.d;
            case "e":
                return this.activeKeys.e;
            case "f":
                return this.activeKeys.f;
            case "g":
                return this.activeKeys.g;
            case "a":
                return this.activeKeys.a;
            case "b":
                return this.activeKeys.b;
            case "c2":
                return this.activeKeys.c2;
            case "cis":
                return this.activeKeys.cis;
            case "dis":
                return this.activeKeys.dis;
            case "fis":
                return this.activeKeys.fis;
            case "gis":
                return this.activeKeys.gis;
            case "ais":
                return this.activeKeys.ais;
            default:
                console.warn("getNote called with illegal name.");
        }

        return false;
    }

    addView(view: IKnowtesView) {
        this.views.push(view);
    }

    private updateViews(): void {
        console.log(this.views.length);
        for (let view of this.views) {
            view.update(this);
        }
    }
}