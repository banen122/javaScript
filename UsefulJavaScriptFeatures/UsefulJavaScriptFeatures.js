//Defualts params
console.log("Defualts params");
console.log("***************");
function multiply(a,b=1){
    console.log(a*b);
}
console.log("call multiply(2,2):");
multiply(2,2);
console.log("call multiply(2):");
multiply(2);

//spreading the array or string
console.log("\nspread feature");
console.log("*****************");
let numbers=[1,50,23,22,100,2323,2];
console.log("before using spread, max can't find maximum value from an array!");
console.log(Math.max(numbers));
console.log("after using spread, max can find maximum value after spread array as value means break the array to 1 2 3 4...");
console.log(Math.max(...numbers));
console.log("can use to combine or spread two array in one array ofcourse not only for array we can use with string");
const str1="abcdef";
const str2="ghijkl";
const alphabetic=[...str1,...str2];
console.log(alphabetic);

//rest params
console.log("\nrest params")
console.log("**************");
console.log("rest is like collecting things instead of spread it in one variable");
function sum(...num){
return num.reduce((total,value)=>total+value);
}
console.log(`sum(2,3,5,5,6):${sum(2,3,5,5,6)}`);

//destructuring array
console.log("\ndestructuring array")
console.log("**********************");
console.log("in case we want to store each element of array in each single variable")
const scores=[99,98,89,70,71,65,50];
const [first,second,third,...restScores]=scores;
console.log(`first:${first}, second:${second}, third:${third}, Rest Scores:${restScores}`);

//destructuring object
console.log("\ndestructuring object")
console.log("**********************");
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}
const{email,password,born:birthYear=2001,died="N/A"}=user;
console.log(`email:${email}, password:${password}, birth year:${birthYear}, died:${died}`);

//destructuring param
console.log("\ndestructuring param")
console.log("**********************");
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

console.log("destructuring param in function in case we have object");
function titleMovies({title}){
    return title;
}
for(let i=0;i<movies.length;i++){
console.log("moviesTitle:"+titleMovies(movies[i]));
}
console.log("destructuring param in filter , map,... in case we have object");
const highestMovies=movies.filter(({score})=>score>85).map(({title,score})=>`movie title:${title} score:${score},`);
console.log(...highestMovies);
