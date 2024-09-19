
// Configurations for this application
const app = {}


app.name = "eHealthCare";
app.motto = "Bridging the gap between rural and urban healthcare!";

// Live url uncomment before pushing to git
app.url = "https://e-healthcare-web.vercel.app";
app.apiUrl = "https://fellow-marcille-amtech-digital-4586c5e7.koyeb.app/api";

// Local url comment before pushing to git
// app.url = "http://127.0.0.1:5500";
// app.apiUrl = "http://127.0.0.1:8000/api";


app.token = JSON.parse(localStorage.getItem('token'));
app.user = JSON.parse(localStorage.getItem('user'));
app.roles = JSON.parse(localStorage.getItem('roles'));
app.role = JSON.parse(localStorage.getItem('role'));
app.authTime = JSON.parse(localStorage.getItem('time'));


// app.clearStorage = (()=> {

//   console.log(`${app.url}`);
//   console.log(`${app.apiUrl}`);

//   localStorage.setItem('token', "");
//   localStorage.setItem('user', "");
//   localStorage.setItem('roles', "");
//   localStorage.setItem('role', "");
//   localStorage.clear();
//   console.log('local storage cleared!');

// });


app.offline = true;
app.log = ((content) => { return console.log(content); });
app.redirect = ((location, offline = false) => { 
    if(offline){
        return window.location.href = `.${location}` 
    }
    return window.location.href = `${app.url}${location}` 
});


// {
//     "success": "true",
//     "message": "User account created successfully",
//     "data": {
//         "name": "abdulsalam [object Object]",
//         "email": "abdulsalam2@gmail.com",
//         "updated_at": "2024-06-21T13:52:46.000000Z",
//         "created_at": "2024-06-21T13:52:46.000000Z",
//         "id": 5,
//         "roles": []
//     },
//     "access_token": "3|uUtl4sCnDBPMb4HnYeUHLtNwP8WLKsgxY8wE7D1reeed97e7",
//     "token_type": "Bearer"
// }




function localRootUrl(){
  return window.location.protocol + "//" 
  + window.location.hostname
  + (window.location.port? `:${window.location.port}` : '');
}

function originUrl() {
 return window.location.origin;
}

console.log(localRootUrl());
console.log(originUrl());
