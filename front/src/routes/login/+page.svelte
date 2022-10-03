<body>

    <div id="login">

        <form action="" method="post" class="card">

            <div class="card-header">

                <a href="#"><img src="icons/ic_back.svg" alt=""></a>

                <h2>Entrar</h2>

                <p>Informe seu email e senha para entrar</p>


            </div>

            <div class="card-content">

                <div class="card-content-area">

                    <label for="email">Email</label>

                    <input type="text" name="email" id="email">

                </div>

                <div class="card-content-area">

                    <label for="password">Senha</label>

                    <input type="password" name="password" id="password">

                </div>

                <div class="card-footer">

                    <a href="#">Esqueci minha senha</a>

                    <a href="/home"><input type="submit" value="Entrar" class="submit"></a>

                </div>

                <p style="text-align: center;">Ou entre com</p>

                <div class="otherwise">

                    <div class="google">

                        <img src="images/ic_google.png" alt="" class="google-img">

                        <p class="google-txt">Google</p>

                    </div>

                    <div class="facebook">

                        <img src="images/ic_facebook.png" alt="" class="facebook-img">

                        <p class="facebook-txt">Facebook</p>

                    </div>

                </div>

            </div>

        </form>

    </div>

    <style>

        body {

        padding: 0;

        margin: 0;

        }

        #login {

        display: flex;

        align-items: center;

        justify-content: center;

        height: 100vh;

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        }

        .card {

        padding: 40px;

        border-radius: 2px;

        width:280px;

        }

        .card-header {

        padding-bottom: 50px;

        opacity: 0.8;

        color: #000;

        }

        .card-header::after {

        content: "";

        width: 70px;

        height: 1px;

        background-color: #fff;

        display: block;

        margin-top: -17px;

        margin-left: -5px;

        }

        .card-content label {

        color: #000;

        font-size: 16px;

        opacity: 0.8;

        }

        .card-content-area {

        display: flex;

        flex-direction: column;

        padding:10px 0;

        }

        .card-content-area input {

        margin-top: 10px;

        padding:0 5px;

        background-color: transparent;

        border:none;

        border-bottom: 1px solid #e1e1e1;

        outline: none;

        color: #fff;

        }

        .card-footer {

        display: flex;

        flex-direction: column;

        }

        .card-footer .submit{

        width: 100%;

        height: 40px;

        background-color: #3AB4D1;

        color: #e1e1e1;

        margin: 10px 0;

        box-shadow: 0px 4px 16px #3AB4D152;

        border: 1px solid #2CA8C6;

        border-radius: 8px;

        font-size: 16px;

        text-transform: bold;

        opacity: 1;

        }

        .card-footer a {

        text-align: right;

        font-size: 16px;

        opacity: 0.8;

        color: #e1e1e1;

        text-decoration: none;

        margin: 12px;

        }

        .otherwise {

            display: flex;

            justify-content: center;

            align-items: center;
        }

        .facebook {

            background: #FFFFFF 0% 0% no-repeat padding-box;

            box-shadow: 0px 3px 6px #A7B6C414;

            border: 1px solid #A7B6C4;

            border-radius: 4px;

            padding: 15px;

            margin: 10px;

            width: 40%;

            opacity: 1;

        }

        .google {

            background: #FFFFFF 0% 0% no-repeat padding-box;

            box-shadow: 0px 3px 6px #A7B6C414;

            border: 1px solid #A7B6C4;

            border-radius: 4px;

            padding: 15px;

            margin: 10px;

            width: 40%;

            opacity: 1;

        }

        .google-img {

            float: left;

            max-width: 64px;

            max-height: 64px;

        }

        .google-txt {

            margin: 0px;

            padding-left: 40px

        }

        .facebook-txt {

            margin: 0px;

            padding-left: 40px
        }

        .facebook-img {

            float: left;

            max-width: 64px;

            max-height: 64px;

        }

    </style>

</body>