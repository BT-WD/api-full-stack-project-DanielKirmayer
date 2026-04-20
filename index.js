const moodButtons = document.querySelectorAll(".mood-btn");
const catImage = document.getElementById("cat-image");
const saveBtn = document.getElementById("save-btn");

async function fetchCatImage() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=1&mime_types=jpg,png");
        if (!response.ok) throw new Error(response.status);
        const data = await response.json();
        catImage.src = data[0].url;
    } catch (error) {
        console.error(error);
        catImage.src = "placeholder.jpg";
    }
}

moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        fetchCatImage();
    });
});

saveBtn.addEventListener("click", () => {
    const url = catImage.src;
    if (!url || url.includes("placeholder")) return;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(url);
    localStorage.setItem("favorites", JSON.stringify(favorites));
});
