export default class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add.text(50, 50, "MAZZARO INK WARS", {
            fontFamily: "Arial",
            fontSize: 48,
            color: "#ffffff"
        });

        this.add.text(50, 120, "Tocá para comenzar", {
            fontFamily: "Arial",
            fontSize: 28,
            color: "#cccccc"
        });

        this.input.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}

