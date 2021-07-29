<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nubank</title>
    <link rel="stylesheet" href="dist/css/app.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

</head>
<body>
    <main class="mobile">
        <header class="header">
            <div class="header__name">
                <img class="header__name__logo" src="dist/img/logo-splash.png" alt="Nubank's Splash Logo">
                <span>Carlos</span>
            </div>
            <img class="header__arrowDown" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
        </header>

        <section class="panel">
            <div class="panel__qrcode">
                <img class="panel__qrcode__img" src="dist/img/qrcode.png" alt="QrCode Image">

                <p class="panel__qrcode__agency">
                    Agência
                    <span class="panel__qrcode__agency--number">
                        0001
                    </span>
                </p>

                <p class="panel__qrcode__account">
                    Conta
                    <span class="panel__qrcode__account--number">
                        682265-3
                    </span>
                </p>
            </div>

            <ul class="panel__navigation">
                <li class="panel__navigation__link">
                    <a href="#">
                        <img class="panel__navigation__link__icon" src="dist/img/icons/white/question.png" alt="Help icon"> Me ajuda
                    </a>
                    <img class="panel__navigation__link__arrow" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
                </li>
                <li class="panel__navigation__link">
                    <a href="#">
                        <img class="panel__navigation__link__icon" src="dist/img/icons/white/user.png" alt="Profile icon"> 
                        <div class="panel__navigation__link__info">
                            <span class="panel__navigation__link__info__name">Perfil</span>
                            <span class="panel__navigation__link__info__description">Nome de preferência, telefone, e-mail</span>
                        </div>
                    </a>
                    <img class="panel__navigation__link__arrow" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
                </li>
                <li class="panel__navigation__link">
                    <a href="#">
                        <img class="panel__navigation__link__icon" src="dist/img/icons/white/card.png" alt="Card icon"> Configurar Cartão
                    </a>
                    <img class="panel__navigation__link__arrow" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
                </li>
                <li class="panel__navigation__link">
                    <a href="#">
                        <img class="panel__navigation__link__icon" src="dist/img/icons/white/gift.png" alt="Gift icon"> Configurar Rewards
                    </a>
                    <img class="panel__navigation__link__arrow" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
                </li>
                <li class="panel__navigation__link">
                    <a href="#">
                        <img class="panel__navigation__link__icon" src="dist/img/icons/white/phone.png" alt="Phone icon"> Configurações do app
                    </a>
                    <img class="panel__navigation__link__arrow" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
                </li>
            </ul>

            <a class="panel__logout" href="#">
                Sair do app
            </a>
        </section>
    </main>

    <script type="text/javascript" src="src/assets/js/app.js"></script>

</body>
</html>