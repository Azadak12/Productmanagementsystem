let products = [
    { title: "Smart Coffee Maker", status: "accepted", description: "A coffee maker that brews automatically.", comments: "Looks promising!" },
    { title: "AI Vacuum Cleaner", status: "pending", description: "A vacuum that learns room layouts.", comments: "Need more research." },
    { title: "Solar Backpack", status: "rejected", description: "A backpack with solar panels.", comments: "Too expensive." },
    { title: "Wireless Charger", status: "accepted", description: "A fast wireless charging solution.", comments: "Great idea!" },
    { title: "Portable Blender", status: "pending", description: "A compact blender for traveling.", comments: "Good for small markets." }
];

let currentEditIndex = -1;

function loadProducts(filter) {
    const table = document.getElementById('productTable');
    table.innerHTML = '';  // Clear existing table rows

    products
        .filter(product => filter === 'all' || product.status === filter)
        .forEach((product, index) => {
            const row = `<tr>
                <td>${product.title}</td>
                <td>${product.status.charAt(0).toUpperCase() + product.status.slice(1)}</td>
                <td>${product.description}</td>
                <td>${product.comments}</td>
                <td><button onclick="editProduct(${index})">Edit</button></td>
            </tr>`;
            table.insertAdjacentHTML('beforeend', row);
        });
}

document.getElementById('statusFilter').addEventListener('change', (e) => {
    loadProducts(e.target.value);
});

function editProduct(index) {
    currentEditIndex = index;
    const product = products[index];

    document.getElementById('editTitle').value = product.title;
    document.getElementById('editStatus').value = product.status;
    document.getElementById('editDescription').value = product.description;
    document.getElementById('editComments').value = product.comments;

    document.getElementById('editForm').style.display = 'block';
}

document.getElementById('productEditForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const updatedProduct = {
        title: document.getElementById('editTitle').value,
        status: document.getElementById('editStatus').value,
        description: document.getElementById('editDescription').value,
        comments: document.getElementById('editComments').value,
    };

    products[currentEditIndex] = updatedProduct;
    loadProducts(document.getElementById('statusFilter').value);

    document.getElementById('editForm').style.display = 'none';
});

document.querySelector('.close').onclick = function() {
    document.getElementById('editForm').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('editForm');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Load all products by default
loadProducts('all');
