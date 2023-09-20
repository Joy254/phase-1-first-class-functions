// const { returns } = require("chai-spies")

function receivesAFunction (stretch) {
    return stretch ()
}

returnsANamedFunction();
function returnsANamedFunction() {
    return function pilot() {

    }
}

function returnsAnAnonymousFunction () {
    return()=> {

    }
}