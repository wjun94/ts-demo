abstract class Animal {
    // 子类必须要实现eat方法
    abstract eat(): any;
}

class Dog extends Animal {
    name: string
    constructor(name: string) {
        super()
        this.name = name
    }
    eat() {
        console.log(`${this.name}吃肉`)
    }
}

class Cat extends Animal {
    name: string
    constructor(name: string) {
        super()
        this.name = name
    }
    eat() {
        console.log(`${this.name}吃鱼`)
    }
}

const cat = new Cat("猫")
cat.eat()
const dog = new Dog("狗")
dog.eat()


