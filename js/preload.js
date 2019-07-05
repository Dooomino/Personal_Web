window.onload = function () {
  try {
    setInterval(() => {
      fetch("http://www.mino.moe:8090/lang",
          //  fetch("http://localhost:16075/lang",
          {
            method: 'GET',
          })
        .then((resp) => resp.text())
        .then(function (data) {
          console.log(data)
          document.location.href = "http://www.mino.moe/index" + data;
          //      document.location.href = "http://localhost:16075" + data;
        })
    }, 2000);
  } catch (e) {

  }
}
