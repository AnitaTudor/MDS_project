var submitHandler = function() {

    var jobs_found = document.createElement("div");
    jobs_found.classList.add("jobs-links");
    document.getElementById("sectioned-design").appendChild(jobs_found);



    var jobKeyword = document.getElementById("txt-input-job");
    var jobCity = document.getElementById("txt-input-city");


    var jobFulltime_bestjobs = document.getElementById("radio-input-type-full");
    var jobParttime_bestjobs = document.getElementById("radio-input-type-part");
    var jobproject_bestjobs = document.getElementById("radio-input-type-project");

    if (jobFulltime_bestjobs.checked)
        var radio_type_checked_bestjobs = '1';
    else if (jobParttime_bestjobs.checked) {
        var radio_type_checked_bestjobs = '2';
    } else if (jobproject_bestjobs.checked) var radio_type_checked_bestjobs = '5';

    var noexp_bestjobs = document.getElementById("radio-input-type-noexp");
    var entry_bestjobs = document.getElementById("radio-input-type-entry");
    var mid_bestjobs = document.getElementById("radio-input-type-mid");
    var senior_bestjobs = document.getElementById("radio-input-type-senior");

    if (noexp_bestjobs.checked)
        var radio_exp_checked_bestjobs = '0_0';
    else if (entry_bestjobs.checked) {
        var radio_exp_checked_bestjobs = '_2';
    } else if (mid_bestjobs.checked)
        var radio_exp_checked_bestjobs = '2_5';
    else if (senior_bestjobs.checked) var radio_exp_checked_bestjobs = '5_10';




    var link_to_job_bestjobs = document.createElement("a");
    link_to_job_bestjobs.style.display = "block";
    jobs_found.appendChild(link_to_job_bestjobs);
    link_to_job_bestjobs.innerHTML = "Best Jobs search result";
    link_to_job_bestjobs.href = 'https://www.bestjobs.eu/ro/locuri-de-munca?keyword=' + jobKeyword.value + '&location=' + jobCity.value + '&career_levels%5B%5D=' + radio_exp_checked_bestjobs + '&employment_type%5B%5D=' + radio_type_checked_bestjobs + '&sort=relevant';



    var jobFulltime_hipo = document.getElementById("radio-input-type-full");
    var jobParttime_hipo = document.getElementById("radio-input-type-part");
    var jobproject_hipo = document.getElementById("radio-input-type-project");

    if (jobFulltime_hipo.checked)
        var radio_type_checked_hipo = 'full-time';
    else if (jobParttime_hipo.checked) {
        var radio_type_checked_hipo = 'part-time';
    } else if (jobproject_hipo.checked) var radio_type_checked_hipo = 'project-based';

    var noexp_hipo = document.getElementById("radio-input-type-noexp");
    var entry_hipo = document.getElementById("radio-input-type-entry");
    var mid_hipo = document.getElementById("radio-input-type-mid");
    var senior_hipo = document.getElementById("radio-input-type-senior");

    if (noexp_hipo.checked)
        var radio_exp_checked_hipo = 'Student--Absolvent';
    else if (entry_hipo.checked) {
        var radio_exp_checked_hipo = '0-1-an-experienta';
    } else if (mid_hipo.checked)
        var radio_exp_checked_hipo = '1-5-ani-experienta';
    else if (senior_hipo.checked) var radio_exp_checked_hipo = 'peste-5-ani-experienta';




    var link_to_job_hipo = document.createElement("a");
    link_to_job_hipo.style.display = "block";
    jobs_found.appendChild(link_to_job_hipo);
    link_to_job_hipo.innerHTML = "Hipo search result";
    link_to_job_hipo.href = 'https://www.hipo.ro/locuri-de-munca/cautajobfiltre/Toate-Domeniile/' + jobCity.value + '/' + radio_type_checked_hipo + '/' + radio_exp_checked_hipo + '/' + jobKeyword.value;



    var jobFulltime_ejobs = document.getElementById("radio-input-type-full");
    var jobParttime_ejobs = document.getElementById("radio-input-type-part");
    var jobproject_ejobs = document.getElementById("radio-input-type-project");

    if (jobFulltime_ejobs.checked)
        var radio_type_checked_ejobs = 'full-time';
    else if (jobParttime_ejobs.checked) {
        var radio_type_checked_ejobs = 'part-time';
    } else if (jobproject_ejobs.checked) var radio_type_checked_ejobs = 'project-based';

    var noexp_ejobs = document.getElementById("radio-input-type-noexp");
    var entry_ejobs = document.getElementById("radio-input-type-entry");
    var mid_ejobs = document.getElementById("radio-input-type-mid");
    var senior_ejobs = document.getElementById("radio-input-type-senior");

    if (noexp_ejobs.checked)
        var radio_exp_checked_ejobs = 'no-experience';
    else if (entry_ejobs.checked) {
        var radio_exp_checked_ejobs = 'entry-level';
    } else if (mid_ejobs.checked)
        var radio_exp_checked_ejobs = 'mid-level';
    else if (senior_ejobs.checked) var radio_exp_checked_ejobs = 'senior-level';



    var link_to_job_ejobs = document.createElement("a");
    link_to_job_ejobs.style.display = "block";
    jobs_found.appendChild(link_to_job_ejobs);
    link_to_job_ejobs.innerHTML = "Ejobs search result";
    link_to_job_ejobs.href = 'https://www.ejobs.ro/locuri-de-munca/' + jobCity.value + '/' + radio_exp_checked_ejobs + '/' + radio_type_checked_ejobs + '/?cauta=' + jobKeyword.value;


    var jobFulltime_myjob = document.getElementById("radio-input-type-full");
    var jobParttime_myjob = document.getElementById("radio-input-type-part");
    var jobproject_myjob = document.getElementById("radio-input-type-project");

    if (jobFulltime_myjob.checked)
        var radio_type_checked_myjob = 'contract-full-time';
    else if (jobParttime_myjob.checked) {
        var radio_type_checked_myjob = 'contract-part-time';
    } else if (jobproject_myjob.checked) var radio_type_checked_myjob = 'contract-proiect-unic';

    var noexp_myjob = document.getElementById("radio-input-type-noexp");
    var entry_myjob = document.getElementById("radio-input-type-entry");
    var mid_myjob = document.getElementById("radio-input-type-mid");
    var senior_myjob = document.getElementById("radio-input-type-senior");

    if (noexp_myjob.checked)
        var radio_exp_checked_myjob = 'cariera-0-1';
    else if (entry_myjob.checked) {
        var radio_exp_checked_myjob = 'cariera-1-2';
    } else if (mid_myjob.checked)
        var radio_exp_checked_myjob = 'cariera-2-5';
    else if (senior_myjob.checked) var radio_exp_checked_myjob = 'cariera-5-10';

    var link_to_job_myjob = document.createElement("a");
    link_to_job_myjob.style.display = "block";
    jobs_found.appendChild(link_to_job_myjob);
    link_to_job_myjob.innerHTML = "Myjobs search result";
    link_to_job_myjob.href = 'https://www.myjob.ro/locuri-munca-' + jobKeyword.value + '-' + jobCity.value + '/' + radio_exp_checked_myjob + '/' + radio_type_checked_myjob + '/';


    return false;
}