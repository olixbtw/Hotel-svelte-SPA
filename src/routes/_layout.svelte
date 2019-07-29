<script>
  import Nav from "../components/Nav.svelte";

  export let pageLogo = "favicon";
  import Breadcrumbs from "../components/breadcrumbs.svelte";

  export let segment;
</script>

<Nav {segment} />

<main>
  {#if pageLogo}
    <img class="pageLogo" src="assets/{pageLogo}.png" alt="{pageLogo} logo" />
  {/if}
  <Breadcrumbs />
  <slot />
</main>

<style lang="scss">
  // main {
  //   position: relative;
  //   max-width: 56em;
  //   background-color: white;
  //   padding: 2em;
  //   margin: 0 auto;
  //   box-sizing: border-box;
  // }
  .pageLogo {
    position: absolute;
    top: 2em;
    right: 13em;
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    opacity: 0.19;
    z-index: -1;
  }
  main {
    min-height: 100%;
    width: 100%;
    padding-top: 0.25rem;
    padding-bottom: 2rem;
  }
</style>
