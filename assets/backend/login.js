

console.log(`processing: ${app.url}/login.html`);

$(document).ready(function() {

    // clear application storage
    // app.clearStorage();
    app.log(`${app.apiUrl}/login`);



    $('#loginForm').on('submit', function(event) {
        event.preventDefault();

        // Show the spinner
        $('.overlay').show(); 

        // Get form data
        let email = $('#email').val();
        let password = $('#password').val();

        const formData = {
            email: email,
            password: password,
        };

        console.log(formData);

        $.ajax({
            url: `${app.apiUrl}/login`,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {

                console.log(response);
                alert('Login successful: ' + response.message);


                // Assuming the response contains the user data
                localStorage.setItem('token', JSON.stringify(response.access_token));
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('roles', JSON.stringify(response.data.roles));
                localStorage.setItem('role', JSON.stringify(response.data.roles[0].role));



                // Redirect to dashboard
                // window.location.href = `${app.url}/dashboard.html`;
                // app.redirect("/patients/index.html", app.offline);

                // console.log(response);
                // console.log(response.success);
                // console.log(response.message);
                // console.log(response.data);
                // console.log(response.access_token);

            },
            error: function(error) {

                // alert('Login failed: ' + error.responseText);
                console.log(error);
                alert('login failed: ' + error.responseJSON.message + "\n" 
                    + error.responseJSON.error + "\n\t\n" + JSON.stringify(error.responseJSON.errors)
                );

                // console.log(error.responseJSON.success);
                // console.log(error.responseJSON.message); 
                // console.log(error.responseJSON.error);
                // console.log(error.responseJSON.errors || error.responseJSON.error);

                // console.log(JSON.stringify(error.responseJSON.message));



            },
            complete: function(e) {
                // Hide the spinner
                $('.overlay').hide(); 

                console.log(e);
                alert('Login complete: ' + e);    
            }
        });
    });
});