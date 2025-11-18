export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        // Fondo
        this.add.image(0, 0, "fondo").setOrigin(0, 0).setScale(2);

        // Jugador
        this.player = this.physics.add.sprite(200, 200, "player", 0);
        this.player.setCollideWorldBounds(true);

        // Animación del jugador
        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();

        // Enemigo básico
        this.enemy = this.physics.add.sprite(500, 200, "enemy", 0);

        // Colisión daño
        this.physics.add.collider(this.player, this.enemy, () => {
            console.log("El enemigo te pegó");
        });
    }

    update() {
        const speed = 140;
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.play("walk", true);
        }
        else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.play("walk", true);
        }
        else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            this.player.play("walk", true);
        }
        else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            this.player.play("walk", true);
        }
        else {
            this.player.setVelocity(0);
            this.player.stop();
        }
    }
}
