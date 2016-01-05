
describe('my website should always look the same',function() {
    it('header should look the same',function(done) {

        browser
            .url('https://m.sb.qa.sbetenv.com/')
            .webdrivercss('mobweb', {
                name: 'homepage',
                elem: 'body'
            })
            .webdrivercss('mobweb', {
                name: 'homepage',
                elem: 'body'
            })
            .call(done);

    });
});
