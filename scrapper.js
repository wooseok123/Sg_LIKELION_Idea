const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async () => {
  try {
    return await axios.get(
      "http://www.sogang.ac.kr/front/boardlist.do?bbsConfigFK=141&menuGubun=1&searchLowItem=ALL&searchField=ALL&searchValue=&currentPage=1"
    );
  } catch (error) {
    console.log(error);
  }
};

console.log(getHtml());

getHtml()
  .then((html) => {
    const htmlData = cheerio.load(html.data);
    const data = {
      mainContents: htmlData("div.subject")
        .html()
        .replace(/[\n\t]/g, ""),
    };
    return data;
  })
  .then((res) => console.log(res));
  