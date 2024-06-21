

console.log(`processing: ${app.url}/register.html`);

$(document).ready(function() {

    console.log(`${app.apiUrl}/register`);
    localStorage.setItem('token', "");
    localStorage.setItem('user', "");
    app.log(`${app.apiUrl}/register`);



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

                alert('Registration successful: ' + response.message);

                // Assuming the response contains the user data
                localStorage.setItem('token', JSON.stringify(response.access_token));
                localStorage.setItem('user', JSON.stringify(response.data));

                // window.location.href = `${app.url}/dashboard.html`;
                app.location("/dashboard.html");

                // console.log(response);
                // console.log(response.success);
                // console.log(response.message);
                // console.log(response.data);
                // console.log(response.access_token);

                console.log(JSON.stringify(response.data));

                alert('Registration user: ' + response.data);
                alert('Registration token: ' + response.access_token);


            },
            error: function(error) {

                // alert('Registration failed: ' + error.responseText);
                alert('Registration failed: ' + error.responseJSON.message + "\n" 
                    + error.responseJSON.error + "\n\t\n" + JSON.stringify(error.responseJSON.errors)
                );

                console.log(error.responseJSON.success);
                console.log(error.responseJSON.message); 
                console.log(error.responseJSON.error);
                console.log(error.responseJSON.errors || error.responseJSON.error);

                // console.log(JSON.stringify(error.responseJSON.message));

            },
            complete: function() {
                // Hide the spinner
                $('.overlay').hide(); 
            }
        });
    });
});