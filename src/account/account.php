<?php

?>

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
        <div class="wrapper-form" style="display: block;">
            <form method="post">
                <input type="email" name="input-login" placeholder="Email" maxlength="30">
                <input type="password" name="input-psw" placeholder="Password" minlength="12">
                <button type="submit" class="large">
                    <h4 class="light">
                        Apply
                    </h4>
                </button>
            </form>
        </div>
        <div class="wrapper-form">
            <form method="post">
                <input type="text" name="input-login" placeholder="Nome" maxlength="30">
                <input type="password" name="input-psw" placeholder="Cognome" maxlength="30">

                <input type="password" name="input-psw-conf" placeholder="Telefono" maxlength="12" class="marginTop">
                <input type="password" name="input-psw" placeholder="Indirizzo" maxlength="40" >
                <input type="password" name="input-psw-conf" placeholder="CAP" maxlength="5">
                <input type="password" name="input-psw" placeholder="Città" maxlength="20">
                <button type="submit" class="large">
                    <h4 class="light">
                        Apply
                    </h4>
                </button>
            </form>
        </div>
    </main>
</body>

</html>