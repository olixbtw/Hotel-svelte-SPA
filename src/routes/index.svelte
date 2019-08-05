<script>
  import Slider from "../components/slider.svelte";
  import Button from "../components/__button.svelte";
</script>

<style lang="scss">
  h1,
  // figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: inherit;
    font-size: 2.8em;
    text-transform: uppercase;
    margin: 0 0 0.5em 0;
  }

  // figure {
  //   margin: 0 0 1em 0;
  // }

  // img {
  //   width: 100%;
  //   max-width: 400px;
  //   margin: 0 0 1em 0;
  // }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Pris отель</title>
</svelte:head>

<Slider>
  <h1>Pris Hotel</h1>
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
