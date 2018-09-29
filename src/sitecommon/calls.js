import {getUsers,postRegistration} from '../api/starsApi'
import getBaseUrl from '../api/baseUrl';

function isJson(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

function createJSONLogin() {
  var fields = {}
  $("#login").find(":input").each(function() {
      fields[this.name] = $(this).val()
  })
  return JSON.stringify(fields)
}

function createJSONRegistration() {
  var fields = {}
  $("#registration").find(":input").each(function() {
      fields[this.name] = $(this).val()
  })
   return JSON.stringify(fields)
}

$(document).ready(function() {

  $("#formAlert").hide()

  window.login = function() {

    getUsers().then(result => {
      if(isJson(result)) {
        var udetail = JSON.parse(createJSONLogin())
        var arr = $.parseJSON(result)
        for (var i = 0, len = arr.length; i < len; i++) {
          if(arr[i].uname === udetail.uname && arr[i].pass === udetail.pass)
          {
            window.location.href = getBaseUrl()+"/dashboard"
          }
          else
          {
            $("#formAlert").removeClass("hidden")
            $("#formAlert").show()
          }
        }
      }
    })
  }

window.registration = function() {
   postRegistration(createJSONRegistration()).then(result => {
    if(result==='success')
      window.location.href = getBaseUrl() + "success"
    else
      window.location.href = getBaseUrl + "failure"
   })
}

window.launchregistration = function() {
    window.location.href = getBaseUrl()+"/registration"
}

window.launchlogin = function() {
    window.location.href = getBaseUrl()
}

$(".alert").find(".close").on("click", function (e) {
    $("#formAlert").hide()
});

});
