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
            require_once('../common/php/token-manager.php');
            $page = 'main';
            $active = 'class="active-menu"';
            require_once('../common/php/header.php');
            ?>
        </header>
    </section>
    <main>
        <section>
            <div class="wrapper-dersc-main">
                <div class="wrapper-text">
                    <h4>
                        Acquista i nostri prodotti
                    </h4>
                    <h6>
                        Diamo la possibilità a tutti, amici, clienti e, soprattutto, chi abita distante da noi, di mangiare i nostri prodotti acquistandoli on-line!<br>
                        Il pane ed i nostri prodotti da forno si mantengono per diversi giorni, vi invitiamo a fare scorte sostanziose per rendere il servizio più efficiente e sostenibile.
                    </h6>
                </div>
                <div class="wrapper-img">

                </div>
            </div>
            <div class="wrapper-week-products">
                <div class="wrapper-title">
                    <h3>
                        Dai un' occhiata ai nostri prodotti settimanali:
                    </h3>
                    <div class="wrapper-filtrs">

                    </div>
                </div>
                <div class="wrapper-products">

                </div>
            </div>
        </section>
    </main>
    
</body>
<script type="module" src="./js/view-main.js"></script>
</html>