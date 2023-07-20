// to ensure a user wallet is connected

const isConnected = (req, res, next) => {
  if (req.isConnected()) {
    return next();
  } else {
    res.send("Please connect wallet");
    return;
  }
};

module.exports = isConnected;
