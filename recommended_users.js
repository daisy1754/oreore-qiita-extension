showPageAction();

getToken(function(token){
  var usersManager = new RecommendedUserManager(token);
  var activeUserButton = $("<div>");
  activeUserButton.addClass('button');
  activeUserButton.text("投稿をしているユーザのみ表示する");
  activeUserButton.click(function(){usersManager.getUserNames();});
  $("body").append(activeUserButton);
});

var RecommendedUserManager = (function () {
  function RecommendedUserManager(token) {
      this.token = token;
  }
  RecommendedUserManager.prototype.getUserNames = function () {
    $("#user-follow-list-box").find("a").each(
      (function(manager) {
        return function(){
          var userName = $(this).attr('href');
          useGETAPI(userName, manager.token, manager.updateRecommend($(this)));
        };
      })(this));
  };
  RecommendedUserManager.prototype.updateRecommend = function(targetElement) {
    return function(data) {
      if (data.items == 0) { // User is read-only
        targetElement.parents("li").remove();
      }
    };
  };
  return RecommendedUserManager;
})();