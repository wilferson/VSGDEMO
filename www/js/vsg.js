//Some others code
/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

// object.watch
if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop, handler) {
			var
			  oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
				return newval = handler.call(this, prop, oldval, val);
			}
			;
			
			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

// object.unwatch
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop) {
			var val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}

//Our object
var vsgapp={
	url:"http://veganshoppingapp.com",
	favorites:{},
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






var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

 
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
	 window.close();
 }
 function loadProfile(safecallback)
 {
	 	//Get user data from the localstorage
	vsgapp.auth=localStorage.getItem("token");
	if(vsgapp.auth)
	{
		//attemp authentiaction...
		email=localStorage.getItem("email");
		vsgapp.email=email;
		$.ajax({url: vsgapp.url+"/api/auth", 
		type:'POST',
		data:{
			'email':vsgapp.email,
			'token':vsgapp.auth,
		},
		success: function(result)
		{
			response=JSON.parse(result);
			if(response.success)
			{
				vsgapp.loged=response.success;
				localStorage.setItem("loged",true);
				vsgapp.usertype=response.user.type;
				vsgapp.name=response.user.name;
				vsgapp.lastname=response.user.lastname;
				temp=JSON.parse(response.user.favorites);
				vsgapp.favorites={};
				for (var i = temp.length - 1; i >= 0; i--) {
					vsgapp.favorites[temp[i].id.toString()]=temp[i];
				}
				vsgapp.location=response.user.location;
				vsgapp.usersex=response.user.sex;
				vsgapp.phone=response.user.phone;
				vsgapp.gender=response.user.sex;
				if(safecallback)
				{	
					safecallback.favorites=vsgapp.favorites;
					safecallback.$apply();
				}
			}
		},
	   
		});
	}

 }
function loadPage()
{
	loadProfile();
	navigator.splashscreen.show();
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

function retriveUserConfig()
{
	vsgapp.loged=localStorage.getItem("loged");
}
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
	window.localStorage.setItem("token",response.token);
	loadProfile();

	window.history.back();
	}
	else{
		alert(response.error);
	
	}

}
function logout()
{
	if (window.state==null)
	{

	}
	else
	{

		vsgapp.loged=false;
		vsgapp.favorites=null;
		state.go('intro');
	}
}
function login(email,password)
{
	//Request a token.
	localStorage.setItem("email",email);
	vsgapp.email=email;
	navigator.splashscreen.show();
	$.ajax({url: vsgapp.url+"/api/login", 
		success: loginSucces,
		error: function(result){alert("Network error");
		navigator.splashscreen.hide();
		},
		type:'POST',
		data:{
			'email':email,
			'password':password,
		
		}
		});

}



function checkVariable( variable,callback) {

   if (variable != null) {
       // Here is your next action
       callback();
   }
 }
 function signup(data)
 {
	localStorage.setItem("email",data.email);
	vsgapp.email=data.email;
	navigator.splashscreen.show();
	$.ajax({url: vsgapp.url+"/api/signup", 
	success: signupSucces,
	error: function(result){alert("Network error");
	navigator.splashscreen.hide();
	},
	type:'POST',
	data:data,
	});
 }

 function signupSucces(result)
 {
	 response=JSON.parse(result);
	 if (response.success)
	 {
		alert("Thank you for your registration.");
		vsgapp.token=response.token;
		localStorage.setItem("token",response.token);
		window.location.reload();
	 }else
	 {
		alert(response.error);
	 }
	 navigator.splashscreen.hide();
	 location.reload();
 }

 function getad($http)
 {

	var result={
		url:'',
		offer:{},
		imageURL:''
	}
  
	var baseurl=vsgapp.baseurl;
	 $http.get(baseurl+"/api/getad")
	  .then(function(response)
	  {
		  if(response.data)
		  {
			  data=response.data;
			  if(data.image_id)
			  {
				  result.offer=data;
				  result.url=data.url;
				  result.imageURL=vsgapp.database.images[dara.image_id].url;
			  }
		  }
  
	  });
	  return result;
 }