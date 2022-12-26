const assert = require('assert');

mockSendMessage = (message) => {
  if (message === '') {
    throw new Error('Message cannot be empty');
  }
  return {
    messages: [ { content: 'Olá, como posso ajudar?' } ],
  }
}

describe('sendMessage', () => {
  it('should send a message', async () => {
    const message = 'Hello World';
    const result = await mockSendMessage(message)
    const resultMessage = result.messages[0].content;
    assert.equal(resultMessage, 'Olá, como posso ajudar?');
  });

  it('should throw an error if the message is empty', () => {
    assert.throws(() => {
      mockSendMessage('');
    }, {
      name: 'Error',
      message: 'Message cannot be empty',
    });
  });
})
