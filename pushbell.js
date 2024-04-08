// eslint-disable-next-line func-names
module.exports = function (RED) {
  function pushbell(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    // const apiKey = config.apikey;
    const pushbellConfig = RED.nodes.getNode(config.config);

    async function createNotification(body) {
      node.status({
        fill: 'blue',
        shape: 'ring',
        text: 'sending',
      });

      if (pushbellConfig) {
        const result = await fetch('https://www.pushbell.info/api/createNotification', {
          method: 'POST',
          body: JSON.stringify({
            title: body.title,
            description: body.description,
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

    node.on('input', async (msg) => {
      const { payload } = msg;
      await createNotification(payload);
    });
  }

  RED.nodes.registerType('pushbell', pushbell);
};
