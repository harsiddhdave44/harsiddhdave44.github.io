const token = "1eaa0616-7207-4490-a8e2-a544fa6fe3a8";
$(document).on('click', '#send_mail' , function(){
    var notyf = new Notyf();
    if($("#sender_email").val() == "" || $("#sender_name").val() == "" || $("#sender_msg").val() == ""){
        notyf.error('You must fill out the form before moving forward');
    } else {    
        Email.send({
            SecureToken : token,
            To : 'savanibharat07@gmail.com',
            From : $("#sender_email").val(),
            Subject : $("#sender_name").val(),
            Body : $("#sender_msg").val()
        }).then( () => {
            notyf.success('Thank you your message has been sent :)');
            $("#sender_email").val('');
            $("#sender_name").val('');
            $("#sender_msg").val('');  
        }).catch(() => {
            notyf.error('There is some internal error please try again :(');
        });
    }
})