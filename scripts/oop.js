"use strict";
// https://www.youtube.com/watch?v=RkKZDs3yc50&list=PLn4fTSbSpY5eY_M1mKWxGa9pViEodofKy&index=2
// Player is a blueprint
class Player {
    constructor() {
        this.isInvincible = true;
    }
    // when the key is private we SET and GET the key with methods. THIS ENCAPSULATES (PROTECTS) THE OBJECT INTERNALS. and you can use ifs to condition the setting only to valid results. ex. we can´t set the health to a negative value:
    setHealth(health) {
        if (health < 0) {
            console.log("You can't set the healt below 0");
            return;
        }
        this.health = health;
    }
    getHealth() {
        return this.health;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// mario is an instance of Player
const mario = new Player();
mario.name = 'Mario';
mario.setHealth(10);
mario.setSpeed(1);
console.log(`Mario has ${mario.getHealth()}/10 health`);
console.log(`Mario has ${mario.getSpeed()}/10 speed`);
const peach = new Player();
peach.name = 'Peach';
peach.isInvincible = true;
// set the marios crush to peach
mario.crush = peach;
// it will log peach's isInvincible
console.log(mario.crush.isInvincible);
mario.greet();
// https://www.youtube.com/watch?v=-RbIZ1fD8is&list=PLn4fTSbSpY5eY_M1mKWxGa9pViEodofKy&index=3
//# sourceMappingURL=oop.js.map