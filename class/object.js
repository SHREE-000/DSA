// const User =  {
//     init(name){
//         this.name = name
//     },
//     print() {
//         console.log(this.name);
//     }
// }
// // console.log(User, 'user');

// const shree = Object.create(User);
// shree.init("shree")
// console.log(shree.print(), 'shrre');


const User =  {
    print() {
        console.log(this.name);
    }
}

const Username = {
    name: {
        value: "shree"
    }
}

const shree = Object.create(User, Username);
console.log(shree.name,'shree.name');
// shree.print();
