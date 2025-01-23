document.addEventListener('DOMContentLoaded', () => {
    const loadContent = (selector, file) => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => {
                console.error(`Gagal memuat ${file}:`, error);
            });
    };

    loadContent('#sidebar', 'sidebar.html');
    loadContent('#footer', 'footer.html');
    loadContent('#main-content', 'home.html');
});
