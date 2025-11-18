export default class Boot extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        // Fondo
        this.load.image("fondo", "assets/fondo.jpg");

        // PLAYER: spritesheet de 128x128
        this.load.spritesheet("player", "assets/player.png", {
            frameWidth: 128,
            frameHeight: 128
        });
    }

    create() {
        this.scene.start("MainMenu");
    }
}
