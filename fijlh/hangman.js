var liste = ["GÅESSIE","MIJJIEH","PLAERIE","GÅETIE","MANNE","JAAVOE","DAH","ASKE","JUPMELE","NAESITE","SOVKEDH","LAAVLODH","VAEDTSEDH",
"SAEMIE","AALTOE","PLAAVE","TJAEPIES","HIJVEN","PRIHTJEGE","LUHKIE","SAEVEGE","VUEJEDH","GÆRHKOE","MEAROE","SAARVA","GÆRJA","SIJHTEDH",
"GOVHTE","KROVHTE","AALOE","TJAETSIE","VUELKEDH","AARBORTE","BYJJENIDH","ONNE","GUHKIE","SMAAVE","DUVRIE","SIRVE","DATNE","DAH","JOHKE",
"BYØPMEDIDH","SÅEKIE","JEANOE","OBREDH","ÅESTEDH","UKTSIE","LOPME","LUVLIELUSPIE","GEAJNOE","BIEJJIE","IEHKEDE","ALMETJE","ÅAHPA","TJOEJKEDH",
"BUERIE","GOLTELIDH","DÅLLE","STAARE","DÅERIEDIDH","BALVE","ELMIE","GARMERE","VAERIE","SOEVE"];

var baak = "";
var riktig = [];
var feil = [];

var orre = function(){
	riktig = [];
	feil = [];
	baak = liste[Math.floor(Math.random()*liste.length)];
	teikn();
	for(var i=0;i<24;i++){
		document.getElementById(i + "").className = "bokstav";
	};
};

var teikn = function(){
	var ut = "";
	for(var i=0;i<baak.length;i++){
		if(riktig.indexOf(baak[i]) === -1){
			ut += "_ ";
		}
		else{
			ut += baak[i] + " ";
		};
	};
	document.getElementById("hang").innerHTML = ut;
};

var sjekk = function(place){
	var fors = place.innerHTML;
	if(feil.indexOf(fors) === -1 && riktig.indexOf(fors) === -1){
		var funne = false;
		for(var i=0;i<baak.length;i++){
			if(baak.indexOf(fors) != -1){
				riktig.push(fors);
				funne = true;
				break;
			};
		};
		if(funne){
			place.className="riktigBokstav";
			teikn();
		}
		else{
			place.className="selectedBokstav";
			feil.push(fors);
		};
	};
};

orre();
