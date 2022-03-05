const containerJobs = document.querySelector("#container-jobs");

//vamos a hacer in cambioo, para poder reutilizar la funcion renderJobs, hare que como parametro reciba el
//arrray de objetos
const renderJobs = (arrayObjectJobs) => {
  conttainerJobs.innerHTML = "";
  //! y luego
  //!como estamos recibiendo el array de objetos
  jobs.map((job) => {
    const html = `
    <section class="card">
        <div class="column-1">
          <img src=${job.logo} alt="" />
        </div>
        <div class="column-2">
          <div>
            <span class="title">${job.company}&nbsp;&nbsp;</span>
            ${
              job.new
                ? `<span class="bagde-primary">&nbsp;&nbsp;new!&nbsp;&nbsp;</span>`
                : ``
            }
            ${
              job.featured
                ? `<span class="bagde-secondary">&nbsp;&nbsp;featured&nbsp;&nbsp;</span>`
                : ``
            }
          </div>
          <div>
            <h4>${job.position}</h4>
          </div>
          <div>
            <span class="text-dark"> ${job.postedAt} . ${job.contract} . ${
      job.location
    }</span>
          </div>
        </div>
        <div class="column-3">
          ${job.languages.map(
            (language) => `<span class="skill">${language}</span>&nbsp;&nbsp;`
          )}
          ${job.tools.map(
            (tool) => `<span class="skill">${tool}</span>&nbsp;&nbsp;`
          )}
        </div>
      </section>
    `;

    // la funcion replace y replaceAll sirve para poder reemplazar
    // como parametro recibo el elemento que va a buscar y como segundo parametro
    // por el elemento que lo va a reemplzar
    containerJobs.innerHTML += html.replaceAll(",", "");
  });
};

const selectLanguage = document.querySelector("#select-languages");
// recuerden para los selects debemos utilizar el evento onchange
selectLanguage.onchange = function (event) {
  const techFilter = event.target.value
  
  //el reto es poder obtener el lenguaje y poder filtrar y obtener solo los trabajos que corresponda
  //? como la funcion renderJobs recibe como parametro un arraydeobjetos es lo que debemos
  //?generar una vez hecho el filtro
  const newJobs = jobs.filter(job =>job.languages.includes(techFilter) || job.tools.includes(techFilter))
  renderJobs(newJobs)
  //?para que no esto funcion bien yo debo decirle la funcion renderrJobs que cada vez
  //? que lo invoque primero limpie el contenedor y luego haga  el render el array de objetos
};

//! que le pasamos a renderJobs?
//jobs este siendo importado desde el archivo jobs.js
renderJobs(jobs);

// son 9 retos que hemos en clase
// + 1 pokedex
// + 1 star wars
// + 1 su portafolio