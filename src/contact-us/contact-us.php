<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="../common/css/style-form.css">
    <link rel="stylesheet" href="./css/style-contact-us.css">
    <link rel="stylesheet" href="../common/css/style-popup.css">
    <link rel="shortcut icon" href="../common/img/icon-shopping-bag.svg" />
    <title>Contact Us</title>
</head>

<body>
    <section>
        <header>
            <div class="wrapper-header-left wrapper-header">
                <h5>
                    <a href="../main/main.php">Home</a>
                </h5>
                <h5>
                    <a href="../contact-us/contact-us.php">Contacts</a>
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
                    <a href="../account/account.php">Account</a>
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
                <a href="../bag/bag.php">
                    <div class="icon-shopping-bag"></div>
                </a>
            </div>
        </header>
    </section>
    <main>
        <section>
            <div class="wrapper-form-contact-us wrapper-form">
                <h3>
                    Contact Us
                </h3>
                <form>
                    <div class="wrapper-credential">
                        <input type="text" placeholder="Your name" name="input-user" minlength="6">
                        <input type="email" placeholder="Your email" name="input-email" >
                    </div>
                    <div class="wrapper-description-problem">
                        <textarea name="input-problem"  class="description-problem" cols="30" rows="10" placeholder="Describe your problem"></textarea>
                    </div>
                    <button type="submit" class="large">
                        <h4 class="light">
                            Submit
                        </h4>
                    </button>
                    
                </form>
            </div>

        </section>
    </main>

</body>
<script type="module" src="./js/view-contact-us.js"></script>

</html>