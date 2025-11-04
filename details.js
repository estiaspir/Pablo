const id = new URLSearchParams(window.location.search).get('id');
const likes = new URLSearchParams(window.location.search).get('likes');
console.log(id);

const renderDetails = async ()=>{
    const res = await fetch('http://localhost:3000/USERS/'+id);
    const user = await res.json();
    console.log(user);
    const template = `<h1>${user.firstName + " " + user.lastName}</h1>
                    <p>${user.details}</p>
                     <p>${user.email}</p>
                     <p>${user.likes}</p>`
                   
        document.querySelector('.thedetails').innerHTML= template

}

        const deletbut = document.querySelector('.but')
        deletbut.addEventListener('click', async () => {
  const res = await fetch('http://localhost:3000/USERS/' + id, {
    method: 'DELETE'
  });
    window.location.replace('http://127.0.0.1:5500/Pablo/login.html');
            
        })




        const likebut = document.querySelector('.like')
        const likeme = async()=>{
          const thelikes = {
              likes: Number(likes)  + 1 
            }

          await fetch('http://localhost:3000/USERS/' + id, {

            method: 'PATCH',
           
            body: JSON.stringify(thelikes),
            
            headers: {'Content-Type':'applicaton/json'}
          })
          document.querySelector('.userid').innerHTML = likes
        }

        likebut.addEventListener('click', likeme)




window.addEventListener('DOMContentLoaded', ()=>{
    renderDetails()
})