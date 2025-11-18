export default class MainMenu extends Phaser.Scene {
    constructor() {
        super("MainMenu");
    }

    create() {

        this.add.text(50, 50, "MAZZARO INK WARS", {
            fontFamily: "Arial",
            fontSize: 40,
            color: "#ffffff"
        });

        this.add.text(50, 120, "Tocá para iniciar", {
            fontFamily: "Arial",
            fontSize: 30,
            color: "#cccccc"
        });

        this.input.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}
