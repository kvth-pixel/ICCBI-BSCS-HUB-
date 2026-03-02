console.log("Website Loaded Successfully!");
document.getElementById("exploreBtn").addEventListener("click", function() {
    alert("Redirecting to Resources Page...");
});
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
