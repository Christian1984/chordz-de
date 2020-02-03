import { Knowtes } from "./Knowtes";
import { IKnowtesView } from "./IKnowtesView";

export class KnowtesViewController implements IKnowtesView {
    model: Knowtes | null = null;
    buttons: NodeListOf<HTMLElement> | null;

    constructor(buttonsParent: HTMLElement, selector: string) {
        this.buttons = buttonsParent.querySelectorAll(selector);
        
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

        console.log("update!");
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