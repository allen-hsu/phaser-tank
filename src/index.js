import Phaser from 'phaser'
import BootScene from 'scene/BootScene'
import MainScene from 'scene/MainScene'
const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  physics: {
      default: 'arcade',
      arcade: {
          debug: false,
          gravity: { y: 0 }
      }
  },
  backgroundColor: '#f3cca3',
  width: 800,
  height: 600,
  scene: [
    BootScene,
    MainScene
  ]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars
