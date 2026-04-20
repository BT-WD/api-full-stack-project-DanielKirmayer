const container = document.getElementById("favorites-container");

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    container.innerHTML = "";
    favorites.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.className = "favorite-img";
        container.appendChild(img);
    });
}

loadFavorites();
