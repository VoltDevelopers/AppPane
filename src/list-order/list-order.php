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
    <title>Main</title>
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
    <main class="wrapper-main-block">
        <section>
            <h3 class="wrapper-name">Your orders:</h3>
            <div class="wrapper-order">
    <div class="horizontal-line">

    </div>
    <div class="wrapper-block">
        <div class="wrapper-date">
            <h4>Your order: 14 Settembre 2022</h4>
        </div>

        <div class="wrapper-block-list">
            <h4>Your order:</h4>
            <ul>
                <li>
                    <h5 class="wrapper-product">Mouse</h5>
                </li>
                <li>
                    <h5 class="wrapper-product">Mouse</h5>
                </li>
            </ul>
        </div>

        <div class="wrapper-address-price-block">
            <div class="wrapper-address">
                <h4>Adress: Via del ronco 18</h4>
            </div>
            <div class="wrapper-price">
                <h4>Price:<h4 class="price">25.46$</h4></h4>
            </div>
        </div>
    </div>
</div>
        </section>
    </main>
</body>
<script src="./js/view-list-order.js" type="module"></script>

</html>