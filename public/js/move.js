const form = document.getElementById('moveForm')

function removeAllChildren() {
    while (form.hasChildNodes()) {
        form.removeChild(form.firstChild);
    }
}

function put(locations, game) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locations_id: locations })
    };
    fetch(`api/games/${game}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log());
    location.reload();
}




function where(id) {
    fetch("/api/locations")
        .then(function (response) {
            return response.json();
        })
        .then(function (data3) {
            let locations = data3
            gameIndexId = id
            for (let i = 0; i < locations.length; i++) {
                const button = document.createElement("button");
                button.textContent = locations[i].name
                button.setAttribute("class", "") // put css classes here
                form.appendChild(button)
                button.addEventListener('click', function (event) {
                    event.preventDefault();
                    removeAllChildren()
                    put(locations[i].id, gameIndexId)
                })
            }
        })

}







function move(id) {
    fetch("/api/locations/withGames")
        .then(function (response) {
            return response.json();
        })
        .then(function (data3) {
            let locations = data3
            locationIndexId = id - 1
            if (locations[locationIndexId].games.length !== 0) {
                removeAllChildren()
                for (let i = 0; i < locations[locationIndexId].games.length; i++) {
                    const button = document.createElement("button");
                    button.textContent = locations[locationIndexId].games[i].name
                    button.setAttribute("class", "") // put css classes here
                    form.appendChild(button)
                    button.addEventListener('click', function (event) {
                        event.preventDefault();
                        removeAllChildren()
                        where(locations[locationIndexId].games[i].id)
                    })
                }
            } else {
                alert("No game in location!")
            }

        })

}




fetch("/api/locations")
    .then(function (response) {
        return response.json();
    })
    .then(function (data3) {
        let locations = data3

        for (let i = 0; i < locations.length; i++) {
            const button = document.createElement("button");
            button.textContent = locations[i].name
            button.setAttribute("class", "") // put css classes here
            form.appendChild(button)
            button.addEventListener('click', function (event) {
                event.preventDefault();
                move(locations[i].id)
            })
        }
    })