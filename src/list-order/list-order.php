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
    <link rel="stylesheet" href="./css/style-list-order.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
    <title>Appane</title>
</head>

<body>
    <section>
        <header>
            <?php
            require_once('../common/php/token-manager.php');
            $page = 'orders';
            $active = 'class="active-menu"';
            require('../common/php/header.php');
            ?>
        </header>
    </section>
    <main class="wrapper-main-block">
        <section>
            <h3 class="wrapper-name">I tuoi ordini:</h3>
            <div class="wrapper-order">

            </div>
            <div class="wrapper-block">

            </div>
        </section>
    </main>

</body>
<script src="./js/view-list-order.js" type="module"></script>

</html>