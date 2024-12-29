function toggleSidePanel() {
  const sidePanel = document.getElementById("sidePanel");
  const menuBtn = document.getElementById("menuBtn");

  if (sidePanel.classList.contains("open")) {
    sidePanel.style.left = "-250px";
    sidePanel.classList.remove("open");
    menuBtn.style.zIndex = "100";
  } else {
    sidePanel.style.left = "0px";
    sidePanel.classList.add("open");
    menuBtn.style.zIndex = "-1";
  }
}

function loadPage(pageId) {
  const sections = document.querySelectorAll("section");
  const sidePanel = document.getElementById("sidePanel");
  const menuBtn = document.getElementById("menuBtn");

  sections.forEach(section => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(pageId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }

  sidePanel.style.left = "-250px";
  sidePanel.classList.remove("open");
  menuBtn.style.zIndex = "100";
}

document.getElementById("arrow").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action of the anchor
  this.classList.toggle("right"); // Toggle the 'right' class to rotate the arrow
  toggleDropdown(event); // Toggle the dropdown visibility
});

function toggleDropdown(event) {
  const dropdownContent = event.target.nextElementSibling; // Get the dropdown content
  dropdownContent.classList.toggle("show"); // Toggle the 'show' class to show/hide the dropdown
}
