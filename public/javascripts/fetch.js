document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    fetch('/api/prices')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('priceTable').getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${row.year}</td><td>${row.price}</td>`;
                tbody.appendChild(tr);
            });
        });
});