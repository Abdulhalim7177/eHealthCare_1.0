

console.log(`processing: ${app.url}/register.html`);

$(document).ready(function() {


    console.log(`${app.apiUrl}/register`);



    $('#registerForm').on('submit', function(event) {
        event.preventDefault();

        // Show the spinner
        $('.overlay').show(); 

        // Get form data
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let password_confirmation = $('#password_confirmation').val();

        const formData = {
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
        };

        console.log(formData);

        $.ajax({
            url: `${app.apiUrl}/register`,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {

                console.log(response);
                alert('Registration successful: ' + response.message);
                
                // clear application storage
                localStorage.clear();

                alert('Registered user role: ' + response.data.roles[0].role);


                // Assuming the response contains the user data
                localStorage.setItem('token', JSON.stringify(response.access_token));
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('roles', JSON.stringify(response.data.roles));
                localStorage.setItem('role', JSON.stringify(response.data.roles || 'patients'));
                // localStorage.setItem('roles', JSON.stringify(response.data.roles));
                localStorage.setItem('role', JSON.stringify(response.data.roles[0].role));
                localStorage.setItem('auth_time', JSON.stringify(Date.now()));




                // Redirect to dashboard
                app.redirect("/patients/index.html", app.offline);

                // console.log(response);
                // console.log(response.success);
                // console.log(response.message);
                // console.log(response.data);
                // console.log(response.access_token);

            },
            error: function(error) {

                // alert('Registration failed: ' + error.responseText);
                alert('Registration failed: ' + `${error.responseJSON.message } \n ${error.responseJSON.error }`);

                // console.log(error.responseJSON.success);
                // console.log(error.responseJSON.message); 
                // console.log(error.responseJSON.error);
                // console.log(error.responseJSON.errors || error.responseJSON.error);

                // console.log(JSON.stringify(error.responseJSON.message));

            },
            complete: function() {
                console.log('process complete');

                // Hide the spinner
                $('.overlay').hide(); 
            }
        });
    });
});