// eslint-disable-next-line func-names
module.exports = function (RED) {
  function pushbellConfig(n) {
    RED.nodes.createNode(this, n);

    this.name = n.name;
    this.apiKey = n.apiKey;
  }

  RED.nodes.registerType('pushbell-config', pushbellConfig);
};
