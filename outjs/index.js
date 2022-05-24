"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fighter_1 = require("./fighter");
const cnv = document.createElement("canvas");
cnv.width = 1200;
cnv.height = 500;
document.body.appendChild(cnv);
const ctx = cnv.getContext("2d");
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, cnv.width, cnv.height);
let player = new fighter_1.Fighter(ctx, { x: 100, y: 400 }, { x: 0, y: 0 }, 'blue');
let sprites = [player];
function animate() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    for (let i in sprites)
        sprites[i].draw();
    for (let i in sprites)
        sprites[i].update();
    requestAnimationFrame(animate);
}
animate();
