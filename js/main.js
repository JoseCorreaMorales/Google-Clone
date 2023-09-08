    document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const queryInput = document.querySelector('input[name="q"]');

    searchForm.addEventListener("submit", function(event) {
      event.preventDefault();
      doSearch();
    });

    queryInput.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) { // Verifica si la tecla presionada es "Enter" (código de tecla 13)
        event.preventDefault();
        doSearch();
      }
    });

    function doSearch() {
      const query = queryInput.value.trim();

      if (query !== "") {
        const bingSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(bingSearchUrl, "_blank");
      }
    }
  });

