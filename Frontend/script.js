<script>
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Here you can implement real search functionality
        } else {
            alert('Please enter a search query!');
        }
    });
</script>
