<script>
  import { onMount } from "svelte";

  onMount(() => {
    var target_href = window.location.href.split("#")[1];
    if (target_href)
      setTimeout(() => {
        window.scrollTo({
          top: document.getElementById(target_href).offsetTop,
          behavior: "auto"
        });
      }, 50);
  });
</script>

<style>
  section {
    padding-top: 6rem;
    margin-bottom: -3rem;
  }
  section:last-of-type {
    margin-bottom: 0;
  }
  span span {
    color: #9f9f9f;
    font-size: 0.9rem;
  }
  .banner {
    margin: 3rem 0 -2rem;
    /* background: #efefef; */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 23rem;
    padding: 21rem 0 3rem;
    width: unset;
    width: calc(100% - 2rem);
    align-items: flex-start;
  }

  .banner::after {
    position: absolute;
    background: #444b57;
    top: 0;
    right: 0;
    width: 200vw;
    z-index: -2;
    bottom: 0;
    content: "";
    display: block;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
  }
  .banner a {
    display: inline-block;
    font-weight: 300;
    font-size: 2rem;
    color: #f2f2f2;
    text-transform: uppercase;
    position: relative;
    padding: 0.5rem;
  }
  .banner a:hover {
    text-decoration: none;
  }
  .banner a::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0.2rem;
    left: 20%;
    height: 0.1rem;
    width: 60%;
    background: #f2f2f2;
    transition: all.5s;
  }
  .banner a:hover::after {
    background: #eb9a21;
    height: 0.2rem;
    left: 0;
    width: 100%;
  }
  .banner figure {
    left: -2rem;
    /* right: -16rem; */
    top: -3rem;
    width: 30rem;
    height: 18rem;
    object-fit: contain;
    object-position: 100% 50%;
    position: absolute;
  }
  .banner figure img {
    background: #f2f2f2;
  }
  .banner figure:after {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    background: #eb9a21;
    right: 0.5rem;
    top: 3rem;
    width: 110%;
    height: 100%;
    height: calc(100% + 1rem);
    width: calc(100% + 1rem);
  }
  @media (min-width: 500px) {
    .banner figure {
      left: 5rem;
    }
  }
  @media (min-width: 1000px) {
    .banner {
      align-items: flex-end;
      width: calc(100% - 15rem);
      height: 22rem;
      padding: 2rem 20rem 2rem 0;
    }
    .banner figure {
      left: unset;
      right: -16rem;
    }
  }
</style>

<svelte:head>
  <title>ОТЕЛЬ - Услуги</title>
</svelte:head>

<h1>Услуги отеля</h1>

<div class="banner">
  <a href="about/services#bankety">Банкеты</a>
  <a href="about/services#premier">Premier hall</a>
  <a href="about/services#catering">Кейтеринг</a>
  <figure>
    <img src="_assets/img/team/team1.jpg" alt="nice img" />
  </figure>
</div>

<section id="bankety">
  <h2>Банкеты</h2>
  <p>
    Торжественное мероприятие будет выглядеть изысканно, если Вы решите его
    провести в стенах нашего Отеля в Киеве. Софиевский Гранд Холл – это лучшее
    место для проведения гала-ужина, корпоративного праздника,
    благотворительного бала, а также для празднования дня рождения и юбилея.
    Наши специалисты помогут Вам продумать мельчайшие детали и сделать Ваше
    мероприятие престижным и запоминающимся.
  </p>
  <h6>В Вашем распоряжении будет всё необходимое для проведения торжества:</h6>
  <ul>
    <li>комплекс концертного светового и звукового оборудования,</li>
    <li>изысканная украинская и европейская кухня,</li>
    <li>безупречный сервис.</li>
  </ul>
  <h4>Дополнительная информация:</h4>
  <span>
    Тел.: +38 (044) 244 14 48, 244 12 22
    <span>– с понедельника по пятницу с 9:00 до 18:00</span>
  </span>
  <br />
  <span>E-mail:conference@premier-palace.com</span>
  <br />

