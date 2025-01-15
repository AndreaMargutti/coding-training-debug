<?php

//# debug this code:

function greet($name) {
    return "Hello, $name!";
    if ($name === 'Johnny') {
        return 'Hello, my love!';
    }
}

// my solution

function greet($name) {
    if ($name === 'Johnny') {
        return 'Hello, my love!';
    } else {
      return "Hello, $name!";
    }
}