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
