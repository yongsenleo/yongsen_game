function game1(){
		var user
		var computer
		var result
		var again = true
	while(again){
		var nyawa = 3
// Angka acak dari Computer
		computer = Math.random();
		if(computer<0.1){
			computer = 1;
		}
		else if(computer>0.1 && computer<0.2){
			computer = 2;
		}
		else if(computer>0.1 && computer<0.2){
			computer = 2;
		}
		else if(computer>0.2 && computer<0.3){
			computer = 3;
		}
		else if(computer>0.3 && computer<0.4){
			computer = 4;
		}
		else if(computer>0.4 && computer<0.5){
			computer = 5;
		}
		else if(computer>0.5 && computer<0.6){
			computer = 6;
		}
		else if(computer>0.6 && computer<0.7){
			computer = 7;
		}
		else if(computer>0.7 && computer<0.8){
			computer = 8;
		}
		else if(computer>0.8 && computer<0.9){
			computer = 9;
		}
		else{
			computer = 10;
		}
		console.log(computer);

// Tebakan User
		while(nyawa){
			user = prompt("Tebak angka dari 1-10 \nKesempatan Anda tersisa = " + nyawa);

// Rules bermain
			if(user == null){
				again = false;
				nyawa = false;
			}
			else if(user>0 && user<11){
				if(user != computer){
					if(user < computer){
						result = "Angka Terlalu RENDAH!!!";
					}
					else{
						result = "Angka Terlalu TINGGI!!!";
					}
					nyawa -= 1;
					alert(result + "\nKesempatan Anda tersisa = " + nyawa);
				}
				else{
					alert("Jawaban Anda Benar!!! \nJawabannya = " + computer);
					break;
				}
			}
			else{
				result = "Angka Yang Dimasukkan SALAH";
				alert(result);
			}
		}
		if(again == false){
			break;
		}
		if(nyawa == 0){
			alert("Jawaban yang benar yaitu = " + computer);
		}
		again = confirm("Mau Coba Lagi???");
	}
	alert("Terima Kasih Sudah Bermain :)");
}