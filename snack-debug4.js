//! credits: https://www.codewars.com/kata/514a677421607afc99000002

//# debug this code

var data = [
    { name: 'Joe', age: 20 },
    { name: 'Bill', age: 30 },
    { name: 'Kate', age: 23 }
]

function getNames(data) {
    return data.map(function (item) { item.name });
}

getNames(data) // should return ['Joe', 'Bill', 'Kate']

//# my solution

