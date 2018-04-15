// import $ from "jquery";
// import Rx from "rxjs/Rx";

//Events

// const btn = $("#btn");
// const btn2 = document.getElementById("input");
// const input = $("#input");
// const output = $("#output");
// // obserwable ma konwecje stawiania dolaru
// // obserwuje zachowanie selectora i eventu
// const btnStream$ = Rx.Observable.fromEvent(btn, "click");
// const inputStream$ = Rx.Observable.fromEvent(btn2, "keyup");
// const moveStream$ = Rx.Observable.fromEvent(btn2, "mousemove");

// btnStream$.subscribe(
//   function(e) {
//     console.log(e.target.innerHTML);
//   },
//   function(err) {
//     console.log(err);
//   },
//   function() {
//     console.log("completed");
//   }
// );

// inputStream$.subscribe(
//   function(e) {
//     console.log(e.target.value);
//     output.text(e.target.value);
//   },
//   function(err) {
//     console.log(err);
//   },
//   function() {
//     console.log("completed");
//   }
// );

// moveStream$.subscribe(
//   function(e) {
//     console.log(e.target.value);
//     output.text("X: " + e.clientX + "Y: " + e.clientY);
//   },
//   function(err) {
//     console.log(err);
//   },
//   function() {
//     console.log("completed");
//   }
// );

// const Posts = [
//   { title: "Post one", body: "this is the body" },
//   { title: "Post two", body: "this is the body" },
//   { title: "Post third", body: "this is the body" },
//   { title: "Post fourth", body: "this is the body" }
// ];

// const numbers = [33, 34, 5, 6, 4, 2, 4, 6, 3];
// const numbers$ = Rx.Observable.from(numbers);
// const posts$ = Rx.Observable.from(Posts);
// const posts = $("#posts");

// posts$.subscribe(
//   post => {
//     console.log(post);
//     posts.append(`<li><h3>${post.title}</h3><p>${post.body}</p></li>`);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log("completed");
//   }
// );

// const set = new Set(["Hello", 44, { title: "hyc", body: "miecho" }]);
// const set$ = Rx.Observable.from(set);

// set$.subscribe(
//   v => {
//     console.log(v);
//   },
//   err => {
//     console.log(err);
//   },
//   completed => {
//     console.log(`completed`);
//   }
// );

//set / from

// const map = new Map([[1, 3], [3, 4], [6, 7]]);
// const map$ = Rx.Observable.from(map);

// map$.subscribe(
//   v => {
//     console.log(v[1]);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log(`completed`);
//   }
// );

//scratch

// const source$ = new Rx.Observable(observer => {
//   console.log("creating observable");
//   observer.next("hello world");
//   observer.next("Another value");
//   observer.error(new Error("Something went wrong"));
//   let i = 1;
//   const interval = setInterval(() => {
//     observer.next(`hello again ${i++}`);
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(interval);
//     observer.complete();
//   }, 5000);
// });

// source$.catch(err => Rx.Observable.of(err))
//    .subscribe(
//       x => {
//          console.log(x);
//       },
//       err => {
//          console.log(err);
//       },
//       complete => {
//          console.log(`complete`);
//       }
// );

//Promises

// const myPromise = new Promise((resolve, reject) => {
//   console.log("creating promise");
//   setTimeout(() => {
//     resolve("hello promise");
//   });
// });

// myPromise.then(x => {
//   console.log(x);
// });
// // === equal

// const source$ = Rx.Observable.fromPromise(myPromise);

// source$.subscribe(x => {
//   console.log(x);
// });
