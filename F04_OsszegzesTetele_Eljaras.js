//Összegzés tétele eljárás
function Osszegzes(vizsgalt_tomb) {
    let osszeg = 0;
    for (let i = 0; i < vizsgalt_tomb.length; i++) {
        osszeg += vizsgalt_tomb[i];//osszeg=osszeg+vizsgalt_tomb[i];
    }
    document.write(`A ${vizsgalt_tomb} elemeinek összege: ${osszeg}<br>`);
}

Osszegzes([3, 4, 12, 24]);
Osszegzes([5, 6]);
Osszegzes([10, 10, 10, 10, 10, 10]);