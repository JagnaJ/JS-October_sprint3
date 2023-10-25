//1. Написати функцію `compact()` яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
function compact(arr) {
    const uniqueArray = [];

    for (const item of arr) {
        if (uniqueArray.indexOf(item) === -1) {
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2); // [5, 3, 4, 6, 7]

//2. Написати функцію `createArray(start, end)`, яка приймає на вхід 2 параметри: **початкове значення** та **кінцеве значення**, а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями).
let arr = createArray(2, 9);
function createArray(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new Error('Both start and end should be numeric values.');
    }

    if (start > end) {
        throw new Error('Start value should be less than or equal to end value.');
    }

    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}
console.log(arr); //2,3,4,5,6,7,8,9

//3. Задані цілі числа **a** і **b** (**a < b**). Виведіть усі цілі числа від **a** до **b** включно, при цьому a виводится один раз, число **а+1** - два рази і т.д.
function printNumbers(a, b) {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            for (let j = a; j <= i; j++) {
                console.log(i);
            }
        }
    } else {
        console.log("a should be less than b");
    }
}
printNumbers(2, 6); //233444555566666
//4. Напишіть функцію `randArray(k)`, яка заповнюватиме масив `k` випадковими цілими числами. Випадкові числа генеруються із діапазону **1-500**.
function randArray(k) {
    const result = [];

    for (let i = 0; i < k; i++) {
        const randomNumber = Math.floor(1 + Math.random() * 500);
        result.push(randomNumber);
    }

    return result;
}

const randomArray = randArray(5);
console.log(randomArray); // [399, 310, 232, 379, 40]

//5. Є масив `arr`, який може містити підмасиви, написати функцію `showByTypes` яка виведе у консоль масиви які складаються із примітивних даних початкового масиву і усіх вкладених масивів, але одного типу даних (не приводити тип **String** в **Number** навіть, якщо там лише число).
function isArrayOfSameType(arr) {
    if (arr.length === 0) {
        return true;
    }
    const firstType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== firstType) {
            return false;
        }
    }
    return true;
}

function showByTypes(arr) {
    for (const element of arr) {
        if (Array.isArray(element) && isArrayOfSameType(element)) {
            console.log(element);
        } else if (typeof element !== 'object') {
            console.log(element);
        }
    }
}
const arr = [1, 2, 3, [4, 5, 6], "abc", [7, 8, 9], ["x", "y", "z"]];
showByTypes(arr);

//6. Напишіть функцію `calc(a, b, op)`, яка виконує над числами `a` і `b` одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом `op`:
// **1** – _віднімання_,
// **2** – _добуток_,
// **3** – _ділення_,
// **інші значення** – _додавання_.
function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            if (b !== 0) {
                return a / b;
            } else {
                return "Ділення на нуль неможливе";
            }
        default:
            return a + b;
    }
}
console.log(calc(8, 2, 1)); // 6
console.log(calc(8, 4, 2)); // 32
console.log(calc(17, 3, 3)); // 5.666666666666667
console.log(calc(234, 456, 4)); // 690

//7. Напишіть функцію `findUnique(arr)`, яка приймає масив `arr` і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне **true**, інакше - **false**.
function findUnique(arr) {
    const uniqueSet = new Set();
    for (const element of arr) {
        if (uniqueSet.has(element)) {
            return false;
        }
        uniqueSet.add(element);
    }
    return true;
}
const arr1 = [8, 5, 3, 4, 1];
const arr2 = [1, 2, 2, 3, 4];

console.log(findUnique(arr1)); // true
console.log(findUnique(arr2)); // false




⭐⭐⭐
function create(secret) {
    return function (input) {
        return input === secret;
    };
}

const tom = create("pass_for_Tom");

console.log(tom("pass_for_Tom")); // true
console.log(tom("pass_for_tom")); // false
