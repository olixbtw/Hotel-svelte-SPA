<script>
  import Logo from "./logo.svelte";

  export let segment;

  var navShown = true;
  function toggleNavigation() {
    navShown = !navShown;
  }
  var y;
</script>

<style lang="scss">
  .nav-show {
    margin-left: 1em;
  }

  header {
    @media (max-width: 999px) {
      transition: all 0.6s ease-in-out;
      &.shown {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99999;
        position: fixed;
        align-items: flex-start;

        nav > ul {
          position: absolute;
          left: 2rem;
          top: 6rem;
          display: block;
        }

        .nav-show {
          span {
            &:first-child {
              top: 10px;
              transform: rotate(45deg);
              width: 45px;
            }
            &:nth-child(2) {
              transition: all 0.2s;
              opacity: 0;
            }
            &:last-child {
              top: -10px;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }

    // &.fixed {
    //   z-index: 9998;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   position: fixed;
    // }
    border-bottom: 0.15em solid #eb9a21;
    display: flex;
    background: #444b57;
    color: #fff;

    padding: 0.25rem 2rem;
    @media (min-width: 1680px) {
      padding: 1rem 10vw;
    }
    align-items: center;
    justify-content: space-between;
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 300;

    > ul {
      @media (max-width: 999px) {
        display: none;
        font-size: 1.4rem;
        a {
          display: inline-block;
        }
        > li {
          display: block;
          > ul {
            margin-left: 1rem;
          }
        }
      }
      @media (min-width: 1000px) {
        position: relative;
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
            a {
              min-width: 100%;
              text-align: left;
            }
          }
        }
      }
    }

    .nav-show {
      display: block;
      @media (min-width: 1000px) {
        display: none;
      }
      padding: 0.5rem;
      cursor: pointer;

      span {
        position: relative;
        display: block;
        background: white;
        width: 45px;
        margin: 5px 0;
        height: 5px;
        top: 0;

        &:first-child {
          width: 30px;
        }
        &:nth-child(2) {
          transition: all 0.8s;
        }
        &:first-child,
        &:last-child {
          transition: all 0.5s;
        }
      }
    }
  }

  a {
    background: none;
    border: 0px;
    outline: none;
    box-shadow: none;
    margin: 0;

    display: block;
    padding: 0.75em;
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

  @media (max-width: 999px) {
    a:hover {
      text-decoration: none;
      &::after {
        opacity: 1;
        width: 90%;
        margin-left: 5%;
      }
    }
  }
  @media (min-width: 1000px) {
    li:hover > a {
      text-decoration: none;
      &::after {
        background: #dcb03f;
        opacity: 1;
        width: 90%;
        margin-left: 5%;
      }
    }
  }

  .selected {
    &::after {
      opacity: 1;
      width: 80%;
      margin-left: 10%;
      background: #eb9a21;
    }
  }
</style>

<svelte:window bind:scrollY={y} on:event={() => (navShown = false)} />
<!-- <header class="{y > 150 ? 'fixed' : ''} {navShown ? 'shown' : ''}"> -->
<header class={navShown ? 'shown' : ''}>
  <Logo {navShown} />

  <nav>
    <ul>
      <li>
        <a
          class={segment === 'services' ? 'selected' : ''}
          rel="prefetch"
          href="services"
          on:click={toggleNavigation}>
          Услуги
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'rooms' ? 'selected' : ''}
              rel="prefetch"
              href="services/rooms"
              on:click={toggleNavigation}>
              Номера
            </a>
          </li>
          <li>
            <a
              class={segment === 'booking' ? 'selected' : ''}
              rel="prefetch"
              href="services/booking"
              on:click={toggleNavigation}>
              Резервация
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          class={segment === 'about' ? 'selected' : ''}
          rel="prefetch"
          href="about"
          on:click={toggleNavigation}>
          Про отель
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'contact' ? 'selected' : ''}
              rel="prefetch"
              href="about/contact"
              on:click={toggleNavigation}>
              Контакты
            </a>
          </li>
          <li>
            <a
              class={segment === 'gallery' ? 'selected' : ''}
              rel="prefetch"
              href="about/gallery"
              on:click={toggleNavigation}>
              Галерея
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          class={segment === 'login' ? 'selected' : ''}
          rel="prefetch"
          href="login"
          on:click={toggleNavigation}>
          Вход
        </a>
      </li>
    </ul>
    <div class="nav-show" on:click={toggleNavigation}>
      <span />
      <span />
      <span />
      <!-- <div class="bars">
        <span />
        <span />
        <span />
      </div> 
      <span>Меню</span> -->
    </div>
  </nav>

  <!-- <div class="search">
    <input type="search" />
    <i class="fas fa-search" />
  </div> -->

</header>
