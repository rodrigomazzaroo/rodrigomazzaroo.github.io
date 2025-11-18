export default class Boot extends Phaser.Scene {
    constructor() {
        super("Boot");
    }

    preload() {
        // Fondo corregido (JPG)
        this.load.image("fondo", "assets/fondo.jpg");

        // Sprites (los agregamos después)
        // this.load.spritesheet("player", "assets/player.png", { frameWidth: 32, frameHeight: 32 });
        // this.load.spritesheet("enemy", "assets/enemy.png", { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        this.scene.start("MainMenu");
    }
}
