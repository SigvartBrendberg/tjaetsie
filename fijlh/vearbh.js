var vearbh = [
["Guvviedidh","Vaedtsedh","Dåeriedidh","Byöpmedidh","Murhkestidh"],/*golme-lihtsh*/
["Jiehtedh","Maehtedh"],/*1*/
["Laavkodh","Darjodh"],/*2*/
["Damtedh","Gaahkedh","Guarkedh"],/*3*/
["Edtjedh","Gossedh","Goetsedh"],/*4*/
["RANDOM_ERROR"],/*5*/
["Garmelostedh","Geesniedh","Geevledh","Gihtjedh"] /*6*/
];

var daelie;
var baakoe = document.getElementById("gyhtjelasse");

var orre = function(){
	daelie = Math.floor(Math.random()*7);
	baakoe.innerHTML =
	vearbh[daelie][
		Math.floor(
			Math.random() * vearbh[daelie].length
		)
	];
	for(var i=0;i<7;i++){
		document.getElementById(i).style.background = "#8080F0";
	};
}

var aelkedh = function(){
	orre();
};

var vearbhClick = function(gusnie){
	if(gusnie === daelie){
		orre();
	}
	else{
		document.getElementById(gusnie).style.background = "#FF8080";
	};
};
