const axios = require("axios");
const cheerio = require("cheerio");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const getHtml = async () => {
  try {
    return await axios.get(
      "https://wsw.yonsei.ac.kr/wsw/notice/scholarship-board.do"
    );
  } catch (error) {
    console.log(error);
  }
};

console.log(getHtml());

// getHtml()
//   .then((html) => {
//     const htmlData = cheerio.load(html.data);
//     const data = {
//       mainContents: htmlData("div.subject")
//         .html()
//         .replace(/[\n\t]/g, ""),
//     };
//     return data;
//   })
//   .then((res) => console.log(res));
