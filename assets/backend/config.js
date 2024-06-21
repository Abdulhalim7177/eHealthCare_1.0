
// Configurations for this application
const app = {}


app.name = "eHealthCare";
app.motto = "Bridging the gap between rural and urban healthcare!";
app.url = "https://e-healthcare-web.vercel.app";
// app.apiUrl = "https://fellow-marcille-amtech-digital-4586c5e7.koyeb.app/api";
app.apiUrl = "http://127.0.0.1:8000/api";


app.token = localStorage.getItem('token');
app.user = localStorage.getItem('user');

app.offline = true;
app.log = ((content) => { return console.log(content); });
app.location = ((location, offline = false) => { 
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