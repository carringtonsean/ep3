angular.module('user.domain', ['user.api'])


.service('userDomain', ['userApi', function(userApi)
{
   return {
      newDomain: function(){
         return {
            user: null,
            isUserLoaded: null,
            getUser: function()
            {
               var self = this;

               return userApi.get()
                  .then(function(user)
                  {
                     self.user = user;
                  })
                  .finally(function()
                  {
                     self.isUserLoaded = true;
                  });
            }
         };
      }
   };
}]);