 //随机数对象
 (function (window) {
    function Random() {

    }
    Random.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    window.Random = new Random()
})(window);
//产生食物对象
(function (window) {
    let elements = [] //保存每个随机产生的食物，方便以后的删除
    function Food(width, height, color) {
        this.width = width || 20
        this.height = height || 20
        this.color = color || "green"
        this.x = 0
        this.y = 0
        this.element = document.createElement("div")


    }
    Food.prototype.init = function (map) {
        remove()
        let div = this.element
        div.style.position = "absolute"
        div.style.width = this.width + "px"
        div.style.height = this.height + "px"
        div.style.backgroundColor = this.color
        map.appendChild(div)
        this.render(map)
        elements.push(div)
    }
    //删除map中的div结点和删除存储在数组中的dom对象
    //保存在数组中的原因是方便查找到父元素map，然后删除map子节点
    function remove() {
        for (let i = 0; i < elements.length; i++) {
            let ele = elements[i]
            ele.parentNode.removeChild(ele)
            elements.splice(i, 1)
        }
    }
    //产生随机位置
    Food.prototype.render = function (map) {
        //随机产生横纵坐标
        let x = Random.getRandom(0, map.offsetWidth / this.width) * this.width
        let y = Random.getRandom(0, map.offsetHeight / this.height) * this.height
        this.x = x
        this.y = y
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"
    }
    window.Food = Food

})(window);