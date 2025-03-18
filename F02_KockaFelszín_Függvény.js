//Készíts egy függvényt, ami kiszámolja és visszaadja egy kocka felszínének méretét, úgy hogy annak egy oldal paramétert kell megadni

function KockaFelszinV1(a_oldal) {
    let felszin = (a_oldal * a_oldal) * 6;
    return felszin;
}

function KockaFelszínV2(a_oldal) {
    return a_oldal ** 2 * 6;
}

eredmeny01 = KockaFelszinV1(3)
eredmeny02 = KockaFelszinV1(4)
eredmeny03 = KockaFelszínV2(3)
eredmeny04 = KockaFelszínV2(5)

document.write("Az 1. feladat megoldása:", eredmeny01);
document.write("<br>Az 2. feladat megoldása:", eredmeny02);
document.write("<br>Az 3. feladat megoldása:", eredmeny03);
document.write("<br>Az 4. feladat megoldása:", eredmeny04);