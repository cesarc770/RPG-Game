
$(document).ready(function(){
	//create objects for characters
var characters = [
{name: "Pikachu", type: "electric", hp: 180, attack: 15, defense: 10, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"0\" id=\"pikachu\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png\" alt=\"Pikachu\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif\" alt=\"Pikachu\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif\" alt=\"Pikachu\">"},
{name: "Bulbasaur", type: "grass", hp: 200, attack: 10, defense: 15, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"1\" id=\"bulbasaur\"><img src=\"https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png\" alt=\"Bulbasaur\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif\" alt=\"Bulbasaur\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif\" alt=\"Bulbasaur\">"},
{name: "Squirtle", type: "water", hp: 198, attack: 14, defense: 12, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"2\" id=\"squirtle\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png\" alt=\"Squirtle\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif\" alt=\"Squirtle\">", enemyImg:"<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif\" alt=\"Squirtle\">"},
{name: "Charmander", type: "fire", hp: 188, attack: 16, defense: 14, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"3\" id=\"charmander\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png\" alt=\"Charmander\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif\" alt=\"Charmander\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif\" alt=\"Charmander\">"}
]

var activeChar = false;
var isEnemyChosen = false;
var myPokemon = "";
var enemyPokemon = "";
var myPokemonHP = "";
var enemyHP = "";
var myPokemonAttack = "";
var enemyAttack = "";


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
		pickEnemy(characters[0].name);

	}
	myPokemon = chosenChar(characters[0]);
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
		isEnemyChosen = true;
		enemyPokemon = characters[0];
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
		isEnemyChosen = true;
		enemyPokemon = characters[1];
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
		isEnemyChosen = true;
		enemyPokemon = characters[2];
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
		isEnemyChosen = true;
		enemyPokemon = characters[3];
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

function showAttack(){
	$("#attack").show();
}

//attack motion
function attackMotion(){
$("#chosen-character").animate({left: "+=50"}, 300);
$("#chosen-character").animate({left: "-=50"}, 300);
$(".active-enemy").animate({left: "-=50"}, 300);
$(".active-enemy").animate({left: "+=50"}, 300);
}


//attack
$("#attack").on("click", function(){
attackMotion();
myPokemonHP = myPokemon.hp;
enemyHP = enemyPokemon.hp;
myPokemonAttack = myPokemon.attack;

//logic of the game
if(enemyPokemon.hp > 0){
	enemyPokemon.hp = enemyPokemon.hp - (myPokemon.attack);

}else{
	alert(enemyPokemon.name + " has fainted");
}

if(myPokemon.hp > 0){
	myPokemon.hp = myPokemon.hp - enemyPokemon.defense;
}else{
	alert(myPokemon.name + " has fainted");
}
console.log(myPokemon);
console.log(enemyPokemon);



})



});




