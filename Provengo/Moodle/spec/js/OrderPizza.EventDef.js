/* @Provengo summon selenium */

/**
 *  The ComposeQuery event defines the selenium actions for writing the query that was given in the parameter e.
 */
defineEvent(SeleniumSession, "ComposeQuery", function(session, e) {
  bp.log.info(e);
  session.writeText("//input[@name='q']", e.text);
})

/**
 * The StartSearch event defines the selenium action for clicking the search button.
 */
defineEvent(SeleniumSession, "StartSearch", function(session, e) {
  session.click("//input[@name='btnK']");
})

/**
 * The FeelLucky event defines the selenium action for clicking the "I'm feeling lucky button".
 */
defineEvent(SeleniumSession, "FeelLucky", function(session, e) {
  session.click("//input[@name='btnI']");
})