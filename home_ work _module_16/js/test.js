/*Создать базовый класс Shape, который принимает значения цвета и координат x и y: color, initX, initY.
Создать методы класса Shape:

    getColor() - возвращает значение цвета.
    setColor(val) - получает и записывает новое значение цвета.
    getCoords() - возвращает координаты x и y.
    moveTo(newX, newY) - принимает 2 параметра, новые значения для x и y и записывает их.

Создать класс Rectangle который расширяет класс Shape, принимая значения цвета и начальных координат, как его 
родительский класс, и еще значение ширины и высоты сторон initWidth и initHeight:

Создать методы класса Rectangle:

    setWidth(newWidth)и setHeight(newHeight) - получают ширину/высоту и записывают новые значения.
    getDims() - метод который возвращает значения width и height.
    draw() - метод который имитирует рисование прямоугольника используя методы Shape и Rectangle, выводя в консоль 
    браузера следующей информации:

    Drawing a Rectangle at:
        (x:10, y:10)
    With dimentions:
        width: 100
        height: 100
    Filled with color: #009688
    
    Создать класс Circle который расширяет класс Shape, принимая значения цвета и начальных координат, как его родительский класс, 
    и еще значение радиуса initRadius:
Создать методы класса Circle:

    getRadius() - возвращает текущее значение радиуса.
    setRadius(val) - получает значение и присваивает его радиусу.
    draw() - метод который имитирует рисование круга используя методы Shape и Circle, выводя в консоль браузера следующей информации:

    Drawing a Circle at:
        (x:50, y:50)
    With dimentions:
        radius: 250
    Filled with color: #FF5722*/

class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.positionX = initX;
        this.positionY = initY;
    }
    getColor() {
        return `Color: ${this.color}`;
    }
    setColor(val) {
        this.color = val;
    }
    getCoords() {
        return `Position X: ${this.positionX}, Position Y: ${this.positionY}`
    }
    moveTo(newX, newY) {
        this.positionX = newX;
        this.positionY = newY;
    }
}

class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super(color, initX, initY);
        this.width = initWidth;
        this.height = initHeight;
    }
    setWidth(newWidth) { this.width = newWidth }
    setHeight(newHeight) { this.height = newHeight }
    getDims() {
        return `(Width: ${this.width}, Height: ${this.height})`
    }
    draw() {
        console.log(
            `Drawing a Rectangle at: \n (x:${this.positionX}, y:${this.positionY}) \n 
            With dimentions: \n width: ${this.width} \n height: ${this.height} \n 
            Filled with color: ${this.color}`
        )
    }
}

class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY);
        this.radius = initRadius;
    }
    getRadius() { return `(radius: ${this.radius}` }
    setRadius(val) { this.radius = val }
    draw() {
        console.log(
            `Drawing a Circle at: \n (x:${this.positionX}, y:${this.positionY}) \n 
            With dimentions: \n radius: ${this.radius} \n 
            Filled with color: ${this.color}`
        )
    }
}

var shape = new Shape("#009688", 10, 10);
var rectangle = new Rectangle("#009688", 10, 10, 100, 100);
var circle = new Circle("#FF5722", 50, 50, 250);

console.log(shape.getColor());
console.log(shape.getCoords());

rectangle.draw();
circle.draw();