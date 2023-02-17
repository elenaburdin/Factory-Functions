function createEmployeeObjects(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        empName: function () {
            console.log(`New Employee: ${firstName} ${lastName}`);
        }
    }
}

const emp1 = createEmployeeObjects('John', 'Doe');
const emp2 = createEmployeeObjects('Smith', 'Colt');
emp1.empName();
emp2.empName();

function bestSellers(title, author) {
    return {
        title: title,
        author: author,
        fiction: function () {
            console.log(`New York Times Best Sellers: ${title} by ${author}`);
        }
    }
}

const currentList1 = bestSellers('Encore in Death', 'J.D. Robb');
const currentList2 = bestSellers('Lessons in Chemistry', 'Bonnie Garmus');
const currentList3 = bestSellers('Tomorrow an Tomorrow, and Tomorrow', 'Gabrielle Zevin');
currentList1.fiction();
currentList2.fiction();
currentList3.fiction();


function marvelObjects(name, alterEgo, species, placeOfOrigin) {
    return {
        name: name,
        alterEgo: alterEgo,
        species: species,
        placeOfOrigin: placeOfOrigin,
        marvelHeroes: function () {
            console.log(`Marvel Hero -> ${name}, ${alterEgo}, ${species}, ${placeOfOrigin}`);
        }
    }
}

const hero = marvelObjects('Iron Man', 'Anthony Edward Start', 'Human', 'Long Island | New York');
hero.marvelHeroes();

function examsObjects(name, schoolSubject, grade) {
    return {
        name: name,
        schoolSubject: schoolSubject,
        grade: grade,
        examsTotal: function () {
            console.log(`Congrats ${name}, for the ${schoolSubject} subject, the total grade is ${grade}`);
        }

    }
}

const exams = new examsObjects('Edward Cooper', 'Chemistry', '8.75');
exams.examsTotal();