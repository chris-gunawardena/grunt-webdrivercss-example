var webdrivercss = require('webdrivercss');

describe('my website should always look the same',function() {


    it('header should look the same',function(done) {

        var webdrivercssInstance = webdrivercss.init(browser, {  
            updateBaseline: true,
            screenshotRoot: 'images/baselines',
            failedComparisonsRoot: 'images/fails',
            misMatchTolerance: 0.05,
            //exclude: ['#google_ads_frame1', '#google_ads_frame2'],
            screenWidth: [720, 680],
        });

        browser
            .url('https://github.com/webdriverio/webdrivercss')
            .webdrivercss('header', {
                name: 'header',
                elem: '/html/body/div[1]'
            })
            .call(done);
    });



});
