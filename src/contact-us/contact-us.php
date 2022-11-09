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
            <?php
            require_once('../common/php/token-manager.php');
            $page = 'contacts';
            $active = 'class="active-menu"';
            require_once('../common/php/header.php');
            ?>
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
                        <input type="email" placeholder="Your email" name="input-email">
                    </div>
                    <div class="wrapper-description-problem">
                        <textarea name="input-problem" class="description-problem" cols="30" rows="10"
                            placeholder="Describe your problem"></textarea>
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
    <?php include '../common/php/footer.php'; ?>
</body>
<script type="module" src="./js/view-contact-us.js"></script>

</html>