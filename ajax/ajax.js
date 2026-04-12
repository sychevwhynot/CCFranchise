document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('franchise-form');
    const messageBox = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const formData = new FormData(form);

        fetch('./ajax/form_send.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети или сервера');
            }
            return response.json();
        })
        .then(data => {
            messageBox.className = 'form-message'; 
            messageBox.textContent = '';

            if (data.status === 'success') {
                messageBox.classList.add('success');
                messageBox.innerHTML = '<p class="small text-center">Заявка успешно отправлена! Скоро мы с вами свяжемся.</p>';
                messageBox.style.display = 'block';

                form.reset();
            } else {
                messageBox.classList.add('error');
                messageBox.innerHTML = '<p class="small text-center">Произошла неизвестная ошибка.</p>';
                messageBox.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            messageBox.className = 'form-message';
            messageBox.classList.add('error');
            messageBox.innerHTML = '<p class="small text-center">Ошибка при отправке. Проверьте интернет-соединение.</p>';
            messageBox.style.display = 'block';
        });
    });
});