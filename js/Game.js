  //游戏对象
  (function () {
    function Game(map) {
        this.food = new Food()
        this.snake = new Snake()
        this.map = map
    }
    Game.prototype.init = function () {
        this.food.init(this.map)
        this.snake.init(this.map)
        this.runSnake(this.food, this.map)
        this.bindKey()
    }
    Game.prototype.runSnake = function (food, map) {
        let _this = this

        // 常规写法
        // setInterval(function () {
        //     _this.snake.init(map)
        //     _this.snake.move()
        // }, 150)

        // bind()写法
        let timer = setInterval(function () {
            this.snake.move(food, map)
            this.snake.init(map)
            // 横坐标最大值
            let maxX = map.offsetWidth / this.snake.width
            // 纵坐标最大值
            let maxY = map.offsetHeight / this.snake.height
            // 根据小蛇头部坐标来判断
            let headX = this.snake.body[0].x
            let headY = this.snake.body[0].y
            if (headX < 0 || headX === maxX) {
                clearInterval(timer)
                alert("你撞墙了！游戏结束")
            }
            if (headY < 0 || headY === maxY) {
                clearInterval(timer)
                alert("你撞墙了！游戏结束")
            }



        }.bind(_this), 150)
    }
    Game.prototype.bindKey = function () {
        let _this = this
        document.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = "left"
                    break
                case 38:
                    this.snake.direction = "top"
                    break
                case 39:
                    this.snake.direction = "right"
                    break
                case 40:
                    this.snake.direction = "bottom"
                    break
            }
        }.bind(_this), false)
    }


    window.Game = Game

})();

let map = document.querySelector(".map")
let game = new Game(map)
game.init()