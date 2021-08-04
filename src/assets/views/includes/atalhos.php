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