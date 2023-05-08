const ARRMOVIES = [
  "Interestelar",
  "John Wick 4",
  "Green Book",
  "El padrino",
  "Drive to survive",
  "Inferno",
  "Dia de la independencia",
  "Titanic",
];

const d = document;
const $lupa = d.getElementById("searchIcon");
const $lupaInput = d.getElementById("searchInput");
const $searchListContainer = d.getElementById("searchListContainer");
const $listaDePeliculas = d.getElementById("searchList");

$lupa.addEventListener("click", (e) => {
  if ($lupa.classList.toggle("activated")) {
    $lupaInput.style.visibility = "visible";
    $lupaInput.style.opacity = 1;
    $searchListContainer.style.display = "block";

    $lupaInput.addEventListener("input", (e) => {
      let $value = e.target.value;
      $listaDePeliculas.innerHTML = "";
      for (let i = 0; i < ARRMOVIES.length; i++) {
        const MOVIE = ARRMOVIES[i];
        if (MOVIE.toLocaleLowerCase().includes($value.toLocaleLowerCase()) && $value != "") {
          let htmlMovie = d.createElement("li");
          htmlMovie.innerHTML = MOVIE;
          $listaDePeliculas.appendChild(htmlMovie);
        }
      }
    });
  } else {
    $lupaInput.style.visibility = "hidden";
    $lupaInput.style.opacity = 0;
    $searchListContainer.style.display = "none";
  }
});
