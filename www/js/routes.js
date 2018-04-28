angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.favorites', {
    url: '/favorites',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('menu.products', {
    url: '/products/:cat_id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/products.html',
        controller: 'productsCtrl'
      }
    }
  })

  .state('menu.User', {
    url: '/profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/User.html',
        controller: 'UserCtrl'
      }
    }
  })

  .state('menu.search', {
    url: '/search',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.shoppingCar', {
    url: '/car',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shoppingCar.html',
        controller: 'shoppingCarCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('recoverPassword', {
    url: '/recover',
    templateUrl: 'templates/recoverPassword.html',
    controller: 'recoverPasswordCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('newRecipe', {
    url: '/newrecipe',
    templateUrl: 'templates/newRecipe.html',
    controller: 'newRecipeCtrl'
  })

  .state('menu.editProfile', {
    url: '/editProfile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('menu.recipeName', {
    url: '/recipe',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recipeName.html',
        controller: 'recipeNameCtrl'
      }
    }
  })

  .state('menu.productName', {
    url: '/productName/:off_id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/productName.html',
        controller: 'productNameCtrl'
      }
    }
  })

  .state('menu.aboutUs', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu.privacyPolicy', {
    url: '/privacy',
    views: {
      'side-menu21': {
        templateUrl: 'templates/privacyPolicy.html',
        controller: 'privacyPolicyCtrl'
      }
    }
  })

  .state('intro', {
    url: '/intro',
    templateUrl: 'templates/intro.html',
    controller: 'introCtrl'
  })

$urlRouterProvider.otherwise('/intro')


});