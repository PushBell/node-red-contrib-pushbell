// eslint-disable-next-line func-names
module.exports = function (RED) {
  function pushbell(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    // const apiKey = config.apikey;
    const pushbellConfig = RED.nodes.getNode(config.config);

    async function createNotification(body) {
      node.log(body);

      node.status({
        fill: 'blue',
        shape: 'ring',
        text: 'sending',
      });

      if (pushbellConfig) {
        const result = await fetch('https://us-central1-push-notifications-9cf36.cloudfunctions.net/api/createNotification', {
          method: 'POST',
          body: JSON.stringify({
            title: 'Test Title',
            description: 'Test Description',
          }),
          headers: {
            Authorization: pushbellConfig.apiKey,
            'Content-Type': 'application/json',
          },
        });

        const statusCode = result.status;
        const resultText = await result.text();

        node.status({
          fill: statusCode === 200 ? 'green' : 'red',
          shape: 'dot',
          text: `${statusCode} ${resultText}`,
        });
      } else {
        node.status({
          fill: 'red',
          shape: 'ring',
          text: 'Fill in API Key config',
        });
      }
    }

    node.on('input', (msg) => {
      const { payload } = msg;
      createNotification(payload);
    });
  }

  RED.nodes.registerType('pushbell', pushbell);
};
