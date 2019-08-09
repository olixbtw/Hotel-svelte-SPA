<script>
  import { stores } from "@sapper/app";
  const { page } = stores();

  import { onMount, onDestroy } from "svelte";
  import { navHeight } from "./../../data/_stores.js";
  import Logo from "./../logo.svelte";
  export let segment;
  var loaded_flag, x, y, yStore;
  var navShown = false;

  $: if (x > 1000) toggleNavigation(false);

  function toggleNavigation(n) {
    typeof n === "boolean" ? (navShown = n) : (navShown = !navShown);
    if (window.innerWidth <= 1000) {
      navShown ? openModal() : closeModal();
    }
  }

  var fixedHeight;

  onMount(() => {
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  function openModal() {
    if (loaded_flag) {
      yStore = y;
      document.body.setAttribute("style", "position:fixed;overflow-y:scroll;");
    }
  }
  function closeModal() {
    if (loaded_flag) {
      y = yStore;
      document.body.setAttribute("style", "");
    }
  }

  var path = [];
  $: if (loaded_flag) {
    path = $page.path.split("/");
    path = path[path.length - 1];
  }
</script>

<style lang="scss">
  header {
    width: 100%;
    border-bottom: 0.15em solid #eb9a21;
    background: #444b57;
    color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    @media (min-width: 1680px) {
      padding: 1rem 10vw;
    }
    @media (max-width: 999px) {
      z-index: 999;
      transition: all 0.2s ease-in-out;
      height: 8vh;
      min-height: 5rem;
      bottom: 0;
      left: 0;
      &.shown {
        bottom: 0;
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
          position: relative;
          top: 0.75rem;
          right: 0.5rem;
          span {
            &:first-child {
              top: 10px;
              transform: rotate(45deg);
            }
            &:nth-child(2) {
              transition: all 0.2s;
              opacity: 0;
            }
            &:last-child {
              width: 45px;
              top: -10px;
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }

  nav {
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;

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
              
              border-bottom: .05rem solid #eb9a21;
            }
          }
          > ul {
            display: block;
            transition: opacity 0.5s;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #444b57;

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
        background: #f2f2f2;
        width: 45px;
        margin: 5px 0;
        height: 5px;
        top: 0;

        &:last-child {
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
      left: 0;
      bottom: 0.3em;
      display: block;
      content: "";
      background: #dcb03f;
      width: 0;
      height: 0.1em;
      opacity: 0.5;
      margin-left: 5%;
    }
  }

  @media (max-width: 999px) {
    a:hover {
      text-decoration: none;
      &::after {
        opacity: 1;
        width: 90%;
        margin-left: 10%;
      }
    }
  }
  @media (min-width: 1000px) {
    li:hover > a {
      text-decoration: none;
      &::after {
        background: #dcb03f;
        opacity: 1;
        width: 70%;
        margin-left: 15%;
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
    &:hover {
      &::after {
        background: #dcb03f;
      }
    }
  }
</style>

<svelte:window bind:scrollY={y} bind:innerWidth={x} />

<!-- 
  
  {smaller ? 'smaller' : ''}" 
  bind:offsetHeight={$navHeight}
  -->
<header class={navShown ? 'shown' : ''}>

  <nav>
    <ul>
      <li>
        <a
          class={segment === 'rooms' ? 'selected' : ''}
          href="rooms"
          on:click={toggleNavigation}>
          Номера
        </a>
        <ul class="submenu">
          <li>
            <a
              class={path === 'booking' ? 'selected' : ''}
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
              class={path === 'contact' ? 'selected' : ''}
              href="about/contact"
              on:click={toggleNavigation}>
              Контакты
            </a>
          </li>
          <li>
            <a
              class={path === 'services' ? 'selected' : ''}
              href="about/services"
              on:click={toggleNavigation}>
              Услуги
            </a>
          </li>
          <li>
            <a
              class={path === 'gallery' ? 'selected' : ''}
              href="about/gallery"
              on:click={toggleNavigation}>
              Галерея
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="nav-show" on:click={toggleNavigation}>
      <span />
      <span />
      <span />
    </div>
  </nav>

</header>
