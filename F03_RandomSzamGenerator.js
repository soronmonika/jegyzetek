//Készíts egy függvény, ami egy alsó és egy felső határt megkapva, kigenerál egy random számot

function RandomSzam(hatar_egy, hatar_ketto) {
    if (hatar_egy < hatar_ketto) {
        var alsoHatar = hatar_egy;
        var felsoHatar = hatar_ketto;
    }
    else {
        var alsoHatar = hatar_ketto;
        var felsoHatar = hatar_egy;
    }
    let randomSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return randomSzam;
}
document.write(RandomSz am(10, 20));
document.write("<hr>");
document.write(RandomSzam(50, 30));//Rossz sorrend esetén is működik
document.write("<hr>");
document.write(RandomSzam(5, 5));//Vagy ha mindkét érték egyforma