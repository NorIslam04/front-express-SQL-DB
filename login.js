document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('https://express-sql-db.vercel.app/login', {
        email: email,
        password: password
    })
    .then(response => {
        // Stocker le token JWT ou autre information de session
        localStorage.setItem('token', response.data);
        // Rediriger vers la page de profil
        window.location.href = 'profil.html';
    })
    .catch(error => {
        console.error('Erreur de connexion:', error);
    });
});