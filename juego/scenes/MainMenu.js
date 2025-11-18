export default class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add.text(100, 100, "MAZZARO INK WARS", {
            fontFamily: "Arial",
            fontSize: 40,
            color: "#ffffff"
        });

        this.add.text(100, 200, "Tocá para iniciar", {
            fontFamily: "Arial",
            fontSize: 28,
            color: "#cccccc"
        });

        this.input.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}

