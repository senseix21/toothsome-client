

export const getUserToken = (email) => {
    fetch(`https://toothsome-server.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
            }
        })
        .catch(err => console.error(err))
}

export const addUserToDb = (name, email) => {
    const user = { name, email };
    fetch(`https://toothsome-server.vercel.app/users`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(user),
    })
        .then(response => response.json())
        .then(data => {
            if (data.acknowledged) {
                alert('User added successfully')
            }
            getUserToken(email);
        })
        .catch(err => console.error(err))
}