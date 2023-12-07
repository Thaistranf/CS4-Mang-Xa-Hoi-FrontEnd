function showProfile() {
    if (getUser()) {
        axios.get("http://localhost:8088/users/" + `${getUser().id}`, getToken()).then(function (res) {
            let user = res.data;
            document.getElementById("main").innerHTML = `
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
          <li><a href="javascript:" onclick="showProfile()" class="menu--active">Profile</a></li>
          <li><a href="javascript:" onclick="showGallery()">Gallery</a></li>
          <li><a href="javascript:" onclick="showBlog()">Blog</a></li>
          <li><a id="topics" href="javascript:" onclick="getTopics()">Topics</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- Header Section end -->

  <!-- About Page -->
  <section class="about__page" id="body-main">
    <div class="container-fluid">
      <div class="row">
      <div class="col-1"></div>
        <div class="col-lg-3">
          <div class="about__text">
            <h3 class="about__title"><i class="fa fa-user" aria-hidden="true"></i>My Profile</h3>
            <div class="about__meta avatar-upload">
              <div class="avatar-preview"> 
               <div id="imagePreview" style="background-image: url(http://i.pravatar.cc/500?img=7);"></div>
            </div>
               <div class="avatar-edit">
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                <label for="imageUpload"></label>
            </div>
              <div class="about__meta__info">
                <h5>${getUser().username}</h5>
                <p>PHOTOGRAPHER / DESIGNER</p>
              </div>
            </div>
            <p>DOB: <span>${user.dateOfBirth}</span></p>
            <p>Email: <span>${user.email}</span></p>
            <br>
            <a href="#" onclick="showFormChangeProfile()"><i class="fa fa-cog" aria-hidden="true"></i>Change Profile </a>
            <br>
            <img src="/img/signature.png" alt="">
          </div>
        </div>
        <div class="col-lg-3">
          <div class="experience__text">
            <h3 class="about__title"><i class="fa fa-picture-o" aria-hidden="true"></i>My Album</h3>
            <button type="button" class="btn btn-outline-info" style="height: 30px;font-size: 10px" onclick="showFormCreateAlbum()" >Add++</button>           
            <div class="experience">
              <ul id="album">
                 
              </ul>
             </div>
          </div>
          </div>
          <div class="col-lg-1"></div>
        <div class="col-lg-4">
          <div class="skills__text">
            <h3 class="about__title"><i class="fa fa-wrench" aria-hidden="true"></i>Skills</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. </p>
            <div class="single-progress-item">
              <h6>Development</h6>
              <div class="progress-bar-style" data-progress="70"></div>
            </div>
            <div class="single-progress-item">
              <h6>APP Design</h6>
              <div class="progress-bar-style" data-progress="100"></div>
            </div>
            <div class="single-progress-item">
              <h6>Graphic Design</h6>
              <div class="progress-bar-style" data-progress="70"></div>
            </div>
            <div class="single-progress-item">
              <h6>Photography</h6>
              <div class="progress-bar-style" data-progress="70"></div>
            </div>
          </div>
        </div>
        
    </div>
  </section>
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
  <!-- Search End -->
    `
            showIconLogin()
           axios.get("http://localhost:8088/album/" + getUser().id , getToken()).then(function (res){
               let html= ``;
               let album = res.data
               for (let i = 0; i < album.length; i++) {
                   html+= `
                    <li>
                    <a href="#">
                      <figure>
                        <img src='https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA0OTI3Nw&ixlib=rb-1.2.1&q=80&w=400' alt='Volcano and lava field against a stormy sky'>
                        <figcaption onclick="getAll()">${album[i].name}</figcaption>
                      </figure>
                    </a>
                     </li>`
               }
               document.getElementById("album").innerHTML = html;
        })
        })
    } else {
        showFormLogin()
    }


}


async function showFormChangeProfile() {
    let user = (await getDataUser()).data;
    console.log(user)
    document.getElementById("login-modal").innerHTML = `
    <div class="modal" tabindex="-1" role="dialog" id="changeProfile-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Change Information</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>UserName</h5>
        <input type="text" id="userName" value="${user.username}">
        <h6>Date Of Birth</h6>
        <input type="text" id="datepicker" value="${user.dateOfBirth}"/>
        <h5>Email</h5>
        <input type="text" id="email" value="${user.email}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="saveChangeInformation()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
    $("#changeProfile-modal").modal("show")
    $(function () {
        $('#datepicker').datepicker({
            maxDate: new Date(),
            changeYear: true,
            changeMonth: true,
            format: 'dd/mm/yyyy'
        });
    })
    $("#imageUpload").change(function() {
        readURL(this);
    });
}

function saveChangeInformation() {
    let username = document.getElementById("userName").value;
    let datepicker = document.getElementById("datepicker").value;
    let email = document.getElementById("email").value;
    let user = {
        "username": username,
        "email": email,
        "dateOfBirth": datepicker
    }
    $("#changeProfile-modal").modal("toggle")
    axios.put("http://localhost:8088/users/" + getUser().id, user, getToken())
    location.reload()
}

function getDataUser() {
    return axios.get("http://localhost:8088/users/" + getUser().id, getToken());

}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
function showFormCreateAlbum(){
    document.getElementById("login-modal").innerHTML = `
    <div class="modal" tabindex="-1" role="dialog" id="changeProfile-modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Create Album</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>NameAlbum</h5>
        <input type="text" id="AlbumName">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="saveAlbum()">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
    $("#changeProfile-modal").modal("show")
}
function saveAlbum(){
    let nameAlbum = document.getElementById("AlbumName").value

    let album = {
        name:nameAlbum,
        user:{
            id:getUser().id
        }
    }
    axios.post("http://localhost:8088/album" ,album,getToken()).then(function (res){
        location.reload()

    })
}