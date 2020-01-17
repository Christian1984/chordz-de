import { Knowtes } from "./knowtes";

export class KnowtesController {
    model: Knowtes | null = null;

    constructor(keyPadParent: HTMLElement) {
        let buttons = keyPadParent.querySelectorAll("li");
        
        for (const button of buttons) {
            button.addEventListener("click", (e) => {
                if (button.dataset.name) {
                    this.model?.toggleNote(button.dataset.name);

                    //TODO: move this stuff to a separate view class
                    if (this.model?.getNote(button.dataset.name)) {
                        button.classList.add("active");
                    }
                    else {
                        button.classList.remove("active");
                    }
                }
            });
        }
    }

    setModel(model: Knowtes) {
        this.model = model;
    }
}