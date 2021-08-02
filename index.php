<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nubank</title>
    <link rel="stylesheet" href="dist/css/app.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">

    
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet">
</head>
<body>
    <main class="mobile">
        <div class="content">
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

                <?php 
                    $links = array(
                        0=> array('name'=>'Me ajuda', 'icon'=> 'question'),
                        1=> array('name'=>'Perfil', 'icon'=> 'user', 'description' => 'Nome de preferência, telefone, e-mail'),
                        2=> array('name'=>'Configurar Cartão', 'icon'=> 'card'),
                        3=> array('name'=>'Configurar Rewards', 'icon'=> 'gift'),
                        4=> array('name'=>'Configurações do app', 'icon'=> 'phone'),
                    )
                ?>
                <ul class="panel__navigation">
                    <?php foreach($links as $link) { ?>
                        <li class="panel__navigation__link">
                            <a href="#">
                                <img class="panel__navigation__link__icon" src="dist/img/icons/white/<?=$link["icon"]?>.png" alt="Profile icon"> 
                                <div class="panel__navigation__link__info">
                                    <span class="panel__navigation__link__info__name"><?=$link["name"]?></span>
                                    <span class="panel__navigation__link__info__description"><?php if(isset($link["description"])) { echo $link["description"];} ?></span>
                                </div>
                            </a>
                            <img class="panel__navigation__link__arrow" src="dist/img/icons/white/arrow-down-white.png" alt="Arrow down">
                        </li>
                    <?php } ?>
                </ul>

                <a class="panel__logout" href="#">
                    Sair do app
                </a>
            </section>

            <section class="cardPanel">
                <div class="cardPanel__wrapper cardPanel__wrapper__rewards">
                    <figure class="cardPanel__wrapper__iconContainer">
                        <img class="cardPanel__wrapper__iconContainer__mainIcon" src="dist/img/icons/gray/gift.png" alt="Gift">
                    </figure>
                    <div class="cardPanel__wrapper__mainInfo">
                        <h2 class="cardPanel__wrapper__mainInfo__title">28.496 <span>pts</span></h2>
                        <p class="cardPanel__wrapper__mainInfo__description">Você acumulou <span>2.248 pontos</span> nos últimos 30 dias</p>
                    </div>
                    <div class="cardPanel__wrapper__footer">
                        <img class="cardPanel__wrapper__footer__icon" src="dist/img/icons/gray/travel.png" alt="Icon">
                        <p>Apagar compra de R$ 268.35 em Brasil Airlines com 26.835pts</p>
                        <img class="cardPanel__wrapper__footer__arrow" src="dist/img/icons/arrow-down.png" alt="Arrow">
                    </div>
                </div>



                <div class="cardPanel__wrapper cardPanel__wrapper__account">
                    <figure class="cardPanel__wrapper__iconContainer">
                        <img class="cardPanel__wrapper__iconContainer__mainIcon" src="dist/img/icons/gray/card.png" alt="Card">
                    </figure>
                    <div class="cardPanel__wrapper__mainInfo">
                        <span class="cardPanel__wrapper__mainInfo__subtitle cardPanel__wrapper__mainInfo__subtitle--salmon">Fatura Fechada</span>
                        <h2 class="cardPanel__wrapper__mainInfo__title cardPanel__wrapper__mainInfo__title--salmon"><span>R$ </span> 1.328,<span>40</span></h2>
                        <p class="cardPanel__wrapper__mainInfo__description cardPanel__wrapper__mainInfo__description--column">
                            <span class="cardPanel__wrapper__mainInfo__description--grey">Vencimento 25 Mai</span> 
                            <a class="cardPanel__wrapper__mainInfo__description--link" href="#">Pagar</a>
                        </p>
                    </div>
                    <div class="cardPanel__wrapper__footer">
                        <img class="cardPanel__wrapper__footer__icon" src="dist/img/icons/gray/food.png" alt="Icon">
                        <p>Compra mais recente em Empório Gourmet no valor de R$ 199,40 hoje</p>
                        <img class="cardPanel__wrapper__footer__arrow" src="dist/img/icons/arrow-down.png" alt="Arrow">
                    </div>
                </div>



                <div class="cardPanel__wrapper cardPanel__wrapper__credit">
                    <figure class="cardPanel__wrapper__iconContainer">
                        <img class="cardPanel__wrapper__iconContainer__mainIcon" src="dist/img/icons/gray/coin.png" alt="Coin">
                    </figure>
                    <div class="cardPanel__wrapper__mainInfo">
                        <div class="cardPanel__wrapper__mainInfo__bars">
                            <div class="cardPanel__wrapper__mainInfo__bars__bar1"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar2"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar3"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar4"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar5"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar6"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar7"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar8"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar9"></div>
                            <div class="cardPanel__wrapper__mainInfo__bars__bar10"></div>
                        </div>
                        <h2 class="cardPanel__wrapper__mainInfo__title cardPanel__wrapper__mainInfo__title--black"><span>R$</span>1.856<span>,68</span></h2>
                        <p class="cardPanel__wrapper__mainInfo__description">Você já ganhou <span class="cardPanel__wrapper__mainInfo__description--grey">R$ 1,37</span> neste mês.</p>
                    </div>
                    <div class="cardPanel__wrapper__footer">
                        <img class="cardPanel__wrapper__footer__icon" src="dist/img/icons/gray/deposit.png" alt="Icon">
                        <p>Transferência de R$ 414,10 recebida de Marina de Souza hoje</p>
                        <img class="cardPanel__wrapper__footer__arrow" src="dist/img/icons/arrow-down.png" alt="Arrow">
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="footer__wrapper">
                    <?php 
                        $footer_links = array(
                            0=> array('title'=>'Indicar amigos', 'icon'=>'invite-home'),
                            1=> array('title'=>'Depositar', 'icon'=>'deposit'),
                            2=> array('title'=>'Transferir', 'icon'=>'transfer'),
                            3=> array('title'=>'Pagar', 'icon'=>'bar-code'),
                            4=> array('title'=>'Bloquear cartão', 'icon'=>'lock'),
                            5=> array('title'=>'Cartão Virtual', 'icon'=>'virtual-card'),
                            5=> array('title'=>'Organizar atalhos', 'icon'=>'filter'),
                        );
                    ?>
                    <?php foreach($footer_links as $link) { ?>
                        <div class="footer__wrapper__card <?= $link['title'] == 'Organizar atalhos' ? 'shortcuts' : '' ?>">
                            <figure class="footer__wrapper__card__imgWrapper">
                                <img class="footer__wrapper__card__imgWrapper__img " src="dist/img/icons/white/<?=$link['icon']?>.png" alt="<?=$link['title']?>">
                            </figure>
                            <span><?=$link['title']?></span>
                        </div>
                    <?php } ?>
                </div>
            </footer>
        </div>

        <figure class="splashLogo">
            <img src="dist/img/logo-splash.png" alt="Nubank's splash logo">
        </figure>

        <section class="atalhos atalhos--disabled">
            <div class="atalhos__wrapper">
                <h1 class="atalhos__wrapper__title">
                    <button class="atalhos__wrapper__title__back"><img  src="dist/img/icons/arrow-down.png" alt="Arrow down"></button>
                    Organizar atalhos
                </h1>
                <ul 
                    class="atalhos__wrapper__list"
                    ondragover="onDragOver(event)"
                    ondrop="onDrop(event)"
                >
                    <?php foreach($footer_links as $link) { ?>
                    <li 
                        class="atalhos__wrapper__list__item"
                        draggable="true"
                        ondragstart="onDragStart(event)"
                    >
                        <?= $link['title'] != 'Organizar atalhos' ? $link['title'] : '' ?>
                    </li>
                    <?php } ?>
                </ul>
            </div>
        </section>

        <section class="rewards rewards--disabled">
            <div class="rewards__header">
                <div class="rewards__header__back">
                    <img class="rewards__header__back__arrow" src="dist/img/icons/arrow-down.png" alt="left arrow">
                    <img src="dist/img/icons/gray/gift.png" alt="gift icon">
                </div>
                <img src="dist/img/icons/gray/question.png" alt="question icon">
            </div>

            <div class="rewards__title">
                <h2>rewards</h2>
                <p>28.496<span>pts</span></p>
            </div>

            <div class="rewards__categories">
                <div class="rewards__categories__hotel">
                    <img src="dist/img/icons/gray/car.png" alt="Car">
                    <h3>Voos e hotéis</h3>
                    <span>Seus pontos valem mais</span>
                </div>
                <div class="rewards__categories__extra">
                    <img src="dist/img/icons/gray/cart.png" alt="Cart">
                    <h3>Extras</h3>
                    <span>Recompensas rápidas</span>
                </div>
            </div>

            <ul class="rewards__list">
                <li class="rewards__list__item">
                    <figure class="rewards__list__item__imgWrapper">
                        <img src="dist/img/icons/gray/travel.png" alt="Handbag icon">
                    </figure>
                    <div class="rewards__list__item__info">
                        <h3>Viagem</h3>
                        <span class="rewards__list__item__info__title">Brasil Airlines</span>
                        <span class="rewards__list__item__info__description" >Apagar R$ 268,35 com 26.836pts</span>
                    </div>
                    <div class="rewards__list__item__date">
                        <span>Domingo</span>
                    </div>
                </li>
                <li class="rewards__list__item">
                    <figure class="rewards__list__item__imgWrapper">
                        <img src="dist/img/icons/gray/travel.png" alt="Handbag icon">
                    </figure>
                    <div class="rewards__list__item__info">
                        <h3>Viagem</h3>
                        <span class="rewards__list__item__info__title">Brasil Airlines</span>
                        <span class="rewards__list__item__info__description" >Apagar R$ 268,35 com 26.836pts</span>
                    </div>
                    <div class="rewards__list__item__date">
                        <span>Domingo</span>
                    </div>
                </li>
                <li class="rewards__list__item">
                    <figure class="rewards__list__item__imgWrapper">
                        <img src="dist/img/icons/gray/travel.png" alt="Handbag icon">
                    </figure>
                    <div class="rewards__list__item__info">
                        <h3>Viagem</h3>
                        <span class="rewards__list__item__info__title">Brasil Airlines</span>
                        <span class="rewards__list__item__info__description" >Apagar R$ 268,35 com 26.836pts</span>
                    </div>
                    <div class="rewards__list__item__date">
                        <span>Domingo</span>
                    </div>
                </li>
                <li class="rewards__list__item">
                    <figure class="rewards__list__item__imgWrapper">
                        <img src="dist/img/icons/gray/travel.png" alt="Handbag icon">
                    </figure>
                    <div class="rewards__list__item__info">
                        <h3>Viagem</h3>
                        <span class="rewards__list__item__info__title">Brasil Airlines</span>
                        <span class="rewards__list__item__info__description" >Apagar R$ 268,35 com 26.836pts</span>
                    </div>
                    <div class="rewards__list__item__date">
                        <span>Domingo</span>
                    </div>
                </li>
            </ul>


        </section>
    </main>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <script type="text/javascript" src="src/assets/js/app.js"></script>

</body>
</html>