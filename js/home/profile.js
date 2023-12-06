
    function showProfile() {
    if (getUser()){
        axios.get("http://localhost:8088/users/" + `${getUser().id}`,getToken()).then(function (res){

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
        <div class="col-lg-4">
          <div class="about__text">
            <h3 class="about__title">My Profile</h3>
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
            <p>Date Of Birth</p>
            <p>Email</p>
            <br>
            <a href="#" onclick="showFormChangeProfile()"><i class="fa fa-cog" aria-hidden="true"></i>Change Profile </a>
            <br>
            <img src="/img/signature.png" alt="">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="experience__text">
            <h3 class="about__title">My Album</h3>
            <div class="experience__item">
              <div>Album1</div>
              
            </div>
            <div class="experience__item">
              
              <div>Album2</div>
            </div>
            <div class="experience__item">
              
              <div>Album3</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="skills__text">
            <h3 class="about__title">Skills</h3>
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

        })
    }
    else {
        showFormLogin()
    }


}
    function showFormChangeProfile(){

        console.log(user)
        document.getElementById("login-modal").innerHTML=`
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
        <input type="text" value="${user.username}">
        <h6>Date Of Birth</h6>
        <input type="text" id="datepicker" value="${user.dateOfBirth}"/>
        <h5>Email</h5>
        <input type="text" value="">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
        $("#changeProfile-modal").modal("show")
        $(function(){
            $('#datepicker').datepicker({
                maxDate:new Date(),
                changeYear:true,
                changeMonth:true,
                format:'dd/mm/yyyy'
            });
        })
    }

    function saveChangeInformation(){
        $("#changeProfile-modal").modal("toggle")
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
    $("#imageUpload").change(function() {
        readURL(this);
    });