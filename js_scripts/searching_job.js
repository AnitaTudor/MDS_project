var inputHandler = function(event) {

    var jobs_found = document.createElement("div");
    document.getElementById("main-content").appendChild(jobs_found);

    var link_to_job_bestjobs = document.createElement("a");
    link_to_job_bestjobs.style.display = "block";
    jobs_found.appendChild(link_to_job_bestjobs);
    link_to_job_bestjobs.innerHTML = "Best Jobs search result";
    link_to_job_bestjobs.href = 'https://www.bestjobs.eu/ro/locuri-de-munca?keyword=' + event.target.value + '&location=&sort=relevant';

    var link_to_job_hipo = document.createElement("a");
    link_to_job_hipo.style.display = "block";
    jobs_found.appendChild(link_to_job_hipo);
    link_to_job_hipo.innerHTML = "Hipo search result";
    link_to_job_hipo.href = 'https://www.hipo.ro/locuri-de-munca/cautajob/Toate-Domeniile/Toate-Orasele/' + event.target.value;





}


window.onload = function() {

    var user_input = document.getElementById("txt-input");

    user_input.addEventListener("change", inputHandler);
}