</section>

<section id="premier">
  <h2>Premier Hall</h2>
  <p>
    Premier Palace Hotel рад представить Premier Hall – эксклюзивный зал, для
    проведения Ваших особенных событий.
  </p>
  <h6>Premier Hall это:</h6>
  <ul>
    <li>
      торжественно оформленное помещение уникальной круглой формы площадью 202
      кв м с прилегающим Каминным залом;
    </li>
    <li>
      удобное расположение на первом этаже Premier Palace Hotel рядом с
      легендарным Лобби-баром;
    </li>
    <li>вместимость - до 200 гостей;</li>
    <li>возможности гибкого использования пространства;</li>
    <li>покрытие высокоскоростным Wi-Fi;</li>
    <li>собственное аудиовизуальное оборудование;</li>
    <li>банкетное обслуживание от одной из лучших команд Киева;</li>
    <li>все необходимые удобства в одной локации.</li>
  </ul>
  <p>
    Premier Hall подчеркнет высокий статус Вашего мероприятия и оставит самые
    приятные впечатления у гостей.
  </p>
  <p>Площадь: 205 м2</p>
  <h6>Рассадка:</h6>
  <ul>
    <li>«Театр» - до 120 человек</li>
    <li>«Банкет» - до 130 челок</li>
    <li>«Круглый стол» - до 50 человек</li>
    <li>«П-образная» - до 60 человек</li>
    <li>«Фуршет» - до 200 человек</li>
    <li>«Кабаре» - до 100 человек</li>
    <li>«Тренинг» - до 100 человек</li>
  </ul>
</section>

<section id="catering">
  <h2>Кейтеринг</h2>

  <p>
    Вам нужно лишь выбрать место: в загородной резиденции, музее, выставочном
    центре, на острове, в ботаническом саду – а все остальное поручите нам!
  </p>
  <p>Мы организуем для Вас сервис и кухню класса «пять звезд» в любом месте.</p>
  <p>
    Желаете чего-то необычного? Предлагаем воспользоваться Premier Palace
    Catering на борту Вашей яхты или воздушного лайнера! Изысканный ресторан в
    воздухе или на воде – вот что такое выездное обслуживание от Premier Palace
    Catering!
  </p>
  <p>
    Выездное обслуживание от Premier Palace Catering предоставляет полный спектр
    (кейтеринг) услуг высокого уровня.
  </p>
  <p>
    Мы работаем для того, чтобы хозяин праздника и его гости смогли в полной
    мере насладиться комфортным отдыхом, расслабляющей атмосферой,
    восхитительным вкусом блюд и напитков, изумительной сервировкой и декором
    стола. Мы создаем обстановку, которая сближает людей и позволяет им ощутить
    всю прелесть совместного времяпрепровождения.
  </p>
  <p>
    Высококвалифицированный персонал настолько профессионально обслуживает
    торжество, что создается впечатление, будто блюда и напитки появляются по
    мановению волшебной палочки без участия посторонних лиц.
  </p>
  <p>
    Проведенный нами банкет приятно удивит людей, обладающих самым изысканным
    вкусом, и надолго оставит в памяти восхитительные впечатления!
  </p>
  <p>
    Наша компания берет на себя проведение торжеств «под ключ», что
    подразумевает комплексное решение по планированию, организации и
    обслуживанию праздника.
  </p>
  <p>
    На каждом этапе своей работы мы предоставляем услуги, соответствующие самым
    высоким стандартам.
  </p>
  <p>Мы предложим Вам самое лучшее!</p>
  <h4>Дополнительная информация:</h4>
  <span>Тел.: +38 (044) 244 12 22</span>
  <br />
  <span>Моб.: +38 (067) 218 82 43</span>
  <br />
  <span>E-mail: catering@premier-palace.com</span>
  <br />
</section>
