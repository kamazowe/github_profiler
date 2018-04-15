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

const throttle$ = inputSource$.throttle(e => interval(1000));
const debounce$ = inputSource$.debounce(e => interval(1000));

throttle$.subscribe(e => {
  console.log(e.target.value);
  Rx.Observable.fromPromise(getUser(e.target.value)).subscribe(request => {
    console.log(request);
    console.log(
      request.avatar_url +
        request.repos_url +
        request.login +
        request.name +
        request.public_repos
    );
    console.log("/".repeat(5));
    console.log(request.data);
    setOutput(request.data);
  });
});

debounce$.subscribe(e => {
  console.log(e.target.value);
  Rx.Observable.fromPromise(getUser(e.target.value)).subscribe(request => {
    console.log(request);
    console.log(
      request.avatar_url +
        request.repos_url +
        request.login +
        request.name +
        request.public_repos
    );
    console.log("/".repeat(5));
    console.log(request.data);
    setOutput(request.data);
  });
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
  repoPublic.text(data.public_repos);
  avatar.attr("src", data.avatar_url);
}
