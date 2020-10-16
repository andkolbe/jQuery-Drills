$('#btnSubmit').click(function (e) {

    //Alert the value of the text field when the button is clicked
    //alert($('[type="text"]').val());

    e.preventDefault();

    //Put text in the text field in an h2 inside of the div
    /*
    $('<h2>' + $('[type="text"]').val() + '</h2>').appendTo('div');

    //mouseover h2 to give it a new background color and border radius
    $('h2').mouseover(function () {
        $('h2').css({
            'background-color': 'red',
            'border-radius': '50%'
        });
    });
    */
    
    //When the user submits the form, append the text as a li to the ul
    $('<li>' + $('[type="text"]').val() + '</li>').appendTo('ul');

    //Assign li a random color when clicked
    $('li').click(function (e) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        $(e.target).css('color', `rgb(${r}, ${g}, ${b})`);
    });

    //Remove the li when double clicked
    $('li').dblclick(function (e) {
        $(e.target).remove();
    })
    
});

//if input field contains text, enable it to be pressd
//if input filled does not contain text, do not enable it to be pressed
document.addEventListener('input', function () {
    $('#btnSubmit').removeAttr('disabled')
});

// append div to body
//$('body').append('<div>'); //OR $('<div>')appendTo('body');

//append ul to body
$('body').append('<ul>'); //OR $('<ul>')appendTo('body');




//const textValue = $('[type="text"]').val()   DIDN'T WORK