const express = require("express");
const router = express.Router();

const { mintCertificate } = require("../controllers/certificateController");

//@desc: to claimCertificate
// /api/claimCertificate
router.post("/claimCertificate", mintCertificate);
module.exports = router;
