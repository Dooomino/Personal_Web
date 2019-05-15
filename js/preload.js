window.onload = function () {
  fetch("http://dooomino.info:16075/lang",
      //  fetch("http://localhost:16075/lang",
      {
        method: 'GET',
      })
    .then((resp) => resp.text())
    .then(function (data) {
      console.log(data)
      document.location.href = "http://dooomino.info" + data;
      //      document.location.href = "http://localhost:16075" + data;
    })
}
