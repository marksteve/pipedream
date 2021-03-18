const e = event.body.event;
const { WebClient } = require("@slack/web-api");
const slack = new WebClient(params.slack_bot_api_token);
const yes = ["white_check_mark", "heavy_check_mark"];
const no = ["no_good", "x"];
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
      clues: {},
    };
    await slack.chat.postMessage({
      channel: $checkpoint.channel,
      text: `It would seem that <@${$checkpoint.mastermind}> has something in mind. This should be interesting.`,
      icon_emoji: `:lord-chaos:`,
    });
  }
  if (e.text.match(/clue/gi)) {
    const { messages } = await slack.conversations.history({
      channel: $checkpoint.channel,
      oldest: $checkpoint.start,
      limit: 200,
    });
    const clues = messages
      .filter((m) => $checkpoint.clues[m.ts])
      .map((m) => {
        const answer = {
          yes: ":white_check_mark:",
          no: ":x:",
        }[$checkpoint.clues[m.ts]];
        return `${answer} ${m.text}`;
      });
    await slack.chat.postMessage({
      channel: $checkpoint.channel,
      text:
        clues.length > 0
          ? clues.join("\n")
          : `I'm afraid none has been offered.`,
      icon_emoji: `:lord-chaos:`,
    });
  }
}
if (e.type === "reaction_added" && e.user === $checkpoint.mastermind) {
  if (yes.includes(e.reaction)) {
    $checkpoint.clues[e.item.ts] = "yes";
  }
  if (no.includes(e.reaction)) {
    $checkpoint.clues[e.item.ts] = "no";
  }
}
if (e.type === "reaction_removed" && e.user === $checkpoint.mastermind) {
  if ([...yes, ...no].includes(e.reaction)) {
    $checkpoint.clues[e.item.ts] = null;
  }
}
