import { ChordsGame } from "./ChordsGame.js";
import { ChordsController } from "./ChordsController.js";
import { ChordsView } from "./ChordsView.js";
import { KnowtesViewController } from "../knowtes/KnowtesViewController.js";
import { Settings } from "./Settings.js";
import { SettingsViewController } from "./SettingsViewController.js";

(function() {
    let chordsDisplay = document.getElementById("chord-name");
    let reversalDisplay = document.getElementById("chord-reversal");
    let handDisplay = document.getElementById("chord-hand");
    let timerDisplay = document.getElementById("chord-timer");

    if (
        chordsDisplay &&
        reversalDisplay &&
        handDisplay &&
        timerDisplay
    ) {
        // create seetingsviewcontroller and settings
        let settings = new Settings();
        let settingsViewController = new SettingsViewController(
            settings,
            document.querySelector("#settings-basenote"),
            document.querySelector("#settings-basenote-2"),
            document.querySelector("#settings-tone")
        );

        settings.addView(settingsViewController);

        // create chords view
        let view = new ChordsView(chordsDisplay, reversalDisplay, handDisplay, timerDisplay);

        let game = new ChordsGame(settings);
        game.addView(view);

        let solveButton: HTMLElement | null = document.querySelector("#chords-buzzer");
        let nextButton: HTMLElement | null = document.querySelector("#chords-next");
        new ChordsController(game, solveButton, nextButton);

        // create keyboard view
        let keyboard: HTMLElement | null = document.querySelector("#keyboard");

        if (keyboard) {
            let keyboardViewController = new KnowtesViewController(keyboard, "li");
            game.addKeyboardView(keyboardViewController);
        }

        let keyboardWrapper: HTMLElement | null = document.querySelector("#keyboard-wrapper");

        if (keyboardWrapper) {
            game.setKeyboardWrapper(keyboardWrapper);
        }

        game.nextPuzzle();
    }

    console.log("done!");
})();