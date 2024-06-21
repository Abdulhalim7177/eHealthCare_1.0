

console.log(`${app.url}/register.html`);

$(document).ready(function() {

    console.log(`${app.apiUrl}/register`);
    localStorage.setItem('token', "");


    $('#registerForm').on('submit', function(event) {
        event.preventDefault();

        // Show the spinner
        $('.overlay').show(); 

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

                alert('Registration successful: ' + response.responseJSON);
                // Assuming the response contains the user data
                localStorage.setItem('token', JSON.stringify(response.access_token));
                app.token = response.access_token
                localStorage.setItem('user', JSON.stringify(response.data));
                app.user = response.data

                // window.location.href = 'dashboard.html';

                console.log(response);
                // console.log(response.success);
                // console.log(response.message);
                console.log(response.data);
                // console.log(response.access_token);

                console.log(JSON.stringify(response.data));

                alert('Registration user: ' + response.data);
                alert('Registration token: ' + response.access_token);


            },
            error: function(error) {

                alert('Registration failed: ' + error.responseText);

                console.log(error.responseJSON);
                console.log(error.responseJSON.message); //
                console.log(error.responseJSON.error);
                console.log(error.responseJSON.errors);

                console.log(JSON.stringify(error.responseJSON.message));

            },
            complete: function() {
                // Hide the spinner
                $('.overlay').hide(); 
            }
        });
    });
});