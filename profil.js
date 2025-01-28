document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'index.html';
        return;
    }
    axios.get('https://express-sql-db.vercel.app/profil', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        const profileInfo = document.getElementById('profileInfo');
        profileInfo.innerHTML = `
            <p><strong>Nom d'utilisateur:</strong> ${response.data.username}</p>
            <p><strong>Email:</strong> ${response.data.email}</p>
        `;
    })
    .catch(error => {
        console.error('Erreur de récupération du profil:', error);
        window.location.href = 'index.html';
    });

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('token');
        window.location.href = 'index.html';
    });
});