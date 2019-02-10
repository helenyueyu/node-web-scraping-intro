const request = require('request')
const cheerio = require('cheerio')

request('http://www.reddit.com/r/relationships', function(err, res, html) {
  if (!err) {
    const $ = cheerio.load(html)
    console.log($('.s90z9tc-10.fHRkcP').text())
  }
})
