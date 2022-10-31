<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../common/css/style-page.css">
    <link rel="stylesheet" href="../common/css/style-font.css">
    <link rel="stylesheet" href="../common/css/style-form.css">
    <link rel="stylesheet" href="./css/style-login.css">
    <title>Login</title>
</head>
<body>
<section>
    <header>
            <div class="wrapper-header-left wrapper-header">
                <h4>
                    <a href="../main/main.php">
                        Home
                    </a>
                </h4>
            </div>
            <div class="wrapper-header-center wrapper-header ">
                <div class="icon-logo">
                </div>
            </div>
            <div class="wrapper-header-right wrapper-header ">
    
            </div>
    </header>
    </section>
    <main>
        <section>
            <div class="wrapper-form-login wrapper-form">
                <h3>
                    Login
                </h3>
                <form method="post">
                    <input type="text" name="input-login" autocomplete="current-login" placeholder="login">
                    <input type="password" name="input-psw" autocomplete="current-password" placeholder="password">
                        <input type="hidden" name="input-psw-hash">
                    <button type="submit" class="large">
                        <h4 class="light">
                            Submit
                        </h4>
                    </button>
                </form>
            </div>
            <div class="separate-line separate-line-login">
                
            </div>
            <div class="wrapper-link-registration">
                <h4>
                    <a href="../registration/registration.php" class="fuchsia">
                        Sign Up
                    </a>
                </h4>
            </div>
        </section>
    </main>
</body>
<script type="module" src="./js/view-login.js"></script>
</html>