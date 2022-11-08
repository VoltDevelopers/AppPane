<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping bag page</title>
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="css/style-shopping-bag.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="stylesheet" href="../list-order/css/style-list-order.css">
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
</head>

<body>
    <section>
        <header>
            <?php
            require('../common/php/token-manager.php');
            $page = 'null';
            $active = 'class="active-menu"';
            require('../common/php/header.php');
            ?>
        </header>
    </section>
    <main>
        <section>

            <h3 class="wrapper-name">Your shopping bag</h3>
            <div class="wrapper-order">

                <div class="wrapper-block">
                    <div class="horizontal-line"> </div>
                    <div class="order-all">
                        <button>
                            Order All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include '../common/php/footer.php'; ?>
</body>
<script type="module" src="./js/view-bag.js"></script>

</html>