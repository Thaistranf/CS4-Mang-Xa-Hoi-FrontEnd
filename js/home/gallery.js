function showGallery(){
    if (getUser()){
        axios.get("http://localhost:8088/images/" + `${getUser().id}`, getToken()).then(res => {
            let dataListImage = res.data;
            // console.log(dataListImage)
            axios.get("http://localhost:8088/categories", getToken()).then(res => {
                let dataListCategory = res.data;
                let html = `
                 <header class="header">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-sm-4 col-md-3 order-2 order-sm-1">
                      <div class="header__social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                      </div>
                    </div>
                    <div class="col-sm-4 col-md-6 order-1  order-md-2 text-center">
                    <a href="" class="site-logo">
                    <h3>Moments</h3>
                    </a>
                    </div>
                    <div class="col-sm-4 col-md-3 order-3 order-sm-3">
                      <div class="header__switches" id="loginIcon">
                      </div>
                    </div>
                  </div>
                  <nav class="main__menu">
                    <ul class="nav__menu">
                      <li><a href="" onclick="getAll()">Home</a></li>
                      <li><a href="javascript:" onclick="showProfile()">Profile</a></li>
                      <li><a href="javascript:" onclick="showGallery()" class="menu--active">Gallery</a></li>
                      <li><a href="javascript:" onclick="showBlog()">Blog</a>
                      <li><a id="topics" href="javascript:" onclick="getTopics()">Topics</a></li>
                      </li>
                    </ul>
                  </nav>
                </div>
              </header>
               <!-- About Page -->
              <div class="gallery__page" id="body-main">
                <div style="margin-bottom: 20px">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg" onclick="showFormAddNewImage()">Add</button>
                </div>
                <div class="gallery__warp">
                  <div class="row">`

                for (let i = 0; i < dataListImage.length; i++) {
                    html += `

                 <div class="col-lg-3 col-md-4 col-sm-6">
                      <a onclick="showPostDetail(${dataListImage[i].id})"  href="javascript:" data-fresco-group="gallery" class="gallery-item">
                        <img src="${dataListImage[i].imageLink}" alt="">
                      </a>
                 </div>`
                }

                html += `
                </div>
                    </div>
                  </div>
                  <!-- About Page end -->
                
                  <!-- Search Begin -->
                  <div class="search-model">
                    <div class="h-100 d-flex align-items-center justify-content-center">
                      <div class="search-close-switch">+</div>
                      <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here.....">
                      </form>
                    </div>
                  </div>
                  <!-- Search End -->`
                document.getElementById("main").innerHTML = html
                showIconLogin()
            })
        })
    }
    else {
        showFormLogin()
    }
}
function showFormAddNewImage(){
    let str = `
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modal-gallery">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">                
                      <!--Modal header-->
                      <div class="modal-header">
                        <h5 class="modal-title" id="addImageFormLabel"><i class="fa fa-picture-o" aria-hidden="true"></i>New Image</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()">
                          <i class="fa fa-window-close" aria-hidden="true"></i>
                        </button>
                      </div>              
                      <!--Modal body-->
                      <div class="modal-body" id="showCategories"> 
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="exampleInput1">Image</label>
                                        <input type="file" id="fileButton" onchange="uploadImage(event)">
                                    </div>
                                    <!--Hiển thị ảnh để xem trước-->
                                        <div id="imgDiv"></div>
                                </div>
                                <div class="col-lg-1"></div>
                                <div class="col-lg-5">
                                        <div class="form-group">
                                            <label for="exampleInput1">Name</label>
                                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name">            
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInput1">Description</label>
                                            <input type="text" class="form-control" id="description" aria-describedby="emailHelp" placeholder="Description">            
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInput1">Location</label>
                                            <input type="text" class="form-control" id="location" aria-describedby="emailHelp" placeholder="Location">            
                                          </div>
                                          <div class="btn-categories">
                                           <button onclick="showAllCategories()"><span>Categories</span></button>
        
                                          </div>
                                          <div class="form-group">
                                             <!--Giá trị (Link ảnh) sẽ vào đây-->
                                             <input type="hidden" id="image" value="">          
                                          </div>
                                </div>
                            </div>
                        </div>
   
                      <!--Modal footer-->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Close</button>
                        <button type="button" class="btn btn-primary" onclick="saveNewImage()">Save</button>
                      </div>
                    </div>
                  </div>
                </div>`
    document.getElementById("login-modal").innerHTML=str
    $("#modal-gallery").modal("show");
}

function saveNewImage(){
    let data = JSON.parse(localStorage.getItem("dataImage"))
    axios.post("http://localhost:8088/images/create", data).then(() => {
        console.log(data)
        $("#modal-gallery").modal("toggle");
        showGallery();
    })
    localStorage.removeItem("dataImage");
}

function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            console.log(downloadURL)
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="">`
            document.getElementById("image").value = downloadURL;
        });
}

function closeModal(){
    $("#modal-gallery").modal("hide")
}
async function showAllCategories(){
    let data = JSON.stringify({
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        location: document.getElementById("location").value,
        imageLink: document.getElementById("image").value,
        user: {
            id: getUser().id
        }
    })
    localStorage.setItem("dataImage", data)
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
        <button class="btn btn-primary" onclick="backModal()">Save</button>
      </div>
      </center>
      <div class="main-topics" id="searchImage">
          
      </div>
        `
 document.getElementById("showCategories").innerHTML=html;
}

function backModal(){
    let data = JSON.parse(localStorage.getItem("dataImage"));
    let listCategory=[];
    let category=document.getElementsByClassName("btn-check");
    for (let i = 0; i < category.length; i++) {
        if (category[i].checked){
            listCategory.push({id:category[i].value})
        }
    }
    console.log(listCategory)
    data.categories = listCategory;
    localStorage.setItem("dataImage", JSON.stringify(data));
    document.getElementById("showCategories").innerHTML=`
    <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="exampleInput1">Image</label>
                                        <input type="file" id="fileButton" onchange="uploadImage(event)">
                                    </div>
                                    <!--Hiển thị ảnh để xem trước-->
                                        <div id="imgDiv">
                                        <img src="${data.imageLink}">
                                        </div>
                                </div>
                                <div class="col-lg-1"></div>
                                <div class="col-lg-5">
                                        <div class="form-group">
                                            <label for="exampleInput1">Name</label>
                                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" value="${data.name}">            
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInput1">Description</label>
                                            <input type="text" class="form-control" id="description" aria-describedby="emailHelp" placeholder="Description" value="${data.description}">            
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInput1">Location</label>
                                            <input type="text" class="form-control" id="location" aria-describedby="emailHelp" placeholder="Location" value="${data.location}">            
                                          </div>
                                          <div class="btn-categories">
                                           <button onclick="showAllCategories()"><span>Categories</span></button>
        
                                          </div>
                                          <div class="form-group">
                                             <!--Giá trị (Link ảnh) sẽ vào đây-->
                                             <input type="hidden" id="image" value="${data.imageLink}">          
                                          </div>
                                </div>
                            </div>
                        </div>
   
                      <!--Modal footer-->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Close</button>
                        <button type="button" class="btn btn-primary" onclick="saveNewImage()">Save</button>
                      </div>
    `

}