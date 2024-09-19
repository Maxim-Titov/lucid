$(document).ready(function() {
    $('#feedback').on('submit', function(event) {
        const fields = [
            { element: $('input[name=name]'), errorMessage: "Це поле має бути заповненим" },
            { element: $('input[name=email]'), errorMessage: "Це поле має бути заповненим", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, invalidMessage: "Адреса електронної пошти введена не правильно" },
            { element: $('input[name=subject]'), errorMessage: "Це поле має бути заповненим" },
            { element: $('textarea[name=message]'), errorMessage: "Це поле має бути заповненим" },
        ];

        let isValid = true;

        fields.forEach(field => {
            const value = field.element.val().trim();
            if (value === '') {
                field.element.addClass('error');
                isValid = false;
                event.preventDefault();
            } else if (field.pattern && !field.pattern.test(value)) {
                field.element.addClass('error').val('');
                isValid = false;
                event.preventDefault();
            } else {
                field.element.removeClass('error');
            }
        });

        if (isValid) {
            alert("Your message has been sent");
        }
    });
});