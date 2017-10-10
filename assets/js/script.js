var activeChar = false;

//create objects for characters
var characters = [
{name: "Pikachu", type: "electric", hp: 180, attack: 55, defense: 40, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"0\" id=\"pikachu\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png\" alt=\"Pikachu\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif\" alt=\"Pikachu\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif\" alt=\"Pikachu\">"},
{name: "Bulbasaur", type: "grass", hp: 200, attack: 49, defense: 49, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"1\" id=\"bulbasaur\"><img src=\"https://img.pokemondb.net/sprites/x-y/normal/bulbasaur.png\" alt=\"Bulbasaur\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif\" alt=\"Bulbasaur\">", enemyImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif\" alt=\"Bulbasaur\">"},
{name: "Squirtle", type: "water", hp: 198, attack: 48, defense: 65, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"2\" id=\"squirtle\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png\" alt=\"Squirtle\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/squirtle.gif\" alt=\"Squirtle\">"},
{name: "Charmander", type: "fire", hp: 188, attack: 52, defense: 43, image: "<div class=\"btn img-rounded animated fadeInDown\" data-index-number=\"3\" id=\"charmander\"><img src=\"https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png\" alt=\"Charmander\"></div>", chosenImg: "<img src=\"https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif\" alt=\"Charmander\">"}
]


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
	}
	activeChar = true;
});

charactersCol.on("click", "div#bulbasaur", function(){
	if(!activeChar){
		var behindImg = characters[1].chosenImg;
		$("#chosen-character").append(behindImg);
		$(this).hide();
	}
	activeChar = true;
});

charactersCol.on("click", "div#squirtle", function(){
	if (!activeChar) {
		var behindImg = characters[2].chosenImg;
		$("#chosen-character").append(behindImg);
		$(this).hide();
	}
	activeChar = true;
});

charactersCol.on("click", "div#charmander", function(){
	if(!activeChar){
		var behindImg = characters[3].chosenImg;
		$("#chosen-character").append(behindImg);
		$(this).hide();
	}
	activeChar = true;
});






