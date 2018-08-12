const request = require('request');
const cheerio = require('cheerio');
const extractNoun = require('./extract-noun');

class TextCrawler {

  static start(link, callback) {
    let noun = [];

    request(link, (err, res, body) => {
      if (err) {
        console.log(err);
        return callback();
      }

      const $ = cheerio.load(body);
      const all = $('*').not('script');

      all.each((i) => {
        const text = all.eq(i).text();
        const textSet = this._getTextSet(text);

        noun.push(...textSet);
      });

      extractNoun(noun, (err, res) => {
        if (err) callback(err);

        callback(null, res);
      });
    });
    
  }

  static _getTextSet(text) {
    const rNotKor = /[^가-힣 ]/g;
    text = text.replace(rNotKor, ' ').replace(/\s+/g, ' ');
    const textSet = new Set(text.split(' ').filter(t => t.length > 1));

    return [...textSet];
  }

}

module.exports = TextCrawler;