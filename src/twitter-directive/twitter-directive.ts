module Plhmhck.AngularNoTrackSocial {
    export class TwitterDirective implements ng.IDirective {
        restrict: string;
        replace: boolean;
        transclude: boolean;
        controller: string;
        controllerAs: string;
        bindToController: any;
        template: string;

        constructor(controllerName: string) {
            this.restrict = 'E';
            this.replace = true;
            this.transclude = true;
            this.controller = controllerName;
            this.controllerAs = "tweet"
            this.bindToController = {
                class: '@class',
                url: '@url',
                text: '@text',
                via: '@via',
                linktext: '@linktext'
            };
            this.template = '<a class={{class}} href="" ng-click="popup()" ng-transclude></a>';
        }

        static factory(controllerName: string): ng.IDirectiveFactory {

            var directive = (controllerName: string) => {
                return new TwitterDirective(controllerName);
            }

            directive.$inject = [controllerName];

            return directive;
        }
    }
}