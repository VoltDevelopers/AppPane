<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main</title>
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="stylesheet" href="./css/style-main.css">
    <link rel="stylesheet" href="./css/style-product.css">
    <link rel="stylesheet" href="./css/style-filter.css">
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
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
    <main>
        <section>
            <div class="wrapper-dersc-main">
                <div class="wrapper-text">
                    <h4>
                        Take a look of our products
                    </h4>
                    <h6>
                        gh an of up attempt gravity. Situation to be at offending elsewhere distrusts if. Particular use
                        for considered projection cultivated. Worth of do doubt shall it their. Extensive existence up
                        me contained he pronounce do. Excellence inquietude assistance precaution any impression man
                        sufficient.
                    </h6>
                </div>
                <div class="wrapper-img">

                </div>
            </div>
            <div class="wrapper-week-products">
                <div class="wrapper-title">
                    <h3>
                        Take a look of our week products:
                    </h3>
                    <div class="wrapper-filtrs">

                    </div>
                </div>
                <div class="wrapper-products">

                </div>
            </div>
        </section>
    </main>
    <?php include '../common/php/footer.php'; ?>
</body>
<script type="module" src="./js/view-main.js"></script>

</html>