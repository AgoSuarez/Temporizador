let corriendo = false;
let hora = 0;
let minutos = 0;
let segundos = 0;
let decimas = 0;
const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const btnOk = document.getElementById("btn-ok");
const HoraInput = document.getElementById("hora");
const MinutosInput = document.getElementById("minutos");
const SegundosInput = document.getElementById("segundos");
const DecimasInput = document.getElementById("decimas");

btnOk.addEventListener("click", () => {
  document.getElementById("alarma").style.visibility = "hidden";
  boton3.click();
});

boton2.addEventListener("click", () => {
  corriendo = false;
  clearInterval(intervalo);
  boton.classList.remove("disable");
  boton2.classList.add("disable");
});

boton3.addEventListener("click", () => {
  corriendo = false;
  clearInterval(intervalo);
  hora = 0;
  minutos = 0;
  segundos = 0;
  decimas = 0;
  reinicia();
  boton.classList.remove("disable");
  boton2.classList.add("disable");
  boton3.classList.add("disable");
  HoraInput.removeAttribute("disabled");
  MinutosInput.removeAttribute("disabled");
  SegundosInput.removeAttribute("disabled");
  DecimasInput.removeAttribute("disabled");
});

boton.addEventListener("click", () => {
  hora = HoraInput.value;
  minutos = MinutosInput.value;
  segundos = SegundosInput.value;
  decimas = document.getElementById("decimas").value;
  if (decimas == 0 && segundos == 0 && minutos == 0 && hora == 0) {
    alert("Debe de introducir valores iniciales");
  } else {
    HoraInput.setAttribute("disabled", true);
    MinutosInput.setAttribute("disabled", true);
    SegundosInput.setAttribute("disabled", true);
    DecimasInput.setAttribute("disabled", true);
    if (!corriendo) {
      corriendo = true;
      boton.classList.add("disable");
      boton2.classList.remove("disable");
      boton3.classList.remove("disable");
      intervalo = setInterval(() => {
        muestraTiempo();
      }, 10);
    }
  }
});

function reinicia() {
  HoraInput.value = "";

  MinutosInput.value = "";

  SegundosInput.value = "";

  DecimasInput.value = "";
}

function muestraHora(hora) {
  HoraInput.value = hora > 9 ? hora : "0" + hora;
}
function muestraMinutos(minutos) {
  MinutosInput.value = minutos > 9 ? minutos : "0" + minutos;
}
function muestraSegundos(segundos) {
  SegundosInput.value = segundos > 9 ? segundos : "0" + segundos;
}
function muestraDecimas(decimas) {
  DecimasInput.value = decimas > 9 ? decimas : "0" + decimas;
}

function muestraTiempo() {
  if (decimas == 0 && segundos == 0 && minutos == 0 && hora == 0) {
    document.getElementById("alarma").style.visibility = "visible";
    boton.classList.remove("disable");
    boton2.classList.add("disable");
    boton3.classList.add("disable");
    clearInterval(intervalo);
  } else {
    decimas--;
    if (decimas == -1) {
      decimas = 99;
      segundos--;
      if (segundos == -1) {
        segundos = 59;
        minutos--;
        if (minutos == -1) {
          minutos = 59;
          hora--;
          muestraHora(hora);
        }
        muestraMinutos(minutos);
      }
      muestraSegundos(segundos);
    }
    muestraDecimas(decimas);
  }
}
