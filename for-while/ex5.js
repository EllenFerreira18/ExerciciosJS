let n1 = 1
let n2 = 0
let n3 = 0

for(i=1; i<=10; i++){
    console.log(n1)

    n3 = n1 +n2
    n2 = n1
    n1 = n3
}

//resolucao prof

let fib1 = 1;
let fib2 = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci são: ")
console.log(fib1);
console.log(fib2);

for(let i = 2; i < 10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    fib1 = fib2;
    fib2 = nextFib;
}
