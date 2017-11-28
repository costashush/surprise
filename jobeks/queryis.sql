mongodb 


use HireMe































































db.locations.insert([
{_id:1,locationName:'Russia',lon:21.332434324,lat:21.3423423},
{_id:2,locationName:'Israel',lon:22.332434324,lat:22.3423423},{_id:3,locationName:'Poland',lon:23.332434324,lat:23.3423423},{_id:4,locationName:'Maroco',lon:24.332434324,lat:24.3423423},
])




db.skills.insert([
{_id:1,skillName:'Agular'},
{_id:2,skillName:'React'},
{_id:3,skillName:'Bootstrap'},
{_id:4,skillName:'MongoDB'},
{_id:5,skillReactName:'Javascript'}
])

 db.jobs.insert([{_id:1,jobName:'facebook delveloper',pub_date:new Date("2016-05-18T16:00:00Z"),pub_id:1,description:'developer of facebook components in React tech',locationName:'Poland',lon:21.3213213,lat:15.432432423,skills:['React','Angular']},
{_id:2,jobName:'RedHat programmer',pub_date:new Date("2015-06-18T16:00:00Z"),pub_id:1,description:'we need a hard worker with a codeing mentalety which can code 24/7',locationName:'Russia',lon:24.3213213,lat:23.432432423,skills:['Javascript']},
{_id:3,jobName:'Instus Developer',pub_date:new Date("2017-02-18T16:00:00Z"),pub_id:3,description:'for a good company needed a 5 years experience programmer',locationName:'Poland',lon:24.3213223,lat:13.432432423,skills:['Bootstrap']},
]
) 

db.users.insert([
{_id:1,firstName:'Lee',email:'leeyahav018@gmail.com',description:'A fucking andsom man with hand of an amazing programmer, can do evrything he wants',lcationName:'Israel',lon:21.321321,lat:43.423432,userName:'leeya',pass:'1',skills:['Angular','React'],agent:[]},
{_id:2,firstName:'Costa',email:'costa@shush.walla.com',description:'I came from cold Russia, we has to drink a lot of Vodka to survive the cold keyboard',lcationName:'Mosko',lon:23.321321,lat:13.423432,userName:'costantin',pass:'2',skills:['Bootsrap'],agent:[]},
{_id:3,firstName:'Mahmud',email:'Mahmud@dizem.gmail.com',description:'I am a security developer I had a job on faceush ',lcationName:'Israel',lon:13.321321,lat:13.423432,userName:'mahmudizem',pass:'3',skills:['Javascript'],agent:[]}
])





skills (id,skillName)

locations (id , locationName,lon,lat)

users (id,firstName,email,description,lcationName,lon,lat,userName,pass,skills=[],agent=[jobId,....],jobAplications=[jobId,....])

jobs (id,title,pub_date,pub_id,description,locationName,lon,,skills=[]);

































































