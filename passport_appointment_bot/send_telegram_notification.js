if (steps.get_available_dates.$return_value.length === 0) {
  return;
}
const formatDate = (d) => d.toISOString().slice(0, 10);
const text = `
${steps.get_available_dates.$return_value
  .map(
    (d) => `
<strong>${formatDate(new Date(d.date))}</strong>
${d.site.Name}
`
  )
  .join("")}
<a href="https://www.passport.gov.ph/appointment/view"><strong>View Appointment</strong></a>`;
return Promise.allSettled(
  params.chat_ids.map((chatId) =>
    require("@pipedreamhq/platform").axios(this, {
      url: `https://api.telegram.org/bot${auths.telegram_bot_api.token}/sendMessage`,
      method: "post",
      data: {
        chat_id: chatId,
        parse_mode: "HTML",
        text,
      },
    })
  )
);
