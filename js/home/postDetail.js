function showPostDetail(idImage) {
    if (getUser()) {
        axios.get("http://localhost:8088/images/display/" + idImage).then(res => {
            let imageData = res.data;
            localStorage.setItem("sendingObj", JSON.stringify(imageData))
            axios.get("http://localhost:8088/comments/" + idImage).then(res => {
                let comentList = res.data
                console.log(comentList)
                // axios.get("http://localhost:8088/likes/" + idImage).then(res => {
                //     let totalLike = res.data
                // console.log(totalLike)

                let str = `
                    <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" id="postDetail-modal">
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4 class="modal-title"><i class="fa fa-picture-o" aria-hidden="true"></i>${imageData.name}</h4>
                    
                            <button type="button" class="close" onclick="closeModalEdit()" data-bs-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                             <section class="about__page" id="body-main">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-6">
                              <a class="gallery__item fresco" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <img src="${imageData.imageLink}" alt="">
                                <input type="text" hidden="hidden" value="${imageData.imageLink}" id="imageEdit">
                              </a>
                            </div>
                            <div class="col-lg-1"></div>
                            <div class="col-lg-3">
                                <div>
                                <h6>
                                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>${getUser().username}
                                    <button class="btn btn-outline-danger"><i class="fa fa-heart-o" aria-hidden="true"></i>Follow</button>
                                </h6>
                                <p style="margin: -2px 0 10px 12px; font-size: 11px"> ${imageData.date}</p>
                                </div>
                            <br>
                               <div>
                                    <p><i class="fa fa-align-center" aria-hidden="true"></i>${imageData.description}</p>
                                    </div>
                                <br>
                                <div>
                                <span>`
                for (let i = 0; i < imageData.categories.length; i++) {
                    str += imageData.categories[i].name + ", ";
                }
                str += `</span>
                                </div>
                        <div>
            <button class="btn btn-outline-primary"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Like</button>
            <span>50<i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
            </div>    
            <br>
            <div>
            <span>2 |<i class="fa fa-comments-o" aria-hidden="true"></i>Comment</span>
            </div>
            <br>
                <div class="box-comment">`

                for (let i = 0; i < comentList.length; i++) {
                    str += `
                        <a href="#"><i class="fa fa-user" aria-hidden="true"></i>${comentList[i].user.username} </a>
                        <p style="margin: -2px 0 10px 12px; font-size: 11px"> ${comentList[i].time}</p>                      
                        <p style="margin-left: 20px"> ${comentList[i].description}</p>`

                    if (comentList[i].user.id === getUser().id){
                            str += `<div style="margin: -5px 0 10px 0; font-size: 11px">
                                 <button type="button" class="btn btn-light" onclick="editCommentGallery()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                 <button type="button" class="btn btn-light" onclick="deleteCommentGallery(${comentList[i].id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>`
                        } else {
                            str += `<div style="margin: -5px 0 10px 0; font-size: 11px">
                                 <button type="button" class="btn btn-light" onclick="deleteCommentGallery(${comentList[i].id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>`
                        }
                    }
                str += `
                            </div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" id="inputComment" placeholder="New Comment" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                <button class="btn btn-outline-success" type="button" onclick="sendComment(${imageData.id})"><i class="fa fa-share" aria-hidden="true"></i>Send</button>
                                </div>
                              </div>
                              </div>
                            <div class="col-lg-2"></div>
                          </div>
                        </div>
                        <div class="modal-footer">
                        <button class="close" onclick="showFormEditPost(${imageData.id})"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button class="close" onclick="deleteImage(${imageData.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    
                      </section>
                          </div>
                        </div>
                      </div>
                    </div>`
                document.getElementById("login-modal").innerHTML = str;
                $("#postDetail-modal").modal("show")
                // })
            })
        })
        showIconLogin()
    } else {
        showFormLogin()
    }
}

function closeModalEdit() {
    $("#postDetail-modal").modal("toggle")
}


function sendComment(idImage) {
    let user = getUser();
    let comment = document.getElementById("inputComment").value
    if (comment !== "") {
        if (user && comment !== "") {
            axios.post("http://localhost:8088/comments", {
                description: comment,
                user: {
                    id: getUser().id
                },
                image: {
                    id: idImage
                }
            }).then((response) => {
                updateComments(response.data)
                console.log("+===="+response.data)
                document.getElementById("inputComment").value = '';
            })
        } else {
            alert("Vui lòng nhập comment!!!")
        }
    }
}

function showFormEditPost(id) {
    let dataItem = localStorage.getItem("sendingObj");
    let dataParse = JSON.parse(dataItem);
    document.getElementById("postDetail-modal").innerHTML = `
<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" id="postDetailEdit-modal">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"><i class="fa fa-picture-o" aria-hidden="true"></i>Form Edit Image</h4>

                <button type="button" class="close" onclick="closeModalEdit()" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <section class="about__page" id="body-main">
                <div class="container-fluid" id="showCategories2">
                    <div class="row">
                        <div class="col-lg-6">
                            <a class="gallery__item fresco" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <img src="${dataParse.imageLink}" alt="">
                                <input type="text" hidden="hidden" value="${dataParse.imageLink}" id="imageEdit">
                            </a>
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-lg-3">
                            <div>
                                <h6><i class="fa fa-user-circle-o" aria-hidden="true"></i>Name Image</h6>
                                <input id="nameEdit" type="text" value="${dataParse.name}">
                            </div>
                            <br>
                            <div>
                                <h6><i class="fa fa-align-center" aria-hidden="true"></i>Description</h6>
                                <input id="descriptionEdit" type="text" value="${dataParse.description}">
                            </div>
                            <div>
                                <h6><i class="fa fa-align-center" aria-hidden="true"></i>Location</h6>
                                <input id="locationEdit" type="text" value="${dataParse.location}">
                            </div>
                            <div class="btn-categories">
                                <button onclick="showAllCategoriesEdit()"><span>Categories</span></button>
                            </div>
                            <br>
                            <div>
                                <span>2 |<i class="fa fa-comments-o" aria-hidden="true"></i>Comment</span>
                            </div>
                            <br>
                            <div class="box-comment">
                                <button class="close"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i>hongdz </a>
                                <p> Hinh anh dep qua</p>
                                <button class="close"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i>sangdz </a>
                                <p> I love you</p>
                            </div>
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                </div>
                <div class="modal-footer">

                    <button class="close" onclick="saveEdit(${id})">Save</button>
                </div>

            </section>
        </div>
    </div>
</div>
    `
    $("#postDetailEdit-modal").modal("show")
}

