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

//F06 - Oldja meg, hogy az átlagfizetés alattiaknak 20%-os fizetésemelésük legyen! #Repülőrajt!
//Kiválogatás tétele(csak szűrés) és utána érték módosítás (fizu*1.2)
function AtlagalattiFizetesEmeles(vizsgaltTomb) {
    let atlagFizu = AtlagFizetes(Dolgozok);
    let fizetesEmelestKaptak = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].fizetes < atlagFizu) {
            let kivalasztottDolgozo = {};
            kivalasztottDolgozo.nev = vizsgaltTomb[i].nev;
            kivalasztottDolgozo.ujFizu = Math.round(vizsgaltTomb[i].fizetes * 1.2);
            fizetesEmelestKaptak.push(kivalasztottDolgozo);
        }
    }
    return fizetesEmelestKaptak;
}
console.log(AtlagalattiFizetesEmeles(Dolgozok));

//F07 - Ki a legidősebb a cégnél? (Írd ki minden adatát)
function LegidosebbDolgozo(vizsgaltTomb) {
    let legidosebbDolgozoIndex = 0;
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].kor > vizsgaltTomb[legidosebbDolgozoIndex].kor) {
            legidosebbDolgozoIndex = i;
        }
    }
    return legidosebbDolgozoIndex;
}
function LegidosebbDolgozoKiir(indexErtek) {
    console.log("A legidosebb dolgozó neve:" + Dolgozok[indexErtek].nev);
    console.log("A legidosebb dolgozó életkora:" + Dolgozok[indexErtek].kor);
    console.log("A legidosebb dolgozó fizetése:" + Dolgozok[indexErtek].fizetes);
    console.log("A legidosebb dolgozó beosztása:" + Dolgozok[indexErtek].beosztas);
}
LegidosebbDolgozoKiir(LegidosebbDolgozo(Dolgozok));

//F08 - Mennyi van a legidősebb embernek hátra a nyugdíjig, ha a nyugdíjkorhatár egységesen 65 év!
function NyugdijigHatralevoIdo(vizsgaltTomb, vizsgaltSzemely) {
    return 65 - vizsgaltTomb[vizsgaltSzemely].kor;//Ide kell a legidősebb személy indexe majd, a függvényben
}

function NyugdijigHatralevoIdoKiir(evekSzama) {
    console.log("A legidősebb dolgozónak nyugdíjig hátralévő évek száma:" + evekSzama);
}
NyugdijigHatralevoIdoKiir(NyugdijigHatralevoIdo(Dolgozok, LegidosebbDolgozo(Dolgozok)));



//F09 - Mennyi idő van átlagosan a cégnél a nyugdíjig(mindenkinek)
function AtlagNyugdijHatralevoIdo(vizsgaltTomb) {
    osszHatralevoIdo = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszHatralevoIdo += NyugdijigHatralevoIdo(vizsgaltTomb, i);
    }
    return osszHatralevoIdo / vizsgaltTomb.length;
}
function AtlagNyugdijHatralevoIdoKiir(eredmeny) {
    console.log("A cégnél nyugdíjig átlagosan hátralévő idő:", eredmeny.toFixed(2));
}
AtlagNyugdijHatralevoIdoKiir(AtlagNyugdijHatralevoIdo(Dolgozok));

//F10 - Mennyi a cégénél a medián bér:Sorba rakás után, a középső...
//Ha kettő van középen akkor a kettő átlaga, jelenleg 7 fővel dolgozunk 4. kell
//sort() - sorba rendező függvény!

function Medianber(vizsgaltTomb) {
    let berek = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        berek.push(vizsgaltTomb[i].fizetes);
    }
    berek.sort(function (a, b) { return a - b });
    if (berek.length % 2 == 0) {
        return (berek[berek.length / 2 - 1] + berek[berek.length / 2]) / 2;
    }
    else {
        return berek[(berek.length / 2) - 0, 5]; //Itt 0.5 lehet a vége, ezért elég kivonni 0.5-öt
    }
}
console.log(Medianber(Dolgozok));


//F11-EXTRA(Táblázat generálása)
function AtlagalattiFizetesEmelesTablazat(megjelenitendoElemek) {
    document.write("<table border='1'>");
    document.write("<tr><th>Dolgozó neve</th><th>Dolgozó új fizeteése</th></tr>");
    for (let i = 0; i < megjelenitendoElemek.length; i++) {
        document.write(`<tr><td>${megjelenitendoElemek[i].nev}</td><td>${megjelenitendoElemek[i].ujFizu}</td></tr>`);
    }
    document.write("</table>");
}

AtlagalattiFizetesEmelesTablazat(AtlagalattiFizetesEmeles(Dolgozok));