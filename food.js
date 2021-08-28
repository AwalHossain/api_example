const searchInput = document.getElementById('inputValue')
const photo = document.getElementById('photo')
const container = document.getElementById('container')
const showDetails = document.getElementById('showDetails')
const searchFood = () =>{
    const searchItem = searchInput.value
    console.log(searchItem);
    if(searchItem == ''){
        console.log("true");
        photo.innerHTML = `<h3>Sorry input something</h3>`
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
        .then (response => response.json())
        .then(data => showFoodItem(data))
        .catch(error => displayError(error))
        searchInput.value=''
    }
const displayError = ()=>{
    console.log("error");
    photo.innerHTML = `<h3>Sorry input something</h3>`
}
 }



// const fetchApi =() =>{
//     fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//     ')
// }

const showFoodItem = (foodItem) =>{
console.log(foodItem.meals);
const recipie = foodItem.meals;
// console.log(recipie.length);
showDetails.textContent = ''
photo.textContent = ''
if(foodItem.length = 0  || recipie.length == null){
    photo.innerHTML = `<h3>Sorry input something</h3>`
    console.log("hit");

}
else{

    recipie.forEach(item =>{
        const div = document.createElement('div');
        div.classList.add( "col-4", "text-center")
        div.setAttribute( `onclick`, `loadMeals(${item.idMeal})`)
          div.innerHTML =`
          <img width="350px" class="img-fluid" src="${item.strMealThumb}">
          <h3>${item.strMeal}</h3>
        <p>${item.strInstructions.slice(0, 200)}</p>
          `
          console.log("bold");
     
    
        photo.appendChild(div)
    })
}


}

const loadMeals = (mealId) =>{
console.log(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
.then(response => response.json())
.then(data => displayDetails(data))
}

const displayDetails = (details) =>{
    console.log();
    showDetails.textContent = ''
    const mealDetails = details.meals[0];
    showDetails.innerHTML = `
    <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="${mealDetails.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `
}