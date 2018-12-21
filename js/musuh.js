function musuhPindah(posisi_asal, posisi_baru){
	kotaks[posisi_asal].classList.remove('enemy');
	kotaks[posisi_baru].classList.add('enemy');
	sudahMenang("enemy"); // dia nanya, apakah sudah menang ?
}

function recanaTerbaik(posisi){
	var tmp;
	var rencananya = [];
	for(let i=0; i<successPath.length; i++){
		if(successPath[i].pihak == "semua" || successPath[i].pihak == "enemy"){
			tmp = path[0][successPath[i].posisi[0]];
			tmp += path[1][successPath[i].posisi[1]];
			tmp += path[2][successPath[i].posisi[2]];
			rencananya[i] = { pola : i, bobot : tmp };			
		}
	}
	return rencananya;
}

function in_array(dicari, arraynya){
	for(let i=0; i<arraynya.length; i++){
		if(arraynya[i] == dicari)
			return true;
	}
	return false;
}

function langkahMusuh(rencana, posisi){
	var rr;
	for(let i=0; i<rencana.length; i++){
		rr = successPath[rencana[i].pola].posisi;

		for(let j=0; j<posisi.length; j++){
			for(let k=0; k<rr.length; k++){
				if(path[ posisi[j] ][ rr[k] ] == 1 && !in_array(posisi[j], rr)){
					if(!kotaks[rr[k]].classList.contains('player') && !kotaks[rr[k]].classList.contains('enemy')){
						return [posisi[j], rr[k]];	
					}			
				}
			}
		}		

	}

}


function giliranMusuh(){
	var pp = posisiPemain('enemy');
	pp.sort(function(a, b){return a - b});

	var rencana  = recanaTerbaik(pp);
	rencana.sort(compareValues('bobot'));

	var langkah = langkahMusuh(rencana, pp);
	musuhPindah(langkah[0], langkah[1]);
}