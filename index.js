$(document).ready(function () {
    $('#submit').click(getData);
    function getData(event) {
        event.preventDefault();
        var input = encodeURIComponent($('#search').val().trim())
        //console.log(input)
        var xhr = $.get(`https://api.giphy.com/v1/gifs/search?api_key=yI34f6CbEH1WmJlu2CactEwQfto6LTgc&q=${input}&limit=20&offset=0&rating=G&lang=en`)
        xhr.done(function (response) {
            var gifs = response.data
            console.log(response)
            $('#textBox').empty();
            for (gif of gifs) {
                $('#textBox').append(`<a href='${gif.images.downsized_large.url}' target="_blank"><img src='${gif.images.downsized_large.url}'></a>`);
            };
        });
        xhr.fail(function () {
            alert('An error occurred, please try again later');
        });
    };
});