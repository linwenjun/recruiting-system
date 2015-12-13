var $ = global.jQuery = require('jquery');
require("bootstrap");

$(function () {
    $('#submitModal').on('show.bs.modal', function () {
        $('.modal-content').css('margin-top', '230px');
    });
});
