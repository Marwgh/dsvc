const daName = "peter" ;

const upp1 = daName.substring(0,3) + daName.toUpperCase()[3] + daName.substring(4);
const upp2 = daName.substring(0,2) + daName.toUpperCase()[2] +daName.toUpperCase()[3] + daName.substring(4);
const upp3 = daName.toUpperCase()[0] + daName.toUpperCase()[1] + daName.toUpperCase()[2] +daName.substring(3,4) +daName.toUpperCase()[4] ;

console.log(upp1);
console.log(upp2);
console.log(upp3);

const daOthername = "                marwane  " ;

const clean = daOthername.trim() ;

const capp1 = clean.toUpperCase()[0] + clean.substring(1) ;

console.log(capp1) ;    