var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isPlaying = false;
var TvBrands;
(function (TvBrands) {
    TvBrands["SONY"] = "sony";
    TvBrands["Samsung"] = "samsung";
})(TvBrands || (TvBrands = {}));
var channels = {
    1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    6: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    7: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    8: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    9: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    10: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    11: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    12: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    13: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    14: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    15: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    16: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    17: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    18: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    19: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    20: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
};
var TV_class = (function () {
    function TV_class(setDetails) {
        this.channel = 1;
        this.volume = 50;
        this.details = setDetails;
        var videoTag = document.querySelector("#video");
        videoTag.style.width = this.details.size.width;
        videoTag.style.height = this.details.size.height;
        this.setChannel(this.channel);
        this.setVolume(this.volume);
        var leftChannel = document.querySelector("#left");
        leftChannel.onclick = this.previousChannel();
        var rightChannel = document.querySelector("#right");
        rightChannel.onclick = this.nextChannel();
        var upVolume = document.querySelector("#top");
        upVolume.onclick = this.increaseVolume();
        var downVolume = document.querySelector("#bottom");
        downVolume.onclick = this.decreaseVolume();
        var resetButton = document.querySelector("#reset");
        resetButton.onclick = this.resetTv();
    }
    TV_class.prototype.increaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume < 100) {
                _this.setVolume(_this.volume + 1);
            }
            else {
                console.log("Maximum volume is 35");
            }
        };
    };
    TV_class.prototype.decreaseVolume = function () {
        var _this = this;
        return function () {
            if (_this.volume > 0) {
                _this.setVolume(_this.volume - 1);
            }
            else {
                console.log("Minimum volume is 0");
            }
        };
    };
    TV_class.prototype.previousChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel - 1);
        };
    };
    TV_class.prototype.nextChannel = function () {
        var _this = this;
        return function () {
            _this.setChannel(_this.channel + 1);
        };
    };
    TV_class.prototype.setChannel = function (channelNumber) {
        console.log("changeset");
        if (channelNumber > 0 && channelNumber <= 50) {
            this.channel = channelNumber;
            console.log(this.channel);
            var col9 = document.querySelector(".col-9");
            col9.innerHTML = "";
            var videoTag = document.createElement("video");
            videoTag.setAttribute("id", "video");
            videoTag.setAttribute("controls", "true");
            videoTag.style.width = this.details.size.width;
            videoTag.style.height = this.details.size.height;
            var videoPlayer = document.createElement("source");
            videoPlayer.setAttribute("src", channels[this.channel]);
            videoPlayer.setAttribute("id", "videoPlayer");
            videoPlayer.setAttribute("type", "video/mp4");
            videoTag.appendChild(videoPlayer);
            col9.appendChild(videoTag);
            isPlaying = false;
            playVideo();
            this.displayInfo();
        }
        else {
            console.log("Please select a channel between 1 and 20");
        }
    };
    TV_class.prototype.setVolume = function (volumeCount) {
        if (volumeCount >= 0 && volumeCount <= 100) {
            console.log("reset");
            this.volume = volumeCount;
            var video = document.querySelector("#video");
            video.volume = this.volume / 100;
            this.displayInfo();
        }
        else {
            console.log("Volume can be between 0 and 50");
        }
    };
    TV_class.prototype.resetTv = function () {
        var _this = this;
        return function () {
            _this.setChannel(1);
            _this.setVolume(50);
        };
    };
    TV_class.prototype.displayInfo = function () {
        var videoInfo = document.querySelector(".videoInfo");
        videoInfo.innerHTML = "Current Channel: " + this.channel + ", Volume: " + this.volume;
    };
    return TV_class;
}());
var Samsung = (function (_super) {
    __extends(Samsung, _super);
    function Samsung(tvDetails) {
        return _super.call(this, tvDetails) || this;
    }
    Samsung.prototype.getAdditionalFeature = function () {
        console.log("Thickness: " + this.details.size);
        console.log("Energy Usage: " + this.details.energyUsage);
        console.log("Refresh rate: " + this.details.refreshRate);
        console.log("Back Light: " + this.details.backLight);
    };
    return Samsung;
}(TV_class));
var Sony =(function (_super) {
    __extends(Sony, _super);
    function Sony(tvDetails) {
        return _super.call(this, tvDetails) || this;
    }
    Sony.prototype.getAdditionalFeature = function () {
        console.log("Thickness: " + this.details.size);
        console.log("Thickness: " + this.details.energyUsage);
        console.log("Thickness: " + this.details.refreshRate);
        console.log("Thickness: " + this.details.backLight);
    };
    return Sony;
}
(TV_class));
var playVideo = function () {
    if (!isPlaying) {
        isPlaying = !isPlaying;
        document.querySelector("video").play();
    }
    else {
        isPlaying = !isPlaying;
        document.querySelector("video").pause();
    }
};
var changeChannel = function (pressedButton) { };
var changeTV = function () {
    var selectedTv = document.querySelector("#availableTvs")
        .value;
    switch (selectedTv) {
        case TvBrands.Samsung:
            new Samsung({
                brand: "Samsung",
                size: {
                    width: "80%",
                    height: "80%"
                },
                energyUsage: "240W",
                refreshRate: 45,
                backLight: "OFF"
            });
            break;
        case TvBrands.SONY:
            new Sony({
                brand: "Sony",
                size: {
                    width: "100%",
                    height: "90%"
                },
                energyUsage: "250W",
                refreshRate: 60,
                backLight: "ON"
            });
            break;
        default:
            break;
    }
};
