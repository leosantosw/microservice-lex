const  { sendMessage } = require('../../shared/amazon-lex');

module.exports.handler = async (event) => {
  try {
    const { text } = event.queryStringParameters;

    const resultMessage = await sendMessage({ text })
    const messages = resultMessage.messages.map((message) => message.content);

    return {
      statusCode: 200,
      body: JSON.stringify(messages),
    };
  } catch (error) {
    console.error(error);
    
    return {
      statusCode: 422,
      body: JSON.stringify(error),
    };
  }

}