function showGallery(){
    if (getUser()){
        axios.get("http://localhost:8088/images/" + `${getUser().id}`).then(res => {
            let dataList = res.data;
            console.log(dataList)
            // let imageId;
            // for (let i = 0; i < dataList.length; i++) {
            //     imageId = dataList[i].id
            // }
            // console.log(imageId)
            let str = `
              <!-- Header Section -->
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
              <!-- Header Section end -->
            
              <!-- About Page -->
              <div class="gallery__page" id="body-main">
                <div style="margin-bottom: 20px">
                    <button class="circle-icon" data-toggle="modal" data-target="#addImageForm">➕ Add</button>
                </div>
                <div class="gallery__warp">
                  <div class="row">`

            for (let i = 0; i < dataList.length; i++) {
                str += `
                 <div class="col-lg-3 col-md-4 col-sm-6">
                      <a class="gallery__item fresco" href="${dataList[i].imageLink}" data-fresco-group="gallery">
                        <img src="${dataList[i].imageLink}" alt="">
                      </a>
                 </div>`
            }

            str += `
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
            document.getElementById("main").innerHTML= str;

            // Add Image Form
            str += `
                <div class="modal fade" tabindex="-1" id="addImageForm" aria-labelledby="addImageFormLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">                
                      <!--Modal header-->
                      <div class="modal-header">
                        <h5 class="modal-title" id="addImageFormLabel">New Image</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>              
                      <!--Modal body-->
                      <div class="modal-body"> 
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
                          <div class="form-group">
                            <label for="exampleInput1">Image</label>
                            <input type="file" id="fileButton" onchange="uploadImage(event)">           
                          </div>
                          <div class="form-group">
<!--                            Giá trị (Link ảnh) sẽ vào đây-->
                            <input type="hidden" id="image" value="">          
                          </div>
<!--                          Hiển thị ảnh để xem trước-->
                          <div id="imgDiv"></div>

                        
                                        
                      <!--Modal footer-->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="saveNewImage()">Save</button>
                      </div>
                    </div>
                  </div>
                </div>`

            document.getElementById("main").innerHTML = str;
            $("#addImageForm").modal("show")
        })
        showIconLogin()
    }
    else {
        showFormLogin()
    }
}

function saveNewImage(){
    let data = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        location: document.getElementById("location").value,
        imageLink: document.getElementById("image").value
    }
    axios.post("http://localhost:8088/images/create", data).then(() => {
        $("#addImageForm").modal("hide");
        showGallery();
    })
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
    
       
<!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
<!--          <a class="gallery__item fresco" href="/img/gallery/2.jpg" data-fresco-group="gallery">-->
<!--            <img src="/img/gallery/2.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
<!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
<!--          <a class="gallery__item fresco" href="/img/gallery/3.jpg" data-fresco-group="gallery">-->
<!--            <img src="/img/gallery/3.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/4.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/4.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/5.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/5.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/6.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/6.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/7.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/7.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/8.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/8.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/9.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/9.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/10.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/10.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/11.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/11.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
// <!--        <div class="col-lg-3 col-md-4 col-sm-6">-->
// <!--          <a class="gallery__item fresco" href="/img/gallery/12.jpg" data-fresco-group="gallery">-->
// <!--            <img src="/img/gallery/12.jpg" alt="">-->
// <!--          </a>-->
// <!--        </div>-->
//   {/*    </div>*/}
//   {/*  </div>*/}
//   {/*</div>*/}
//   {/*<!-- About Page end -->*/}
//
//   {/*<!-- Search Begin -->*/}
//   {/*<div class="search-model">*/}
//   {/*  <div class="h-100 d-flex align-items-center justify-content-center">*/}
//   {/*    <div class="search-close-switch">+</div>*/}
//   {/*    <form class="search-model-form">*/}
//   {/*      <input type="text" id="search-input" placeholder="Search here.....">*/}
//   {/*    </form>*/}
//   {/*  </div>*/}
//   {/*</div>*/}
//   <!-- Search End -->
//
//
//     {/*`*/}

