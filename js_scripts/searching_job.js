var inputHandler = function(event) {

    var jobs_found = document.createElement("div");
    document.getElementById("sectioned-design").appendChild(jobs_found);
    jobs_found.classList.add("jobs-links");

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

    var link_to_job_ejobs = document.createElement("a");
    link_to_job_ejobs.style.display = "block";
    jobs_found.appendChild(link_to_job_ejobs);
    link_to_job_ejobs.innerHTML = "Ejobs search result";
    link_to_job_ejobs.href = 'https://www.ejobs.ro/locuri-de-munca/bucuresti/?cauta=' + event.target.value;

    var link_to_job_myjob = document.createElement("a");
    link_to_job_myjob.style.display = "block";
    jobs_found.appendChild(link_to_job_myjob);
    link_to_job_myjob.innerHTML = "Myjobs search result";
    link_to_job_myjob.href = 'https://www.myjob.ro/locuri-munca-' + event.target.value + '/';


    var link_to_job_jobber = document.createElement("a");
    link_to_job_jobber.style.display = "block";
    jobs_found.appendChild(link_to_job_jobber);
    link_to_job_jobber.innerHTML = "Jobber search result";
    link_to_job_jobber.href = 'https://www.jobber.ro/cautare/' + event.target.value;

}


window.onload = function() {

    var user_input = document.getElementById("txt-input");

    user_input.addEventListener("change", inputHandler);
}