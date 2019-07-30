<script>
  import Logo from "./logo.svelte";

  export let segment;
</script>

<style lang="scss">
  .nav-show {
    margin-left: 0;
  }

  header {
    border-bottom: 0.15em solid #eb9a21;
    display: flex;
    background: #393d46;
    color: #fff;

    justify-content: space-between;
    padding: 0.5rem 2rem;
    @media (min-width: 1680px) {
    }
    @media (min-width: 1680px) {
      padding: 1rem 20vw;
    }
    align-items: center;
  }

  input[type="search"] {
    // border-radius: 5px;
    color: #eee;
    background: #393d46;
    border: 1px solid #dcb03f;
    margin: 0;
    line-height: 1.5;
    width: 15rem;
    &:focus {
      outline-color: #3d4861;
    }
  }

  nav {
    margin-right: 0;
    font-weight: 300;
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
          // background: #fafafa;
          background: #393d46;

          display: flex;
          flex-direction: column;
          button {
            min-width: 100%;
            text-align: left;
          }
        }
      }
    }
  }
  //  a {
  //     text-decoration: none;
  //     padding: 1em 0.5em;
  //     display: block;
  //   }
  a {
    background: none;
    border: 0px;
    outline: none;
    box-shadow: none;
    margin: 0;

    display: block;
    // border-radius: 6px;
    padding: 0.5em 0.8rem;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    transition: all 0.4s;

    &::after {
      transition: all 0.5s;
      position: absolute;
      left: 0.1rem;
      bottom: 0.3em;
      display: block;
      content: "";
      background: #dcb03f;
      width: 0;
      height: 0.1em;
      opacity: 0.5;
    }
  }
  li:hover > a {
    text-decoration: none;
    // background: rgba(238, 238, 238, 0.6);
    &::after {
      opacity: 1;
      width: 90%;
      margin-left: 5%;
    }
  }

  .selected {
    &::before {
      // position: absolute;
      // content: "";
      // width: calc(100% - 1em);
      // height: 2px;
      // background-color: rgb(255, 62, 0);
      // display: block;
      // bottom: -1px;
    }
    &::after {
      opacity: 1;
      width: 80%;
      margin-left: 10%;
      background: #eb9a21;
    }
  }
</style>

<header>
  <Logo href="/ololo" />

  <div class="search">
    <input type="search" />
  </div>

  <nav>
    <ul>
      <li>
        <a class={segment === 'services' ? 'selected' : ''} href="services">
          Услуги
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'rooms' ? 'selected' : ''}
              href="services/rooms">
              Номера
            </a>
          </li>
          <li>
            <a
              class={segment === 'booking' ? 'selected' : ''}
              href="services/booking">
              Резервация
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">
          Про нас
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'contact' ? 'selected' : ''}
              href="about/contact">
              Контакти
            </a>
          </li>
          <li>
            <a
              class={segment === 'gallery' ? 'selected' : ''}
              href="about/gallery">
              Галерея
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a class={segment === 'login' ? 'selected' : ''} href="login">Вход</a>
      </li>
    </ul>
  </nav>

  <div class="nav-show">
    <i class="fas fa-bars" />
  </div>

</header>
