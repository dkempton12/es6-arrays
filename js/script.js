// Array to work with:
const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const athletes = ['Benintendi, Andrew', 'Bergeron, Patrice', 'Betts, Mookie', 'Brady, Tom'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
    console.table(fifteen);

// Array.prototype.map()
// 2. Return an array of the inventors' first and last names
    const fullNames = inventors.map(inventor =>`${ inventor.first}  ${inventor.last}`)
    console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
    // const ordered = inventors.sort(function(a, b){
    //     if (a.year >  b.year) {
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // });
// short ES6 version, using ternary operator and implicit return
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0); // start at 0
    console.log(totalYears);

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function (a, b){
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? -1 : 1;
    });
    console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a')); // making an array of the links within the mw-category div
// const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
// ^ Can only run on the above ^^ Wiki link !!!

// 7. sort Exercise
    // Sort the athletes alphabetically by last name --> now using 'athletes' array
    const alpha = athletes.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', '); // splitting each with a comma and a space
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
    });
    console.log(alpha);
