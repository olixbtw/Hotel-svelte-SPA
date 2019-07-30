<script>
  export let navShown = false;
</script>

<style lang="scss">
  .logo {
    // &.shown {
    //   position: fixed;
    //   z-index: 99999;
    //   top: 2rem;
    // }
    transition: filter 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;

    img {
      display: block;
      max-height: 5rem;
      max-width: 7rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      filter: drop-shadow(1px 2px 3px rgba(235, 154, 33, 0.5));
      // box-shadow: 0 0 5px red;
      text-decoration: none;
    }
  }
</style>

<a href="/" class="logo {navShown ? 'shown' : ''}">
  <img src="logo.svg" alt="Logo" />
</a>
