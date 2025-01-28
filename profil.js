document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html';
        return;
    }
    axios.get('http://localhost:3001/profil', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        const profileInfo = document.getElementById('profileInfo');
        profileInfo.innerHTML = `
            <p><strong>Nom d'utilisateur:</strong> ${response.data.user.username}</p>
            <p><strong>Email:</strong> ${response.data.user.email}</p>
        `;
    })
    .catch(error => {
        console.error('Erreur de récupération du profil:', error);
        window.location.href = 'login.html';
    });

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    });
});