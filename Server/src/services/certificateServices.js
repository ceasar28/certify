const puppeteer = require("puppeteer");
const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>

<body>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; ">
        <div
            style="width:800px; height:600px; padding:20px; text-align:center; border: 10px solid #F8A711; display: flex; justify-content: center; align-items: center; background-color: #C8C8C8;  ">
            <div style="width:750px; height:550px; padding:20px; text-align:center; border: 5px solid #F8A711">
                <span style="font-size:50px; font-weight:bold">Certificate of Completion</span>
                <br><br>
                <span style="font-size:25px"><i>This is to certify that</i></span>
                <br><br>
                <span style="font-size:30px"><b>$student.getFullName(Ekete)</b></span><br /><br />
                <span style="font-size:25px"><i>has completed the course robotech</i></span> <br /><br />
                <span style="font-size:30px">$course.getName()</span> <br /><br /> <br /><br />
                <span style="font-size:25px"><i>dated</i></span><br>
                <span style="font-size:30px">$dt</span><br /><br />
                <br /><br /> <br /><br />
                <button
                    style="background-color: #F8A711; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; color: white;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                    </svg>
                    Learn.Z
                </button>

            </div>
        </div>
    </div>
</body>

</html>
`;

// Use Puppeteer to generate the PNG: Add the following code to the JavaScript file to generate the PNG file using Puppeteer:
(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.setContent(html);
  //   await page.addStyleTag({ content: css });

  // Adjust the viewport size if necessary
  await page.setViewport({ width: 1920, height: 1080 });

  // Wait for any additional resources or rendering to complete
  //   await page.waitForTimeout(1000);

  // Define the output file path
  //   const outputPath = "src/certificate.png";

  // Take a screenshot of the rendered page and save it as a PNG
  //   await page.screenshot({ path: outputPath });
  const screenshot = await page.screenshot();
  //   console.log(`Certificate saved as ${outputPath}`);

  await browser.close();
  console.log(screenshot);
  return screenshot;
})();
