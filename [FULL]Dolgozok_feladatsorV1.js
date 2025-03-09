//Objektumkezelés alapok: Objektum típusú tömb(előre létrehozott)
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];
//F01 - Cég havi költsége, azaz mennyibe kerül a dolgozókat fizetni, egy hónapban.
function OsszKoltseg(vizsgaltTomb) {
    let koltseg = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        koltseg += vizsgaltTomb[i].fizetes;
    }
    return koltseg;
}

function OsszKoltsegKiir(osszeg) {
    console.log("A dolgozók havi költsége:" + osszeg + "Ft");
}
eredmeny01 = OsszKoltseg(Dolgozok);
OsszKoltsegKiir(eredmeny01)

//F02 - Ki keresi a legtöbbet a cégnél, írd ki az összes adatát!
//Maximum keresés tétel (index alapú keresés)
function LegtobbetKereso(vizsgaltTomb) {
    let legtobbetKeresoIndex = 0;
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].fizetes > vizsgaltTomb[legtobbetKeresoIndex].fizetes) {
            legtobbetKeresoIndex = i;
        }
    }
    return legtobbetKeresoIndex;
}
function LegtobbetKeresoKiir(indexErtek) {
    console.log("A legtöbbet kereső dolgozó neve:" + Dolgozok[indexErtek].nev);
    console.log("A legtöbbet kereső dolgozó életkora:" + Dolgozok[indexErtek].kor);
    console.log("A legtöbbet kereső dolgozó fizetése:" + Dolgozok[indexErtek].fizetes);
    console.log("A legtöbbet kereső dolgozó beosztása:" + Dolgozok[indexErtek].beosztas);
}
LegtobbetKeresoKiir(LegtobbetKereso(Dolgozok));


//F03 - Legfiatalabb dolgozo megkeresése az objektum típusú tömbben
function LegfiatalabbDolgozo(vizsgaltTomb) {
    let legfiatalabbDolgozoIndex = 0;
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].kor < vizsgaltTomb[legfiatalabbDolgozoIndex].kor) {
            legfiatalabbDolgozoIndex = i;
        }
    }
    return legfiatalabbDolgozoIndex;
}
function LegfiatalabbDolgozoKiir(indexErtek) {
    console.log("A legfiatalabb dolgozó neve:" + Dolgozok[indexErtek].nev);
    console.log("A legfiatalabb dolgozó életkora:" + Dolgozok[indexErtek].kor);
    console.log("A legfiatalabb dolgozó fizetése:" + Dolgozok[indexErtek].fizetes);
    console.log("A legfiatalabb dolgozó beosztása:" + Dolgozok[indexErtek].beosztas);
}
LegfiatalabbDolgozoKiir(LegfiatalabbDolgozo(Dolgozok));


//F04 - Növeld meg a legfiatalabb dolgozó bérét 30.000Ft-tal. Majd írasd ki az új "kapott fizetés" értékét
function LegfiatalabbFizetesEmeles(vizsgaltTomb, DolgozoIndexe) {
    vizsgaltTomb[DolgozoIndexe].fizetes += 30000;
}
function LegfiatalabbFizetesEmelesKiir(DolgozoIndexe) {
    console.log("A legfiatalabb dolgozó fizetése az emelés után:" + Dolgozok[DolgozoIndexe].fizetes);
}
let legfiatalabbIndexe = LegfiatalabbDolgozo(Dolgozok);
LegfiatalabbFizetesEmeles(Dolgozok, legfiatalabbIndexe);
LegfiatalabbFizetesEmelesKiir(legfiatalabbIndexe);

//F05 - Mennyit keresnek átlagosan a céges dolgozók?
//Átlagszámítás tétele
function AtlagFizetes(vizsgaltTomb) {
    let osszFizetes = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszFizetes += vizsgaltTomb[i].fizetes;
    }
    return osszFizetes / vizsgaltTomb.length;
}

function AtlagFizetesKiir(kiirandoEredmeny) {
    console.log("A dolgozók átlagfizeteése:" + kiirandoEredmeny);
}
AtlagFizetesKiir(AtlagFizetes(Dolgozok));