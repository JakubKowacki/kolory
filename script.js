const pole = document.getElementById("pole")
const jeden = document.getElementById("jeden")
const dwa = document.getElementById("dwa")
const trzy = document.getElementById("trzy")
const cztery = document.getElementById("cztery")
const zero = document.getElementById("zero")

function funkcja(){
    wartosc = pole.value;
    zero.style.backgroundColor = 'hsl('+wartosc+', 100%, 50%)';
    jeden.style.backgroundColor = 'hsl('+wartosc+', 80%, 50%)';
    dwa.style.backgroundColor = 'hsl('+ wartosc+ ', 60%, 50%)';
    trzy.style.backgroundColor = 'hsl('+wartosc+', 40%, 50%)';
    cztery.style.backgroundColor = 'hsl('+wartosc+', 20%, 50%)';
}