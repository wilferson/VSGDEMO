
angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams','$window','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$http) {
	$window.currentScope=$scope;
	$scope.db=$window.vsgapp.database;
	$scope.baseurl=$window.vsgapp.url;
	baseurl=$scope.baseurl;
	$scope.randomColor=$window.randomColor;
	$scope.addata={};
	$scope.addata=$window.getad($http);
	$window.addata=$scope.addata;

    
}])
   
.controller('favoritesCtrl', ['$scope', '$stateParams','$window','$state','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state,$http) {
	$window.currentScope=$scope;
	vsgapp=$window.vsgapp;
	$scope.db=$window.vsgapp.database;
	db=$scope.db;
	$scope.baseurl=$window.vsgapp.url;
	$scope.addata={};
	$scope.addata=$window.getad($http);
	$window.addata=$scope.addata;
	
	if($window.vsgapp.loged)
		{
			if($window.angular.equals($window.vsgapp.favorites,{}))
				{

				}
				else
				{
					$window.loadProfile($scope);
				}
		}
		

	

	
	$scope.isEmpty=function(obj) {
		for(var prop in obj) {
			if(obj.hasOwnProperty(prop))
				return false;
		}
		return true;
	}
	$scope.moveto=function (fav,urlindex)
	{
	if(db.offers[fav.offer_id].store_id)
	{
		surls=db.stores[db.offers[fav.offer_id].store_id].url.split(";");
		if(surls[urlindex])
		{
			var ref = $window.cordova.InAppBrowser.open(surls[urlindex], '_blank', 'location=yes');
		}
	}else
	{
		surls=[];
	}

	}
	
	
}])
   
.controller('productsCtrl', ['$scope', '$stateParams','$window','$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$http) {

$window.currentScope=$scope;
$scope.database=$window.vsgapp.database;
$scope.baseurl=$window.vsgapp.url;
$scope.cat=$stateParams.cat_id;
$scope.baseurl=$window.vsgapp.url;
$scope.addata={};
$scope.addata=$window.getad($http);
$window.addata=$scope.addata;
	

}])
   
.controller('UserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('searchCtrl', ['$scope', '$stateParams','$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window) {
//Traspose db to array
var ldb=$window.vsgapp.database;
	
$scope.db={
	categories:[],
	offers:[],
	stores:[],
	images:{}
}
$scope.db.categories=Object.keys(ldb.categories).map(function(val) {  return ldb.categories[val] });
$scope.db.offers=Object.keys(ldb.offers).map(function(val) { return ldb.offers[val] });
$scope.db.stores=Object.keys(ldb.stores).map(function(val) { return ldb.stores[val] });
$scope.db.images=ldb.images;
$scope.baseurl=$window.vsgapp.url;
$scope.select_q=0;
$scope.clicked=function(id){
	$scope.select_q=id;
	
}
}])
   
.controller('shoppingCarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams','$window','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state) {

	if(!$window.vsgapp.loged)
{
	alert("You need to login to continue.")
	$state.go('login');
}
$scope.loged=$window.vsgapp.loged;
$window.state=$state;
$scope.logout=function(){
	$window.logout();	
	$window.localStorage.setItem("loged",false);
	$window.loaclStorage.setItem("token",null);
}


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams','$window', '$state' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state) {

	if($window.vsgapp.loged)
	{
		$state.go('menu.home')
	}
	$scope.signupData={
		name:'',
		email:'',
		password:'',
		lastname:'',
		location:'defult',
		phone:'',
		password2:'',
		birthday:'',
		sex:''
	}

	$scope.signup=function()
	{
		
			$window.signup($scope.signupData);	
	
		}
		

}])
   
.controller('recoverPasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams','$window','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state) {

	$scope.vsgapp=$window.vsgapp;
	$window.state=$state;
	$scope.login ={email:"",
					password:""};

	$scope.postLogin=function(){
	
		$window.login($scope.login.email,$scope.login.password,$state)
	};
	if ($window.vsgapp.loged)
	{
		$state.go('menu.home');
	}

}])
   
.controller('newRecipeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editProfileCtrl', ['$scope', '$stateParams','$state' ,'$window','$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$window,$ionicPopup) {

$scope.vsgapp=$window.vsgapp;

if($scope.vsgapp.loged==false)
{


		var confirmPopup = $ionicPopup.confirm({
		  title: 'You must sign in',
		  template: "Please log in."
		});
		confirmPopup.then(function(res) {
		  if(res) {
			$state.go('login')
		  } else {
			$window.history.back();
		  }
		});

	}

}])
   
.controller('recipeNameCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productNameCtrl', ['$scope', '$stateParams','$window','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state) {
	$window.currentScope=$scope;
	//Scope the database
	db=$window.vsgapp.database;
	$scope.database=db;
	//get the product id
	$scope.off=$stateParams.off_id;
	$scope.store_id=$stateParams.store_id;
	console.log($scope.store_id);
	if($scope.off=="" && $scope.store_id)
	{
		myoffers=Object.keys(db.offers).map(function(val) { return db.offers[val] });
		myoffers.forEach(function(element){if (element.title=='_store' && element.store_id==$scope.store_id){
			$scope.off=element.id;
		}
			
		});

	}
	//Scope the base url
	$scope.baseurl=$window.vsgapp.url;
	//Get and scope stores url
	$scope.favorites=$window.vsgapp.favorites;
	//is faved?
	$scope.faved=false;
	//Color
	$scope.heartStyle={'background-color':'#F1EA2B'};
	//heart animation.
	$scope.heartAnim="";
	for(fav in $scope.favorites)
	{
	
		if ($scope.favorites[fav].offer_id==$scope.off)
		{

		$scope.saved=true;
		$scope.heartStyle={'background-color':'#f00'};	
		}
		
	}
	

	$scope.favClick=function(off)
	{
		if($window.vsgapp.loged==false)
		{
			alert("Only registred users can use this feature.");
			$state.go("login");
			return;
		}
		$.ajax({url: vsgapp.url+"/api/fav", 
		success: function(result){
			switch (result) {
				case "S_OK":
					$scope.heartAnim="likeicon";
					$scope.heartStyle={'background-color':'#f00'};	
					$window.loadProfile();
					$scope.$apply();
					break;
				case "D_OK":
				$scope.heartStyle={'background-color':'#F1EA2B'};
					$scope.heartAnim="unlikeicon";
					$window.loadProfile();
					$scope.$apply();
				default:
					break;
			}
		
			
			
		},
		error: function(result){alert("Network error");
		
		},
		type:'POST',
		data:{off:off,
			token:$window.vsgapp.auth},
		});
	}
	if(db.offers[$scope.off]==null)
	{}else{
	if(db.offers[$scope.off].store_id)
	{
	$scope.surls=db.stores[db.offers[$scope.off].store_id].url.split(";");
	}else
	{
		$scope.surls=[];
	}
}
	//register navigation fucntion
	
}])
   
.controller('aboutUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('privacyPolicyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('introCtrl', ['$scope', '$stateParams','$window','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state) {

	$window.introScope=$scope;
	$scope.background_styler="#F1EA2B";

	$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
		// data.slider is the instance of Swiper
		$scope.slider = data.slider;
	  });
	  
	  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
		

		$scope.background_styler=(data.slider.slides[data.slider.activeIndex].dataset.background);
		$scope.$apply();
	  });
	  
	  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
		// note: the indexes are 0-based
		$scope.activeIndex = data.slider.activeIndex;
		
		$scope.previousIndex = data.slider.previousIndex;
	  });

	  if ($window.localStorage.getItem("loged")=="true")
	  {
		  $state.go('menu.home');
	  }
}])