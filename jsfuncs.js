//JS.Funcs.0 
//addVat
'use strict';
function addVat(a) {
    return b * a;
}

var b = Number(prompt('Indtast beløb'));
var a = 1.25;
console.log('Med moms: ' + addVat(a));

//subVat
'use strict';
function subVat(a) {
    return b * a;
}

var b = Number(prompt('Indtast beløb'));
var a = 0.8;
console.log('Uden moms: ' + subVat(a));

//calcVat
'use strict';
function calcVat(a) {
    return b * a - b;
}

var b = Number(prompt('Indtast beløb'));
var a = 0.8;
console.log('Moms af beløb: ' + calcVat(a));

//JS.Funcs.1
//first(s)
'use strict'
function first(s) {
    return s.charAt(0); 
}

var s = (prompt('Indtast ord'));
console.log('Første bogstav: ' + first(s));

//last(s)
'use strict'
function last(s) {
    return s.charAt(s.length - 1); 
}

var s = (prompt('Indtast ord'));
console.log('Sidste bogstav: ' + last(s));
  
//middle(s)
'use strict'
function middle(s) {
    return s.charAt(Math.floor(s.length / 2 )); 
}

var s = (prompt('Indtast ord'));
console.log('Midterste bogstav: ' + middle(s));

//JS.Func.2 ??
function play(a) {
	return math.floor(math.random () * a + 1)
}

//JS.Func.3
//C2F
'use strict';
function C2F(c) {
	return c * 9 / 5 + 32;
}

var c = Number(prompt('Indtast fahrenheit'));
console.log('Omregnet til celcius ' + C2F(c));

//F2C
'use strict';
function F2C(f) {
	return (f - 32) * 5 / 9;
}

var f = Number(prompt('Indtast fahrenheit'));
console.log('Omregnet til celcius ' + F2C(f));