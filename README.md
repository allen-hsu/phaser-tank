## Phaser Tank


### Use Entry Componemt Framework to work.
### ES6 + webpack partice

組件化概念，盡量讓每個物件有自己的Component權責。
透過Componet的組合，少用繼承。

Please run `npm install`。
and use `npm start`。

生成地圖部分使用距離回收，以及分割切塊以及Radom配比產生地圖物件。


Tank: 坦克主要的權責
Bullet: 子彈
Grass: 草
Wall: 牆壁
HUD: 幾個UI操作

Attackable: 攻擊的主要Component。 
Transferable: 移動的主要Component。
Healthable: 讓物件有生命。
Recoverable: 物件可回收。


BaseButton: 基底按鈕類別。

BeseNode: Phaser應該有類似Node-left的機制，可以用來作SceneNode Graph。也可以做composite pattren
BaseComponent: 可做策略模式的替換。(替換類型Component)皆可用。
利用Phaser的event實作觀察者模式 : 如子彈碰撞、扣血、移動等皆用該方式以及做Component之間的溝通。

BootScene為讀取資源使用的Scene.