var queryHelper = (function () {
    function getJobsQuery() {
        return 'select jobs.id,jobs.title,jobs.pub_date,jobs.description,locations.locationName  from jobs inner join locations on jobs.locationId =locations.id';
    }

    function getSkills() {
        return 'select * from (select skills.skillName ,jobSkills.* from skills inner join jobSkills on skills.id = jobSkills.skill_id) as a;';
    }

    function getApplyJobQuery(jobId, userId) {
        return `insert into jobAplicant (job_id, user_id) values (${jobId},${userId});`
    }

    function getUserValid(user, pass) {
        return `select * from users where email = "${user}" and pass = "${pass}"; `
    }

    function getUserDetailsQuery(userId) {
        return `select * from users where id=${userId};`;
    }


    function getUpdataUeserDetailsQuery(userData) {
        return `update users set firstName="${userData.firstName}", email="${userData.email}", description="${userData.description}", userName="${userData.userName}", pass="${userData.pass}" where id=1;`
    }


    function getUserJobsQuery(userId) {
        return `select * from jobs where pub_id="${userId}";`
    }

    function addPubJobQuery(job) {
        var today = new Date().toISOString().substring(0, 10);
        return `insert into jobs (title, pub_date, pub_id, description, locationId) values ("${job.title}", "${today}", ${job.pub_id}, "${job.description}", ${job.locationId});`
    }



    function getJobIdQuery(job) {
        return `select * from jobs where title="${job.title}" and pub_id=${job.pub_id};`
    }

    function addToJobsSkillsQuery(jobId, skillId) {
        return `insert into jobSkills (job_id, skill_id) values (${jobId}, ${skillId});`
    }

    function addUserQuery(firstName, email, description, userName, pass, locationId) {
        return `insert into users (firstName, email, description, locationId, userName, pass) values ("${firstName}", "${email}","${description}", "${locationId}", "${userName}", "${pass}");`
    }
    function getAllLocations() {
        return `select*from locations`
    }

    function getAllSkills() {
        return `select*from skills`
    }



    return {
        getJobsQuery,
        getSkills,
        getApplyJobQuery,
        getUserValid,
        getUserDetailsQuery,
        getUpdataUeserDetailsQuery,
        getUserJobsQuery,
        addPubJobQuery,
        addToJobsSkillsQuery,
        getJobIdQuery,
        addUserQuery,
        getAllLocations,
        getAllSkills
    }





}
)();
module.exports = queryHelper;