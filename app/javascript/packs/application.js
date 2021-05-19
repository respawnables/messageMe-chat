// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'jquery'
//= require semantic-ui



Rails.start()
Turbolinks.start()
ActiveStorage.start()

const scroll_bottom = function () {
    if ($('#messages').length > 0)
    {
        $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
}

var submit_message = function () {
    $('#message-body').on('keydown', function (e) {
        if (e.keyCode == 13) {
            e.target.value = ""
        }
    });
}

$(document).on('turbolinks:load', function() {
    scroll_bottom()
    submit_message()
})






