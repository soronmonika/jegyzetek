//Készíts egy függvényt, ami két bemeneti paraméterből, visszadja a nagyobbat!

function MelyikANAgyobbV1(szam_egy, szam_ketto) {
    if (szam_egy > szam_ketto) {
        return szam_egy;
    }
    else {
        return szam_ketto;
    }
}

function MelyikANAgyobbV2(szam_egy, szam_ketto) {
    let melyikANagyobb = szam_egy;
    if (szam_ketto > szam_egy) {
        melyikANagyobb = szam_ketto;
    }
    return melyikANagyobb;
}

function MelyikANAgyobbV3(szam_egy, szam_ketto) {
    if (szam_egy > szam_ketto) {
        return szam_egy;
    }
    return szam_ketto;
}


document.write(MelyikANAgyobbV1(3, 6));
document.write("<hr>");
document.write(MelyikANAgyobbV2(3, 6));
document.write("<hr>");
document.write(MelyikANAgyobbV3(3, 6));
document.write("<hr>");
document.write(MelyikANAgyobbV2(42, 106));
document.write("<hr>");
document.write(MelyikANAgyobbV3(64, 31));