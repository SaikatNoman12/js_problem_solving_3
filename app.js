/* 
    1:- নিচের sentence এ 'Nomaan' এই শব্দটি কয়বার আছে ? প্রথমবার 'Nomaan' কত number index এ আছে তা বের কর ।
*/

let sentence = 'Lorem ipsum dolor nomaan sit amet consectetur adipisicing elit. Esse laborum, cum sequi, culpa consequuntur doloribus consectetur corrupti sit fugit ab omnis laboriosam amet quae. Quia a ullam quisquam dolorum maxime laudantium in dignissimos minima consectetur rem nomaan non quibusdam perspiciatis deserunt id accusantium earum, eos aut ut aliquid reprehenderit dicta commodi saepe! Natus quo nomaan porro voluptatibus, dolorem molestiae pariatur? Impedit fugit quasi quaerat neque? Alias excepturi nisi nomaan expedita iure officiis est voluptates  nomaan quibusdam culpa doloribus ipsa consectetur possimus, recusandae magni id minima nomaan atque veritatis minus amet? Perspiciatis perferendis blanditiis nomaan quo tempore? Cupiditate, soluta quibusdam necessitatibus in excepturi veniam nomaan facilis voluptatibus nomaan similique.';


// question 1st problem.
const position = sentence.match(/nomaan/ig);
const occurrence = position ? position.length : 0; // handling error.
// console.log(occurrence);

// question 2nd problem.
let firstIndex = sentence.search(/nsomaan/ig);
firstIndex = firstIndex >= 0 ? firstIndex : 'Not found!'; // handling error.
// console.log(firstIndex);


/* 
    2:-
    input: linearSearch([a, b, c, d, e, f], 'c')
    output: index number 2 or 'not found'
    problem: linearSearch() function টি implement করে দেখাও।
*/

function linearSearch(array, value) {
    const length = array.length; // best practice.
    for (let i = 0; i < length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return 'not found'; // handling error.
}


const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const value = 'c';
// console.log(linearSearch(array, value));


/* 
    3:- কোন array থেকে কী ভাবে সব বড় string খুজে বের করবেন এবং তার index number দেখাবেন ?
*/

function findBigText(names) {
    let largestWord = '';
    for (let name of names) {
        if (name.length > largestWord.length) {
            largestWord = name;
        }
    }

    return [largestWord, names.indexOf(largestWord)];
}

const array2 = ['nomaan', 'khan', 'Abdullah', 'Karim', 'hasim'];
// console.log(findBigText(array2));


/* 
    4:- 1 - 100 পর্যন্ত কোন সংখ্যা গুলো ৩, ৫ এবং ৩ ও ৫ উভয় দ্বারা বিভাজ্য তা বের কর। ৫ হলো fizz , ৩ হলো buzz , ৩ ও ৫ হলো fizzBuzz?
*/

function fizzBuzz(number) {
    for (let i = 0; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {    // use this logic 3 * 5 = 15; (i % 15 === 0) 
            console.log(`${i} id fizzBuzz.`);
        }
        else if (i % 3 === 0) {
            console.log(`${i} is buzz.`);
        }
        else if (i % 5 === 0) {
            console.log(`${i} is fizz.`);
        }
        else {
            console.log(i);
        }
    }
}

const num = 100;
// fizzBuzz(num); // call function;


/* 
    5:- কোন একটি array থেকে আমরা কীভাবে falsy value গুলো বাদ দিতে পারি তার একটি program লিখ । falsy value গুলো হলো ঃ- false, null, undefined, NaN, '', 0 ।
*/

const mixedArray = [
    '',
    'Abdullah Al Nomaan',
    'Nadim',
    0,
    'Khan',
    false,
    'Robi',
    undefined,
    NaN,
    null
];

// this problem is solve 2 ways.

/* -- 1st way -- */
const removeFalseyValue = mixedArray.filter(function (elelment) {
    if (elelment) {
        return true;
    }
    else {
        return false;
    }
});
// console.log(removeFalseyValue);


/* -- 2nd ways -- */
const truthyValue = mixedArray.filter(Boolean);  // Boolean this is a mathod. This is check true or flase.
// console.log(truthyValue);


