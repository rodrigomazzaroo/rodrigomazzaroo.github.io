export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        // Fondo corregido
        this.add.image(0, 0, "fondo")
            .setOrigin(0, 0)
            .setScale(1); // Ajustás luego según tamaño del fondo real

        // Jugador temporal (lo agregamos después)
        // this.player = this.physics.add.sprite(200, 200, "player");

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // Movimiento lo agregamos después
    }
}

