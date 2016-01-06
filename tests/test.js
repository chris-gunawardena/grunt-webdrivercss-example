
describe('Homepage',function() {

    this.timeout(99999999);

    it('header should look the same',function(done) {
        browser
            .sync()
            .url('http://stackoverflow.com/')
            .webdrivercss('stackoverflow', {
                name: 'header',
                elem: '#header'
            })
            .webdrivercss('stackoverflow', {
                name: 'footer',
                elem: '#footer'
            })
            .sync()
            .call(done);
    });

});
