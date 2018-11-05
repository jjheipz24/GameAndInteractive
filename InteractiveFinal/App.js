/*
App Class created by Jin Jin Heipler
Uses pixels to create the app objects in their "regular" and "word" forms. Methods created for manipulation of words to create "breaking apart" effect and to reset the positions of the words.
*/


class App {
    constructor(img, txt, word) {
        this.width = 80;
        this.height = 80;
        this.x = (width / 2) - this.width / 2;
        this.y = (height / 2) - this.height / 2;
        this.img = img;
        this.size = this.img.width * this.img.height;

        //variables to get letters to display instead of pixels
        this.txt = txt;
        this.letters = [];
        this.imgScale = (width / 4) / this.img.width;
        this.fontSize = 12;
        this.hScale = floor(this.fontSize / this.imgScale);

        //color variables
        this.r;
        this.g;
        this.b;

        this.inside = false; //checks if mouse is inside icon
        this.word = word; //word passed into app object
        this.wordArr = []; //array of words

        //Use when using a ".split()"
        console.log(this.txt.length);
        for (var i = 0; i < 256; i++) {
            var index = int(map(i, 0, 256, 0, this.txt.length));
            this.letters.push(this.txt[index]);
            console.log(index);
        }
        //Creates word object that gets pushed into the array
        for (var y = 0; y < this.img.height; y += 25) {
            for (var x = 0; x < this.img.width; x += 25) {
                this.wordArr.push({
                    word: this.word,
                    x: width / 2,
                    y: height / 2,
                    changeX: random(-8, 8),
                    changeY: random(-8, 8)
                });
            }
        };

    }
    /*
    checkInside: checks if mouse is within bounds of the app icon
    @return: returns this.inside as true or false
    */
    checkInside() {
        if (dist(mouseX, mouseY, this.x + this.width / 2, this.y + this.height / 2) < this.width / 2) {
            this.inside = true;
        } else {
            this.inside = false;
        }

        return this.inside;
    }
    /*
    display: displays the image as pixels
    */
    display() {
        this.img.loadPixels();


        for (var y = 0; y < this.img.height; y++) {
            for (var x = 0; x < this.img.width; x++) {
                var index = x + (y * this.img.width);
                //var colorVal = this.img.get(x, y);
                //this.img.set(x, y, colorVal);
                this.img.pixels[index * 4];
                this.img.pixels[1 + index * 4];
                this.img.pixels[2 + index * 4];
            }
        }
        this.img.updatePixels();
        image(this.img, this.x, this.y, this.width, this.height);

    }

    /*
    letterDisplay: displays the image as letters/words
    */
    letterDisplay() {

        this.img.loadPixels();

        for (var y = 0; y < this.img.height; y += this.hScale) {
            for (var x = 0; x < this.img.width; x += this.hScale) {
                var pixelIndex = 4 * (x + y * this.img.width);

                this.r = this.img.pixels[pixelIndex];
                this.g = this.img.pixels[1 + pixelIndex];
                this.b = this.img.pixels[2 + pixelIndex];
                fill(this.r, this.g, this.b);

                var pixelBright = max([this.r, this.g, this.b]);


                text(this.letters[pixelBright], (this.x - this.width / 4) + (x * this.imgScale), (this.y - this.height / 4) + (y * this.imgScale));
            }
            this.img.updatePixels();

        }

    }
    /*
    move: Creates the illusion that the words that make up the app logo are breaking apart and expanding outwards by manipulating the x and y values of the words in the word array
    */
    move() {
        this.wordArr.forEach(function (word) {
            text(word.word, word.x, word.y);
            word.x += word.changeX;
            word.y += word.changeY;
        });

    }
    /*
    resetWords: Resets the x and y coordinates of the words so that they can 'explode' from the center of the icon again
    */
    resetWords() {
        this.wordArr.forEach(function (word) {
            word.x = width / 2;
            word.y = height / 2;
        });

    }

}
