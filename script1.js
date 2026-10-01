let sumEvens = 0;
let sumOdds = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
    console.log("Сумма четных:", sumEvens);
    console.log("Сумма нечетных:", sumOdds);