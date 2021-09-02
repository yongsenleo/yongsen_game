function game3(){
// variabel
		var player
		var bot
		var hasil
		var ulang = true
	while(ulang){
// pilihan bot
		bot = Math.random();
		if(bot<0.33){
			bot = 'batu';
		}
		else if(bot>0.67){
			bot = 'kertas';
		}
		else{
			bot = 'gunting';
		}
		console.log(bot);
		
// pilihan player
		player = prompt("Opsi:\n  - batu \n  - gunting \n  - kertas");

// rules bermain
		if(player == 'batu'){
			if(bot == 'gunting'){
				hasil = 'MENANG!';
			}
			else if(bot == 'kertas'){
				hasil = 'KALAH!';
			}
			else{
				hasil = 'SERI!';
			}
		}

		else if(player == 'gunting'){
			if(bot == 'kertas'){
				hasil = 'MENANG!';
			}
			else if(bot == 'batu'){
				hasil = 'KALAH!';
			}
			else{
				hasil = 'SERI!';
			}
		}

		else if(player == 'kertas'){
			if(bot == 'batu'){
				hasil = 'MENANG!';
			}
			else if(bot == 'gunting'){
				hasil = 'KALAH!';
			}
			else{
				hasil = 'SERI!';
			}
		}

		else if(player == null){
			break;
		}

		else{
			hasil = "KATA YANG DIMASUKKAN SALAH!!!"
		}

// tampilan hasil
		alert("Player = " + player + "\nComputer = " + bot + "\nMaka Hasilnya: " + hasil);
		ulang = confirm("Mau coba lagi???");
	}

	alert("Terima Kasih Sudah Bermain :v");
}