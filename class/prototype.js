function Attack(enemy) {
    this.place = 'Delhi'
}
// this.action = 

Attack.prototype.action = (no) => {
    console.log(`Attacked ${this.enemy} ${no} th time at ${this.place}`);
}
const attack = new Attack("Ravana");
// attack.action(10)
console.log(Attack.__proto__, 'attack');