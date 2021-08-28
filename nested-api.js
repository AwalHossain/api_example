const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => dispalyBuddy(data))
}

randomUser()
const user = document.getElementById('user')
const dispalyBuddy = (data) =>{
    // console.log(data.results);
    for(const single of data.results){
        console.log(single.name.first);
        user.innerHTML +=`<strong>name: </strong> ${single.name.first} <br> `
    }
    // 
}