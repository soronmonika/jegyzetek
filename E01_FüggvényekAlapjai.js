
//Működési elv

//Függvény létrehozása
function FüggvényNeve() {
    //utasítások
}
//Függvény meghívása
FüggvényNeve();

//Eljárás: visszatérési érték nélkül függvény (nincs eredménye: többnyire max kiírás)
//Függvény: visszatérési értékkel rendelkező függvény (van eredménye)

//Paraméter nélküli/paraméteres eljárás
function EljárásNeve(paraméter) {
    //utasítások
    //Többnyire kiíratás
}
//Eljárás meghívása
EljárásNeve();
//-----------------------------------------------------------------------------------------


//Példa egyszerű eljárásra, paraméter és visszatérési érték nélkül
function HW() {
    document.write("Hello World<br>");
}
HW();

//Példa paraméteres eljárásra, visszatérési érték nélkül
function Koszono(nev) {
    document.write("Hello " + nev + "!<br>");
}
Koszono("Feri");
Koszono("Mónika");
Koszono("Ottó");

/*
ÖSSZEFOGLALÁS: Függvénye(eljárás) alapjai röviden:
1) kell a [function] kulcsszó
2) kell egy elnevezés ami utal a függvény/eljárás funkciójára
3) megadhatjuk a paramétert, amivel a függvény/eljárás dolgozik, a kerek zárójeleken belülre!
4) a kapcsos zárójelen belül helyezzük el a futtatni kívánt kódot
5) meghívjuk a függvényt/eljárást, az elvárt paramétereknek megfelelően!
*/

/*
    Névadási lehetőségek:
    camelCase
    snake_case
    Pascal_case
    CSUPA_NAGYBETŰ
*/


//Mintafeladat
//Paraméteres eljárás
function NegyzetKeruletEljaras(a_oldal) {
    document.write(`A ${a_oldal} egységnyi méretű négyzet kerülete: ${a_oldal * 4}<br>`);
}
NegyzetKeruletEljaras(4);
NegyzetKeruletEljaras(6);

//Paraméteres függvény
//Függvény: van visszatérési értéke, amit később használhatok!
function NegyzetKeruletFuggveny(a_oldal) {
    let kerulet = a_oldal * 4;
    return kerulet;//visszaérési érték megadása
}
let eredmeny = NegyzetKeruletFuggveny(4)//Visszatérési értékes függvényem eredményét egy változóba "mentem"
document.write("A függvényem eredménye:" + eredmeny + "<br>");
document.write("Ha akarom így is kiírathatom az eredméyn felét:" + (eredmeny / 2) + "<br>");
document.write("A függvényem eredménye:" + NegyzetKeruletFuggveny(6) + "<br>");
document.write(`A függvényem eredménye:${NegyzetKeruletFuggveny(7)}<br>`);

/*
ÖSSZEFOGLALÁS: Függvénye alapjai visszatérési érték esetén:
1) kell a [function] kulcsszó
2) kell egy elnevezés ami utal a függvény funkciójára
3) megadhatjuk a paramétert, amivel a függvény dolgozik, a kerek zárójeleken belülre!
4) a kapcsos zárójelen belül helyezzük el a futtatni kívánt kódot
5)+++Adunk egy visszatérési értéket, ami a függény futtatásakor, egy eredményt fog generálni, ezzel dolgozhatunk később AKÁR!
6) meghívjuk a függvényt, az elvárt paramétereknek megfelelően!
*/

/*
function FüggvényNeve(paraméter){
    utasítások
    visszatérési érték, utasítások eredményével
    később a visszatérési értékkel dolgozhatunk ha szeretnénk!
}
*/

function OsszeadEljaras(a, b) {
    document.write("A két szám összege:" + (a + b));
}
OsszeadEljaras(3, 4);
//programozó logikai különszedve
function OsszeadFuggveny(a, b) {
    return a + b;
}
osszeadas_eredmenye = OsszeadFuggveny(3, 4);
//eredmény megjelenítés különszedve
function OsszeadFuggvenyKiir(eredmeny) {
    document.write("Az összeadás eredménye:" + eredmeny);
}
OsszeadFuggvenyKiir(osszeadas_eredmenye);
//EREDMÉNYE: ELKÜLÖNÍTHETŐ LESZ A FRONTEND A BACKENDTŐL!



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
document.write(RandomSzam(10, 20));
document.write("<hr>");
document.write(RandomSzam(50, 30));//Rossz sorrend esetén is működik
document.write("<hr>");
document.write(RandomSzam(5, 5));//Vagy ha mindkét érték egyforma


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
eredmeny = RandomSzam(10,20);
document.write("Az eredmény :", eredmeny);