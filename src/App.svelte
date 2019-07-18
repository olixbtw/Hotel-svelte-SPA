<script>
  import Content from "./parts/contentArea.svelte";
  import Slider from "./parts/slider.svelte";
  import Navigation from "./parts/navigation.svelte";
  import Footer from "./parts/footer.svelte";
</script>

<style lang="scss">
  $g_gap: 0.75rem;
  .container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    .slider {
      height: 20vh;
    }
    .content {
      flex-grow: 1;
      padding: 0 4rem;
      @media (min-width: 1680px) {
        width: 1400px;
        margin: 0 auto;
        padding: 0;
      }
    }
  }
  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 25px; /* min-size, max-size */
    font-range: 420px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>

<div class="container">
  <div class="menu">
    <Navigation />
  </div>
  <div class="slider">
    <Slider />
  </div>
  <div class="content">
    <Content />
  </div>
  <div class="footer">
    <Footer />
  </div>
</div>
