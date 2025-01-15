<?php

//!credits: https://www.codewars.com/kata/597c684822bc9388f600010f

//# ESERCIZIO: debug this code

class Dinglemouse {
    public function __construct($firstName, $lastName) {}
    
    public function getFullName() {
      return "$firstName $lastName";
    }
  }

//# LA MIA SOLUZIONE: 

class Dinglemouse {
  public function __construct($firstName, $lastName) {
    $this->firstName = $firstName;
    $this->lastName = $lastName;
  }
  
  public function getFullName() {
    return trim("{$this->firstName} {$this->lastName}");
  }
}