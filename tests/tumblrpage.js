// Example using Mocha
it('should check the first page',function(done) {
  client
    .init()
    .url('https://example.com')
    // Make this name unique.
    .webdrivercss('page1', [
      {
        name: 'test',
        screenWidth: [320,480,640,1024]
      }, {
        name: 'test_two',
        screenWidth: [444,666]
      }
    ])
    .end()
    .call(done);
});

it('should check the second page',function(done) {
  client
    // ...
    // Make this name unique.
    .webdrivercss('page2', [
      // ..
    ])
    // ...
);