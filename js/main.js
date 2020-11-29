$(document).ready(function () {
  $("#getWeatherForecast").click(function () {
    var city = $("#city").val()
    var key = "829128abb8d3582adcf797aa43ee2c7e"

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      dataType: "json",
      type: "GET",
      data: { q: city, appid: key, units: "imperial" },

      success: function (data) {
        var wf = ""
        $.each(data.weather, function (index, val) {
          wf += "<p><b>" + data.name + "</b><img src=" + val.icon + ".png></p>" + data.main.temp + "&deg;F " + " | " + val.main + ", " + val.description
        })
        $("#showWeatherForecast").html(wf)
      }
    })
  })
})
