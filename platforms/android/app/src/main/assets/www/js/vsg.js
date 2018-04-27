
var vsgapp={
	url:"http://veganshoppingapp.com",
	database:{
		categories:[],
		offers:[],
		images:[],
		stores:[]
	},
};

 
 function databaseLoaded(result)
 {
 	console.log(result);
 	window.localStorage.setItem("database",(result));
 	temp=JSON.parse(result);
 	database=vsgapp.database;
 	//parse the database

 	//Categories
 		for (var i = temp.Categories.length - 1; i >= 0; i--) {
 			database.categories[temp.Categories[i].id]=temp.Categories[i];
 		}

 	//Offers
 	 		for (var i = temp.Offers.length - 1; i >= 0; i--) {
 			database.offers[temp.Offers[i].id]=temp.Offers[i];
 		}


 	//images
 		 		for (var i = temp.Images.length - 1; i >= 0; i--) {
 			database.images[temp.Images[i].id]=temp.Images[i];
 		}


 	//stores
 		 		for (var i = temp.Stores.length - 1; i >= 0; i--) {
 			database.stores[temp.Stores[i].id]=temp.Stores[i];
 		}

    			
 }
 function databaseNotLoaded(result)
 {
 	alert(result);	
 }
function loadPage()
{
	/*
	//Our databes object does not exist so create it
	if (window.localStorage.getItem("database")==null)
	{
		//*/

		 $.ajax({url: vsgapp.url+"/api/getall", 
		 	success: databaseLoaded,
		 	failed: databaseNotLoaded,
		 	});

		/*
	}
	//*/
}
document.addEventListener('deviceready', loadPage);