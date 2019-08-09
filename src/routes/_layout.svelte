<script>
  import Nav from "../components/navigation/_Nav.svelte";
  import Footer from "../components/_Footer.svelte";
  import Arrow from "../components/topArrow.svelte";

  export let segment;
</script>

<style lang="scss">
  :global(html) {
    font-size: 16px;
    font-size: responsive 14px 19px; /* min-size, max-size */
    font-range: 500px 1680px; /* viewport widths between which font-size is fluid */
  }
</style>

<slot />

<Nav {segment} />

<Arrow />
