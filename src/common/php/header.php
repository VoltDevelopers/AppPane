<div class="wrapper-header-left wrapper-header">
    <h5>
        <a <?=($page == 'main') ? $active : ''; ?> href="../main/main.php">Home</a>
    </h5>
    <h5>
        <a <?=($page == 'contacts') ? $active : ''; ?> href="../contact-us/contact-us.php">Contacts</a>
    </h5>
</div>
<div class="wrapper-header-center wrapper-header ">
    <div class="icon-logo">
    </div>
</div>
<div class="wrapper-header-right wrapper-header ">
    <?php
    if (TokenManager::isAuthenticated()) {
    ?>
    <h5>
        <a <?=($page == 'orders') ? $active : ''; ?> href="../list-order/list-order.php">Orders</a>
    </h5>
    <h5 class="wrapper-popup-block">
        <a <?=($page == 'account') ? $active : ''; ?> href="../account/account.php">Account</a>
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
                    <a href="../common/php/logout.php">Logout</a>
                </div>
            </div>
        </div>
    </h5>
    <?php
    } else {
    ?>
    <h5>
        <a href="../registration/registration.php">Sign Up</a>
    </h5>
    <h5>
        <a href="../login/login.php">Sign In</a>
    </h5>
    <?php
    }
    ?>
    <a href="../bag/bag.php">
        <div class="icon-shopping-bag"></div>
    </a>
</div>