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

// function greeting(name) {
//     console.log("Halo " + (name) + ", selamat datang di Skilvul!");
// }

// function introduction(firstName, lastName, callback) {
//     const fullName = (firstName) + " " + (lastName);

//     callback(fullName);
// }

// introduction("Ahmad", "Fauzul", greeting);

// const condition = true;

//     let newPromise = new Promise((resolve, reject) => {
//         if (condition) {
//             // apa yang dilakukan jika promise 'fulfilled'
//             resolve("Berhasil");
//         } else {
//             // apa yang dilakukan jika promise 'rejected'
//             reject(new Error("Error Gagal"));
//         }
//     });

//     newPromise.then((result) => {
//         console.log(result); // Output: "Berhasil"
//     });

// const condition = true;

// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         // apa yang dilakukan jika promise 'fulfilled'
//         resolve("Berhasil");
//     } else {
//         // apa yang dilakukan jika promise 'rejected'
//         reject(new Error("Error Gagal"));
//     }
// });

// newPromise.then((result) => {
//     return result;
// })

// .then((result2) => {
//     console.log(result2 + "!!"); // Output: Berhasil!!
// });

// const condition = false;

//     let newPromise = new Promise((resolve, reject) => {
//         if (condition) {
//             // apa yang dilakukan jika promise 'fulfilled'
//             resolve("Berhasil");
//         } else {
//             // apa yang dilakukan jika promise 'rejected'
//             reject(new Error("Error Gagal"));
//         }
//     });

// const condition = false;

//     let newPromise = new Promise((resolve, reject) => {
//         if (condition) {
//             // apa yang dilakukan jika promise 'fulfilled'
//             resolve("Berhasil");
//         } else {
//             // apa yang dilakukan jika promise 'rejected'
//             reject(new Error("Error Gagal"));
//         }
//     });

//     newPromise.then((result) => {
//         console.log(result);
//     })
    
//     .catch((error) => {
//         console.log(error.message); // Output: "Error Gagal"
//     });

// const condition = true;

// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         // apa yang dilakukan jika promise 'fulfilled'
//         resolve("Berhasil");
//     } else {
//         // apa yang dilakukan jika promise 'rejected'
//         reject(new Error("Error Gagal"));
//     }
// });

// newPromise
// .then((result) => {
//     console.log(result); // Output: Berhasil
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"); // Output: Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
// });

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json()) // Jika data berhasil didapatkan

// .then((json) => console.log(json))
// .catch((error) => console.log(error)) // Jika data tidak berhasil didapatkan

// .finally(() => {
//     console.log("Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"); // Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
// });

// async menggunakan keyword function 
// async function tesAsyncAwait() {
//     return "Fulfilled";
// }

// console.log(tesAsyncAwait());

// async menggunakan arrow function
// const tesAsyncAwait = async () => {
//     return "Fulfilled";
// };

// console.log(tesAsyncAwait());

// Definisikan dahulu promise yang ingin digunakan
// let condition = true;
// let tesAsyncAwait = async (condition) => {
//     if (condition) {
//         return "Condition is fulfilled!";
//     } else {
//         throw "Condition is rejected!";
//     }
// };

// // Membuat fungsi run menjadi asynchronous menggunakan async/await
// const run = async (condition) => {
//     try {
//         const message = await tesAsyncAwait(condition);
//         console.log(message);  // Output: Condition is fulfilled!
//         console.log("After condition is fulfilled"); // Output: After condition is fulfilled
//     } catch (error) {
//         console.log(error);
//     }
// };

// run(true);

// let condition = true;
// let tesPromise = new Promise((resolve, reject) => {
//      if (condition) {
//         resolve("Condition is fulfilled!");
//     } else {
//         reject(new Error("Condition is rejected!"));
//     }
// });

// tesPromise
// .then(result =>{
//     console.log(result); // Condition is fulfilled!
//     console.log("After condition is fulfilled"); // After condition is fulfilled
// })
// .catch(error =>{
//     console.log(error);
// })

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function (response) {
//     return response.json();
// })
// .then(function (post) {
//     console.log(post);
// });

const tesFetchAsync = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();
    console.log(response);
};
tesFetchAsync();