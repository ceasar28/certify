// const logo = require("../images/logo.png");
// const lowerFrameImg = require("./images/loerFrameImg.png");
// const upperFrameImg = require("./images/upperFrameImg.png");
// const medalGoldIcon = require("./images/medalGoldIcon.png");
module.exports = async function (data) {
  const { name, course } = data;
  const issueDate = new Date().toDateString();
  const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet">
    <title>Certificate</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>

<body>
    <div style="width: 100%; height: 100vh; position: relative; margin: 0; display: flex; justify-content: center; align-items: center;">
        <div
            style="width: 50px; height: 100vh; background-color: #F8A711; position: absolute; left: 0; margin: 0; top: 0">

        </div>


        <div style="position: absolute; top: 0">
            <img src="https://salmon-fancy-reindeer-274.mypinata.cloud/ipfs/QmR8FRvN1othnZD6j5gd5TZcyA6CiDk7G6bMRFHtmou4b9" alt="" style="width: 100%; height: 300px" />
        </div>




        <div style="position: absolute; top: 200px; left: 340px ">
            <div>
                <h1
                    style="font-family: cursive; font-style: normal; font-weight: bold; font-size: 40px;  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)">
                    CE<span style="color: #009A49">RT</span><span style="color: #FF57E4">IFI</span><span
                        style="color: #F8A711">CA</span>TE
                    <span style="color: #009A49"> OF </span>
                    COMP<span style="color: #009A49">LETION</span>
                </h1>
            </div>


            <div style="font-family: poppins; font-style: italic; font-weight: 400; font-size: 20px">
                <p style="text-align: center; padding: 10px 0">
                    This is to certify that
                </p>
            </div>


            <div  style="margin-top: 60px; width: 100%; outline: none; border-top: none; font-weight: bold; color: #000000; border-right: none; border-left: none; border-bottom: 1px solid #000000; font-size:30px;text-align: center;">
            <span>${name}</span>
            </div>



            <div>
                <p
                    style="font-style: normal; font-weight: 600; font-size: 20px; text-align: center; padding-top: 5px; color: rgba(17, 17, 17, 0.5)">
                    has successfully completed the course
                </p>
            </div>


            <div style="margin-top: 60px; width: 100%; outline: none; border-top: none; font-weight: bold; color: #000000; border-right: none; border-left: none; border-bottom: 1px solid #000000; font-size:30px;text-align: center;">
               <span>${course}</span>
            </div>


            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 60px">
                <div>
                    <div
                        style="width: 100%; outline: none; border-top: none; border-right: none; border-left: none; border-bottom: 1px solid #000000; text-align: center;">
                        <span>${issueDate}</span>
                    </div>
                    <p style="font-weight: bold">Date</p>
                </div>

                <div>
                    <img src="https://salmon-fancy-reindeer-274.mypinata.cloud/ipfs/QmP11EvMRVjcUVSD4UZ11ptAL8pGnLwpbWteFDxy1j3ZYS" alt=""
                        style="width: 20%; height: 20%; margin-left: 100px" />
                </div>

                <div>
                    <img src="https://salmon-fancy-reindeer-274.mypinata.cloud/ipfs/QmZe51VKCxonuhSZiwAEJcbykAsWv8wH4CQn7MKXj1q4kW" alt="" style="width: 50%; height: 50%; float: right" />
                </div>
            </div>
        </div>


        <div style="width: 50px; height: 100vh; background-color: #F8A711; position: absolute; right: 0">

        </div>


        <div style="position: fixed; bottom: 0; top: 530px">
            <img src="https://salmon-fancy-reindeer-274.mypinata.cloud/ipfs/QmTg8SCCTZxC8i6kvZMRpwcTek76snr7pZJ4C8APk5xPqy" alt="" />
        </div>


    </div>
</body>

</html>`;

  return html;
};
