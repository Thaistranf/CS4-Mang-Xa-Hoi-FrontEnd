function getAll(){
    document.getElementById("main").innerHTML=`
    <!-- Header Section -->
\t<header class="header">
\t\t<div class="container-fluid">
\t\t\t<div class="row">
\t\t\t\t<div class="col-sm-4 col-md-3 order-2 order-sm-1">
\t\t\t\t\t<div class="header__social">
\t\t\t\t\t\t<a href="#"><i class="fa fa-facebook"></i></a>
\t\t\t\t\t\t<a href="#"><i class="fa fa-twitter"></i></a>
\t\t\t\t\t\t<a href="#"><i class="fa fa-instagram"></i></a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t\t<div class="col-sm-4 col-md-6 order-1  order-md-2 text-center">
\t\t\t\t\t<a href="./index.html" class="site-logo">
\t\t\t\t\t\t<h3>Moments</h3>
\t\t\t\t\t</a>
\t\t\t\t</div>
\t\t\t\t<div class="col-sm-4 col-md-3 order-3 order-sm-3">
\t\t\t\t\t<div class="header__switches">
\t\t\t\t\t\t<a href="#" class="search-switch"><i class="fa fa-search"></i></a>
\t\t\t\t\t\t<a href="#" class="nav-switch"><i class="fa fa-bars"></i></a>
\t\t\t\t\t\t<a href="#" onclick="showFormLogin()"><i class="fa fa-user" aria-hidden="true">Admin</i></a>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<nav class="main__menu">
\t\t\t\t<ul class="nav__menu">
\t\t\t\t\t<li><a href="./index.html" class="menu--active">Home</a></li>
\t\t\t\t\t<li><a href="./about.html">Information</a></li>
\t\t\t\t\t<li><a href="./gallery.html">Gallery</a></li>
\t\t\t\t\t<li><a href="./blog.html">Blog</a>
\t\t\t\t\t\t<ul class="sub__menu">
\t\t\t\t\t\t\t<li><a href="./blog-single.html">Blog Single</a></li>
\t\t\t\t\t\t</ul>
\t\t\t\t\t</li>
\t\t\t\t\t<li><a href="./contact.html">Contact</a></li>
\t\t\t\t</ul>
\t\t\t</nav>
\t\t</div>
\t</header>
\t<!-- Header Section end -->

\t<!-- Hero Section -->
\t<section class="hero__section">
\t\t<div class="hero-slider">
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/1.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/1.jpg" alt="">
\t\t\t\t</a>
\t\t\t</div>
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/2.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/2.jpg" alt="">
\t\t\t\t\t</a>
\t\t\t</div>
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/3.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/3.jpg" alt="">
\t\t\t\t</a>\t
\t\t\t</div>
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/4.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/4.jpg" alt="">
\t\t\t\t</a>\t
\t\t\t</div>
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/5.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/5.jpg" alt="">
\t\t\t\t</a>\t
\t\t\t</div>
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/6.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/6.jpg" alt="">
\t\t\t\t</a>\t
\t\t\t</div>
\t\t\t<div class="slide-item">
\t\t\t\t<a class="fresco" href="img/hero-slider/7.jpg" data-fresco-group="projects">
\t\t\t\t\t<img src="img/hero-slider/7.jpg" alt="">
\t\t\t\t</a>\t
\t\t\t</div>
\t\t</div>
\t\t<div class="hero-text-slider">
\t\t\t<div class="text-item">
\t\t\t\t<h2>Nature</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t\t<div class="text-item">
\t\t\t\t<h2>Red Heartbeat</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t\t<div class="text-item">
\t\t\t\t<h2>Blue Dreem</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t\t<div class="text-item">
\t\t\t\t<h2>Christian Church</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t\t<div class="text-item">
\t\t\t\t<h2>Red Darkness</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t\t<div class="text-item">
\t\t\t\t<h2>Beauty with Brain</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t\t<div class="text-item">
\t\t\t\t<h2>Remarkable</h2>
\t\t\t\t<p>Photography</p>
\t\t\t</div>
\t\t</div>
\t</section>
\t<!-- Hero Section end -->

\t<!-- Footer Section -->
\t<footer class="footer__section">
\t\t<div class="container">
\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
\t\t\t<div class="footer__copyright__text">
\t\t\t\t<p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
\t\t\t</div>
\t\t\t<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
\t\t</div>
\t</footer>
\t<!-- Footer Section end -->

\t<!-- Search Begin -->
\t<div class="search-model">
\t\t<div class="h-100 d-flex align-items-center justify-content-center">
\t\t\t<div class="search-close-switch">+</div>
\t\t\t<form class="search-model-form">
\t\t\t\t<input type="text" id="search-input" placeholder="Search here.....">
\t\t\t</form>
\t\t</div>
\t</div>
\t<!-- Search End -->

   `
}
getAll()