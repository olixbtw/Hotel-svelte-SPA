<script>
  export let navShown,
    segment,
    smaller = false;
</script>

<style lang="scss">
  .logo {
    // &.shown {
    //   position: fixed;
    //   z-index: 99999;
    //   top: 2rem;
    // }
    transition: filter 0.6s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    display: flex;
    align-items: center;
    color: white;

    img {
      // display: inline-block;
      transition: max-height 0.6s ease-in-out;
      max-height: 5rem;
      max-width: 7rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &.active {
      // color: rgb(220, 176, 63);
      // color: rgb(235, 154, 33);      
      filter: drop-shadow(1px 2px 2px rgba(220, 176, 63, 0.4));
    }
    &:hover {
      filter: drop-shadow(1px 2px 3px rgba(235, 154, 33, 0.5));
      text-decoration: none;
    }
  }
</style>

<a
  href="/"
  rel="prefetch"
  class="logo {navShown ? 'shown' : ''}
  {smaller ? 'smaller' : ''}
  {!segment ? 'active' : ''}
  ">
  <img src="logo.svg" alt="Logo" />
  <div class="name">
    <slot />
  </div>
</a>
