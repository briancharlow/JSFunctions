// Write a JavaScript program to find the leap years in a given range of years.

function leapYears(start, end) {
    let leapYears = [];

    for (let year = start; year <= end; year++) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            leapYears.push(year);
        }
    }

    return leapYears;
}
console.log(leapYears(2000, 2012));