function showProfile(){
    document.getElementById("main").innerHTML=`

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
          <div class="header__switches">
            <a href="#" class="search-switch"><i class="fa fa-search"></i></a>
            <a href="#" class="nav-switch"><i class="fa fa-bars"></i></a>
             <a href="javascript:" onclick="showFormLogin()"><i class="fa fa-user" aria-hidden="true">Login</i></a>
          </div>
        </div>
      </div>
      <nav class="main__menu">
        <ul class="nav__menu">
          <li><a href="" onclick="getAll()">Home</a></li>
          <li><a href="javascript:" onclick="showProfile()" class="menu--active">Profile</a></li>
          <li><a href="javascript:" onclick="showGallery()">Gallery</a></li>
          <li><a href="javascript:" onclick="showBlog()">Blog</a></li>
          <li><a href="javascript:" onclick="">Topics</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- Header Section end -->

  <!-- About Page -->
  <section class="about__page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="about__text">
            <h3 class="about__title">Profile Me</h3>
            <div class="about__meta">
              <img src="/img/profile.jpg" alt="">
              <div class="about__meta__info">
                <h5>Caleb Rodriguez</h5>
                <p>PHOTOGRAPHER / DESIGNER</p>
              </div>
            </div>
            <p>Date Of Birth</p>
            <p>Email</p>
            <br>
            <a href=""><i class="fa fa-cog" aria-hidden="true"></i>Change Profile </a>
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
              <div class="progress-bar-style" data-progress="70"></div>
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
}