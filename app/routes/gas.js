'use strict';

module.exports = function(app) {
    
    // Home route
    var gasCtrl = require('../controllers/gas');
    app.get('/gas', gasCtrl.render);

};
