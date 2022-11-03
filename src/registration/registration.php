<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="../common/css/style-form.css">
    <link rel="stylesheet" href="./css/style-registration.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <title>Registration</title>
</head>

<body>
    <section>
        <header>
            <div class="wrapper-header-left wrapper-header">
                <h5>
                    <a href="../main/main.php">Home</a>
                </h5>
                <h5>
                    <a href="#">Contacts</a>
                </h5>
            </div>
            <div class="wrapper-header-center wrapper-header ">
                <div class="icon-logo">
                </div>
            </div>
            <div class="wrapper-header-right wrapper-header ">
                <h5>
                    <a href="../list-order/list-order.php">Orders</a>
                </h5>
                <h5 class="wrapper-popup-block">
                    <a href="">Account</a>
                    <div class="wrapper-popup-menu">
                        <div class="popup-arrow ">

                        </div>
                        <div class="popup-inner">
                            <div class="popup-line">
                                <div class="wrapper-popup-icon-gear">

                                </div>
                                <a href="../account/account.php">Settings</a>
                            </div>
                            <div class="popup-line">
                                <div class="wrapper-popup-icon-arrow">

                                </div>
                                <a href="../main/main.php">Logout</a>
                            </div>
                        </div>
                    </div>
                </h5>
                </h5>
                <div class="icon-shopping-bag"></div>
            </div>
        </header>
    </section>
    <main>
        <section>
            <div class="wrapper-form-registration wrapper-form">
                <h3>
                    Registration
                </h3>
                <form method="post">
                    <input type="text" name="input-login" placeholder="login" minlength="6">
                    <input type="password" name="input-psw" placeholder="password" minlength="12">
                    <input type="hidden" name="input-psw-hash">
                    <input type="password" name="input-psw-conf" placeholder="password" minlength="12">
                    <input type="hidden" name="input-psw-conf-hash">
                    <button type="submit" class="large">
                        <h4 class="light">
                            Submit
                        </h4>
                    </button>
                </form>
            </div>
            <div class="separate-line separate-line-registration">

            </div>
            <div class="wrapper-link-login">
                <h4>
                    <a href="../login/login.php" class="fuchsia">
                        Sign In
                    </a>
                </h4>
            </div>
        </section>
    </main>

</body>
<script type="module" src="./js/view-registration.js"></script>

</html>