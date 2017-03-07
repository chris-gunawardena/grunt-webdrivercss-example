# WebdriverCSS with Grunt demo project

## Setup

1. Install Node.js.
2. Run `npm install -g grunt-cli` to instal the global Grunt runner. You may need to elevate permissions by `sudo`.
3. Install Java 8.
4. Install GraphicsMagick - see https://github.com/webdriverio/webdrivercss/blob/master/README.md#install:

```
    Ubuntu:  sudo apt-get install graphicsmagick
    OSX:     brew install graphicsmagick
    Windows: http://www.graphicsmagick.org/download.html
```

5. Run `git clone https://github.com/chris-gunawardena/grunt-webdrivercss-example` to clone this project.
6. Run `cd grunt-webdrivercss-example` to change current directory to the project root.
7. Run `npm install` from the project root. You may want to send it to the background.
8. Run `grunt test` from the project root.

The tests should run and create screenshots in the `screenshots` folder now.

Alternatively, you can start the welenium server and run the tests independently:

8. Run `npm start` to start the Selenium server. You may need to send it to the background.
9. Run `npm test`, whenever you need to test latest code changes.
10. Run `npm stop` to stop the Selenium server.
