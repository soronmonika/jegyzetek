//Szövegkezerlő függvények
let egyszeruSzoveg = "Ez egy szöveg";
console.log("minta:" + egyszeruSzoveg);

//charAt() - Adott indexen lévő karaktert jelenít meg...
//Index ugyanúgy működik mint a tömb esetén!
let adottKarakter = egyszeruSzoveg.charAt(3);//e
console.log("charAt:", adottKarakter)

//concat() - Adott szöveghez egy másik szöveget fűz hozzá
let osszeFuzottSzoveg = egyszeruSzoveg.concat(", amihez hozzáfűzünk egy másik szöveget");
console.log("concat:", osszeFuzottSzoveg);

//includes() - Megnézi, hogy a szövegünkben szerepel-e egy adott karakterlánc vagy karakter
let vanEBenne1 = egyszeruSzoveg.includes("egy");
console.log("includes(01):", vanEBenne1);

let vanEBenne2 = egyszeruSzoveg.includes("kettő");
console.log("includes(02):", vanEBenne2);

//Érdekesség: Includes Tömbre!
let tomb = [1, 2, 3];
let vanEBenne3 = tomb.includes(1);
console.log("includes(03-tömb):", vanEBenne3);

//indexOf() - Megnézi, hogy adott szövegben, honnan kezdődik egy karakterlánc(első előfordulása)
let holvanBenne1 = egyszeruSzoveg.indexOf("egy");
console.log("indexOf(01)", holvanBenne1);

let holvanBenne2 = egyszeruSzoveg.indexOf("ketto");
console.log("indexOf(02)", holvanBenne2);

//length - Visszaadja egy karaklánc méretét(TULAJDONSÁG)
let szovegHossz = egyszeruSzoveg.length;
console.log("length", szovegHossz);

//repeat() - Adott karakterlánc ismétlése, megadott paraméter mennyiségig
let ismeteltSzoveg = egyszeruSzoveg.repeat(3);
console.log("repeat:", ismeteltSzoveg);

//replace() - kicserél egy adott karaktert vagy katakreláncot egy másikra, az ELSŐ találati helyen!
let modositottSzoveg1 = egyszeruSzoveg.replace("egy", "kettő");
console.log("replace(01):", modositottSzoveg1);

//replaceAll() - kicserél egy adott karaktert vagy katakreláncot egy másikra, az ELSŐ találati helyen!
let modositottSzoveg2 = egyszeruSzoveg.replaceAll("e", "ö");
//A JavaScript kis és nagybetű érzékeny, a kis [e] és a nagy [E] két külön karakter!
console.log("replace(02):", modositottSzoveg2);

//substr(), substring(), slice() - Kivág egy adott karakterláncot a szövegből
let kivagott1 = egyszeruSzoveg.substr(3, 6);//Kezdő karakter indexe és string hossza : "egy sz"
let kivagott2 = egyszeruSzoveg.substring(3, 6);//Kezdő karakter indexe és utolsó karakter indexe:"egy"
let kivagott3 = egyszeruSzoveg.slice(3, 6);//Kezdő karakter indexe és utolsó karakter indexe:"egy"
let kivagott4 = egyszeruSzoveg.substr(-6);//Végéről lehet levágni szöveget:"szöveg"
let kivagott5 = egyszeruSzoveg.slice(-6);//Végéről lehet levágni szöveget:"szöveg"

console.log("substr():", kivagott1);//NEM TÁMOGATOTT
console.log("substring():", kivagott2);
console.log("slice():", kivagott3);
console.log("substr():", kivagott4);//NEM TÁMOGATOTT
console.log("slice():", kivagott5);

//split() - szétszedi a karakterláncot valamilyen karakter alapján
let szetszedett = egyszeruSzoveg.split(" ");
console.log("split() tömbbé alajult:", szetszedett)

//join() - tömbből készít karakterláncot
let tombVisszaAlakitva = szetszedett.join(" ");//Paraméternek az összefűző karakter meg lehet adni, alapból [,]
console.log("join() szöveggé visszalakítottuk:", tombVisszaAlakitva);

//toUpperCase() - NAGYBETŰSSÉ ALAKÍTJA A SZÖVEGET
let nagybetusSzoveg = egyszeruSzoveg.toUpperCase();
console.log("toUppercase:", nagybetusSzoveg);

//toLowerCase() - kisbetűssé alkakítja a szöveget
let kisbetusSzoveg = egyszeruSzoveg.toLowerCase();
console.log("toLowercase:", kisbetusSzoveg);

//trim() - felesleges szóközöket(whitespace) eltávolítja
let feleslegesSzoveg = "                            Ez a szöveg előtti szóköz felesleges";
console.log(feleslegesSzoveg);
let megvagottSzoveg = feleslegesSzoveg.trim();
console.log("trim():", megvagottSzoveg);