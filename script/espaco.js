//comeca aqui esta pinoia
const API_KEY = "4Op1ChAWJ4orUEFOxZcyCn3DEfvHVU0ObUutsXfS"

function getDate() {
    let data = document.getElementById('dateSearch').value;
    return data;
}

function call() {
    let request = '';
    request = `https://api.nasa.gov/planetary/apod?date=${getDate()}&api_key=${API_KEY}`;

    fetch(request).then(res => res.json()).then(
        function(response) {

            p = document.getElementById("descricao");
            p.innerHTML = response.explanation;

            img = document.getElementById("spacePic");
            img.src = response.url

        }
    );
}