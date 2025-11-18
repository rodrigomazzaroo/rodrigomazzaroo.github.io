export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {

        // Fondo
        this.add.image(0, 0, "fondo")
            .setOrigin(0, 0)
            .setScale(1);

        // Personaje
        this.player = this.physics.add.sprite(300, 300, "player", 0);
        this.player.setScale(1);
        this.player.setCollideWorldBounds(true);

        // Animación caminar
        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("player", { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const speed = 180;

        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.flipX = true;
            this.player.play("walk", true);

        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.flipX = false;
            this.player.play("walk", true);

        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            this.player.play("walk", true);

        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            this.player.play("walk", true);

        } else {
            this.player.stop();
        }
    }
}

