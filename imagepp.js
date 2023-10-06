// Get the modal and image elements
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-image");
var img = document.getElementById("profile-picture");

// Open the modal when the image is clicked
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Close the modal when the close button or outside the modal is clicked
var span = document.getElementsByClassName("close")[0];
modal.onclick = function(event) {
    if (event.target === modal || event.target === span) {
        modal.style.display = "none";
    }
}

// You can also close the modal with the Escape key
document.onkeydown = function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
}
