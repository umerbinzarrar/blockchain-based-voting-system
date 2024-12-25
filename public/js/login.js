document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Logging in...");
    window.location.href = "/home.html";

});

document.querySelector(".secondary-btn").addEventListener("click", function () {
    alert("Redirecting to Sign Up...");
    // Add logic to redirect to the signup page
});
