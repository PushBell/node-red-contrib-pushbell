module.exports = function (RED) {
  function pushbell(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    node.on('input', (msg) => {
      const { payload } = msg;
      node.send({ payload: msg.payload });
    });
  }

  RED.nodes.registerType('pushbell', pushbell);
};
