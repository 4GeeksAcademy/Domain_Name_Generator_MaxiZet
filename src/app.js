/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
// import { start } from "@popperjs/core";

window.onload = function() {
  let starts = ["el", "tu"];
  let mids = ["mejor", "gran"];
  let ends = ["lugar", "emoticom"];
  let dominios = ["es", "uy", "ve", "ar", "com"];

  let dominiosNames = [];

  starts.forEach(start => {
    mids.forEach(mid => {
      ends.forEach(end => {
        dominios.forEach(dominio => {
          let domain = `${start}${mid}${end}.${dominio}`;
          console.log(domain);
          if (end.endsWith(dominio)) {
            let domainHack = `${start}${mid}${end.slice(
              0,
              -dominio.length
            )}.${dominio}`;
            dominiosNames.push(domainHack);
          } else {
            dominiosNames.push(domain);
          }
        });
      });
    });
  });

  let listaDeDominios = dominiosNames.map(url => {
    return '<li class="alert alert-success mt-2">' + url + "</li>";
  });

  let urlList = document.getElementById("url-list");
  urlList.innerHTML = listaDeDominios.join("");
};
