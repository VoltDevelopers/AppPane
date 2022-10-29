<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style-registration.css">
    <title>Registration</title>
</head>

<body>
    <header>
        <section>

            <div class="nav-bar">
                <p>Home</p>
            </div>

        </section>
    </header>
    <main>
        <section class="form-block">
            <div class="wrapper-form-registration">
                <p class="form-name">Registration</p>
                <form action="." method="post">
                    <input type="text" name="input-login" class="inputText form-input" placeholder="login">
                    <input type="password" name="input-psw" class="inputNumber form-input" placeholder="password">
                    <input type="hiden" name="input-psw-conf" class="inputNumber form-input" placeholder="password">
                    <button type="submit" name="confirm-registrtion" class="form-btn">
                        Sign up
                    </button>
                </form>
            </div>
            <div class="separate-line">

            </div>
            <div class="wrapper-link-registration">
                <p class="link-registration">Sign in</p>
            </div>
        </section>
    </main>

</body>
<script type="module" src="./js/view-registration.js"></script>

</html>