/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";
// import { start } from "@popperjs/core";

window.onload = function() {
  let starts = ["the", "our"];
  let mids = ["great", "big"];
  let ends = ["jogger", "racoon"];
  let dominios = [".es", ".uy", ".ve", ".br", ".ar"];

  let dominiosNames = [];

  starts.forEach(start => {
    mids.forEach(mid => {
      ends.forEach(end => {
        dominios.forEach(dominio => {
          let domain = `${start}${mid}${end}${dominio}`;
          console.log(domain);
          dominiosNames.push(domain);
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
