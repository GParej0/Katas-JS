//! Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
];

const short = [];
const medium = [];
const long = [];

for (const element of movies) {
    if (element.durationInMinutes < 100) {
        short.push(element.name)
    }else if(element.durationInMinutes >=100 && element.durationInMinutes <200) {
        medium.push(element.name)
    }else{
        long.push(element.name)
    }
}

console.log(short);
console.log(medium);
console.log(long);


