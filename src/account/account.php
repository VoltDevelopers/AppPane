<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="../common/css/style-form.css">
    <link rel="stylesheet" href="./css/style-account.css">
    <title>Main</title>
</head>

<body>
    <section>
        <header>
            <div class="wrapper-header-left wrapper-header">
                <h4>
                    <a href="../main/main.php">Home</a>
                </h4>
                <h4>
                    <a href="../main/main.php">Contacts</a>
                </h4>
            </div>
            <div class="wrapper-header-center wrapper-header ">
                <div class="icon-logo">
                </div>
            </div>
            <div class="wrapper-header-right wrapper-header ">
                <h4>
                    <a href="../login/login.php">Orders</a>
                </h4>
                <h4>
                    <a href="../login/login.php" class="active-menu">Account</a>
                </h4>
                <div class="icon-shopping-bag"></div>
            </div>
        </header>
    </section>
    <main class="wrapper-main-block">
        <section>
            <div class="wrapper-form" id="modify-credentianl" >
                <form method="post" name="modify-credentianl">
                    <input type="email" name="input-email" placeholder="Email" maxlength="30" autocomplete="current-login">
                    <input type="password" name="input-psw" placeholder="Password" minlength="12" autocomplete="current-password">
                    <input type="hidden" name="input-psw-hash">
                    <button type="submit" class="large">
                        <h4 class="light">
                            Apply
                        </h4>
                    </button>
                </form>
            </div>
        </section>
        <section>
            <div class="wrapper-form" id="modify-personal-data">
                <form method="post" name="modify-personal-data">
                    <input type="text" name="input-name" placeholder="Name" maxlength="30" class="inputOnlyText">
                    <input type="text" name="input-surname" placeholder="Surname" maxlength="30" class="inputOnlyText">

                    <input type="text" name="input-phone" placeholder="Phone" maxlength="12" class="marginTop">
                    <input type="text" name="input-street" placeholder="Street" maxlength="40">
                    <input type="text" name="input-zip" placeholder="ZIP" maxlength="5" class="inputOnlyNumber">
                    <input type="text" name="input-city" placeholder="City" maxlength="20" class="inputOnlyText">
                    <button type="submit" class="large">
                        <h4 class="light">
                            Apply
                        </h4>
                    </button>
                </form>
            </div>
        </section>
    </main>
</body>
<script src="./js/view-account.js" type="module"></script>

</html>