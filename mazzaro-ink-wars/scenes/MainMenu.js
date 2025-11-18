export default class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    create() {
        this.add.text(20, 20, "MAZZARO INK WARS", {
            fontFamily: "Arial",
            fontSize: 36,
            color: "#ffffff"
        });

        this.add.text(20, 80, "Tocá para iniciar", {
            fontFamily: "Arial",
            fontSize: 26,
            color: "#cccccc"
        });

        this.input.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}
