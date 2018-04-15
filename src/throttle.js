// import $ from "jquery";
// import Rx from "rxjs/Rx";
// import { interval } from "rxjs/observable/interval";
// import { throttle } from "rxjs/operators";

// console.log("RxJS Basdoiler Running...");
// THROTTLE

// const input = $("#input");
// const output = $("#output");
// const inputSource$ = Rx.Observable.fromEvent(input, "keyup");

// const result$ = inputSource$.throttle(val => interval(1000));

// result$.subscribe(
//   e => {
//     console.log(e.target.value);
//   },
//   err => {
//     console.log(err);
//   },
//   complete => {
//     console.log(`complete: ${complete}`);
//   }
// );
