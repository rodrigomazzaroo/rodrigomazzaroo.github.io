export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        // Fondo temporal tipo pixel RPG
        this.load.image("grass", "https://i.imgur.com/lkZSnYW.png");

        // Personaje temporal pixel-art
        this.load.spritesheet("hero",
            "https://i.imgur.com/Z7x7pOP.png",
            { frameWidth: 48, frameHeight: 48 }
        );
    }

    create() {
        // Fondo repetido estilo Forager
        this.add.tileSprite(0, 0, this.scale.width, this.scale.height, "grass")
            .setOrigin(0);

        // Jugador
        this.player = this.physics.add.sprite(400, 300, "hero");

        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("hero", { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1
        });

        // Controles
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const speed = 200;
        let moving = false;

        if (this.cursors.left.isDown) {
            this.player.x -= speed * this.game.loop.delta / 1000;
            this.player.flipX = true;
            moving = true;
        }
        if (this.cursors.right.isDown) {
            this.player.x += speed * this.game.loop.delta / 1000;
            this.player.flipX = false;
            moving = true;
        }
        if (this.cursors.up.isDown) {
            this.player.y -= speed * this.game.loop.delta / 1000;
            moving = true;
        }
        if (this.cursors.down.isDown) {
            this.player.y += speed * this.game.loop.delta / 1000;
            moving = true;
        }

        if (moving) this.player.play("walk", true);
        else this.player.stop();
    }
}
