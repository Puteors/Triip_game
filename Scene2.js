class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
        this.isRunning = true;
        
    }
    create () {
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(0, 1300, 'collider').setScale(2).refreshBody();
        this.background = this.add.tileSprite(0, 0, 7680, 1080, 'layout1').setOrigin(0, 0).setScrollFactor(0.1);
        
        this.background1 = this.add.tileSprite(0, 0, 7680, 1080, 'layout2_ground', 1).setOrigin(0);

        this.player = this.physics.add.sprite(-200, config.height - config.height/3, 'player');
        this.player.setBounce(0.2);
        
        this.physics.add.collider(this.player, this.platforms);
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.cameras.main.setBounds(0, 0, 4320, 1080)
        this.myCam = this.cameras.main.startFollow(this.player);

        this.obstacle = this.physics.add.group({
            key:'obstacle',
            repeate: 0,
            setXY: { x: 1080, y: 100 },
            setScale: {x: 0.8, y:0.8}
        }) 

        this.physics.add.collider(this.obstacle, this.platforms);

        this.background2 = this.add.tileSprite(0, 0, 7680, 1080, 'layout3').setOrigin(0);
        this.add.image(100 , 100, 'name').setOrigin(0).setScrollFactor(0);
        this.add.image(400,100, 'hp').setOrigin(0).setScrollFactor(0);
        this.add.image(700,100, 'mana').setOrigin(0).setScrollFactor(0);
        this.add.image(1000,100, 'morale').setOrigin(0).setScrollFactor(0);
        this.add.image(1300,100, 'stamina').setOrigin(0).setScrollFactor(0);

        function impact(player, obstacle)  {
            this.isRunning = false;
        }

 
        this.physics.add.overlap(this.player, this.obstacle, impact, null, this);

        if(this.isRunning === false) {
            this.button = this.add.image( 1080 , 400, 'morale');
        }
        
    }
    

    update () {
        
        if(this.isRunning){
            this.background.tilePositionX = this.myCam.scrollX * .3;
        
            this.background2.tilePositionX = this.myCam.scrollX * .5;
            this.player.setVelocityX(320);

            this.player.anims.play('move', this.isRunning);
        }
        else {
            this.player.anims.play('move', this.isRunning);
            this.player.setVelocityX(0);

        }
    }
} 
