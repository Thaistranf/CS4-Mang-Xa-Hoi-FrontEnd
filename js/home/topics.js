function getCategories() {
    return axios.get('http://localhost:8088/categories')
}

async function getTopics() {
    if (getUser()) {
        document.querySelector(".menu--active").removeAttribute("class");
        document.getElementById("topics").setAttribute("class", "menu--active");
        let categories = (await getCategories()).data;
        let html = `
    <div class="container-fluid-checkbox"><p>`;
        for (let i = 0; i < categories.length; i++) {
            html += `
       <div class="item-checkbox">
       <input type="checkbox" class="btn-check" id="btn-check-outlined_${i}" autocomplete="off" value="${categories[i].id}">
       <label class="btn btn-outline-primary" for="btn-check-outlined_${i}"> ${categories[i].name}</label><br>
       </div>
      `
        }
        html += `
      </p>
      </div>
      <center>
      <div >
        <button class="btn btn-primary" onclick="searchTopics()"> <i class="fa fa-search" aria-hidden="true"></i>Search</button>
      </div>
      </center>
      <div class="main-topics" id="searchImage">
          
      </div>
        `
        document.getElementById("body-main").innerHTML = html;
    } else {
        showFormLogin()
    }
}

function checkedSearch() {
    let arr = [];
    let checkboxes = document.getElementsByClassName("btn-check")
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            arr.push(checkboxes[i].value)
        }
    }
    return arr;
}

function searchTopics() {
    let arr = checkedSearch();
    let html = '';
    axios.post("http://localhost:8088/images/findimagebycategory", arr).then(function (res) {
            let dataResult = res.data;
            for (let i = 0; i < dataResult.length; i++) {
                html += `<div class="item-image">
                         <img src="${dataResult[i].imageLink}" alt="">
                         </div>`
            }
            document.getElementById("searchImage").innerHTML = html;
        }
    )
}
