document.addEventListener("DOMContentLoaded", function() {
  // Fetch and inject the footer
  fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
      // Create a temporary container to parse the HTML
      const temp = document.createElement('div');
      temp.innerHTML = data;

      // Get the footer element from the fetched data
      const footerContent = temp.querySelector('footer');

      // Replace all footer elements in the main document with the fetched footer
      document.querySelectorAll('footer').forEach(footer => {
        if (footerContent) {
          footer.outerHTML = footerContent.outerHTML;
        } else {
          console.error('Footer content not found in fetched HTML.');
        }
      });
    })
    .catch(error => console.error("Error fetching footer:", error));
});