//Készíts egy függvényt, ami kiszámolja és visszaadja egy kocka térfogatát, úgy hogy annak egy oldal paramétert kell megadni

function KockaTerfogatV1(a_oldal) {
    let terfogat = a_oldal * a_oldal * a_oldal;
    return terfogat;
}

function KockaTerfogatV2(a_oldal) {
    return a_oldal ** 3;
}

function KockaTerfogatV3(a_oldal) {
    return Math.pow(a_oldal, 3);
}

eredmeny01 = KockaTerfogatV1(3);
eredmeny02 = KockaTerfogatV2(4);
eredmeny03 = KockaTerfogatV3(5);

document.write("Az 1. feladat megoldása:", eredmeny01);
document.write("<br>Az 2. feladat megoldása:", eredmeny02);
document.write("<br>Az 3. feladat megoldása:", eredmeny03);

        function kockaTerfogat(a_oldal) {
            return a_oldal ** 3;
        }

        function eredmenyKi(szoveg, eredmeny) {
            document.write(szoveg + eredmeny);
        }
        feladat = kockaTerfogat(2);
        eredmenyKi("A Kocka térfogata: ", feladat)
        feladat2 = kockaTerfogat(3);
        eredmenyKi("A Kocka térfogata: ", feladat2)
        feladat3 = kockaTerfogat(5);
        eredmenyKi("A Kocka térfogata: ", feladat3)
