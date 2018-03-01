let name = "SPENCER";

// FIRST ATTEMPT

let cheer = () => {
    for (l of name) {
        if (l === "S" || l === "E" || l === "N" || l === "R") {
            let article = "an";
            console.log(`Give me ${article} ${l}!`);
        } else {
            let article = "a";
            console.log(`Give me ${article} ${l}!`);
        }
    }
}

cheer();

console.log("What do you get?");
console.log(`${name}!!!`);


// JOE'S ANSWER

const myFirstName = process.argv[2]; //const
const myLastName = process.argv[3];
const person = {
  //object literal shorthand
  myFirstName,
  myLastName,
  age: "forty-something",
  job: "dev maker"
};

//destructuring assigment and fat arrow
const nodeCheer = ({ myFirstName: first, myLastName: second }) => {
  return new Promise((resolve, reject) => {
    if (first && second) {
      // promise
      let name = `${first} ${second}`.toUpperCase(); // string template literals, let
      let nameArr = [...first, ...second]; //spread operator
      let i = nameArr.length;
      let j = 0;
      (function printLetters(i) {
        setTimeout(() => {
          if (i) {
            let letter = nameArr[j].toUpperCase();
            let conj = "aeiofhlmnrsx".includes(letter.toLowerCase())
              ? "an"
              : "a ";
            console.log(`Gimmie ${conj} ${letter}!`);
            i--;
            j++;
            // Recursively call the function from inside itself so it runs over and over until the 'if' doesn't resolve to true
            printLetters(i);
          } else {
            console.log(`What's that spell?`);
            resolve(name);
          }
        }, 1000);
      })(i);
    } else {
      reject("please enter a first and last name when running the app");
    }
  });
};

nodeCheer(person)
  .then(name => {
    setTimeout(() => {
      console.log(`${name}!`);
    }, 1000);
  })
  .catch(err => {
    console.log("oops", err);
  });

