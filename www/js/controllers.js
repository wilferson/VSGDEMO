angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams','$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window) {

	$scope.database=$window.vsgapp.database;
	$scope.baseurl=$window.vsgapp.url;

}])
   
.controller('favoritesCtrl', ['$scope', '$stateParams','$window','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window,$state) {

	vsgapp=$window.vsgapp;
	if(vsgapp.loged==false)
	{
		alert("You need to login in order to use the favorites menu.");
		$state.go ('login');
		return;
	}
	
	$scope.favorites=$window.vsgapp.favorites;
	$scope.db=$window.vsgapp.database;
	$scope.baseurl=$window.vsgapp.url;
}])
   
.controller('productsCtrl', ['$scope', '$stateParams','$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$window) {

$scope.database=$window.vsgapp.database;
$scope.baseurl=$window.vsgapp.url;
$scope.cat=$stateParams.cat_id;
	$scope.baseurl=$window.vsgapp.url;


}])
   
.controller('UserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
	
		$window.login($scope.login.email,$scope.login.password)
	};
	if ($window.vsgapp.loged)
	{
		$window.history.back();
	}

}])
   
.controller('newRecipeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
	
	//Scope the database
	db=$window.vsgapp.database;
	$scope.database=db;
	//get the product id
	$scope.off=$stateParams.off_id;
	//Scope the base url
	$scope.baseurl=$window.vsgapp.url;
	//Get and scope stores url
	$scope.favorites=$window.vsgapp.favorites;
	$scope.favClick=function(off)
	{
		if($window.vsgapp.loged==false)
		{
			alert("Only registred users can use this feature.");
			$state.go("login");
			return;
		}
		$.ajax({url: vsgapp.url+"/api/fav", 
		success: function(){
			alert("<3");
			$state.go('menu.home');
			$window.location.reload();
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
   
.controller('introCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {





}])
 