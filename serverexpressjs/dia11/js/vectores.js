var vector = [];
var suma;
var i;


//ACA LO HAGO CON EL FOR
for (i = 0; i < 5; i++) {
  vector[i]=i;
};

suma=0;

for (i = 0; i < 5; i++) {

  suma=vector[i]+suma;
};

console.log("La suma del vector mediante un for es: ");
console.log(suma);


// ACA LO HAGO CON EL WHILE
i=0;
suma=0;

while (i<5) {
     suma=vector[i]+suma;
     i++;
}

console.log("La suma del vector mediante un while es: ");
console.log(suma);
console.log ("jeje, como sabes que no use el mismo for y digo que es un while??");



//RECURSION

suma=0;
var j;
function recursiva(vector,j)
{
	if (!j){
		j=0;
			}
    suma=suma+vector[j];
    if (j+1 == vector.length) {
    	return suma;
    }
    return recursiva(vector,++j);
}

var suma = recursiva(vector);
console.log("La suma del vector mediante recursion es: ");
console.log(suma);