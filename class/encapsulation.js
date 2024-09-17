// // using closure

// // function User() {
// //     let username = "shree";
// //     this.getName = () => {
// //         console.log(username);
// //     }
// //     this.printName = (name) => {
// //         username = name;
// //     }
// // }

// function User() {
//     let username = "shree";
//     return {
//         getName(){
//             console.log(username);
//         },
//         printName(name){
//             username = name;
//         }
//     }
// }

// const user = new User();
// user.printName("shreeHare");
// user.getName();
// // console.log(user.username, 'username');

// // Using symbols

// const private = Symbol('private name');
// const User = {
//     [private]: "shree",
//             getName(){
//             console.log(this[private]);
//         },
//         printName(name){
//             this[private] = name;
//         }
// }

// const user = User;
// user.printName("shreeHare");
// user.getName();
// console.log(user[private], 'username');

// Using ES6 class

class User {
    #name = 'shree'
    getName() {
        console.log(this.#name);
    }
    printName(name) {
        this.#name = name;
    }
}

const user = new User();
user.printName('shreeHari');
user.getName();