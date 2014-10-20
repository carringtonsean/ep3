angular.module("ep3", ["ui.router"])
	.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "views/login.html"
			})
			.state("myDocuments", {
				url: "/documents",
				templateUrl: "views/documents.html"
			})
			.state("search", {
				url: "/search",
				templateUrl: "views/search.html"
			})
			.state("account", {
				url: "/account",
				templateUrl: "views/account.html"
			})
	}])
	;