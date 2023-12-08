function showPostDetail(idImage){
    if (getUser()){
        axios.get("http://localhost:8088/images/display/" + idImage).then(res => {
            let imageData = res.data;
            console.log(imageData)
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
                    
                            <button type="button" class="close" onclick="closeModal()" data-bs-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                             <section class="about__page" id="body-main">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-6">
                              <a class="gallery__item fresco" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <img src="${imageData.imageLink}" alt="">
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
            <button class="btn btn-outline-primary"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Like</button>
                            <span>999999999999999<i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
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
                                 <button type="button" class="btn btn-light" onclick="deleteCommentGallery(${imageData.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>`
                        } else {
                            str += `<div style="margin: -5px 0 10px 0; font-size: 11px">
                                 <button type="button" class="btn btn-light" onclick="deleteCommentGallery(${imageData.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
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
                        <button class="close"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <button class="close"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    
                      </section>
                          </div>
                        </div>
                      </div>
                    </div>`
                    document.getElementById("login-modal").innerHTML=str;
                    $("#postDetail-modal").modal("show")
                // })
            })
        })
        showIconLogin()
    }
    else {
        showFormLogin()
    }
}
function closeModal(){
    $("#postDetail-modal").modal("toggle")
}

function sendComment(idImage){
    let comment = document.getElementById("inputComment").value
    if (comment !== ""){
        axios.post("http://localhost:8088/comments", {
            description: comment,
            user: {
                id: getUser().id
            },
            image: {
                id: idImage
            }
        }).then(() => {
            showPostDetail(idImage)
            // location.reload()
        })
    } else {
        alert("Vui lòng nhập comment!!!")
    }
}

function deleteCommentGallery(idImage){
    axios.delete("http://localhost:8088/comments/" + idImage).then(() => {
        showPostDetail()
    })
}