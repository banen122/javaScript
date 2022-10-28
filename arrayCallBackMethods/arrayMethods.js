const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];
const numbers = ['hi','mark','12123213'];

//map and filter method
console.log('map and filter Method:');
const highestMovies=movies.filter(movie=>movie.score>95).map((e)=>e.title);
console.log(highestMovies);

//foreach Method
console.log('\n Foreach Method:');
movies.forEach((element)=>console.log(element));
movies.forEach((element)=>console.log(element.title));

//every and some method
console.log('\n every and some Method:');
let everyMoviesUp95=movies.every((el)=>el.score>95);
console.log(`every Movies Up 95:${everyMoviesUp95}`);

let anyMoviesUp95=movies.some((el)=>el.score>95);
console.log(`any Movies Up 95:${anyMoviesUp95}`);

//reduce method
console.log(`\nreduce method:`);
let minimumScoreMovie=movies.reduce((min,sc)=>{
    if(sc.score<min.score){
        return sc ;
    }
    return min;
});
console.log(`minimum Score Movie:`);
console.log(minimumScoreMovie);

let maximumScoreMovie=movies.reduce((max,sc)=>{
    if(sc.score>max.score){
        return sc ;
    }
    return max;
});
console.log(`maximum Score Movie:`);
console.log(maximumScoreMovie);

let totalScoreMovies=movies.map((el)=>el.score).reduce((sc1,sc2)=>{return sc1+sc2});
console.log(`total Score Movies:${totalScoreMovies}`);