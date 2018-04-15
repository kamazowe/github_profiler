// import $ from "jquery";
// import Rx from "rxjs/Rx";
// import { interval } from "rxjs/observable/interval";

//bad idea
// Rx.Observable.of("Hello ").subscribe(v => {
//   Rx.Observable.of(v + "World").subscribe(v => console.log(v));
// });

// BETTER
// Rx.Observable.of("Hello ")
//   .mergeMap(v => {
//     return Rx.Observable.of(v + "World");
//   })
//   .subscribe(v => console.log(v));

// const arr1 = ["a", "b", "c", "d"];
// const arr2 = ["1", "2", "3", "4"];

// Rx.Observable.interval(2000)
//   .map(v1 => `A1_!` + v1)
//   .mergeMap(v1 =>
//     Rx.Observable.interval(1000).map(v2 => `A2_?` + v2 + "__" + v1)
//   )
//   .subscribe(v => console.log(v));
