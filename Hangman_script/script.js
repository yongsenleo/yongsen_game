var words_noun = ["time","year","people","day","way","thing","service","life","game","world",
"system","part","student","information","company","business","number","school","program","child",
"area","team","product","work","week","place","point","family","man","home",
"problem","water","group","state","month","data","case","city","level","experience",
"name","member","question","book","site","line","type","use","event","power",
"side","end","woman","health","process","customer","project","issue","hour","community",
"lot","option","food","change","value","result","car","person","job","country",
"idea","body","user","house","page","hand","money","design","file","price",
"friend","university","story","player","video","room","word","right","quality","market",
"list","fact","application","law","color","season","reason","card","class","form"];

var words_verb = ["be","have","do","will","can","make","get","use","say","go",
"would","take","see","know","find","may","need","work","come","want",
"think","look","give","should","could","help","provide","start","try","include",
"keep","create","add","show","feel","become","call","tell","play","must",
"put","allow","like","mean","offer","run","set","leave","might","read",
"love","ask","require","write","learn","bring","seem","follow","receive","change",
"move","build","pay","hold","let","buy","live","turn","continue","begin",
"happen","lead","base","meet","send","consider","believe","choose","check","support",
"apply","share","hear","understand","cause","open","spend","develop","enjoy","serve",
"sell","grow","talk","lose","expect","win","appear","design","note","stop"];


function game2(words){
	var konfirmation = true;
	while(konfirmation == true){

		var word = words[Math.floor(Math.random()*(words.length - 1))].toUpperCase();
		var answerArray = [];
		for (var i = 0; i < word.length; i++) {
			answerArray[i] = "_";
		}
		var remainingLetters = word.length;
		var live = 5;
		var guessArray = [];

		while(remainingLetters >= 0 && live >= 0){
			if (live == 0) {
				alert("Sayang sekali anda Kalah\n" + "Jawaban yang benar adalah = " + word);
				break;
			}
			else if (remainingLetters == 0) {
				alert("Selamat anda benar menjawab kata " + word);
				break;
			}
			else {
				var guess = prompt(answerArray.join(" ") + "\nSisa nyawa = " + live + "\nHuruf yang sudah digunakan = " + guessArray.join(",") + "\n\nSilahkan tebak huruf");
				if (guess == null) {
					var konfirmasi = confirm("Apa anda yakin keluar dari Game?");
					if (konfirmasi == true) {
						alert("Terima kasih sudah bermain");
						return konfirmation = false;
						break;
					}
				}
				else if (guess.length != 1){
					alert("Invalid. Pilih huruf lain");
				}
				else if (guessArray.includes(guess.toUpperCase()) == true){
					alert("Huruf tersebut sudah digunakan\nPilih huruf yang lain");
				}

				else {
					var guessUpper = guess.toUpperCase();
					guessArray.push(guessUpper);
					if (word.includes(guessUpper) == false) {
						live--;
					}
					else{
						for (var j = 0; j < word.length; j++) {
							if (word[j] == guessUpper) {
								answerArray[j] = guessUpper;
								remainingLetters--;
							}
						}
					}
				}
			}
		}
		konfirmation = confirm("Mau main lagi?");
	}
}