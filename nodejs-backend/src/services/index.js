
const productDetails = require("./productDetails/productDetails.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(productDetails);
    // ~cb-add-configure-service-name~
};
