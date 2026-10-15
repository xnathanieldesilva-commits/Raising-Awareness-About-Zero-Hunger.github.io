function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   if (element.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
window.onload = function() {
    var savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
    }
};

function openTab(event, tabName) {

    var panels = document.querySelectorAll(".tab-content");

    panels.forEach(function(panel) {
        panel.classList.remove("active");
    });

    var buttons = document.querySelectorAll(".tab-button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    document.getElementById(tabName).classList.add("active");

    event.currentTarget.classList.add("active");
}  
