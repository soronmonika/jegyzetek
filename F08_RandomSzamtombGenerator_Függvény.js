//Készíts egy függvény, ami egy alsó és egy felső határt megkapva, valamin egy tömb méretet, kigenerál egy random számokból álló tömböt!

function RandomSzamtombGenerator(hossz, alsoHatar, felsoHatar) {
    let generaltTomb = [];
    for (let i = 0; i < hossz; i++) {
        let randomSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        generaltTomb.push(randomSzam);
    }
    return generaltTomb;
}
document.write(RandomSzamtombGenerator(10, 1, 3));
document.write("<hr>");
document.write(RandomSzamtombGenerator(5, 20, 30));
document.write("<hr>");
document.write(RandomSzamtombGenerator(20, 0, 100));
document.write("<hr>");