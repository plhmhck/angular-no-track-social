var Plhmhck;
(function (Plhmhck) {
    var AngularNoTrackSocial;
    (function (AngularNoTrackSocial) {
        var TwitterDirective = (function () {
            function TwitterDirective(controllerName) {
                this.restrict = 'E';
                this.replace = true;
                this.transclude = true;
                this.controller = controllerName;
                this.controllerAs = "tweet";
                this.bindToController = {
                    class: '@class',
                    url: '@url',
                    text: '@text',
                    via: '@via',
                    linktext: '@linktext'
                };
                this.template = '<a class={{class}} href="" ng-click="popup()" ng-transclude></a>';
            }
            TwitterDirective.factory = function (controllerName) {
                var directive = function (controllerName) {
                    return new TwitterDirective(controllerName);
                };
                directive.$inject = [controllerName];
                return directive;
            };
            return TwitterDirective;
        })();
        AngularNoTrackSocial.TwitterDirective = TwitterDirective;
    })(AngularNoTrackSocial = Plhmhck.AngularNoTrackSocial || (Plhmhck.AngularNoTrackSocial = {}));
})(Plhmhck || (Plhmhck = {}));
/// <reference path="./twitter-directive/twitter-directive.ts" />
var Plhmhck;
(function (Plhmhck) {
    var AngularNoTrackSocial;
    (function (AngularNoTrackSocial) {
        "use strict";
        var popUpService = "popUpService";
        var noTrackSocial = angular.module("angular.no.track.social");
        noTrackSocial.factory(popUpService, AngularNoTrackSocial.PopUpService);
        noTrackSocial.controller("twitterController", [popUpService, AngularNoTrackSocial.TwitterController]);
        noTrackSocial.directive("tweet", AngularNoTrackSocial.TwitterDirective.factory("twitterController"));
    })(AngularNoTrackSocial = Plhmhck.AngularNoTrackSocial || (Plhmhck.AngularNoTrackSocial = {}));
})(Plhmhck || (Plhmhck = {}));
var Plhmhck;
(function (Plhmhck) {
    var AngularNoTrackSocial;
    (function (AngularNoTrackSocial) {
        var PopUpService = (function () {
            function PopUpService(window) {
                var vm = this;
                vm.window = window;
            }
            PopUpService.prototype.popup = function (url) {
                this.window.open(url, '', "top=20,left=20,width=400,height=500");
            };
            return PopUpService;
        })();
        AngularNoTrackSocial.PopUpService = PopUpService;
    })(AngularNoTrackSocial = Plhmhck.AngularNoTrackSocial || (Plhmhck.AngularNoTrackSocial = {}));
})(Plhmhck || (Plhmhck = {}));
var Plhmhck;
(function (Plhmhck) {
    var AngularNoTrackSocial;
    (function (AngularNoTrackSocial) {
        var TwitterController = (function () {
            function TwitterController(popUpService) {
                this.popUpService = popUpService;
            }
            TwitterController.prototype.popup = function () {
                var urlToShare = encodeURIComponent(this.url);
                var shareUrl = "https://twitter.com/intent/tweet?url=" + urlToShare;
                if (this.via) {
                    shareUrl += "&via=" + this.via;
                }
                if (this.text) {
                    shareUrl += "&text=" + this.text;
                }
                this.popUpService.popup(shareUrl);
            };
            return TwitterController;
        })();
        AngularNoTrackSocial.TwitterController = TwitterController;
    })(AngularNoTrackSocial = Plhmhck.AngularNoTrackSocial || (Plhmhck.AngularNoTrackSocial = {}));
})(Plhmhck || (Plhmhck = {}));
//# sourceMappingURL=out.js.map