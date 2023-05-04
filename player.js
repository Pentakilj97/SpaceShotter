class Player extends GameObject {

    constructor(x, y, width, height) {
        super(x, y, width, height)
        this.speed = 10
        this.controller = {}
        this.projectiles = []
        this.attackCoolDown=5
    }

    draw(ctx) {
        super.draw(ctx)
        this.attackCoolDown--
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx)
            projectile.move()
        })
    }

    controls() {
        document.onkeydown = (keyEvent) => {
            //console.log('KeyEventDown',keyEvent)
            this.controller[keyEvent.key]=true
        }

        document.onkeyup = (keyEvent) => {
            //console.log('KeyEventDown',keyEvent)
            this.controller[keyEvent.key]=false
        }

        console.log(this.controller)
        if (this.controller.ArrowUp || this.controller.w) {
            this.y =this.y > 0 ? ( this.y-  this.speed):0
            
        }
        if (this.controller.ArrowDown || this.controller.s) {
            this.y =this.y < (canvasHeight-this.height) ? (this.y+this.speed) : (canvasHeight -this.height)
            
        }
        if (this.controller.ArrowLeft || this.controller.a) {
            this.x =this.x > 0 ? ( this.x -  this.speed):0
            
        }
        if (this.controller.ArrowRight|| this.controller.d) {
            this.x =this.x < (canvasWidth-this.width) ? (this.x+this.speed) : (canvasWidth -this.width)
            
        }
        if (this.controller[' '] && this.attackCoolDown <=0 ) {
            this.baseAttack()
            this.attackCoolDown=10
            
        }
        // if (keyEvent.key==='ArrowUp' || keyEvent.key==='w') {
        //     this.y-=this.speed
        // }
        // if (keyEvent.key==='ArrowDown'|| keyEvent.key==='s') {
        //     this.y+=this.speed

        // }
        // if (keyEvent.key==='ArrowLeft'|| keyEvent.key==='a') {
        //     this.x-=this.speed

        // }
        // if (keyEvent.key==='ArrowRight'|| keyEvent.key==='d') {
        //     this.x+=this.speed
        // }

    }
    baseAttack(){
        let projectile=new Projectiles(this.x+(this.width/2),this.y,10,10)
        this.projectiles.push(projectile)
    }

}