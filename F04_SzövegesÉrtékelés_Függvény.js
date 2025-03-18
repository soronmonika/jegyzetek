//Készíts egy függvényt, ami paraméterként kapott jegy után, visszaadja a jegyhez tartozó szöveges értékelést
/* 
    1->"Elégtelen"
    2->"Elégséges"
    3->"Közepes"
    4->"Jó"
    5->"Jeles"
    Bármi más esetén "Hibás adat!"
*/

function SzovegesErtekelesV1(jegy) {
    let szovegesErtekeles = "";
    if (jegy == 1) {
        szovegesErtekeles = "Elégtelen";
    }
    else if (jegy == 2) {
        szovegesErtekeles = "Elégséges";
    }
    else if (jegy == 3) {
        szovegesErtekeles = "Közepes";
    }
    else if (jegy == 4) {
        szovegesErtekeles = "Jó";
    }
    else if (jegy == 5) {
        szovegesErtekeles = "Jeles";
    }
    else {
        szovegesErtekeles = "Hibás adat!";
    }
    return szovegesErtekeles;
}


function SzovegesErtekelesV2(jegy) {
    if (jegy == 1) {
        return "Elégtelen";
    }
    else if (jegy == 2) {
        return "Elégséges";
    }
    else if (jegy == 3) {
        return "Közepes";
    }
    else if (jegy == 4) {
        return "Jó";
    }
    else if (jegy == 5) {
        return "Jeles";
    }
    else {
        return "Hibás adat!";
    }
}
document.write(SzovegesErtekelesV2(5))
document.write("<hr>");
document.write(SzovegesErtekelesV1(4))
document.write("<hr>");
document.write(SzovegesErtekelesV2(3))
document.write("<hr>");
document.write(SzovegesErtekelesV1(2))
document.write("<hr>");
document.write(SzovegesErtekelesV2(1))
