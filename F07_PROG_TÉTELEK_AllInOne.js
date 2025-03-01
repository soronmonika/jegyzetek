//PROGRAMOZÁSI TÉTELEK
//Összegzés tétele
function OsszegzesTetele_Fuggveny(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i];
    }
    return osszeg;
}
//___________________________________________________________
//Átlagszámítás tétele
function AtlagSzamitasTetele_Fuggveny(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg = osszeg + vizsgalt_tomb[i];
    }
    return osszeg / vizsgalt_tomb.length;
}
//___________________________________________________________
//Minimumkeresés tétele
function MinimumKeresekErtek_Fuggveny(vizsgalt_tomb) {
    let minErtek = vizsgalt_tomb[0];
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < minErtek) {
            minErtek = vizsgalt_tomb[i];
        }
    }
    return minErtek;
}
function MinimumKeresekIndex_Fuggveny(vizsgalt_tomb) {
    let minIndex = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] < vizsgalt_tomb[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
}
//___________________________________________________________
//Maximumkeresés tétele
function MaximumKeresekErtek_Fuggveny(vizsgalt_tomb) {
    let maxErtek = vizsgalt_tomb[0];
    for (let i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > maxErtek) {
            maxErtek = vizsgalt_tomb[i];
        }
    }
    return maxErtek;
}
function MaximumKeresekIndex_Fuggveny(vizsgalt_tomb) {
    let maxIndex = 0;
    for (let i = 1; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] > vizsgalt_tomb[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex
}
//___________________________________________________________
//Megszámlálás tétele
function MegszamlalasTetele_Fuggveny(vizsgalt_tomb) {
    let darab = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            darab++;
        }
    }
    return darab;
}
//___________________________________________________________
//Kiválogatás tétele
function KivalogatasTetele_Fuggveny(vizsgalt_tomb) {
    let kivalogatottak = []
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        if (vizsgalt_tomb[i] % 2 == 0) {
            kivalogatottak.push(vizsgalt_tomb[i]);
        }
    }
    return kivalogatottak;
}
//___________________________________________________________
//KIÍRATÓ ELJÁRÁS
function EredmenyKi(szoveg, eredmeny) {
    document.write(szoveg + eredmeny + "<br>");
}
//RANDOM SZÁM GENERÁLÓ FÜGGVÉNY
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
//RANDOM TÖMB GENERÁLÓ FÜGGVÉNY
function RandomSzamtombGenerator(hossz, alsoHatar, felsoHatar) {
    let generaltTomb = [];
    for (let i = 0; i < hossz; i++) {
        let randomSzam = RandomSzam(alsoHatar, felsoHatar);
        generaltTomb.push(randomSzam);
    }
    return generaltTomb;
}
let tomb = RandomSzamtombGenerator(10, 1, 100);
EredmenyKi("A vizsált tömb elemei:", tomb);

document.write("<hr>");
feladat1 = OsszegzesTetele_Fuggveny(tomb)
EredmenyKi("A tömb elemeinek összege:", feladat1);
feladat2 = AtlagSzamitasTetele_Fuggveny(tomb)
EredmenyKi("A tömb elemeinek átlaga:", feladat2);
feladat3 = MinimumKeresekErtek_Fuggveny(tomb);
EredmenyKi("A tömb legkisebb elemének értéke:", feladat3);
feladat4 = MinimumKeresekIndex_Fuggveny(tomb);
EredmenyKi("A tömb legkisebb elemének indexe:", feladat4);
feladat5 = MaximumKeresekErtek_Fuggveny(tomb);
EredmenyKi("A tömb legkisebb elemének értéke:", feladat5);
feladat6 = MaximumKeresekIndex_Fuggveny(tomb);
EredmenyKi("A tömb legkisebb elemének indexe:", feladat6);
feladat7 = MegszamlalasTetele_Fuggveny(tomb);
EredmenyKi("A tömbben lévő páros számok mennyisége:", feladat7);
feladat8 = KivalogatasTetele_Fuggveny(tomb);
EredmenyKi("A tömbben lévő páros számok listája:", feladat8);