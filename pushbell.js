// eslint-disable-next-line func-names
module.exports = function (RED) {
  function pushbell(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    async function createNotification(body) {
      node.log(body);

      const result = await fetch('https://us-central1-push-notifications-9cf36.cloudfunctions.net/api/createNotification', {
        method: 'POST',
        body: JSON.stringify({
          title: 'Test Title',
          description: 'Test Description',
        }),
        headers: {
          Authorization: 'Bearer xyz',
          'Content-Type': 'application/json',
        },
      });

      if (result.ok) {
        node.log('Successful');
      } else {
        node.error(result.statusText);
        node.error(result.status);
      }
    }

    node.on('input', (msg) => {
      const { payload } = msg;
      createNotification(payload);
    });
  }

  RED.nodes.registerType('pushbell', pushbell);
};
