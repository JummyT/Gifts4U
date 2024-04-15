document.getElementById('contact-form').addEventListener('submit', (e) => {

    const formData = new FormData(e.target);

    if (!formData.get('fullName') || !formData.get('phoneNumber') || !formData.get('email')) {
        alert('Please fill in all the fields');
        return;
    }

    const name = formData.get('fullName');
    const phoneNumber = formData.get('phoneNumber');
    const email = formData.get('email');


    alert(`Thank you ${name} for contacting us. We will get back to you at ${email} or ${phoneNumber} shortly!`);
    
})