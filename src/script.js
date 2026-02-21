"use strict";

const elem = document.getElementById("target");

const pingTitle = document.title;
const pongTitle = "PONG";
const interval = 5000;
const offset = 500;

function ping() {
    elem?.classList.remove("pong");
    elem?.classList.add("ping");
    document.title = pingTitle;
    window.history.replaceState(null, "", "ping");
}

function pong() {
    elem?.classList.remove("ping");
    elem?.classList.add("pong");
    document.title = pongTitle;
    window.history.replaceState(null, "", "pong");
}

setInterval(() => {
    pong();
    setTimeout(ping, offset);
}, interval);
