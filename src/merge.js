// import $ from "jquery";
// import Rx from "rxjs/Rx";
// import { interval } from "rxjs/observable/interval";
// import { throttle } from "rxjs/operators";

//interval , take ,range

// const source$ = interval(100).take(5);
// source$.subscribe(
//   val => console.log(val),
//   err => console.log(err),
//   comp => console.log(`completed`)
// );

// timer
// timer > 1par >timerout , 2par> interval   << nice :)

// const source$ = Rx.Observable.timer(2000, 1000);

// source$.subscribe(
//   val => console.log(val),
//   err => console.log(err),
//   comp => console.log(`completed`)
// );

//range
// range > 1par od jakies var start, 2par > ile wartosci
// const source$ = Rx.Observable.range(8, 1);

// source$.subscribe(
//   val => console.log(val),
//   err => console.log(err),
//   comp => console.log(`completed`)
// );

//map

// const source$ = Rx.Observable.interval(1000)
//   .take(10)
//   .map(v => v * v);

// source$.subscribe(
//   val => console.log(val),
//   err => console.log(err),
//   comp => console.log(`completed`)
// );

// const source$ = Rx.Observable.from(["John", "tom", "jake"])
//   .map(v => v.toUpperCase())
//   .map(v => `I'm ${v}`);

// source$.subscribe(v => console.log(v));

//Pluck > wyciaga daneparamtery

// const Posts = [
//   { title: "Post one", body: "this is the body" },
//   { title: "Post two", body: "this is the body" },
//   { title: "Post third", body: "this is the body" },
//   { title: "Post fourth", body: "this is the body" }
// ];

// const posts$ = Rx.Observable.from(Posts).pluck(["title", "body"]);
// posts$.subscribe(
//   val => console.log(val),
//   err => console.log(err),
//   comp => console.log(`completed`)
// );

//Merge (from >wyciaga z tabeli wartosci iteruje, of cala podana tablice rzuca)

// Rx.Observable.of("Hello")
//   .merge(Rx.Observable.of("World"))
//   .subscribe(v => console.log(v));

// Rx.Observable.from(["a", "b", "c"])
//   .merge(Rx.Observable.from(["1", "2", "3"]))
//   .subscribe(v => console.log(v));

//async Merge >> wykonuje polecenie dla scalonych zmergowanych sciezek, sa przeplatywane

// Rx.Observable.interval(1000)
//   .merge(Rx.Observable.interval(500))
//   .take(25)
//   .subscribe(v => console.log(v));

// const source1$ = Rx.Observable.interval(2000).map(v => "merge1: " + v);
// const source2$ = Rx.Observable.interval(700).map(v => "merge2: " + v);

// Rx.Observable.merge(source1$, source2$)
//   .take(25)
//   .subscribe(v => console.log(v));

//concat > laczenie ciagow bez przeplatanie w okreslonej kolejnosci,trzyma kolejnosc
// sync
// const source1$ = Rx.Observable.interval(1000)
//   .map(v => "source1: " + v)
//   .take(5);
// const source2$ = Rx.Observable.range(6, 5).map(v => "source2: " + v);

// Rx.Observable.concat(source1$, source2$).subscribe(v => console.log(v));