function saveEdit(id) {
    let data = JSON.parse(localStorage.getItem("sendingObj"))
    axios.put("http://localhost:8088/images/edit/" + id, data, getToken()).then(() => {
        console.log(data)
        $("#postDetailEdit-modal").modal("hide");
        $("#postDetail-modal").modal("hide");
        showGallery();
    })
    // localStorage.removeItem("sendingObj");
}

async function showAllCategoriesEdit() {
    let data = JSON.stringify({
        name: document.getElementById("nameEdit").value,
        description: document.getElementById("descriptionEdit").value,
        location: document.getElementById("locationEdit").value,
        imageLink: document.getElementById("imageEdit").value,
        user: {
            id: getUser().id
        }
    })
    localStorage.setItem("sendingObj", data)
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
        <button class="btn btn-primary" onclick="backModalEdit()">Save</button>
      </div>
      </center>
      <div class="main-topics" id="searchImage">
          
      </div>
        `
    document.getElementById("showCategories2").innerHTML = html;
}

function backModalEdit() {
    let data = JSON.parse(localStorage.getItem("sendingObj"));
    let listCategory = [];
    let category = document.getElementsByClassName("btn-check");
    for (let i = 0; i < category.length; i++) {
        if (category[i].checked) {
            listCategory.push({id: category[i].value})
        }
    }
    console.log(listCategory)
    data.categories = listCategory;
    localStorage.setItem("sendingObj", JSON.stringify(data));
    document.getElementById("showCategories2").innerHTML = `
    <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <!--Hiển thị ảnh để xem trước-->
                                        <div id="imgDiv">
                                        <img src="${data.imageLink}">
                                        </div>
                                </div>
                                <div class="col-lg-1"></div>
                                <div class="col-lg-5">
                                        <div class="form-group">
                                            <label for="exampleInput1">Name</label>
                                            <input type="text" class="form-control" id="nameEdit" aria-describedby="emailHelp" placeholder="Name" value="${data.name}">            
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInput1">Description</label>
                                            <input type="text" class="form-control" id="descriptionEdit" aria-describedby="emailHelp" placeholder="Description" value="${data.description}">            
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInput1">Location</label>
                                            <input type="text" class="form-control" id="locationEdit" aria-describedby="emailHelp" placeholder="Location" value="${data.location}">            
                                          </div>
                                          <div class="btn-categories">
                                           <button onclick="showAllCategoriesEdit()"><span>Categories</span></button>
        
                                          </div>
                                          <div class="form-group">
                                             <!--Giá trị (Link ảnh) sẽ vào đây-->
                                             <input type="hidden" id="imageEdit" value="${data.imageLink}">          
                                          </div>
                                </div>
                            </div>
                        </div>
   
<!--                      &lt;!&ndash;Modal footer&ndash;&gt;-->
<!--                      <div class="modal-footer">-->
<!--                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Close</button>-->
<!--                        <button type="button" class="btn btn-primary" onclick="saveEdit()">Save</button>-->
<!--                      </div>-->
    `
}

function deleteImage(id) {
    if (confirmDelete()) {
        axios.delete("http://localhost:8088/images/delete/" + id, getToken()).then(() => {
            showGallery();
            $("#postDetailEdit-modal").modal("toggle");
        })
    }
}

function confirmDelete() {
    var result = confirm("Want to delete?");
    if (result) {
        return true
    }
    return false
}

function updateComments(comments) {
    let commentSection = document.querySelector('.box-comment');
    commentSection.innerHTML = '';

    for (let i = 0; i < comments.length; i++) {
        commentSection.innerHTML += `
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i>${comments[i].user.username} </a>
            <p style="margin: -2px 0 10px 12px; font-size: 11px"> ${comments[i].time}</p>
            <p> ${comments[i].description}</p>`;
        if (comments[i].user.id === getUser().id){
            commentSection.innerHTML += `<div style="margin: -5px 0 10px 0; font-size: 11px">
                                 <button type="button" class="btn btn-light" onclick="editCommentGallery()"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                 <button type="button" class="btn btn-light" onclick="deleteCommentGallery(${comments[i].id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>`
        } else {
            commentSection.innerHTML += `<div style="margin: -5px 0 10px 0; font-size: 11px">
                                 <button type="button" class="btn btn-light" onclick="deleteCommentGallery(${comments[i].id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>`
        }
    }
}

function deleteCommentGallery(id){
    axios.delete("http://localhost:8088/comments/" + id).then(() => {
        location.reload()
    })
}