/* @provengo summon selenium */

/**
 * This story opens a new browser window, goes to google.com, and searches for a pizza.
 */
story('Search for a pizza on Google', function () {
  let s = new SeleniumSession().start('https://google.com')
  s.composeQuery({ text: 'Pizza' })
  s.startSearch()
})

/**
 * This story opens a new browser window, goes to google.com, and searches for a pizza using the "I Feel Lucky" feature.
 */
story('Search using feeling lucky', function () {
  // the "with" statement makes it redundant to write "s." before each call to a defined event (like the story above)
  with (new SeleniumSession().start('https://google.com')) {
    composeQuery({ text: 'Pizza' })
    feelLucky()
  }
})