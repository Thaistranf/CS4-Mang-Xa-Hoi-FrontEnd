function showGallery(){
    if (getUser()){
        document.getElementById("main").innerHTML=`

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
    <div class="gallery__warp">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="#" data-toggle="modal" data-target=".bd-example-modal-lg">
            <img src="/img/gallery/1.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/2.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/2.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/3.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/3.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/4.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/4.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/5.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/5.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/6.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/6.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/7.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/7.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/8.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/8.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/9.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/9.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/10.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/10.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/11.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/11.jpg" alt="">
          </a>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a class="gallery__item fresco" href="/img/gallery/12.jpg" data-fresco-group="gallery">
            <img src="/img/gallery/12.jpg" alt="">
          </a>
        </div>
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
  <!-- Search End -->
    `
        showIconLogin()
    }
    else {
        showFormLogin()
    }
}