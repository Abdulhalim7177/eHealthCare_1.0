

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
                
                // clear application storage
                localStorage.clear();


                // Assuming the response contains the user data
                localStorage.setItem('token', JSON.stringify(response.access_token));
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('role', JSON.stringify(response.data.roles || 'patients'));
                localStorage.setItem('roles', JSON.stringify(response.data.roles));
                localStorage.setItem('auth_time', JSON.stringify(Date.now()));


                // Hide the spinner
                $('.overlay').hide(); 

                // Redirect to dashboard
                // window.location.href = `${app.url}/patients/index.html`;
                app.redirect("/patients/index.html", app.offline);



            },
            error: function(error) {

                // alert('Login failed: ' + error.responseText);
                console.log(error);
                alert('login failed: ' + `${error.responseJSON.message } \n ${error.responseJSON.error}`);

            },
            complete: function() {

                console.log('process complete');

                // Hide the spinner
                $('.overlay').hide(); 

            }
        });
    });
});