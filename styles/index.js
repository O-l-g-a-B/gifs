function searchMe() {
    let request = document.getElementById('request').value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=CZydw9PcANkq5vN3W3LF0Ee2PEfEi6hg&&limit=5&&q=' + request)
        .then(response => response.json())
        .then(gifs => {
            let items = gifs;
            let gifsContent = "";
            for (let i = 0; i < 5; i++) {
                gifsContent += `<div class="gifs">
            <img class="best" src="${items.data[i].images.original.url}>"
            </div>`
            }
            document.querySelector('.pictures').innerHTML = gifsContent;
            console.log(items, 'item');
        })

}