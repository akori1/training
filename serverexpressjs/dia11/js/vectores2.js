var vector1 = [];
var vector2 = [];
var vector3 = [];
var i;
var j;

for (i = 0; i < 5; i++) {
  vector1[i]=i;
};

vector2=["a","b","c","d","e"];

j=0;

for (i = 0; i < 5; i++) {
	vector3[j]= vector1[i];
	j++;
	vector3[j]= vector2[i];
	j++;
};

	console.log("El vector 1 es ");
    console.log(vector1);
	console.log("El vector 2 es ");
    console.log(vector2);
	console.log("Los dos vectores mezclados son ");
    console.log(vector3);

