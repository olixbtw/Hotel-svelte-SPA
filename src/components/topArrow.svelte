<script>
  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  const { page } = stores();
  var y, ih;

  var loaded_flag = false;
  onMount(() => {
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  $: if (loaded_flag && $page)
    setTimeout(() => {
      // event fires immediately on initiating page change
      // need timeout to get the height of the next page
      ih =
        document.getElementById("sapper").offsetHeight -
        window.innerHeight -
        70;
    }, 5);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
</script>

<style>
  nav {
    cursor: pointer;
    position: fixed;
    height: 2rem;
    width: 2rem;
    line-height: 2rem;
    text-align: center;
    right: 1.5rem;
    color: #443941;
    transition: bottom 0.7s, opacity 0.4s, background 0.3s, color 0.3s;
    bottom: 0;
    opacity: 0;
  }
  nav:hover {
    color: #f2f2f2;
    background: #443941;
  }
  .shown {
    transition: bottom 0.4s;
    bottom: 1rem;
    opacity: 1;
  }
  .bottom {
    bottom: 3rem;
  }
</style>

<svelte:window bind:scrollY={y} />

{#if y > 0}
  <nav
    on:click={scrollTop}
    class="{y > 150 ? 'shown' : ''}
    {y > ih ? 'bottom' : ''}">
    <i class="fas fa-chevron-up" />
  </nav>
{/if}
