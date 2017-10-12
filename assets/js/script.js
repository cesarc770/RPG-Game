
$(document).ready(function(){

//handling background song
var myAudio = document.getElementById("background");
var isPlaying = true;
myAudio.play();
$('#music-button').on("click", function(){
	if(isPlaying === true){
		myAudio.pause();
		isPlaying = false;
	}else{
		myAudio.play();
		isPlaying = true;
	}
	
});


	//create objects for characters
var characters = [
{name: "Pikachu", type: "electric",maxhp:180, hp: 180, attack: 8, defense: 15, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"0\" id=\"pikachu\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png\" alt=\"Pikachu\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif\" alt=\"Pikachu\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif\" alt=\"Pikachu\">"},
{name: "Bulbasaur", type: "grass",maxhp:200, hp: 200, attack: 7, defense: 16, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"1\" id=\"bulbasaur\"><img src=\"https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png\" alt=\"Bulbasaur\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif\" alt=\"Bulbasaur\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif\" alt=\"Bulbasaur\">"},
{name: "Squirtle", type: "water",maxhp:170, hp: 170, attack: 10, defense: 14, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"2\" id=\"squirtle\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png\" alt=\"Squirtle\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif\" alt=\"Squirtle\">", enemyImg:"<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif\" alt=\"Squirtle\">"},
{name: "Charmander", type: "fire",maxhp:178, hp: 178, attack: 7, defense: 17, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"3\" id=\"charmander\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png\" alt=\"Charmander\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif\" alt=\"Charmander\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif\" alt=\"Charmander\">"}
]

var activeChar = false;
var isEnemyChosen = false;
var myPokemon = "";
var enemyPokemon = "";
var myPokemonHP = "";
var enemyHP = "";
var myPokemonAttack = "";
var enemyAttack = "";
var oponentTitle = "<a href=\"https://fontmeme.com/pokemon-font/\"><img src=\"https://fontmeme.com/permalink/171011/dd105b1664cf9642399104a3e9ca37ee.png\" alt=\"pokemon-font\" border=\"0\"></a>";
var pokemonFightTitle = "<a href=\"https://fontmeme.com/pokemon-font/\"><img src=\"https://fontmeme.com/permalink/171011/ee0bc67b331ef62f624ec12a95ccca9e.png\" alt=\"pokemon-font\" border=\"0\"></a>";
var button = "<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>";
var message = $("#message-container");

function wait(ms) {
  		return new Promise(resolve => setTimeout(resolve, ms));
	}

//attach images dynamically to html
var charactersCol = $(".characters");

//use async function to bring characters a different times
async function addCharacters(){
		
	for (var i = 0; i < characters.length; i++) {
	var charDiv = characters[i].image;
	charactersCol.append(charDiv);
	//charactersCol.append(button);

	await wait(450);
	
		}
}


addCharacters();


//onclick event to select character

$("#pikachu").on("click", function(){
	if(!activeChar){
		var behindImg = characters[0].chosenImg;
		$("#chosen-character").append(behindImg);
		$("#pikachu").hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#char").append($(this).show());
		$("#main-title").html(oponentTitle);
		pickEnemy(characters[0].name);

	}
	myPokemon = chosenChar(characters[0]);
	$("#hp").html(myPokemon.hp);
	activeChar = true;
	
});

charactersCol.on("click", "div#bulbasaur", function(){
	if(!activeChar){
		var behindImg = characters[1].chosenImg;
		$("#chosen-character").append(behindImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#char").append($(this).show());
		$("#main-title").html(oponentTitle);
		pickEnemy(characters[1].name);

	}
	myPokemon = chosenChar(characters[1]);
	activeChar = true;

});

charactersCol.on("click", "div#squirtle", function(){
	if (!activeChar) {
		var behindImg = characters[2].chosenImg;
		$("#chosen-character").append(behindImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#char").append($(this).show());
		$("#main-title").html(oponentTitle);
		pickEnemy(characters[2].name);
	}
	myPokemon = chosenChar(characters[2]);
	activeChar = true;

});

charactersCol.on("click", "div#charmander", function(){
	if(!activeChar){
		var behindImg = characters[3].chosenImg;
		$("#chosen-character").append(behindImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#char").append($(this).show());
		$("#main-title").html(oponentTitle);
		pickEnemy(characters[3].name);
	}
	myPokemon = chosenChar(characters[3]);
	activeChar = true;

});


//choosing an oponent
charactersCol.on("click", "div.enemy0", function(){
	if(!isEnemyChosen){
		var enyImg = characters[0].enemyImg;
		$(".active-enemy").append(enyImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#enemy").append($(this).show());
		showAttack();
		$("#main-title").html(pokemonFightTitle);
		$(".enemy-bar").css("width", "100%");
		isEnemyChosen = true;
		enemyPokemon = characters[0];
		appear();
	}
})

charactersCol.on("click", "div.enemy1", function(){
	if(!isEnemyChosen){
		var enyImg = characters[1].enemyImg;
		$(".active-enemy").append(enyImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#enemy").append($(this).show());
		showAttack();
		$("#main-title").html(pokemonFightTitle);
		$(".enemy-bar").css("width", "100%");
		isEnemyChosen = true;
		enemyPokemon = characters[1];
		appear();
	}
})
charactersCol.on("click", "div.enemy2", function(){
	if(!isEnemyChosen){
		var enyImg = characters[2].enemyImg;
		$(".active-enemy").append(enyImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#enemy").append($(this).show());
		showAttack();
		$("#main-title").html(pokemonFightTitle);
		$(".enemy-bar").css("width", "100%");
		isEnemyChosen = true;
		enemyPokemon = characters[2];
		appear();
	}
})
charactersCol.on("click", "div.enemy3", function(){
	if(!isEnemyChosen){
		var enyImg = characters[3].enemyImg;
		$(".active-enemy").append(enyImg);
		$(this).hide();
		$(this).removeClass("fadeInDown");
		$(this).addClass("fadeInLeft");
		$("#enemy").append($(this).show());
		showAttack();
		$("#main-title").html(pokemonFightTitle);
		$(".enemy-bar").css("width", "100%");
		isEnemyChosen = true;
		enemyPokemon = characters[3];
		appear();
	}
})

//choosing oponents
function pickEnemy(name){
	switch (name){
		case "Pikachu":
			$("#bulbasaur").addClass("enemy1");
			$("#squirtle").addClass("enemy2");
			$("#charmander").addClass("enemy3");
		break;

		case "Bulbasaur":
			$("#pikachu").addClass("enemy0");
			$("#squirtle").addClass("enemy2");
			$("#charmander").addClass("enemy3");
		break;

		case "Squirtle":
			$("#pikachu").addClass("enemy0");
			$("#bulbasaur").addClass("enemy1");
			$("#charmander").addClass("enemy3");
		break;

		case "Charmander":
			$("#pikachu").addClass("enemy0");
			$("#bulbasaur").addClass("enemy1");
			$("#squirtle").addClass("enemy2");
		break;

	}
}

//keeping track of chosen characters
function chosenChar(argument){
	if(!activeChar){
		myPokemon = argument;
	}
	return myPokemon;
}
//hide and show attack

$("#attack").hide();
$(".hp").hide();

function showAttack(){
	$("#attack").show();
	$(".hp").fadeIn();
	$(".hp").show();

}

//attack motion
function attackMotion(){
$("#chosen-character").animate({left: "+=50"}, 300);
$("#chosen-character").animate({left: "-=50"}, 300);
$(".active-enemy").fadeOut(100);
$(".active-enemy").fadeIn(100);
}

//remove enemy

function enemyDefeated(){
	var defeated = document.getElementById("fainted");
	$(".active-enemy").empty();
	$("#enemy").empty();
	$(".fainted-message").fadeOut();
	defeated.play();
	$("#main-title").html(oponentTitle);
	
}

//last oponent won game
function lastOponent() {
	$(".active-enemy").empty();
	$("#enemy").empty();
	message.html("You have defeated all the wild Pokemon!. Good Job!");
	setTimeout(function(){location.reload()},2000);
}

var counter = 1;
var defeated = 0;

//function to show message when pokemon first appears
function appear(){
	message.html("<p class=\"appeared-message\"> A wild " + enemyPokemon.name + " has appeared!</p>")
	setTimeout(function() {$(".appeared-message").fadeOut(1500);}, 1000);
}

//attack function when clicking on attack button
$("#attack").on("click", function(){
	if(isEnemyChosen === true){
		attackMotion();
var audio = document.getElementById("punch");

audio.play();

//logic of the game

if(enemyPokemon.hp > 0){
	enemyPokemon.hp = enemyPokemon.hp - (myPokemon.attack * counter);
	reduceEnemyHP();
}
if(enemyPokemon.hp <= 0){
	message.html("<p class=\"fainted-message\">" + enemyPokemon.name + " has fainted</p>");
	isEnemyChosen = false;
	defeated = defeated + 1;
	if(defeated !== 3){
		setTimeout(function(){enemyDefeated()},2000);
	}else{
		lastOponent();
	}
	
}

if(myPokemon.hp > 0){
	myPokemon.hp = myPokemon.hp - enemyPokemon.defense;
	reducePokemonHP();
}
if(myPokemon.hp <=0){
	message.html("<p>Your " + myPokemon.name + " has fainted!.. Better luck next time!</p>");
	setTimeout(function(){location.reload()},3000);
}

counter = counter + 1;

	}

})// end of attack


//reduce hp
function reduceEnemyHP(){
	var percentage = Math.floor((enemyPokemon.hp *100)/enemyPokemon.maxhp);
	$(".enemy-bar").css("width", percentage+"%");
	console.log(percentage);
}

function reducePokemonHP(){
	var percentage = Math.floor((myPokemon.hp *100)/myPokemon.maxhp);
	$(".myPokemon-bar").css("width", percentage+"%");
}



});//end of script




