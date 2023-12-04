function showFormLogin(){
    document.getElementById("login-modal").innerHTML=`
    <div class="modal" tabindex="-1" id="modal-login">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Form Login</h5>
        <button data-bs-dismiss="modal" ><i class="fa fa-window-close" aria-hidden="true"></i></button>
      </div>
      <div class="modal-body">
      <div class="container ">
  <div class="formBox level-login">
    <div class="box boxShaddow"></div>
    <div class="box loginBox">
      <h2>LOGIN</h2>
      <div class="form">
        <div class="f_row">
          <label>Username</label>
          <input type="text" class="input-field" required id="userName">
          <u></u>
        </div>
        <div class="f_row last">
          <label>Password</label>
          <input type="password" class="input-field" required id="passWord">
          <u></u>
        </div>
        <button class="btn-login" onclick="login()"><span>GO</span><u></u>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415.582 415.582" xml:space="preserve">
                                <path d="M411.47,96.426l-46.319-46.32c-5.482-5.482-14.371-5.482-19.853,0L152.348,243.058l-82.066-82.064
                                      c-5.48-5.482-14.37-5.482-19.851,0l-46.319,46.32c-5.482,5.481-5.482,14.37,0,19.852l138.311,138.31
                                      c2.741,2.742,6.334,4.112,9.926,4.112c3.593,0,7.186-1.37,9.926-4.112L411.47,116.277c2.633-2.632,4.111-6.203,4.111-9.925
                                      C415.582,102.628,414.103,99.059,411.47,96.426z"/>
                                </svg>
        </button>
        <div class="f_link">
          <a href="" class="resetTag">Forgot your password?</a>
        </div>
      </div>
    </div>
    <div class="box forgetbox">
      <a href="#" class="back icon-back">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 199.404 199.404" style="enable-background:new 0 0 199.404 199.404;"
             xml:space="preserve">
\t<polygon points="199.404,81.529 74.742,81.529 127.987,28.285 99.701,0 0,99.702 99.701,199.404 127.987,171.119 74.742,117.876
\t\t199.404,117.876 "/>
</svg>
      </a>
      <h2>Reset Password</h2>
      <div class="form">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        <div class="f_row last">
          <label>Email Id</label>
          <input type="text" class="input-field" required>
          <u></u>
        </div>
        <button class="btn-login"><span>Reset</span><u></u>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 415.582 415.582" xml:space="preserve">
                                <path d="M411.47,96.426l-46.319-46.32c-5.482-5.482-14.371-5.482-19.853,0L152.348,243.058l-82.066-82.064
                                      c-5.48-5.482-14.37-5.482-19.851,0l-46.319,46.32c-5.482,5.481-5.482,14.37,0,19.852l138.311,138.31
                                      c2.741,2.742,6.334,4.112,9.926,4.112c3.593,0,7.186-1.37,9.926-4.112L411.47,116.277c2.633-2.632,4.111-6.203,4.111-9.925
                                      C415.582,102.628,414.103,99.059,411.47,96.426z"/>
                                </svg>
        </button>
      </div>
    </div>
    <div class="box registerBox">
      <span class="reg_bg"></span>
      <h2>Register</h2>
      <form class="form">
        <div class="f_row">
          <label>Username</label>
          <input type="text" class="input-field" required id="userNameRs">
          <u></u>
        </div>
        <div class="f_row">
          <label>Password</label>
          <input type="password" class="input-field" required id="passWordRs">
          <u></u>
        </div>
        <div class="f_row last">
          <label>Repeat Password</label>
          <input type="password" class="input-field" required id="repeatPassRs">
          <u></u>
        </div>
        <div class="f_row">
          <label>Email</label>
          <input type="text" class="input-field" required id="emailRs">
          <u></u>
        </div>
        <button class="btn-large" onclick="register()">NEXT</button>
      </form>
    </div>
    <a href="#" class="regTag icon-add">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
<path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/>
</svg>

   </a>
  </div>
</div>
      </div>
      
    </div>
  </div>
</div>
    `
    var inP = $('.input-field');

    inP.on('blur', function () {
        if (!this.value) {
            $(this).parent('.f_row').removeClass('focus');
        } else {
            $(this).parent('.f_row').addClass('focus');
        }
    }).on('focus', function () {
        $(this).parent('.f_row').addClass('focus');
        $('.btn').removeClass('active');
        $('.f_row').removeClass('shake');
    });


    $('.resetTag').click(function (e) {
        e.preventDefault();
        $('.formBox').addClass('level-forget').removeClass('level-reg');
    });

    $('.back').click(function (e) {
        e.preventDefault();
        $('.formBox').removeClass('level-forget').addClass('level-login');
    });


    $('.regTag').click(function (e) {
        e.preventDefault();
        $('.formBox').removeClass('level-reg-revers');
        $('.formBox').toggleClass('level-login').toggleClass('level-reg');
        if (!$('.formBox').hasClass('level-reg')) {
            $('.formBox').addClass('level-reg-revers');
        }
    });

    $('.btn').each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();

            var finp = $(this).parent('form').find('input');

            console.log(finp.html());

            if (!finp.val() == 0) {
                $(this).addClass('active');
            }

            setTimeout(function () {

                inP.val('');

                $('.f_row').removeClass('shake focus');
                $('.btn').removeClass('active');

            }, 2000);

            if (inP.val() == 0) {
                inP.parent('.f_row').addClass('shake');
            }

            //inP.val('');
            //$('.f_row').removeClass('focus');

        });
    });
    $("#modal-login").modal("show")
}