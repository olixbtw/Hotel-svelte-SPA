<script>
  export let navShown,
    segment,
    smaller = false;
</script>

<style lang="scss">
  .logo {
    transition: filter 0.6s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    display: flex;
    align-items: center;
    color: #f2f2f2;

    img {
      transition: max-height 0.6s ease-in-out;
      max-height: 5rem;
      max-width: 7rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    &.active {
      // color: #dcb03f;
      filter: drop-shadow(1px 2px 2px rgba(220, 176, 63, 0.4));
    }
    &:hover {
      // color: #eb9a21;
      filter: drop-shadow(1px 2px 3px rgba(235, 154, 33, 0.5));
      text-decoration: none;
    }
  }
  .name {
    white-space: nowrap;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: -0.05em;
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
