// https://www.youtube.com/watch?v=RkKZDs3yc50&list=PLn4fTSbSpY5eY_M1mKWxGa9pViEodofKy&index=2
// Player is a blueprint
var Player = /** @class */ (function () {
    function Player() {
        this.isInvincible = true;
    }
    // when the key is private we SET and GET the key with methods. THIS ENCAPSULATES (PROTECTS) THE OBJECT INTERNALS
    Player.prototype.setHealth = function (health) {
        this.health = health;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    Player.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Player;
}());
// mario is an instance of Player
var mario = new Player();
mario.name = 'Mario';
mario.setHealth(10);
mario.setSpeed(1);
console.log("Mario has ".concat(mario.getHealth(), "/10 health"));
console.log("Mario has ".concat(mario.getSpeed(), "/10 speed"));
var peach = new Player();
peach.name = 'Peach';
peach.isInvincible = true;
// set the marios crush to peach
mario.crush = peach;
// it will log peach's isInvincible
console.log(mario.crush.isInvincible);
mario.greet();
// https://www.youtube.com/watch?v=-RbIZ1fD8is&list=PLn4fTSbSpY5eY_M1mKWxGa9pViEodofKy&index=3
