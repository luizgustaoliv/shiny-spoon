var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 1024,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload () {
    this.load.image('mar', 'assets/fundodomar.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixe_serio.png');
    this.load.image('tubarao', 'assets/peixes/tubaraonemo.png');
    this.load.image('concha', 'assets/peixes/concha.png');
}

function create ()  {
    this.add.image(510, 420, 'mar');
    this.add.image(200, 850, 'logo').setScale(1);
    this.add.image(600, 400, 'tubarao').setOrigin(0.1, 1);
    this.add.image(600, 600, 'concha').setOrigin(2.3, -3.7);

    peixinho = this.add.image(400, 300, 'peixe').setScale(0.6);
    peixinho.setFlip(true, false);
}

function update () {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}