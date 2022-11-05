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
        <h3 style="margin-left:40px;">Your shopping bag</h3>
        <div class="articles-wrapper">

        </div>
    </main>
    <?php include '../common/php/footer.php'; ?>
</body>
<script type="module" src="./js/view-bag.js"></script>

</html>