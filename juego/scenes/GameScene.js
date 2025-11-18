export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {

        // FONDO
        this.add.image(0, 0, "fondo").setOrigin(0, 0);

        // PLAYER
        this.player = this.physics.add.sprite(300, 300, "player", 0);
        this.player.setScale(1);
        this.player.setCollideWorldBounds(true);

        // ==== ANIMACIONES =====

        // caminar (fila 0 → frames 0 a 7)
        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 7
            }),
            frameRate: 10,
            repeat: -1
        });

        // idle (fila 2 → frames 16 a 23)
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("player", {
                start: 16,
                end: 23
            }),
            frameRate: 5,
            repeat: -1
        });

        // CONTROLES
        this.cursors = this.input.keyboard.createCursorKeys();

        // animación por defecto
        this.player.play("idle");
    }

    update() {
        const speed = 180;
        this.player.setVelocity(0);

        let walking = false;

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
            this.player.flipX = true;
            walking = true;
        }

        if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
            this.player.flipX = false;
            walking = true;
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
            walking = true;
        }

        if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
            walking = true;
        }

        if (walking) {
            this.player.play("walk", true);
        } else {
            this.player.play("idle", true);
        }
    }
}
