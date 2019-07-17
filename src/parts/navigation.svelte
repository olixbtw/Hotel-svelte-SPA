<script>
  import Logo from "./logo.svelte";
</script>

<header>

  <Logo />

  <nav>
    <ul>
      <li>
        <span>Link1</span>
      </li>
      <li>
        <span>Link2</span>
      </li>
      <li>
        <span>Link3</span>
        <ul>
          <li>
            <span>SubMenuLink1</span>
          </li>
          <li>
            <span>SubMenuLink2</span>
          </li>
          <li>
            <span>SubMenuLink3</span>
          </li>
          <li>
            <span>SubMenuLink4</span>
          </li>
        </ul>
      </li>
      <li>
        <span>Link4</span>
      </li>
    </ul>
    <div />
  </nav>

</header>

<style lang="scss">
  header {
    display: flex;
    background: rgb(255, 255, 255);
    border-bottom: 1px solid rgb(230, 230, 230);
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
  }
  nav {
    display: inline-block;
    ul {
      display: flex;
      > li {
        position: relative;
        &:hover {
          > ul {
            opacity: 1;
            pointer-events: all;
          }
        }
        > ul {
          display: block;
          transition: opacity 0.5s;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          right: -1em;
          background: rgb(250, 250, 250);
        }
      }
    }
  }

  span {
    display: block;
    border-radius: 6px;
    padding: 0.5em 0.8rem;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    transition: all 0.4s;
    &:after {
      transition: all 1s;
      position: absolute;
      left: 0.1rem;
      bottom: 0.3em;
      display: block;
      content: "";
      background: #aaf;
      width: 0;
      height: 1px;
      opacity: 0.5;
    }
  }
  li:hover > span {
    text-decoration: none;
    background: rgba(238, 238, 238, 0.6);
    &:after {
      opacity: 1;
      width: 90%;
    }
  }
</style>
