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

function findBigText(names){
    let largestWord = '';
    for(name of names){
        if(name.length > largestWord.length ){
            largestWord = name;
        }
    }

    return [largestWord, names.indexOf(largestWord)];
}

const array2 = ['nomaan', 'khan', 'Abdullah', 'Karim', 'hasim'];
console.log(findBigText(array2));

