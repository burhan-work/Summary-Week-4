// function proses1() {
//     console.log("proses 1 selesai dijalankan");
// }

// function proses2() {
//     console.log("proses 2 selesai dijalankan");
// }

// function proses3() {
//     console.log("proses 3 selesai dijalankan");
// }

// proses1();
// proses2();
// proses3();

// function proses1() {
//     console.log("proses 1 selesai dijalankan");
// }

// function proses2() {
//     // setTimeout or delay for *asynchronous* simulation
//     setTimeout(function () {
//         console.log("proses 2 selesai dijalankan");
//     }, 100);
// }

// function proses3() {
//     console.log("proses 3 selesai dijalankan");
// }

// proses1();
// proses2();
// proses3();

// function proses1() {
//     console.log("proses 1 selesai dijalankan");
// }

// function proses2(callback) {
//     setTimeout(function () {
//         console.log("proses 2 selesai dijalankan");
//         callback();
//     }, 100);
// }

// function proses3() {
//     console.log("proses 3 selesai dijalankan");
// }
// proses1();
// proses2(proses3);

function greeting(name) {
    console.log("Halo " + (name) + ", selamat datang di Skilvul!");
}

function introduction(firstName, lastName, callback) {
    const fullName = (firstName) + " " + (lastName);

    callback(fullName);
}

introduction("Ahmad", "Fauzul", greeting);