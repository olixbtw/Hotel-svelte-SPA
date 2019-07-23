<script>
  import { pageActive } from "./stores.js";
  export let activePage;
  $pageActive = activePage;
  // set stroe value equal to property
  // tried to create proper routing
  //better use Snapper for this purpose.

  import Content from "./parts/contentArea.svelte";
  import Slider from "./parts/slider.svelte";
  import Navigation from "./parts/navigation.svelte";
  import Footer from "./parts/footer.svelte";
  import Arrow from "./parts/topArrow.svelte";
</script>

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
<Arrow/>

<style lang="scss">
  $g_gap: 0.75rem;
  .container {
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    .slider {
      height: 20vh;
    }
    .content {
      position: relative;
      flex-grow: 1;
      display: flex;
      padding: 0 4rem;
      @media (min-width: 1680px) {
        width: 1400px;
        margin: 0 auto;
        padding: 0;
      }
    }
  }
  :global(body) {
    overflow-y:scroll;
  }
  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 25px; /* min-size, max-size */
    font-range: 420px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>
