var assert = require('assert');

//require('webdrivercss').init(browser);



describe('my website should always look the same',function() {

    it('header should look the same',function(done) {
        browser
            .url('https://github.com/webdriverio/webdrivercss')
            .webdrivercss('header', {
                name: 'header',
                elem: '.header'
            })
            .call(done);
    });
});
