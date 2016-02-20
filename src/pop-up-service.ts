module Plhmhck.AngularNoTrackSocial {
    export class PopUpService {
        window: ng.IWindowService;

        constructor(window: ng.IWindowService) {
            var vm = this;

            vm.window = window;
        }

        public popup(url: string) {
            this.window.open(url, '', "top=20,left=20,width=400,height=500");
        }
    }
}