$('[data-toggle="collapsible-nav"]').on("click", function (e) {
  var target = $(this).data("target");
  $("#" + target).toggleClass("show");
});

$(document).ready(function () {
  if (window.innerWidth >= 992) {
    $("#collapsible-nav").addClass("show"); //Show navigation menu in bigger screens by default.
  } else {
    $("#collapsible-nav").removeClass("show");
  }

  if ($(".hover-box").length) {
    setHoverBoxPerspective();
  }
});

$(window).resize(function () {
  if ($(".hover-box").length) {
    setHoverBoxPerspective();
  }
});

function setHoverBoxPerspective() {
  $(".hover-box").css({
    perspective: function () {
      return Math.max($(this).width(), $(this).height()) * 2 + 50;
    },
  });
}

var classNames = [
  "in-up",
  "in-right",
  "in-down",
  "in-left",
  "out-up",
  "out-right",
  "out-down",
  "out-left",
]; // Animation classes.

$(".hover-box").hover(
  function (event) {
    var direction = "up";
    if (jQuery.fn.entry) {
      //Check if entry js file is loaded.
      direction = $(this).entry({ e: event }); // Get mouse in direction.
    }

    $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
    $(this).addClass("in-" + direction); //Add mouse in animation
  },

  function (event) {
    var direction = "up";
    if (jQuery.fn.entry) {
      direction = $(this).entry({ e: event }); // Get mouse out direction.
    }

    $(this).removeClass(classNames.join(" "));
    $(this).addClass("out-" + direction); //Add mouse out animation
  }
);

function copiarURL() {
  var url = window.location.href; // Obtiene la URL actual del navegador

  // Crea un elemento de textarea temporal para copiar la URL al portapapeles
  var textarea = document.createElement("textarea");
  textarea.value = url;
  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy"); // Copia el texto seleccionado al portapapeles

  document.body.removeChild(textarea); // Limpia el elemento de textarea temporal

  alert("La URL se ha copiado al portapapeles: " + url);
}
