const request = require('request')
const cheerio = require('cheerio')



let outcome = ''

request('http://www.reddit.com/r/relationships', function(err, res, html) {
      if (!err) {
        const $ = cheerio.load(html)
        // console.log($('.s90z9tc-10.fHRkcP').text().substring(0, 100))
        outcome = $('.s90z9tc-10.fHRkcP').text().substring(0, 100)
        return outcome
       } else {
        return err
      }
  })


console.log(outcome)
