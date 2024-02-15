const should = require('should');
const helper = require('node-red-node-test-helper');
const pushbellNode = require('../pushbell');

helper.init(require.resolve('node-red'));

describe('pushbell node', () => {
  beforeEach((done) => {
    helper.startServer(done);
  });

  afterEach((done) => {
    helper.unload();
    helper.stopServer(done);
  });

  it('should be loaded', (done) => {
    const flow = [{
      id: 'n1',
      type: 'pushbell',
      name: 'pushbell',
    }];

    helper.load(pushbellNode, flow, () => {
      const n1 = helper.getNode('n1');

      try {
        n1.should.have.property('name', 'pushbell');
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
