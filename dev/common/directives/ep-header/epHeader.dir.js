angular.module('epHeader.directive', [])

.directive("epHeader", function(){
	return{
		restrict: "E",
		templateUrl: "../../dev/common/directives/ep-header/epHeader.dir.html"
	};
});
