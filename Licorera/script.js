document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'admin', password: 'adminpassword' },
        { username: 'guest', password: 'guestpass' }
    ];

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        const foundUser = users.find(user => user.username === username && user.password === password);

        if (foundUser) {
            messageElement.style.color = 'green';
            messageElement.textContent = `Welcome, ${foundUser.username}!`;
            // In a real application, you would typically redirect the user
            // window.location.href = '/dashboard'; 
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = 'Invalid username or password.';
        }
    });
});