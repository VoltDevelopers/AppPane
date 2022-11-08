<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shopping bag page</title>
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="css/style-shopping-bag.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="stylesheet" href="../common/css/style-form.css">
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
        <h3 style="text-align: center; margin-bottom: 30px;" class="bag-status"></h3>
        <div class="wrapper-order">
            <div class="articles-wrapper">

            </div>
            <div class="order-all">
                <h4>Order:</h4>
                <ul class="rep-order" style="margin-left: -25px;">
                </ul>
                <div class="create-order">
                    <h5>Total: <span class="fuchsia order-price"></span></h5>
                    <button type="button" class="btn-order">
                        <h5 class="light">Order</h5>
                    </button>
                </div>
            </div>
        </div>
    </main>
    <?php include '../common/php/footer.php'; ?>
</body>
<script type="module" src="./js/view-bag.js"></script>

</html>