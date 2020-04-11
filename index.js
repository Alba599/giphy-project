$(document).ready(() => {
    $("#submit").click(() => {
        let userInput = $("#search").val();
        // alert(userInput)
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=yI34f6CbEH1WmJlu2CactEwQfto6LTgc&q=${userInput}&limit=20&offset=0&rating=G&lang=en`
        })
            .done((res) => {
                console.log(res);
                let giph = res.data;
                $.each(giph, (i, e) => {
                    console.log(e)
                    let url = e.images.downsized_large.url
                    console.log("url", url)
                    console.log(i)
                    $("body").append(`<img src="${url}" alt= "giph url" />`)
                    $("body").append(`<br>`)
                })
            })

    })
})