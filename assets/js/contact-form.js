document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var form = event.target;
            var formData = new FormData(form);
            
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                const successMessage = document.getElementById('successMessage');
                successMessage.style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
                form.reset();
                
                // Hide the success message after 2 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 2000);
            })
            .catch(error => {
                document.getElementById('errorMessage').style.display = 'block';
                document.getElementById('successMessage').style.display = 'none';
            });
        });
    }
});
