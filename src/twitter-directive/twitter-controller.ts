module Plhmhck.AngularNoTrackSocial {
    export class TwitterController {

        popUpService: PopUpService;

        class: string;
        url: string;
        text: string;
        via: string;
        linktext: string;

        constructor(popUpService: PopUpService) {
            this.popUpService = popUpService;
        }
        public popup() {
            var urlToShare = encodeURIComponent(this.url);
            var shareUrl = "https://twitter.com/intent/tweet?url=" + urlToShare;

            if (this.via) {
                shareUrl += "&via=" + this.via;
            }

            if (this.text) {
                shareUrl += "&text=" + this.text;
            }

            this.popUpService.popup(shareUrl);
        }
    }
}