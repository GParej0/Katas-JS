//!Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:"

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];
const mayores = [];
const menores = []; 
for (let i = 0, j = users.length - 1;i <= j; i++, j--) {

    if (users[i].years >= 18) {
        mayores.push(users[i].name);
    } else {
        menores.push(users[i].name);
    }

    if (i !== j) {
        if (users[j].years >= 18) {
            mayores.push(users[j].name);
        } else {
            menores.push(users[j].name);
        }
    }
}

console.log("Usuarios mayores de edad: " + mayores.join(", "));
console.log("Usuarios menores de edad: " + menores.join(", "));