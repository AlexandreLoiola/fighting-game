export class Fighter{
    constructor(
        private readonly _ctx: CanvasRenderingContext2D,
        private _position: { x:number, y:number },
        private _moveSpeed: { x:number, y:number },
        private _color: string
    ){}
    
    public get ctx(): CanvasRenderingContext2D {
        return this._ctx
    }

    public get position(): { x:number, y:number } {
        return this._position
    }
    public set position(position: { x:number, y:number }) {
       this._position = position
    }

    public get moveSpeed(): { x:number, y:number }{
        return this._moveSpeed
    }
    public set moveSpeed(moveSpeed: { x:number, y:number }) {
        this._moveSpeed = moveSpeed;
    }
    
    public get color(): string {
        return this._color
    }
    public set color(color : string) {
        this._color = color;
    }
    
    public update(): void{
        this.position.x += this.moveSpeed.x;
        this.position.y += this.moveSpeed.y;
        console.log(this.position.y, this.position.x)

        window.addEventListener('keydown', (event) => {
            switch (event.key){
                case 'd':
                    this.moveSpeed.x = 5
                    break
                case 'a':
                    this.moveSpeed.x = -5
                    break
                case 'w':
                    this.moveSpeed.y = -5
                    break
                case 's':
                    this.moveSpeed.y = 5
                    break
                case 'f':
                    this.color = 'blue'
                    break
                case 'g':
                    this.color = 'red'
                    break
                case 'v':
                    this.color = 'green'
                    break
            }
        })
        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'd':
                    this.moveSpeed.x = 0;
                    break
                case 'a':
                    this.moveSpeed.x = 0
                    break
                case 'w':
                    this.moveSpeed.y = 0;
                    break
                case 's':
                    this.moveSpeed.y = 0
                    break
            }
        });
    }
    public draw(){
        this.ctx!.fillStyle = this.color
        this.ctx!.fillRect(this.position.x, this.position.y, 50, 100)
    }
    public boudingBox(){}
    public iCollided(){}
}
