 function getCategories(){
    return  axios.get('http://localhost:8088/categories')
}
async function getTopics(){
    document.querySelector(".menu--active").removeAttribute("class");
    document.getElementById("topics").setAttribute("class", "menu--active");
  let categories=(await getCategories()).data;
  let html=`
    <div class="container-fluid-checkbox"><p>`;
    for (let i = 0; i < categories.length; i++) {
       html+=`
       <div class="item-checkbox">
       <input type="checkbox" class="btn-check" id="btn-check-outlined_${i}" autocomplete="off">
       <label class="btn btn-outline-primary" for="btn-check-outlined_${i}"> ${categories[i].name}</label><br>
       </div>
      `
    }
    html+=`
      </p>
      </div>
      <center>
      <div >
        <button class="btn btn-primary"> <i class="fa fa-search" aria-hidden="true"></i>Search</button>
      </div>
      </center>
      <div class="main-topics">
          <div class="item-image">
          <img src="/img/hero-slider/1.jpg" alt="">
          </div>
          <div class="item-image">
          <img src="/img/hero-slider/2.jpg" alt="">
          </div>
          <div class="item-image">
          <img src="/img/hero-slider/3.jpg" alt="">
          </div>
          <div class="item-image">
          <img src="/img/hero-slider/1.jpg" alt="">
          </div>
      </div>
`


  document.getElementById("body-main").innerHTML=html;

}