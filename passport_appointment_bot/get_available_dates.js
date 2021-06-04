const sites = [
  {
    Id: 10,
    Name: "Angeles (MarQuee Mall,Angeles, Pampanga)",
    Address: "3F MarQuee Mall Pulung Maragul Angeles City",
    Telephone: "(045) 304-0193/0195",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Angeles",
    Url: "https://www.google.com.ph/maps/search/3F+MarQuee+Mall+Pulung+Maragul+Angeles+City/@15.162919,120.607685,17z/data=!3m1!4b1",
    Timezone: 288000000000,
  },
  {
    Id: 486,
    Name: "Antipolo (SM Cherry, Antipolo City, Rizal)",
    Address:
      "3F SM Cherry Foodarama, Marikina-Infanta Highway, Antipolo City, Rizal",
    Telephone: "(02) 8242-4797",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Antipolo",
    Url: "https://www.google.com/maps/place/SM+Cherry+Antipolo/@14.6244103,121.1312966,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b8fc7c0a870f:0x17845da4ac0134b2!8m2!3d14.6244051!4d121.1334853",
    Timezone: 288000000000,
  },
  {
    Id: 12,
    Name: "Baguio (SM City Baguio)",
    Address:
      "SM City Baguio Upper Basement, Luneta Hill, Upper Session Road cor. Gov. Pack Road, Baguio City 2600",
    Telephone: "(074) 422-1465",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Baguio",
    Url: "https://www.google.com.ph/maps/place/SM+Baguio/@16.4088836,120.5987693,18z/data=!4m8!1m2!2m1!1sSM+City!3m4!1s0x3391a142502e9c77:0x557fb6c39765cdd8!8m2!3d16.408819!4d120.5993518",
    Timezone: 288000000000,
  },
  {
    Id: 16,
    Name: "Calasiao (Robinsons Calasiao, Pangasinan)",
    Address:
      "2F Robinsons Place-Pangasinan, Brgy. San Miguel, Calasiao, Pangasinan, 2418",
    Telephone: "(075) 632-7705",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Calasiao",
    Url: "https://www.google.com.ph/maps/place/Robinsons+Place/@16.0226059,120.3557312,16.5z/data=!4m5!3m4!1s0x339142b90df7209f:0xb5f084285ff82430!8m2!3d16.02262!4d120.358813",
    Timezone: 288000000000,
  },
  {
    Id: 4,
    Name: "DFA Manila (Aseana)",
    Address:
      "ASEANA Business Park, Bradco Avenue corner Macapagal Boulevard, Para├▒aque City\r\n",
    Telephone: "556-0000 / 651-9400",
    Timeslots: null,
    Description: "DFA Manila (ASEANA)",
    Url: "https://www.google.com.ph/maps/place/DFA+Passport+Appointment+System/@14.5296415,120.990129,15z/data=!4m2!3m1!1s0x0:0x996693187f8e6a6f?sa=X&ved=0ahUKEwiG-_zei6DNAhUjrKYKHY6JCcwQ_BIIfjAO",
    Timezone: 288000000000,
  },
  {
    Id: 516,
    Name: "DFA Manila (Aseana-Courtesy Lane)",
    Address:
      "2nd floor ASEANA Business Park, Bradco Avenue corner Macapagal Boulevard, Para├▒aque City\r\n",
    Telephone: "8556-0000/8651-9400",
    Timeslots: null,
    Description: "DFA Manila (ASEANA)",
    Url: "https://www.google.com.ph/maps/place/DFA+Passport+Appointment+System/@14.5296415,120.990129,15z/data=!4m2!3m1!1s0x0:0x996693187f8e6a6f?sa=X&ved=0ahUKEwiG-_zei6DNAhUjrKYKHY6JCcwQ_BIIfjAO",
    Timezone: 288000000000,
  },
  {
    Id: 5,
    Name: "DFA NCR Central (Robinsons Galleria EDSA)",
    Address:
      "Lingkod Pinoy Center, Level 1 west lane, Robinsons Galleria EDSA cor. Ortigas ave.",
    Telephone: "(02) 8631-0806/0700",
    Timeslots: null,
    Description: "DFA NCR Central (Galeria)\r\n",
    Url: "https://www.google.com/maps/place/Pag-Ibig/@14.5917412,121.0574789,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c819c0f45983:0x43352a676f853881!8m2!3d14.591736!4d121.0596676",
    Timezone: 288000000000,
  },
  {
    Id: 6,
    Name: "DFA NCR East (SM Megamall, Mandaluyong City)",
    Address:
      "7F Building C,SM Megamall, EDSA cor. J. Vargas Ave.Mandaluyong City ",
    Telephone: "(02) 8234-2478/5062",
    Timeslots: null,
    Description: "DFA NCR East (Megamall)",
    Url: "https://www.google.com/maps/place/Department+of+Foreign+Affairs+%E2%80%93+NCR-East/@14.585166,121.0541201,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c8160912c44d:0x29c871f419f49ce5!8m2!3d14.5851608!4d121.0563088",
    Timezone: 288000000000,
  },
  {
    Id: 423,
    Name: "DFA NCR North (Robinsons Novaliches, Quezon City)",
    Address:
      "Quirino Highway, Novaliches, Novaliches, Quezon City, 1118 Metro Manila (across SM City Fairview)",
    Telephone: "(02) 834-4000",
    Timeslots: null,
    Description: "DFA NCR North (Robinsons Novaliches)",
    Url: "https://www.google.com.ph/maps/place/Robinson's+Novaliches,+1+Quirino+Hwy,+Novaliches,+Quezon+City,+1118+Metro+Manila/data=!4m2!3m1!1s0x3397b042b6b5e9c3:0x572e15aa62550e35?sa=X&ved=0ahUKEwjMkqnM5c3QAhVCHJQKHRq3B4sQ8gEIGDAA",
    Timezone: 288000000000,
  },
  {
    Id: 7,
    Name: "DFA NCR Northeast (Ali Mall Cubao, Quezon City)",
    Address: "Ali Mall Governtment Center Level 2 Ali Mall Cubao, Quezon City",
    Telephone: "(02) 8293-0105",
    Timeslots: null,
    Description: "DFA NCR Northeast (Ali Mall)",
    Url: "https://www.google.com/maps/search/DFA+Ali+Mall+Governtment+Center+Level+2+Ali+Mall+Cubao,+Quezon+City/@14.6194766,121.054569,17z/data=!3m1!4b1",
    Timezone: 288000000000,
  },
  {
    Id: 8,
    Name: "DFA NCR South (Metro ATC, Muntinlupa City)",
    Address:
      "4th Floor, Metro AlabangTown Center, Alabang, ZapoteRoad, Muntinlupa City",
    Telephone: "(02) 8551-1051",
    Timeslots: null,
    Description: "DFA NCR South (Alabang Town Center)",
    Url: "https://www.google.com/maps/place/Department+of+Foreign+Affairs+%E2%80%93+NCR-South/@14.4244642,121.0280493,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d1cc5a0e27b5:0x9299b1347c60793e!8m2!3d14.424459!4d121.030238",
    Timezone: 288000000000,
  },
  {
    Id: 9,
    Name: "DFA NCR West (SM City, Manila)",
    Address: "5th Floor SM City Manila\r\nConception St. Manila",
    Telephone: "(02) 5369994",
    Timeslots: null,
    Description: "DFA NCR West (SM Manila)",
    Url: "https://www.google.com/maps/place/Department+of+Foreign+Affairs+%E2%80%93+NCR-West/@14.5901842,120.9812303,17z/data=!3m1!4b1!4m5!3m4!1s0x3397ca1f67956105:0xc5da00abe2c09a6e!8m2!3d14.590179!4d120.983419",
    Timezone: 288000000000,
  },
  {
    Id: 488,
    Name: "Dasmarinas ( SM City Dasmarinas)",
    Address:
      "Second Flr. SM City Dasmarinas, Governor's Drive cor. Aguinaldo Highway, Brgy. Sampaloc 1, Dasmarinas City, Cavite",
    Telephone: "(046)424-1066",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Dasmarinas",
    Url: "https://www.google.com/maps/place/SM+City+Dasmarinas/@14.3009764,120.9542456,17z/data=!3m1!4b1!4m5!3m4!1s0x3397d596fca738d1:0xcb327ef9afb22aca!8m2!3d14.3009712!4d120.9564343",
    Timezone: 288000000000,
  },
  // {
  //   "Id": 424,
  //   "Name": "Ilocos Norte (Robinsons Place, San Nicolas)",
  //   "Address": "Robinsons Place Ilocos Norte, Brgy San Francisco, San Nicolas, Ilocos Norte",
  //   "Telephone": "(077)770-5541",
  //   "Timeslots": null,
  //   "Description": "DFA - Regional Consular Office - Ilocos Norte",
  //   "Url": "https://www.google.com/maps/search/dfa+Robinsons+Place+Ilocos+Norte,+Brgy+San+Francisco,+San+Nicolas,+Ilocos+Norte/@18.1432859,120.5579999,13z/data=!3m1!4b1",
  //   "Timezone": 288000000000
  // },
  {
    Id: 23,
    Name: "La Union (Manna Mall San Fernando, La Union)",
    Address:
      "2nd Floor Manna Mall, Marcos Highway corner Diversion Road, Pagdaraoan, City of San Fernando, La Union",
    Telephone: "(072)607-6510 ",
    Timeslots: null,
    Description: "DFA Regional Consular Office - La Union",
    Url: "https://www.google.co.jp/maps/place/Manna+Mall/@16.6267511,120.3171248,17z/data=!3m1!4b1!4m5!3m4!1s0x33918e72939f239d:0x60783d2f7b11506!8m2!3d16.6267511!4d120.3193135?hl=en",
    Timezone: 288000000000,
  },
  {
    Id: 13,
    Name: "Lipa (Robinsons Lipa)",
    Address:
      "2F Robinsons Place-Lipa, JP Laurel Highway, Mataas na Lupa, Lipa City",
    Telephone: "(043) 722-0578",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Batangas",
    Url: "https://www.google.com.ph/maps/place/Robinsons+Place+Lipa/@13.9430833,121.1485365,17z/data=!4m8!1m2!2m1!1s2F+Robinsons+Place-Lipa,+JP+Laurel+Highway,+Mataas+na+Lupa,+Lipa+City!3m4!1s0x33bd6cbefd5d83cd:0x50211851bf7d8523!8m2!3d13.9430601!4d121.1506344",
    Timezone: 288000000000,
  },
  {
    Id: 25,
    Name: "Lucena (Pacific Mall, Lucena)",
    Address:
      "3F Pacific Mall-Lucena, M.L. Tagarao St., Barangay III, Lucena City",
    Telephone: "(042)710-4526",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Lucena",
    Url: "https://www.google.com.ph/maps/place/DFA+Consulate+Office/@13.9378495,121.6030637,15z/data=!4m5!3m4!1s0x33bd4b5c26c5fe37:0x1b7d7dcb1d732061!8m2!3d13.9373447!4d121.608975",
    Timezone: 288000000000,
  },
  {
    Id: 489,
    Name: "Malolos (CTTCH.,Xentro Mall, Malolos City)",
    Address:
      "3F Malolos Central Transport terminal and Commercial Hub by Xentro Mall, Brgy. Bulihan, Malolos City, Bulacan",
    Telephone: "(044)816-7230",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Malolos",
    Url: "https://www.google.com/maps/place/Xentro+Mall+Malolos+Central+Terminal/@14.8586135,120.8101967,17z/data=!3m1!4b1!4m5!3m4!1s0x339653db85c515a5:0xe30edfc30e631c67!8m2!3d14.8586083!4d120.8123854",
    Timezone: 288000000000,
  },
  {
    Id: 27,
    Name: "Pampanga (Robinsons StarMills San Fernando)",
    Address: "2F Robinsons StarMills City of San Fernando, Pampanga",
    Telephone: "(045)636-0007",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Pampanga",
    Url: "https://www.google.com.ph/maps/place/Robinsons+Starmills/@15.0492687,120.6953448,17z/data=!3m1!4b1!4m5!3m4!1s0x3396f742566c968d:0x505dc2dc2d7e8bd1!8m2!3d15.0492635!4d120.6975335?hl=en",
    Timezone: 288000000000,
  },
  {
    Id: 553,
    Name: "Paniqui,  Tarlac (WalterMart)",
    Address: "R-9, Paniqui, Tarlac (Waltermart)",
    Telephone: "+63-9562492312",
    Timeslots: null,
    Description: "DFA Regional Consular Office - Tarlac ",
    Url: "https://www.google.com/maps/search/DFA+R-9,+Paniqui,+Tarlac+(Waltermart)/@15.6683164,120.5840007,17z/data=!3m1!4b1",
    Timezone: 288000000000,
  },
  {
    Id: 490,
    Name: "San Pablo ( Sm City San Pablo)",
    Address:
      "2F Sm City San Pablo, Riverina Residential & Commercial Estates, Maharlika Highway, Brgy. San Rafael, San Pablo City, Laguna",
    Telephone: "(049)521-0246",
    Timeslots: null,
    Description: "DFA Regional Consular Office - San Pablo",
    Url: "https://www.google.com/maps/place/SM+City+San+Pablo/@14.07138,121.2992876,17z/data=!3m1!4b1!4m5!3m4!1s0x33bd5d2cd946c37d:0xd168f8100c3ed3af!8m2!3d14.0713748!4d121.3014763",
    Timezone: 288000000000,
  },
];

const fetch = require("node-fetch");
const { RateLimit } = require("async-sema");
const https = require("https");

const apiEndpoint =
  "https://www.passport.gov.ph/appointment/timeslot/available/next";

const DAYS = 24 * 60 * 60 * 1000;

const formatDate = (d) => d.toISOString().slice(0, 10);
const offsetDate = (d, offset) => new Date(d.getTime() + offset);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const lim = RateLimit(1);
const agent = new https.Agent({
  rejectUnauthorized: false, // Because the DFA site has an invalid certificate...
});

const availableDates = await Promise.all(
  sites.map(async (site) => {
    await lim();
    const body = new URLSearchParams();
    body.append("requestDate", formatDate(offsetDate(new Date(), 3 * DAYS)));
    body.append("maxDate", formatDate(offsetDate(new Date(), 30 * DAYS)));
    body.append("siteId", site.Id);
    body.append("slots", 1);
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body,
      agent,
    });
    const data = await res.json();
    return {
      site,
      date: data.Date,
    };
  })
);

return availableDates.filter(
  (r) => r.date <= offsetDate(new Date(), params.days_within * DAYS).getTime()
);
