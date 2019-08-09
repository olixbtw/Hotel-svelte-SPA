<script>
  import Slider from "../components/slider.svelte";
  import Nav from "../components/navigation/nav_bottom.svelte";
  import Logo from "../components/logo.svelte";
  import Footer from "../components/_Footer.svelte";
  import Button from "../components/__button.svelte";
  export let segment;
</script>

<style lang="scss">
  h1 {
    text-align: center;
    color: inherit;
    font-size: 2.8em;
    text-transform: uppercase;
    margin: 0 0 0.5em 0;
  }
  section {
    position: relative;
  }
  .nav,
  .logo {
    position: absolute;
    z-index: 100;
  }
  .nav {
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .logo {
    left: 50%;
    transform: translateX(-50%) scale(1.4);
    top: 10vh;
  }
  .container :global(header) {
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

    :global(li) {
      font-size: 1.4rem;
    }
  }
  .container :global(footer) {
    padding-top: 5rem;
    padding-bottom: 2rem;
    font-size: 1rem;
  }
</style>

<svelte:head>
  <title>Pris hotel</title>
</svelte:head>

<div class="container">
  <section>
    <div class="logo">
      <Logo {segment} />
    </div>
    <Slider>
      <h1>Pris Hotel</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto quasi
        eligendi deleniti officia, dolores enim facere dignissimos
        reprehenderit, nobis et soluta ex vel quas perspiciatis mollitia
        nostrum. Hic, molestias.
      </p>
    </Slider>
    <div class="nav">
      <Nav {segment} />
    </div>
  </section>
  <Footer />
</div>
