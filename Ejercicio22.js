//! Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];
let fruit = 0;
for (const food of foodSchedule) {
    if (food.isVegan == false) {;
            food.name = fruits[fruit];
            food.isVegan = true;
            fruit++;
        }
    }

console.log(foodSchedule);


