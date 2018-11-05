"use strict";
/**
 * Jin Jin Heipler
 * IGME-102: Final Project, 4/22/18
 * This program utilizes many of the elements learned this semester. It allows the user to choose between Facebook, Twitter, and Instagram. The user can hover over the app icon, which changes the icon to a form made out of words. When the user clicks (and holds) on the app, the words explode and the background becomes the home page of each app. The user can also "swipe" (click and drag) the screen to return back to the home screen.
 */

//Object to hold all of the social media app objects and their properties
var appObj = {

    twitter: {
        icon: null,
        img: null,
        file: null,
        strgArr: [],
        txtArr: null
    },

    facebook: {
        icon: null,
        img: null,
        file: null,
        strgArr: [],
        txtArr: null
    },
    instagram: {
        icon: null,
        img: null,
        file: null,
        strgArr: [],
        txtArr: null
    }
};
//Object holds all of the background elements, fonts, cursor, etc.
var bckElt = {
    myFont: null,
    bckImg: null,
    fbook: null,
    twit: null,
    insta: null,
    default: null,

};

//Object holds extra elements that are changed throughout the program
var changeElt = {
    selectOpt: null,
    appView: true //makes the app icon appear and disappear
};


function preload() {
    //loads imported font DoHyeon
    bckElt.myFont = loadFont("media/DoHyeon-Regular.ttf", loadSuccess, failure);

    //background images
    bckElt.default = loadImage("media/phoneScreen.PNG", loadSuccess, failure); //personal screenshot
    bckElt.fbook = loadImage("media/fbookHome.PNG", loadSuccess, failure); //personal screenshot
    bckElt.twit = loadImage("media/twitHome.PNG", loadSuccess, failure); //personal screenshot
    bckElt.insta = loadImage("media/instaHome.PNG", loadSuccess, failure); //personal screenshot

    //twitter image and text
    appObj.twitter.img = loadImage("media/Twitter.png", loadSuccess, failure); //image from: http://www.gexperience.it/2014/11/27/twitter-ci-osserva-update-vista/
    appObj.twitter.file = loadStrings("media/twitterText.txt", loadSuccess, failure);

    //facebook image and text
    appObj.facebook.img = loadImage("media/Facebook.png", loadSuccess, failure); //image from: https://www.engadget.com/2013/11/09/ios-facebook-update-causing-crashes/
    appObj.facebook.file = loadStrings("media/facebookText.txt", loadSuccess, failure);

    //instagram image and text
    appObj.instagram.img = loadImage("media/Instagram.png", loadSuccess, failure); //image from: https://www.shareicon.net/media-global-app-social-android-instagram-ios-880328
    appObj.instagram.file = loadStrings("media/instagramText.txt", loadSuccess, failure);

}
/**
 * setup : Initialization runs once; called automatically
 * Creates the canvas and radio to select the different apps. Also creates each app object and the text that makes up each icon.
 */
function setup() {
    createCanvas(450, 800);
    pixelDensity(1);
    bckElt.bckImg = bckElt.default;

    //Radio creation for app switching
    changeElt.selectOpt = createRadio();
    changeElt.selectOpt.option("Facebook", 1);
    changeElt.selectOpt.option("Twitter", 2);
    changeElt.selectOpt.option("Instagram", 3);
    changeElt.selectOpt.option("Home", 4);

    //creating text array for Twitter icon
    appObj.twitter.strgArr = appObj.twitter.file.toString();
    appObj.twitter.txtArr = appObj.twitter.strgArr.split(",");
    console.log(appObj.twitter.txtArr);
    //creating twitter app obj
    appObj.twitter.icon = new App(appObj.twitter.img, appObj.twitter.txtArr, "#tweet");

    //creating text array for Facebook icon
    appObj.facebook.strgArr = appObj.facebook.file.toString();
    appObj.facebook.txtArr = appObj.facebook.strgArr.split(",");
    console.log(appObj.facebook.txtArr);
    //creating facebook app obj
    appObj.facebook.icon = new App(appObj.facebook.img, appObj.facebook.txtArr, "like");

    //creating text array for Instagram icon
    appObj.instagram.strgArr = appObj.instagram.file.toString();
    appObj.instagram.txtArr = appObj.instagram.strgArr.split(",");
    console.log(appObj.instagram.txtArr);
    //creating instagram app obj
    appObj.instagram.icon = new App(appObj.instagram.img, appObj.instagram.txtArr, "upload");




}

/**
 * draw : Loops forever; called automatically
 * Handles all the switching of apps and how they appear based on the cursor.
 */
function draw() {
    background(bckElt.bckImg, 0, 0, width, height);
    textFont(bckElt.myFont);

    switch (changeElt.selectOpt.value()) {
        case "1":
            //if mouse is on the app icon, cursor will change to a hand and the app icon will change to look like it is made out of words (SAME FOR ALL OPTIONS)
            appObj.facebook.icon.checkInside();
            if (appObj.facebook.icon.inside && changeElt.appView) {
                cursor(HAND);
                transform(appObj.facebook.icon);
                //App icon and cursor go back to normal form when mouse is no longer over app
                //word array is reset so that the words can explode from the center of the app again
            } else if (changeElt.appView) {
                cursor(ARROW);
                appObj.facebook.icon.display();
                appObj.facebook.icon.resetWords();
            }
            //Makes app icon "explode" when clicked
            if (appObj.facebook.icon.inside && mouseIsPressed) {
                cursor(ARROW);
                changeElt.appView = false;
                bckElt.bckImg = bckElt.fbook;
                appObj.facebook.icon.move();
            }

            break;
        case "2":
            appObj.twitter.icon.checkInside();
            if (appObj.twitter.icon.inside && changeElt.appView) {
                cursor(HAND);
                transform(appObj.twitter.icon);
            } else if (changeElt.appView) {
                cursor(ARROW);
                appObj.twitter.icon.display();
                appObj.twitter.icon.resetWords();
            }

            if (appObj.twitter.icon.inside && mouseIsPressed) {
                cursor(ARROW);
                changeElt.appView = false;
                bckElt.bckImg = bckElt.twit;
                appObj.twitter.icon.move();
            }
            break;
        case "3":
            appObj.instagram.icon.checkInside();
            if (appObj.instagram.icon.inside && changeElt.appView) {
                cursor(HAND);
                transform(appObj.instagram.icon);
            } else if (changeElt.appView) {
                cursor(ARROW);
                appObj.instagram.icon.display();
                appObj.instagram.icon.resetWords();
            }
            if (appObj.instagram.icon.inside && mouseIsPressed) {
                cursor(ARROW);
                changeElt.appView = false;
                bckElt.bckImg = bckElt.insta;
                appObj.instagram.icon.move();
            }
            break;
        default:
            bckElt.bckImg = bckElt.default;
            break;
    }


}


/*
transform: "transforms" the app icon into an icon made out of words/letters by calling letterDisplay method
@param: takes in the app object
*/
function transform(appIcon) {
    appIcon.letterDisplay();
}

//mouseDragged: Resets the screen back to the home screen
function mouseDragged() {
    if (changeElt.appView === false) {
        bckElt.bckImg = bckElt.default;
    }
    if (bckElt.bckImg === bckElt.default) {
        changeElt.appView = true;
    }
}


//callback function if media is loaded successfully
function loadSuccess() {
    console.log("Media load successful");
}

//callback function if media loads unsuccessfully
function failure() {
    console.log("Media failed to load. Debug to run program correctly");
}
