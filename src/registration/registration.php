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
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
    <title>Registration</title>
</head>

<body>
    <section>
        <header>
            <?php
            require_once('../common/php/token-manager.php');
            $page = 'null';
            $active = 'class="active-menu"';
            require_once('../common/php/header.php');
            ?>
        </header>
    </section>
    <main>
        <section>
            <div class="wrapper-form-registration wrapper-form">
                <h3>
                    Registration
                </h3>
                <form method="post">
                    <input type="email" name="input-login" placeholder="email" minlength="6">
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
    <?php include '../common/php/footer.php'; ?>
</body>
<script type="module" src="./js/view-registration.js"></script>

</html>