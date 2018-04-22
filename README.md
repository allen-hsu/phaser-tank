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