export default class Boot extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        this.load.image("fondo", "assets/fondo.jpg");

        // Cargar spritesheet del jugador
        this.load.spritesheet("player", "assets/player.png", {
            frameWidth: 96,   
            frameHeight: 96
        });
    }

    create() {
        this.scene.start("MainMenu");
    }
}
