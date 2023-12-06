function showBlog(){
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
          <li><a href="javascript:" onclick="showProfile()">Profile</a></li>
          <li><a href="javascript:" onclick="showGallery()">Gallery</a></li>
          <li><a href="javascript:" onclick="showBlog()" class="menu--active">Blog</a></li>
          <li><a id="topics" href="javascript:" onclick="getTopics()">Topics</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- Header Section end -->

  <!-- Blog Page -->
  <section class="blog__page" id="body-main">
    <div class="blog__warp">
      <div class="row blog__grid text-white">
        <div class="col-lg-8 col-xl-9">
          <div class="row">
            <div class="col-md-8 col-lg-7 col-xl-8"  id="postDetail-modal">
              <div class="blog__item set-bg" data-setbg="img/blog/1.jpg">
                <div class="blog__content">
                  <div class="blog__date">DEC 18, 2019</div>
                  <h3><a href="#" onclick="showPostDetail()">9 Reasons to Buy a 50mm Prime Lens & Skip the Kit Lens</a></h3>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-5 col-xl-4">
              <div class="blog__item set-bg" data-setbg="img/blog/2.jpg">
                <div class="blog__content">
                  <div class="blog__date">DEC 18, 2019</div>
                  <h4><a href="./blog-single.html">Assorted Textures FREE Stock Photos</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-5 col-xl-4">
              <div class="blog__item set-bg" data-setbg="img/blog/4.jpg">
                <div class="blog__content">
                  <div class="blog__date">DEC 18, 2019</div>
                  <h4><a href="./blog-single.html">Assorted Textures FREE Stock Photos</a></h4>
                </div>
              </div>
            </div>
            <div class="col-md-8 col-lg-7 col-xl-8">
              <div class="blog__item set-bg" data-setbg="img/blog/5.jpg">
                <div class="blog__content">
                  <div class="blog__date">DEC 18, 2019</div>
                  <h3><a href="./blog-single.html">Improve Your Portrait Photography with These Helpful Tips</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-3">
          <div class="blog__item blog__item--long set-bg" data-setbg="img/blog/3.jpg">
            <div class="blog__content">
              <div class="blog__date">DEC 18, 2019</div>
              <h4><a href="./blog-single.html">Assorted Textures FREE Stock Photos</a></h4>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  <!-- Blog Page end -->

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