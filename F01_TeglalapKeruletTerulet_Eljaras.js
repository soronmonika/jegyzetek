//Téglalap kerület és terület eljárás
function TeglalapKeruletTerulet(a_oldal, b_oldal) {
    let kerulet = (a_oldal + b_oldal) * 2;
    let terulet = a_oldal * b_oldal;
    document.write(`A ${a_oldal} és ${b_oldal} oldalú téglalap kerülete: ${kerulet}<br>`);
    document.write(`A ${a_oldal} és ${b_oldal} oldalú téglalap területe: ${terulet}<hr>`);
}
TeglalapKeruletTerulet(5, 6);

function TeglalapKerulet(a_oldal, b_oldal) {
    document.write(`A ${a_oldal} és ${b_oldal} oldalú téglalap kerülete: ${(a_oldal + b_oldal) * 2}<hr>`);
}
TeglalapKerulet(3, 4);

function TeglalapTerulet(a_oldal, b_oldal) {
    document.write(`A ${a_oldal} és ${b_oldal} oldalú téglalap területe: ${a_oldal * b_oldal}<hr>`);
}
TeglalapTerulet(2, 3);