document.write("<h2>Tafel van 10</h2>");
  document.write("<ul>");

  for (var i = 1; i <= 10; i++) {
    var resultaat = 10 * i;
    document.write("<li>" + "10 x " + i + " = " + resultaat + "</li>");
  }

  document.write("</ul>");