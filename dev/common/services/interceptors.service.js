angular.module('interceptors.service', ['app.constants'])


.service('origin', [function()
{
   return {
      isApi: function(url)
      {
         var isApi = true;

         url = url.toLowerCase();

         if(url.match(/\.html|template|alert|modal|accordian|tabs|popover/))
         {
            isApi = false;
         }

         return isApi;
      }
   };
}])


.service('requestInterceptor', ['API', 'origin', function(API, origin)
{
   return {
      request: function (config)
      {
         if(origin.isApi(config.url))
         {
            config.url = API + config.url;
         }
         
         return config;
      }
   };
}])


.service('responseInterceptor', ['origin', function(origin)
{
   return {
      response: function(config)
      {
         if(origin.isApi(config.config.url))
         {
            return config.data;
         }

         return config;
      }
   };
}])


.service('responseErrorInterceptor', ['$q', '$location', 'origin', function($q, $location, origin)
{
   return {
      responseError: function(config)
      {
         if(origin.isApi(config.config.url))
         {
            if(config.status === 401)
            {
               $location.path('/login/');
            }

            return $q.reject(config.data);
         }         

         return $q.reject(config);
      }
   };
}])


.config(['$httpProvider', function($httpProvider)
{
   $httpProvider.interceptors.push('requestInterceptor');
   $httpProvider.interceptors.push('responseInterceptor');
   $httpProvider.interceptors.push('responseErrorInterceptor');
   $httpProvider.defaults.withCredentials = true; // Credentials/Cookies are sent back and forth cross domain
   delete $httpProvider.defaults.headers.post['Content-Type'];  // Delete this so you can make cross domain http requests
}]);