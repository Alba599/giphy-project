$(document).ready(function () {

    $('#submit').click(getGIF);

    function getGIF() {
        $('#textBox').empty();
        var results = 0;
        var inputKeywords = $('#search').val().trim();
        if (inputKeywords == null || inputKeywords == "") {
            alert("Please enter a valid keywords to search!");
        }
        else {
            getData(event);
        }

        function getData(event) {
            event.preventDefault();
            var input = encodeURIComponent($('#search').val().trim())
            var xhr = $.get(`https://api.giphy.com/v1/gifs/search?api_key=yI34f6CbEH1WmJlu2CactEwQfto6LTgc&q=${input}&limit=20&offset=0&rating=G&lang=en`)
            xhr.done(function (response) {
                var gifs = response.data
                $('#textBox').empty();
                for (gif of gifs) {
                    $('#textBox').append(`<a href='${gif.images.downsized_large.url}' target="_blank"><img src='${gif.images.downsized_large.url}'></a>`);
                };
            });
            xhr.fail(function () {
                alert('An error occurred, please try again later');
            });
        };


    }
});

