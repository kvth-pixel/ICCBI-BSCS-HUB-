console.log("Website Loaded Successfully!");
document.getElementById("exploreBtn").addEventListener("click", function() {
    alert("Redirecting to Resources Page...");
});
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
function saveAnnouncement(text) {
    localStorage.setItem("announcement", text);
}

function loadAnnouncement() {
    const saved = localStorage.getItem("announcement");
    if (saved) {
        document.getElementById("announcementBox").innerText = saved;
    }
}

window.onload = loadAnnouncement;
