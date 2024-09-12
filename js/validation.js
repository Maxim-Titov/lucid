$(document).ready(function() {
    $('#feedback').on('submit', function(event) {
        let name_field = $('input[name=name]');
        let email_field = $('input[name=email]');
        let subject_field = $('input[name=subject]');
        let message_field = $('textarea[name=message]');

        let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if ($(name_field).val() === '') {
            event.preventDefault();

            $(name_field).addClass('error');
        } else {
            $(name_field).removeClass('error');
        }

        if ($(email_field).val() === '') {
            event.preventDefault();

            $(email_field).addClass('error');
        } else {
            if (!email_pattern.test($(email_field).val())) {
                event.preventDefault();

                $(email_field).addClass('error');
                $(email_field).val('');
            } else {
                $(email_field).removeClass('error');
            }
        }

        if ($(subject_field).val() === '') {
            event.preventDefault();

            $(subject_field).addClass('error');
        } else {
            $(subject_field).removeClass('error');
        }

        if ($(message_field).val() === '') {
            event.preventDefault();

            $(message_field).addClass('error');
        } else {
            $(message_field).removeClass('error');
        }

        if ($(name_field).is(!':empty') && $(email_field).is(!':empty') && $(subject_field).is(!':empty') && $(message_field).is(!':empty')) {
            alert("Your message has been sent");
        }
    })
})