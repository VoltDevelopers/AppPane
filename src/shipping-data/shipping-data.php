<?php
require_once('../common/php/token-manager.php');

if (!TokenManager::isAuthenticated()) {
    header('Location: ../main/main.php');
}
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
    <link rel="stylesheet" href="./css/style-shipping-data.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
    <title>Appane</title>
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
    <main class="wrapper-main-block">
        <section>
            <h3>
                Shipping Data
            </h3>
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
                            Create order
                        </h4>
                    </button>
                </form>
            </div>
        </section>
    </main>

</body>
<script src="./js/view-shipping-data.js" type="module"></script>

</html>