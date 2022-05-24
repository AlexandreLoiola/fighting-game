(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
class Fighter {
    constructor(_ctx, _position, _moveSpeed, _color) {
        this._ctx = _ctx;
        this._position = _position;
        this._moveSpeed = _moveSpeed;
        this._color = _color;
    }
    get ctx() {
        return this._ctx;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
    get moveSpeed() {
        return this._moveSpeed;
    }
    set moveSpeed(moveSpeed) {
        this._moveSpeed = moveSpeed;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    update() {
        this.position.x += this.moveSpeed.x;
        this.position.y += this.moveSpeed.y;
        console.log(this.position.y, this.position.x);
        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'd':
                    this.moveSpeed.x = 5;
                    break;
                case 'a':
                    this.moveSpeed.x = -5;
                    break;
                case 'w':
                    this.moveSpeed.y = -5;
                    break;
                case 's':
                    this.moveSpeed.y = 5;
                    break;
                case 'f':
                    this.color = 'blue';
                    break;
                case 'g':
                    this.color = 'red';
                    break;
                case 'v':
                    this.color = 'green';
                    break;
            }
        });
        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'd':
                    this.moveSpeed.x = 0;
                    break;
                case 'a':
                    this.moveSpeed.x = 0;
                    break;
                case 'w':
                    this.moveSpeed.y = 0;
                    break;
                case 's':
                    this.moveSpeed.y = 0;
                    break;
            }
        });
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, 50, 100);
    }
    boudingBox() { }
    iCollided() { }
}
exports.Fighter = Fighter;

},{}],2:[function(require,module,exports){
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

},{"./fighter":1}]},{},[2]);
