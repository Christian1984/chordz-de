import { Knowtes } from "./knowtes";
import { IKnowtesView } from "./iKnowtesView";

export class KnowtesViewController implements IKnowtesView {
    model: Knowtes | null = null;
    buttons: NodeListOf<HTMLLIElement> | null;

    constructor(keyPadParent: HTMLElement) {
        this.buttons = keyPadParent.querySelectorAll("li");
        
        for (const button of this.buttons) {
            button.addEventListener("click", (e) => {
                if (button.dataset.name) {
                    this.model?.toggleNote(button.dataset.name);
                }
            });
        }
    }

    setModel(model: Knowtes): void {
        this.model = model;
    }

    update(model: Knowtes): void {
        if (!this.buttons) return;
        for (let button of this.buttons) {
            if (button.dataset.name) {
                if (model.getNote(button.dataset.name)) {
                    button.classList.add("active");
                }
                else {
                    button.classList.remove("active");
                }
            }
        }
    }
}