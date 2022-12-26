const { LexRuntimeV2Client, RecognizeTextCommand } = require("@aws-sdk/client-lex-runtime-v2");
const { v4: uuid } = require("uuid");

const BOT_ID = process.env.BOT_ID
const BOT_ALIAS_ID = process.env.BOT_ALIAS_ID
const LOCALE_ID = 'pt_BR'

module.exports = {
  sendMessage({ text }) {
    const lexRuntime = new LexRuntimeV2Client();

    const lexParams = {
      botId: BOT_ID,
      botAliasId: BOT_ALIAS_ID,
      localeId: LOCALE_ID,
      sessionId: uuid(),
      text,
    };

    let command = new RecognizeTextCommand(lexParams);
    return lexRuntime.send(command)
  }
}