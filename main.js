// Handle Form Submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    // Set confirmation details
    document.getElementById('confirm-name').innerText = name;
    document.getElementById('confirm-email').innerText = email;
    document.getElementById('confirm-date').innerText = date;

    // Show success section and hide form section
    document.getElementById('form-section').classList.add('hidden');
    document.getElementById('success-section').classList.remove('hidden');
});

// Reset the form
function resetForm() {
    document.getElementById('booking-form').reset();
    document.getElementById('form-section').classList.remove('hidden');
    document.getElementById('success-section').classList.add('hidden');
}