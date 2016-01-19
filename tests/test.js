
describe('Homepage',function() {

    this.timeout(99999999);

    it('header should look the same',function(done) {
        browser
            //.sync()
            .url('https://github.com/chris-gunawardena/grunt-webdrivercss-example')
            .webdrivercss('github', {
                name: 'header',
                elem: '.pagehead'
            })
            .webdrivercss('github', {
                name: 'footer',
                elem: '.site-footer'
            })
            //.sync()
            .call(done);
    });

});
