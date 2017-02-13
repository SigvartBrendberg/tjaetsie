var vearbh = [
["Guvviedidh","Vaedtsedh","Dåeriedidh","Byöpmedidh","Murhkestidh"],/*golme-lihtsh*/
["Jiehtedh","Maehtedh"],/*1*/
["Laavkodh","Darjodh"],/*2*/
["Damtedh","Gaahkedh","Guarkedh"],/*3*/
["Edtjedh","Gossedh","Goetsedh"],/*4*/
["Dongkedh","Byøredh"],/*5*/
["Garmelostedh","Geesniedh","Geevledh","Gihtjedh"] /*6*/
];

var ding = new Audio('../media/complete.ogg');
var isRunning = false;

var daelie;
var poeng = 0;
var baakoe = document.getElementById("gyhtjelasse");
var poengDisplay = document.getElementById("poeng");

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
	isRunning = true;
};

var vearbhClick = function(gusnie){
	if(gusnie === daelie){
		orre();
		poeng += 2;
		poengDisplay.innerHTML = poeng;
		ding.play();
	}
	else if(isRunning){
		document.getElementById(gusnie).style.background = "#FF8080";
		poeng--;
		poengDisplay.innerHTML = poeng;
	};
};
