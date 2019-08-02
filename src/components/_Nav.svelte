<script>
  import { onMount } from "svelte";
  import { navHeight } from "./_stores.js";
  import Logo from "./logo.svelte";
  export let segment;
  var loaded_flag, smallerRange_flag, smaller, y, yStore;
  var navShown = false;

  $: y > smallerRange_flag ? (smaller = true) : (smaller = false);

  function toggleNavigation() {
    if (loaded_flag && window.innerWidth < 1000) {
      navShown = !navShown;
      // не можем поставить ниже потому что запускает себя
      // (дважды закрывает = сбрасывается позиция)
      if (navShown) yStore = y;
    }
  }

  $: {
    //при изменении чего либо (navShown или y)
    // = при открытии\закрытии навигации
    // ставим нужные стили и возвращаем позицию если нужно
    if (loaded_flag && window.innerWidth < 1000) {
      navShown
        ? document.body.setAttribute(
            "style",
            "position:fixed;overflow-y:scroll;"
          )
        : document.body.setAttribute("style", "");
      if (!navShown && yStore) y = yStore;
    }
  }

  onMount(() => {
    // fire only after component loads not to get document beforehand
    loaded_flag = true;
    smallerRange_flag = $navHeight / 2;
  });
</script>

<style lang="scss">
  header {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    left: 0;
    border-bottom: 0.15em solid #eb9a21;
    display: flex;
    background: #444b57;
    color: #fff;

    padding: 0.4rem 2rem;
    @media (min-width: 1680px) {
      padding: 1rem 10vw;
    }
    align-items: center;
    justify-content: space-between;
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

    // input[type="search"] {
    //   // border-radius: 5px;
    //   color: #eee;
    //   background: #393d46;
    //   border: 1px solid #dcb03f;
    //   margin: 0;
    //   line-height: 1.5;
    //   width: 15rem;
    //   &:focus {
    //     outline-color: #3d4861;
    //   }
    // }
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
      margin-left: 1em;
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
  .smaller :global(img) {
    max-height: 3.5rem !important;
  }
</style>

<svelte:window bind:scrollY={y} on:event={() => (navShown = false)} />

<header
  class="{navShown ? 'shown' : ''}
  {smaller ? 'smaller' : ''}"
  bind:offsetHeight={$navHeight}>
  <Logo {navShown} {smaller}>Pris Hotel</Logo>
  <!-- <Logo {navShown} /> -->

  <nav>
    <ul>
      <li>
        <!-- <li>
          </li> -->
        <a
          class={segment === 'rooms' ? 'selected' : ''}
          href="rooms"
          on:click={toggleNavigation}>
          Номера
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'booking' ? 'selected' : ''}
              href="rooms/booking"
              on:click={toggleNavigation}>
              Резервация
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a
          class={segment === 'about' ? 'selected' : ''}
          href="about"
          on:click={toggleNavigation}>
          Про отель
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'contact' ? 'selected' : ''}
              href="about/contact"
              on:click={toggleNavigation}>
              Контакты
            </a>
          </li>
          <li>
            <a
              class={segment === 'services' ? 'selected' : ''}
              href="about/services"
              on:click={toggleNavigation}>
              Услуги
            </a>
          </li>
          <li>
            <a
              class={segment === 'gallery' ? 'selected' : ''}
              href="about/gallery"
              on:click={toggleNavigation}>
              Галерея
            </a>
          </li>
        </ul>
      </li>
      <!-- <li>
        <a
          class={segment === 'login' ? 'selected' : ''}
          href="login"
          on:click={toggleNavigation}>
          Вход
        </a>
      </li> -->
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
