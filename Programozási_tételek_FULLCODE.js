
//Tömb generálása random értékekkel szamtomb néven
let szamtomb = [];
for (let i = 0; i < 10; i++) {
    let generaltSzam = Math.round(Math.random() * 100);
    szamtomb.push(generaltSzam);
}
document.write("A tömb elemei:");
for (let i = 0; i < szamtomb.length; i++) {
    document.write(szamtomb[i] + ",");
}

//F01_Összegzés tétele
let osszeg = 0;
for (let i = 0; i < szamtomb.length; i++) {
    osszeg = osszeg + szamtomb[i]; //osszeg+=szamtomb[i]
}
document.write("<br>A tömb elemeinek összege:" + osszeg);

//F02_Átlagszámítás tétele

document.write("<br>A tömb elemeinek átlaga:" + osszeg / szamtomb.length);
//.toFixed(2) => Kerekítés, 2 tizedesjegyre, a minta szerint

//F03_Minimumkeresés tétele: Érték alapján
let minErtek = szamtomb[0];
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] < minErtek) {
        minErtek = szamtomb[i];
    }
}
document.write("<br>A tömbben lévő legkisebb elem értéke:" + minErtek);

//F03_Minimumkeresés tétele: Index alapján
let minIndex = 0;
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] < szamtomb[minIndex]) {
        minIndex = i;
    }
}
document.write("<br>A tömbben lévő legkisebb elem indexe:" + minIndex);

//F04_Maximumkeresés tétele: Érték alapján
let maxErtek = szamtomb[0];
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] > maxErtek) {
        maxErtek = szamtomb[i];
    }
}
document.write("<br>A tömbben lévő legnagyobb elem értéke:" + maxErtek);

//F04_Maximumkeresés tétele: Index alapján
let maxIndex = 0;
for (let i = 1; i < szamtomb.length; i++) {
    if (szamtomb[i] > szamtomb[maxIndex]) {
        maxIndex = i;
    }
}
document.write("<br>A tömbben lévő legnagyobb elem indexe:" + maxIndex);

//F05_MegszámlálásTétele
let darab = 0;
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        darab++;
    }
}
document.write("<br>A tömbben lévő páros számok mennyisége:" + darab);

//F06_KiválogatásTétele
document.write("<br>A tömbben lévő páros számok listája:");
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        document.write(szamtomb[i] + ",");
    }
}

let parosak = [];
for (let i = 0; i < szamtomb.length; i++) {
    if (szamtomb[i] % 2 == 0) {
        parosak.push(szamtomb[i]);
    }
}
document.write("<br>A tömbben lévő páros számok mennyisége:" + parosak.length);

document.write("<br>A tömbben lévő páros számok listája:");
for (let i = 0; i < parosak.length; i++) {
    document.write(parosak[i] + ",");
}

