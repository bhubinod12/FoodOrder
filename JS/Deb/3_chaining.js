console.log('JS/Deb/chaining.js');
/**
 * type 1:
 */
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () {
//         console.log(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.down();
// console.log(ladder.showStep());

/*
* type 2:
*/

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
    }
};

ladder.up().up().up().down().showStep(); // 2