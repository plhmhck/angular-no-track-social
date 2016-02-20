/// <reference path="./twitter-directive/twitter-directive.ts" />


module Plhmhck.AngularNoTrackSocial {
	
    "use strict";
    var popUpService = "popUpService";

    var noTrackSocial = angular.module("angular.no.track.social");

    noTrackSocial.factory(popUpService, PopUpService);

    noTrackSocial.controller("twitterController", [popUpService, TwitterController]);
    noTrackSocial.directive("tweet", TwitterDirective.factory("twitterController"));
}