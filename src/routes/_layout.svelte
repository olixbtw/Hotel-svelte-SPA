<script>
  export let pageLogo = "LOGO_dark";
  import Breadcrumbs from "../components/breadcrumbs.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style lang="scss">
  main {
    position: relative;
    max-width: 56em;
    // max-width: 70em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;

    &::after {
      //заменить простой бекграунд чтобы можно спокойно использовать z-index:-1;
      position: absolute;
      z-index: -100;
      content: "";
      background-color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  // main {
  //   min-height: 100%;
  //   width: 100%;
  //   padding-top: 0.25rem;
  //   padding-bottom: 2rem;
  // }

  .pageLogo {
    position: absolute;
    top: 2em;
    right: 13em;
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    opacity: 0.1;
    z-index: -1;
  }

  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 25px; /* min-size, max-size */
    font-range: 500px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>

<Nav {segment} />

<main>
  {#if pageLogo}
    <img class="pageLogo" src="{pageLogo}.svg" alt="{pageLogo} logo" />
  {/if}
  <Breadcrumbs />
  <slot />
</main>
