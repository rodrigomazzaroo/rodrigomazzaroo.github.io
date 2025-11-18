import Boot from "./scenes/Boot.js";
import MainMenu from "./scenes/MainMenu.js";
import GameScene from "./scenes/GameScene.js";

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },

    scene: [Boot, MainMenu, GameScene],

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);

// Ajustar canvas al cambiar tamaño
window.addEventListener("resize", () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});

