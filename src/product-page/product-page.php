<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product page</title>
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
    <link rel="stylesheet" href="./css/product-page-style.css" />
</head>

<body>
    <section>
        <header>
            <?php
            require('../common/php/token-manager.php');
            $page = 'main';
            $active = 'class="active-menu"';
            require('../common/php/header.php');
            ?>
        </header>
    </section>
    <section>
        <div class="main-container">
        </div>

    </section>

</body>
<script type="module" src="./js/view-product-page.js"></script>

</html>