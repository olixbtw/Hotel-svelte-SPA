<script>
  import { pageActive } from "./../stores.js";

  import Logo from "./logo.svelte";

  function changePage() {
    // var a = this.closest('.submenu');
    // console.log(a);
    // a = a.nextSibling
    // console.log(a);
    $pageActive = this.textContent;
    console.log($pageActive);
  }
</script>

<style lang="scss">
  header {
    display: flex;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
  }

  input[type="search"] {
    margin: 0;
    border-radius: 5px;
    line-height: 1.5;
    width: 15rem;
  }

  nav {
    display: inline-block;
    ul {
      display: flex;
      > li {
        z-index: 999;
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
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #fafafa;
        }
      }
    }
  }

  button {
    background: none;
    border: 0px;
    outline: none;
    box-shadow: none;
    margin: 0;

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
  li:hover > button {
    text-decoration: none;
    background: rgba(238, 238, 238, 0.6);
    &:after {
      opacity: 1;
      width: 90%;
    }
  }
</style>

<header>

  <Logo on:click={changePage} />

  <input type="search" />

  <nav>
    <ul>
      <li>
        <button on:click={changePage}>Services</button>
        <ul class="submenu">
          <li>
            <button on:click={changePage}>Booking</button>
          </li>
          <li>
            <button on:click={changePage}>Search</button>
          </li>
          <li>
            <button on:click={changePage}>Activities</button>
          </li>
        </ul>
      </li>
      <li>
        <button on:click={changePage}>About</button>
        <ul class="submenu">
          <li>
            <button on:click={changePage}>Contacts</button>
          </li>
          <li>
            <button on:click={changePage}>Gallery</button>
          </li>
          <li>
            <button on:click={changePage}>Team</button>
          </li>
        </ul>
      </li>
      <li>
        <button on:click={changePage}>Login</button>
      </li>
    </ul>
    <div />
  </nav>

</header>
