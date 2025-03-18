//Készíts egy függvény, ami 3 kapott paraméter alapján, kigenerál, egy számtani sorozatot
//1. paraméter - sorozat hossz
//2. paraméter - sorozat kezdőértéke
//3. paraméter - sorozat elemei közötti különbség

//Visszatérési érték egy tömb lesz!


function SzamtaniSorozatGenerator(hossz, kezdoErtek, kulonbseg) {
    let generaltSorozat = [];
    for (let i = 0; i < hossz; i++) {
        generaltSorozat.push(kezdoErtek);
        kezdoErtek = kezdoErtek + kulonbseg;
    }
    return generaltSorozat;
}
document.write(SzamtaniSorozatGenerator(10, 1, 3));
document.write("<hr>");
document.write(SzamtaniSorozatGenerator(5, 100, 5));
document.write("<hr>");
document.write(SzamtaniSorozatGenerator(3, 30, 10));
document.write("<hr>");