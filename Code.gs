/**
 * CHK Administrative Portal
 * Google Apps Script Web App
 *
 * Deploy as:
 *   Execute as: Me
 *   Who has access: Anyone (or Anyone within your organization)
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('CHK Administrative Portal')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=0.5, user-scalable=yes');
}
