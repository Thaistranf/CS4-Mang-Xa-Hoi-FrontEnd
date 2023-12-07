function showPostDetail(){
    document.getElementById("login-modal").innerHTML=`
    <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" id="postDetail-modal">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"><i class="fa fa-picture-o" aria-hidden="true"></i>Image Name</h4>
        
        <button type="button" class="close" onclick="closeModal()" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
         <section class="about__page" id="body-main">
    <div class="container-fluid" id="showCategories2">
      <div class="row">
        <div class="col-lg-6">
          <a class="gallery__item fresco" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
            <img src="/img/gallery/1.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3">
            <div>
            <h6><i class="fa fa-user-circle-o" aria-hidden="true"></i>UserName</h6>
            <button class="btn btn-outline-danger"><i class="fa fa-heart-o" aria-hidden="true"></i>Follow</button>            
            </div>
        <br>        
            <div>
            <p><i class="fa fa-align-center" aria-hidden="true"></i>Mô tả</p>
            </div>
        <br>
            <div>
            <button class="btn btn-outline-primary"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Like</button>
            <span>50<i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
            </div>    
            <br>
            <div>
            <span>2 |<i class="fa fa-comments-o" aria-hidden="true"></i>Comment</span>
            </div>
            <br>
            <div class="box-comment">
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i>hongdz </a>
            <p> Hinh anh dep qua</p>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i>sangdz </a>
            <p> I love you</p>
            </div>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="New Comment" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
            <button class="btn btn-outline-success" type="button"><i class="fa fa-share" aria-hidden="true"></i>Send</button>
            </div>
          </div>
          </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
    <div class="modal-footer">
    <button class="close"><i class="fa fa-pencil-square-o" aria-hidden="true" onclick="showFormEditPost()"></i></button>
        <button class="close"><i class="fa fa-trash" aria-hidden="true"></i></button>
</div>
  
  </section>
      </div>
    </div>
  </div>
</div>
    `
    $("#postDetail-modal").modal("show")
}
function closeModal(){
    $("#postDetail-modal").modal("toggle")
}
function showFormEditPost(){
    document.getElementById("postDetail-modal").innerHTML=`
<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" id="postDetailEdit-modal">
    <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"><i class="fa fa-picture-o" aria-hidden="true"></i>Form Edit Image</h4>
        
        <button type="button" class="close" onclick="closeModal()" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
         <section class="about__page" id="body-main" >
    <div class="container-fluid " id="showCategories2"  >
      <div class="row">
        <div class="col-lg-6">
          <a class="gallery__item fresco" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
            <img src="/img/gallery/1.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-3">
            <div>
            <h6><i class="fa fa-user-circle-o" aria-hidden="true"></i>Name Image</h6>
            <input type="text" >
            </div>
        <br>        
            <div>
            <h6><i class="fa fa-align-center" aria-hidden="true"></i>Description</h6>
            <input  type="text">
            </div>
            <div class="btn-categories">
            <button onclick="showAllCategories2()"><span>Categories</span></button>
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
    <button class="close">Save</button>
</div>
  
  </section>
      </div>
    </div>
  </div>
  </div>
    `
    $("#postDetailEdit-modal").modal("show")
}
async function showAllCategories2(){
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
    document.getElementById("showCategories2").innerHTML=html;
}