$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	printNews();

	renderActivities();
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
var high= [];
var recetas= $();
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);


	for (var i=0; i < recipesArray.length; i++){
		if (recipesArray[i].highlighted ===true){
			high++;
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + recipe.title + ' </span> <span class="metadata-recipe"> <span class="author-recipe"> ' + recipe.source.name + '</span> <span class="bookmarks-recipe"> <span class="icon-bookmark"></span> </span> </span></span> <img src="img/recipes/320x350/'+ recipe.name +'.jpg" /> </a>');

}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	if (activities.length > 0){
		$(".wrapper-message").hide();
	}
	console.log('Activities: ', activities);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

/*
* Ocultar flecha
*/
$("#indexhide").hide();
$("#recipehide").hide();

function printNews(){
	$("#news").html("NUEVAS RECETAS");
}
