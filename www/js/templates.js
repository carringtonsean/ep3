angular.module('templates-main', ['../dev/app/_root/index.html', '../dev/app/account/account.html', '../dev/app/documents/documents.html', '../dev/app/home/home.html', '../dev/app/search/search.html']);

angular.module("../dev/app/_root/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/_root/index.html",
    "<!DOCTYPE html>\n" +
    "<html ng-app=\"app\" ng-controller=\"AppCtrl\">\n" +
    "  <head>\n" +
    "    <title>Ep3</title>\n" +
    "    <meta charset=\"utf-8\" />\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/ep3.css\">\n" +
    "    <script src=\"js/ep3.js\"></script>\n" +
    "  </head>\n" +
    "\n" +
    "  <body>\n" +
    "    <div ui-view></div>\n" +
    "  </body>\n" +
    "</html>");
}]);

angular.module("../dev/app/account/account.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/account/account.html",
    "ACCOUNT");
}]);

angular.module("../dev/app/documents/documents.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/documents/documents.html",
    "DOCUMENTS");
}]);

angular.module("../dev/app/home/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/home/home.html",
    "HOME");
}]);

angular.module("../dev/app/search/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dev/app/search/search.html",
    "SEARCH");
}]);
