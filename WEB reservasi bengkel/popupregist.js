document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.querySelector('button[type="submit"]');
    const popup = document.getElementById('popup');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');

 
    registerButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        popup.style.display = 'flex'; 
    });


    confirmYes.addEventListener('click', () => {
        const username = usernameInput.value;
        const email = emailInput.value;


        localStorage.setItem('username', username);
        localStorage.setItem('email', email);

        popup.style.display = 'none'; 


        alert("Registrasi berhasil: Silakan login.");


        window.location.href = "halaman_login.html";
    });


    confirmNo.addEventListener('click', () => {
        popup.style.display = 'none'; 
    });
});
