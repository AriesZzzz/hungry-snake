  //小蛇对象
  (function () {
    let elements = []
    function Snake(width, height, direction) {
        this.width = width || 20
        this.height = height || 20
        this.body = [
            { x: 3, y: 2, color: "red" },
            { x: 2, y: 2, color: "green" },
            { x: 1, y: 2, color: "green" }

        ]
        this.direction = direction || "right"
    }
    Snake.prototype.init = function (map) {
        remove()
        for (let i = 0; i < this.body.length; i++) {
            let obj = this.body[i]
            let div = document.createElement("div")
            map.appendChild(div)
            this.render(div, obj)
            elements.push(div)
        }
    }
    Snake.prototype.render = function (div, obj) {

        div.style.position = "absolute"
        div.style.width = this.width + "px"
        div.style.height = this.height + "px"
        div.style.left = (obj.x * this.width) + "px"
        div.style.top = (obj.y * this.height) + "px"
        div.style.backgroundColor = obj.color

    }
    Snake.prototype.move = function (food, map) {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }
        switch (this.direction) {
            case "right":
                this.body[0].x += 1
                break
            case "left":
                this.body[0].x -= 1
                break
            case "top":
                this.body[0].y -= 1
                break
            case "bottom":
                this.body[0].y += 1
                break
        }
        let snakeHeadX = this.width * this.body[0].x
        let snakeHeadY = this.height * this.body[0].y
        if (snakeHeadX === food.x && snakeHeadY === food.y) {
            let snakeTail = this.body[this.body.length - 1]
            this.body.push({
                x: snakeTail.x,
                y: snakeTail.y,
                color: snakeTail.color
            })
            food.init(map)
        }
    }
    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            let ele = elements[i]
            ele.parentNode.removeChild(ele)
            elements.splice(i, 1)
        }

    }
    window.Snake = Snake
})();