function response() {
    let respuesta1 = document.getElementsByName("pregunta1");
    let respuesta2 = document.getElementsByName("pregunta2");
    let respuesta3 = document.getElementsByName("pregunta3");
    let respuesta4 = document.getElementsByName("pregunta4");
    let respuesta5 = document.getElementsByName("pregunta5");
    let respuesta6 = document.getElementsByName("pregunta6");
    let respuesta7 = document.getElementsByName("pregunta7");
    let respuesta8 = document.getElementsByName("pregunta8");
    let ans = ''

    let respuesta = [
      respuesta1,
      respuesta2,
      respuesta3,
      respuesta4,
      respuesta5,
      respuesta6,
      respuesta7,
      respuesta8,
    ];

    let total = 0;

    for (let i = 0; i < respuesta.length; i++) {
      console.log(respuesta[i].length);
      for (let j = 0; j < respuesta[i].length; j++) {
        respuesta[i][j].checked
          ? (total += parseInt(respuesta[i][j].value))
          : console.log("O");
      }
    
      if (total >= 8 && total < 12){
        ans = 'Consumo peligroso de cannabis'
      } else if (total >= 12){
        ans = 'Posible trastorno de uso del cannabis'
      } else {
        ans = 'No indica consumo peligroso de canabis'
      }

    }

    document.getElementById("respuesta").innerHTML = total;
    document.getElementById('finalAns').innerHTML = ans;

    document.getElementById("pop_up").style.visibility = "visible";
    document.getElementById("pop_up").style.backgroundColor =
      "rgba(0, 0, 0, 0.219)";
  }