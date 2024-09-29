const products = [
    { title: "Smart Coffee Maker", status: "accepted", description: "A coffee maker that brews automatically.", comments: "Looks promising!" },
    { title: "AI Vacuum Cleaner", status: "pending", description: "A vacuum that learns room layouts.", comments: "Need more research." },
    { title: "Solar Backpack", status: "rejected", description: "A backpack with solar panels.", comments: "Too expensive." },
    { title: "Wireless Charger", status: "accepted", description: "A fast wireless charging solution.", comments: "Great idea!" },
    { title: "Portable Blender", status: "pending", description: "A compact blender for traveling.", comments: "Good for small markets." }
];

function loadProducts(filter) {
    const table = document.getElementById('productTable');
    table.innerHTML = '';  // Clear existing table rows

    products
        .filter(product => filter === 'all' || product.status === filter)
        .forEach(product => {
            const row = `<tr>
                <td>${product.title}</td>
                <td>${product.status.charAt(0).toUpperCase() + product.status.slice(1)}</td>
                <td>${product.description}</td>
                <td>${product.comments}</td>
            </tr>`;
            table.insertAdjacentHTML('beforeend', row);
        });
}

document.getElementById('statusFilter').addEventListener('change', (e) => {
    loadProducts(e.target.value);
});

// Load all products by default
loadProducts('all');
