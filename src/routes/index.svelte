<script>
  import Slider from "../components/slider.svelte";
  import Footer from "../components/_Footer.svelte";
  import Button from "../components/__button.svelte";
</script>

<style lang="scss">
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: inherit;
    font-size: 2.8em;
    text-transform: uppercase;
    margin: 0 0 0.5em 0;
  }

  nav {
    margin: 0 auto;
    display: block;
  }
  nav ul {
    padding-left: 1.5rem;
  }
  nav ul li {
    list-style: circle;
  }
  .container {
    min-height: 100vh;
  }
</style>

<svelte:head>
  <title>Pris отель</title>
</svelte:head>

<div class="container">
  <Slider>
    <h1>Pris Hotel</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto quasi
      eligendi deleniti officia, dolores enim facere dignissimos reprehenderit,
      nobis et soluta ex vel quas perspiciatis mollitia nostrum. Hic, molestias.
    </p>
  </Slider>
  <!-- <Slider /> -->

  <h1>Landing placeholder!</h1>

  <br />

  <nav>
    <ul>
      <li>
        <a href="./rooms">Номера</a>
        <ul>
          <li>
            <a href="./rooms/booking/">Резервация</a>
          </li>
          <li>[страница-номера]</li>
        </ul>
      </li>
      <li>
        <a href="./about/">Про отель</a>
        <ul>
          <li>
            <a href="./about/contact">Контакты</a>
          </li>
          <li>
            <a href="./about/services">Услуги</a>
          </li>
          <li>
            <a href="./about/gallery.svelte">Галерея</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>

  <Footer />

</div>
