


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/NewJobeks";

// return MongoClient.connect(url, function (err, db) {
//     if (err) {
//         console.log(err)
//     } else {
//         initDB(db).then((res) => {
//             return res
//         })
//     }
// })
// function initDB(db) {
//     // db.collection('skills').remove()
// return db.collection('skills').save([
//     { _id: 1, skillName: 'Agular' },
//     { _id: 2, skillName: 'React' },
//     { _id: 3, skillName: 'Bootstrap' },
//     { _id: 4, skillName: 'MongoDBs' },
//     { _id: 5, skillName: 'MongoDBr' },
//     { _id: 6, skillName: 'MongoDBg' },
//     { _id: 7, skillName: 'html' },
//     { _id: 8, skillReactName: 'Javascript' }

//     ]).then((res) => {
//         return res
//     })


// db.skills.save([
//     { _id: 1, skillName: 'Agular' },
//     { _id: 2, skillName: 'React' },
//     { _id: 3, skillName: 'Bootstrap' },
//     { _id: 4, skillName: 'MongoDB' },
//     { _id: 5, skillName: 'node js' },
//     { _id: 6,  skillName: 'mysql' },
//     { _id: 7, skillName: 'html css' },
//     { _id: 8, skillName: 'React' },
//     { _id: 9, skillName: 'Bootstrap' },
//     { _id: 10, skillName: 'html' },
//     { _id: 11, skillName: 'full stack' },
//     { _id: 12, skillName: 'it' },
//     { _id: 13, skillName: 'type script' },
//     { _id: 14, skillReactName: 'Javascript' }])










    db.jobs.save([
    { jobName: 'db Developer', pub_date: new Date("2017-02-18T16:00:00Z"), pub_id: 3, description: 'for a good company needed a 5 years experience programmer', locationName: 'Poland', lon: 24.3213223, lat: 13.432432423, skills: [3] ,active:'true'},
    { jobName: 'fb Developer', pub_date: new Date("2017-02-18T16:00:00Z"), pub_id: 3, description: 'for a good company needed a 5 years experience programmer', locationName: 'kurchi', lon: 14.3213223, lat: 13.432432423, skills: [3, 4] ,active:'true'},
    { jobName: 'rt Developer', pub_date: new Date("2017-02-18T16:00:00Z"), pub_id: 2, description: 'for a good company needed a 5 years experience programmer', locationName: 'jupo', lon: 44.3213223, lat: 13.432432423, skills: [3, 5, 1] ,active:'true'},
    { jobName: 'web Developer', pub_date: new Date("2017-02-18T16:00:00Z"), pub_id: 3, description: 'for a good company needed a 5 years experience programmer', locationName: 'Popo', lon: 34.3213223, lat: 13.432432423, skills: [2, 3, 4] ,active:'true'},
    { jobName: 'bulma Developer', pub_date: new Date("2017-02-18T16:00:00Z"), pub_id: 1, description: 'for a good company needed a 5 years experience programmer', locationName: 'wakko', lon: 14.3213223, lat: 13.432432423, skills: [3, 5] ,active:'true'}])

//     db.users.save([
//         { firstName: 'Lee', email: 'leeyahav018@gmail.com', description: 'A fucking andsom man with hand of an amazing programmer, can do evrything he wants', lcationName: 'Israel', lon: 21.321321, lat: 43.423432, userName: 'leeya', pass: '1', skills: [1, 2], agent: [] },
//         { firstName: 'Costa', email: 'costa@shush.walla.com', description: 'I came from cold Russia, we has to drink a lot of Vodka to survive the cold inorder to use the keyboard', lcationName: 'Mosko', lon: 23.321321, lat: 13.423432, userName: 'costantin', pass: '2', skills: [3], agent: [] },
//         { firstName: 'Mahmud', email: 'Mahmud@dizem.gmail.com', description: 'I am a security developer I had a job on faceush ', lcationName: 'Israel', lon: 13.321321, lat: 13.423432, userName: 'mahmudizem', pass: '3', skills: [5], agent: [] },
//         { firstName: 'Asaf', email: 'asaf@asaf.com', description: 'I am a security developer I had a job on faceush ', lcationName: 'Israel', lon: 13.321321, lat: 13.423432, userName: 'mahmudizem', pass: '3', skills: [3], agent: [] },
//         { firstName: 'Gabi', email: 'gabi@dizem.gmail.com', description: 'I am a security developer I had a job on faceush ', lcationName: 'Israel', lon: 13.321321, lat: 13.423432, userName: 'mahmudizem', pass: '1', skills: [1], agent: [] },
//         { firstName: 'Benyamin', email: 'a@gmail.com', description: 'I am a security developer I had a job on faceush ', lcationName: 'Israel', lon: 13.321321, lat: 13.423432, userName: 'mahmudizem', pass: '1', skills: [5, 4, 2], agent: [] },
//         { firstName: 'Ronni', email: 's@s.com', description: 'I am a security developer I had a job on faceush ', lcationName: 'Israel', lon: 13.321321, lat: 13.423432, userName: 'mahmudizem', pass: '1', skills: [1, 2, 3], agent: [] }])
    // db.locations.save([{ _id: 1, locationName: 'Russia', lon: 21.332434324, lat: 21.3423423 },
    //     { _id: 2, locationName: 'Israel', lon: 22.332434324, lat: 22.3423423 }, 
        { _id: 3, locationName: 'Poland', lon: 23.332434324, lat: 23.3423423 },
        { _id: 4, locationName: 'England', lon: 23.4, lat: 23.23423 },
        { _id: 5, locationName: 'Germany', lon: 23.332434324, lat: 23.323 },
        { _id: 6, locationName: 'Italy', lon: 23.33243324, lat: 23.3423423 },
        { _id: 7, locationName: 'Sweden', lon: 23.2324, lat: 23.3423423},
        { _id: 8, locationName: 'Norway', lon: 23.332434324, lat: 23.3423423},
        { _id: 9, locationName: 'Spain', lon: 23.332434324, lat: 23.2},
        { _id: 10, locationName: 'Lebanon', lon: 23.3324, lat: 23.3423423},
        { _id: 11, locationName: 'Maroco', lon: 24.334324, lat: 24.423423 }])


// }

