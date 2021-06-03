const { WebClient } = require("@slack/web-api");

const slack = new WebClient(params.slack_bot_api_token);

const e = event.body.event;
const emojis = {
  yes: ["white_check_mark", "heavy_check_mark"],
  no: ["no_good", "x"],
  correct: ["tada"],
};

if (e.type === "app_mention") {
  if (e.text.match(/mastermind/gi)) {
    if (e.text.match(/who/gi)) {
      await slack.chat.postMessage({
        channel: $checkpoint.channel,
        text: `<@${$checkpoint.mastermind}> is the current mastermind.`,
        icon_emoji: `:lord-chaos:`,
      });
      return;
    }
    $checkpoint = {
      mastermind: e.user,
      channel: e.channel,
      start: e.ts,
    };
    await slack.chat.postMessage({
      channel: $checkpoint.channel,
      text: `It would seem that <@${$checkpoint.mastermind}> has something in mind. This should be interesting.`,
      icon_emoji: `:lord-chaos:`,
    });
  }
}

if (e.type === "message" && !e.bot_id) {
  if (e.text.match(/clue/gi)) {
    const messages = await (async () => {
      let all = [];
      let cursor;
      while (true) {
        const params = {
          channel: $checkpoint.channel,
          limit: 200,
          cursor,
        };
        let {
          messages: page,
          response_metadata,
        } = await slack.conversations.history(params);
        page = page.filter((m) => m.ts > $checkpoint.start);
        all = [...all, ...page];
        if (page.some((m) => m.ts <= $checkpoint.start)) {
          return all;
        }
        if (
          response_metadata &&
          response_metadata.next_cursor &&
          response_metadata.next_cursor.length > 0
        ) {
          cursor = response_metadata.next_cursor;
          continue;
        }
        return all;
      }
    })();
    const clues = messages
      .map((m) => {
        const yes = (m.reactions || []).some((r) =>
          emojis.yes.includes(r.name)
        );
        const no = (m.reactions || []).some((r) => emojis.no.includes(r.name));
        const correct = (m.reactions || []).some((r) =>
          emojis.correct.includes(r.name)
        );
        switch (true) {
          case yes:
            return `:white_check_mark: ${m.text}`;
          case no:
            return `:x: ${m.text}`;
          case correct:
            return `:tada: ${m.text}`;
          default:
            return null;
        }
      })
      .filter((m) => m !== null);
    await slack.chat.postMessage({
      channel: e.user,
      text:
        clues.length > 0
          ? clues.join("\n")
          : `I'm afraid none has been offered.`,
      icon_emoji: `:lord-chaos:`,
    });
    console.log(`Total of ${clues.length} clues`);
  }
}
