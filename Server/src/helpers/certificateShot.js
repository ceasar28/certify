const puppeteer = require("puppeteer");
require("dotenv").config();
const htmlTemplate = require("../helpers/htmlTemplate");
const certificateTemplate = require("../helpers/certificateTemplate");
module.exports = async function (data) {
  try {
    // create a dynamic HTML string for the certificate
    const html = await htmlTemplate(data);
    const html2 = await certificateTemplate(data);

    // Use Puppeteer to generate the PNG
    // const browser = await puppeteer.launch({
    //   headless: "new",
    // });

    const browser = await puppeteer.launch({
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
      timeout: 60000, // Set a higher timeout value
    });
    const page = await browser.newPage();

    await page.setContent(html2);
    //   await page.addStyleTag({ content: css });

    // Adjust the viewport size if necessary
    await page.setViewport({ width: 1172, height: 698 });
    //{ width: 900, height: 850 }
    // {width: 1080, height: 1024}
    /*  
      take a screenshot and save it as a PNG, 
      use clip to crop the image if needed 
    */
    const screenshot = await page.screenshot();

    // close the browser
    await browser.close();

    console.log(screenshot);
    // returns the screenshot
    return screenshot;
  } catch (error) {
    console.log(error);
  }
};
