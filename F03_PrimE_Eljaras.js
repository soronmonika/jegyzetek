//PrímE eljárás
function PrimE(vizsgalt_szam) {
    let osztok_szama = 0;
    for (let i = 1; i <= vizsgalt_szam; i++) {
        if (vizsgalt_szam % i == 0) {
            osztok_szama++;//osztok_szama+=1 vagy osztok_szama=osztok_szama+1
        }
    }
    if (osztok_szama == 2) {
        document.write(`A ${vizsgalt_szam} PRÍM<br>`);
    }
    else {
        document.write(`A ${vizsgalt_szam} NEM PRÍM<br>`);
    }
}

PrimE(5);
PrimE(10);
PrimE(21);
PrimE(13);
PrimE(42);
PrimE(2);
