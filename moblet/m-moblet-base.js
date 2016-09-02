/* eslint no-undef: [0]*/
module.exports = {
  title: "mMobletBase",
  style: "m-moblet-base.scss",
  template: 'm-moblet-base.html',
  i18n: {
    pt: "lang/pt-BR.json",
    en: "lang/en-US.json"
  },
  link: function() {},
  controller: function(
    $scope,
    $uMoblet,
    $uFeedLoader,
    $filter,
    $ionicScrollDelegate,
    $uAlert,
    $timeout
  ) {
    var init = function() {
      $scope.isLoading = true;
      $scope.moblet = $uMoblet.load();
      var options = {
        offset: 1,
        items: 25,
        itemsArray: "locations"
      };
      $uFeedLoader.load($scope.moblet, options, false)
        .then(function(data) {
          // Put the data from the feed in the $scope object
          $scope.data = data;
        });
    };

    init();
  }
};
