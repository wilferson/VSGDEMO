
var vsgapp={
	url:"http://veganshoppingapp.com",
	favorites:null,
	loged:false,
	username:null,
	password:null,
	database:{
		categories:{},
		offers:{},
		images:{},
		stores:{}
	},
};
var origAlert=alert;

 
function constructPages()
{
//Done loading, remove Splash
//Reconstruct pages and 

   navigator.splashscreen.hide();	

	  
}
function render_home($scope,$stateParams)
{
	$scope.dbcategories=vsgapp.categories;
}
 
 function databaseLoaded(result)

 {
 	
 	
 	temp=JSON.parse(result);
 	database=vsgapp.database;
 	//parse the database

 	//Categories
 		for (var i = temp.Categories.length - 1; i >= 0; i--) {
 			database.categories[temp.Categories[i].id.toString()]=temp.Categories[i];
 		}

 	//Offers
 	 		for (var i = temp.Offers.length - 1; i >= 0; i--) {
 			database.offers[temp.Offers[i].id.toString()]=temp.Offers[i];
 		}


 	//images
 		 		for (var i = temp.Images.length - 1; i >= 0; i--) {
 			database.images[temp.Images[i].id.toString()]=temp.Images[i];
 		}


 	//stores
 		 		for (var i = temp.Stores.length - 1; i >= 0; i--) {
 			database.stores[temp.Stores[i].id.toString()]=temp.Stores[i];
 		}
		
	 //Populate landing page
	 window.sessionStorage.setItem("database", JSON.stringify(database));
	 
 	constructPages();

	

  		
 }
 function databaseNotLoaded(result)
 {
 	alert("Networking Error, try reestarting the app.");	
 }
function loadPage()
{
	//Get user data from the localstorage
	vsgapp.email=localStorage.getItem("email");
	if(vsgapp.email)
	{
		//attemp authentiaction...
		auth=localStorage.getItem("token");
		vsgapp.auth=auth;
		$.ajax({url: vsgapp.url+"/api/login", 
		type:'POST',
		data:{
			'email':vsgapp.email,
			'token':auth,
		},
		success: function(result)
		{
			response=JSON.parse(result);
			if(response.success)
			{
				vsgapp.loged=response.success;
				vsgapp.usertype=response.user.type;
				vsgapp.name=response.user.name;
				vsgapp.lastname=response.user.lastname;
				vsgapp.favorites=response.user.favorites;	
				vsgapp.location=response.user.location;
				vsgapp.usersex=response.user.sex;
				vsgapp.phone=response.user.phone;
				vsgapp.gender=response.user.sex;
			}
		},
	   
		});
	}

	//Our databes object does not exist so create it
	if (window.sessionStorage.getItem("database")==null)
	{
		

		 $.ajax({url: vsgapp.url+"/api/getall", 
		 	success: databaseLoaded,
			 failed: databaseNotLoaded,
			
		 	});
	}else

	{
		vsgapp.database=JSON.parse(window.sessionStorage.getItem("database"));

	constructPages();
	}



}
document.addEventListener('deviceready', loadPage);

function main_page($scope,$stateParams)
{

}


function initFavorites(result)
{

	if(result)
	{
		vsgapp.favorites=JSON.parse(result);
		console.log(vsgapp.favorites);
	}	

	if (vsgapp.email)
	{
		$.ajax({url: vsgapp.url+"/api/getfavorites", 
		success: initFavorites,
		error: function(){alert("Comunication Error.");},
		type:'POST',
		data:{
			'email':vsgapp.email,
			'password':vsgapp.password,
			async:true,
		}
		});

	}
}
function loginSucces(result)
{
	//Server response with a token that can be stored into the localstoragedatabase
	response=JSON.parse(result);
	if (response.success)
	{
	window.localStorage.setItem("token")=result.token;
	location.reload();
	navigator.splashscreen.hide();	
	}

}
function logout()
{
	if (window.state==null)
	{

	}
	else
	{
		window.localStorage.setItem("token","");
		vsgapp.loged=false;
		vsgapp.favorites=null;
		state.go('intro');
	}
}
function login(email,password)
{
	//Request a token.
	navigator.splashscreen.show();
	$.ajax({url: vsgapp.url+"/api/auth", 
		success: loginSucces,
		error: function(result){alert("Network error");
		navigator.splashscreen.hide();
		},
		type:'POST',
		data:{
			'email':email,
			'password':password,
			async:true,
		}
		});

}

function checkVariable( variable,callback) {

   if (variable != null) {
       // Here is your next action
       callback();
   }
 }