

function getAll(){
    document.getElementById("main").innerHTML=`
        <div id="preloder">
        <div class="loader"></div>
        </div>

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
                        <a href="#" class="search-switch"><i class="fa fa-search"></i></a>
                        <a href="#" class="nav-switch"><i class="fa fa-bars"></i></a>
                        <a href="javascript:" onclick="showFormLogin()"><i class="fa fa-user" aria-hidden="true">Login</i></a>
                    </div>
                </div>
            </div>
            <nav class="main__menu">
                <ul class="nav__menu">
                    <li><a href="" class="menu--active">Home</a></li>
                    <li><a href="javascript:" onclick="showProfile()">Profile</a></li>
                    <li><a href="javascript:" onclick="showGallery()">Gallery</a></li>
                    <li><a href="javascript:" onclick="showBlog()">Blog</a></li>
                    <li><a id="topics" href="javascript:" onclick="getTopics()">Topics</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <!-- Header Section end -->

    <!-- Hero Section -->
    <section class="hero__section" id="body-main">
        <div class="hero-slider">
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/1.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/1.jpg" alt="">
                </a>
            </div>
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/2.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/2.jpg" alt="">
                </a>
            </div>
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/3.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/3.jpg" alt="">
                </a>
            </div>
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/4.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/4.jpg" alt="">
                </a>
            </div>
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/5.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/5.jpg" alt="">
                </a>
            </div>
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/6.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/6.jpg" alt="">
                </a>
            </div>
            <div class="slide-item">
                <a class="fresco" href="/img/hero-slider/7.jpg" data-fresco-group="projects">
                    <img src="/img/hero-slider/7.jpg" alt="">
                </a>
            </div>
        </div>
        <div class="hero-text-slider">
            <div class="text-item">
                <h2>Nature</h2>
                <p>Photography</p>
            </div>
            <div class="text-item">
                <h2>Red Heartbeat</h2>
                <p>Photography</p>
            </div>
            <div class="text-item">
                <h2>Blue Dreem</h2>
                <p>Photography</p>
            </div>
            <div class="text-item">
                <h2>Christian Church</h2>
                <p>Photography</p>
            </div>
            <div class="text-item">
                <h2>Red Darkness</h2>
                <p>Photography</p>
            </div>
            <div class="text-item">
                <h2>Beauty with Brain</h2>
                <p>Photography</p>
            </div>
            <div class="text-item">
                <h2>Remarkable</h2>
                <p>Photography</p>
            </div>
        </div>
    </section>
    <!-- Hero Section end -->
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
getAll()