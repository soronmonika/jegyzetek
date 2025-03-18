//Készíts egy függvényt, ami eldönti egy paraméterként kapott számról, hogy az prím-e, logikai értékkel tér vissza
// Ha a szám prím -->True
// Ha a szám nem prím --> False

function PrimE(vizsgalt_szam) {
    let osztok_szama = 0;
    for (let i = 1; i <= vizsgalt_szam; i++) {
        if (vizsgalt_szam % i == 0) {
            osztok_szama++;//osztok_szama+=1; vagy osztok_szama=osztok_szama+1;
        }
    }
    if (osztok_szama == 2) {
        return true;
    }
    //Else ág elhagyható helyette lehet simán "return false;" is!
    else {
        return false;
    }
}
document.write(PrimE(21));
document.write("<hr>");
document.write(PrimE(13));
document.write("<hr>");
document.write(PrimE(19));
document.write("<hr>");
document.write(PrimE(42));
document.write("<hr>");