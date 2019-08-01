<script>
  var y;
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
    bottom: 1rem;
    right: 1.5rem;
    color: #443941;
    transition: all 0.3s;
  }
  nav:hover {
    color: #fff;
    background: #443941;
  }
</style>

<svelte:window bind:scrollY={y} />

{#if y > 150}
  <nav on:click={scrollTop}>
    <i class="fas fa-chevron-up" />
  </nav>
{/if}
