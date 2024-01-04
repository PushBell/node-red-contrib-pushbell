module.exports = function (RED) {
  function feiertage(config) {
    RED.nodes.createNode(this, config);
    const node = this;
  }

  RED.nodes.registerType('feiertage', feiertage);
};
