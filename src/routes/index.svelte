<script>
  import Slider from "../components/slider.svelte";
  import Button from "../components/__button.svelte";
</script>

<svelte:head>
  <title>ОТЕЛЬ - 123</title>
</svelte:head>

<Slider>
  <h1>New Title</h1>
</Slider>
<!-- <Slider /> -->

<h1>Great success!</h1>

<!-- <figure>
  <img alt="Borкat" src="logo_dark.svg" />
  <figcaption>HIGH FIVE!</figcaption>
</figure> -->

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>

<Button href="rooms/">Go to Rooms</Button>

<style lang="scss">
  h1,
  // figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
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
