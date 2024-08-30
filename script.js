document.addEventListener('DOMContentLoaded', function () {
    const openDrawerBtn = document.getElementById('openDrawerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawer = document.getElementById('drawer');
    const panel = document.querySelector('.panel');
    const message = document.createElement('div');

    // Configura a mensagem
    message.className = 'message';
    message.innerHTML = `
        <p>Entre na nossa comunidade e conheça diversos Billie Stans</p>
        <button onclick="window.location.href='https://chat.whatsapp.com/CVFEPct6oAi2YSWc8wDQEE'">Junte-se a nós</button>
    `;
    document.body.appendChild(message);

    openDrawerBtn.addEventListener('click', function () {
        drawer.classList.add('open');
    });

    closeDrawerBtn.addEventListener('click', function () {
        drawer.classList.remove('open');
    });

    panel.addEventListener('click', function () {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none'; // Esconde a mensagem após 5 segundos
        }, 5000); // 5 segundos
    });
});
