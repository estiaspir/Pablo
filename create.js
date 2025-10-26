const form = document.querySelector('form');

const ctrateUser = async (e)=>{
    e.preventDefault();
    const doc = {
        firstName : form.firstName.value,
        lastName: form.lastName.value,
        lat: form.lat.value,
        long: form.long.value,
        email: form.email.value,
        likes: 0,
        details: " To be added"
    }

    console.log(doc);
    await fetch('http://localhost:3000/USERS',{
        method: 'POST',
        body: JSON.stringify(doc),
        headers: {'Content-Type':'applicaton/json'}
    });
    window.location.replace('http://127.0.0.1:5500/Pablo/login.html')
}

form.addEventListener('submit', ctrateUser);
