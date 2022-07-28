var config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1080,
    backgroundColor: 0x000000,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Scene1, Scene2],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
}

var game = new Phaser.Game(config);
