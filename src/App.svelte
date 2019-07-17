<script>
  import Content from "./parts/contentArea.svelte";
  import Slider from "./parts/slider.svelte";
  import Navigation from "./parts/navigation.svelte";
  import Footer from "./parts/footer.svelte";
</script>

<!-- <div>{colors.red}</div> -->
<!-- <div>{printThis}</div> -->
<div class="grid">
  <div class="grid__area slider">
    <Slider />
  </div>
  <div class="grid__area menu">
    <Navigation />
  </div>
  <div class="grid__area content">
    <Content />
  </div>
  <div class="grid__area footer">
    <Footer />
  </div>
</div>

<style lang="scss">
  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 25px; /* min-size, max-size */
    font-range: 420px 1680px; /* viewport widths between which font-size is fluid */
  }
  $g_gap: 0.75rem;
  .grid {
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-areas:
      "m"
      "s"
      "c"
      "f";

    .slider {
      height: 20vh;
      grid-area: s;
    }
    .menu {
      grid-area: m;
    }
    .content {
      padding: 0 3rem;
      grid-area: c;
    }
    .footer {
      grid-area: f;
    }
  }
</style>
