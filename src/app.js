import $ from "jquery";
import Rx from "rxjs/Rx";
import { interval } from "rxjs/observable/interval";
import { throttle } from "rxjs/operators";

const input = $("#input");
const login = $("#login");
const name = $("#name");
const repoPublic = $("#public_repos");
const avatar = $("#avatar_url");

const inputSource$ = Rx.Observable.fromEvent(input, "keyup");

const throttle$ = inputSource$
  .throttle(e => interval(1000))
  .map(e => e.target.value)
  .switchMap(v => Rx.Observable.fromPromise(getUser(v)));

const debounce$ = inputSource$
  .debounce(e => interval(1000))
  .map(e => e.target.value)
  .switchMap(v => Rx.Observable.fromPromise(getUser(v)));

throttle$.subscribe(request => {
  console.log("throttle");
  console.log(request);
  console.log("/".repeat(5));
  console.log(request.data);

  setOutput(request.data);
});

debounce$.subscribe(request => {
  console.log("debounce");
  console.log(request);
  console.log("/".repeat(5));
  console.log(request.data);

  setOutput(request.data);
});

function getUser(username) {
  return $.ajax({
    url: "https://api.github.com/users/" + username,
    dataType: "jsonp"
  }).promise();
}

function setOutput(data) {
  login.text(data.login);
  name.text(data.name);
  repoPublic.text(`Public Repo: ${data.public_repos}`);
  avatar.attr("src", data.avatar_url);
}
