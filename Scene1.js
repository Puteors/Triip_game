class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image('layout2_ground', 'assets/Scene/Scene1/PNG/Mid-01.png');
        this.load.image('layout3', 'assets/Scene/Scene1/PNG/Front-01.png');
        this.load.image('layout1', 'assets/Scene/Scene1/PNG/Back-01.png');
        this.load.image('collider', 'assets/Scene/Scene1/PNG/collider_ground.png')
        this.load.spritesheet('player', 'assets/sprite/spritesheet.png', { frameWidth: 197, frameHeight: 337 });

        this.load.image('hp', 'assets/Scene/UI_id_hp.png');
        this.load.image('mana', 'assets/Scene/UI_id_mana.png');
        this.load.image('morale', 'assets/Scene/UI_id_morale.png');
        this.load.image('name', 'assets/Scene/UI_id_name.png');
        this.load.image('stamina', 'assets/Scene/UI_id_stamina.png');

    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}

