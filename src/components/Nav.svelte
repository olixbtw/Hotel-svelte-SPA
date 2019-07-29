<script>
  import Logo from "./logo.svelte";

  export let segment;
</script>

<header>

  <Logo href="." />
  <!-- <Logo /> -->

  <input type="search" />

  <nav>
    <ul>
      <li>
        <a class={segment === 'services' ? 'selected' : ''} href="services">
          Услуги
        </a>
        <ul class="submenu">
          <li>
            <a
              class={segment === 'services' ? 'selected' : ''}
              href="services/rooms">
              Комнати
            </a>
          </li>
          <li>
            <a
              class={segment === 'services' ? 'selected' : ''}
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
              class={segment === 'about' ? 'selected' : ''}
              href="about/contact">
              Контакти
            </a>
          </li>
          <li>
            <a
              class={segment === 'about' ? 'selected' : ''}
              href="about/gallery">
              Галерея
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a class={segment === 'login' ? 'selected' : ''} href="login">
          Вход
        </a>
      </li>

      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <!-- <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        blog
      </a>
      </li> -->
    </ul>
    <!-- <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>

          -->
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- 
           
    <li>
      <a
        rel="prefetch"
        class={segment === 'blog' ? 'selected' : ''}
        href="blog">
        blog
      </a>
    </li>
    </ul> -->
  </nav>
</header>

<style lang="scss">
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  header {
    display: flex;
    // background: #fff;
    // border-bottom: 1px solid #e6e6e6;
    background: #443941;
    color: #fff;

    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
  }

  input[type="search"] {
    // border-radius: 5px;
    color: #eee;
    background: #443941;
    border: 1px solid #5c4957;
    margin: 0;
    line-height: 1.5;
    width: 15rem;
    &:focus {
      outline-color: #3d4861;
    }
  }

  nav {
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
          background: #443941;

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

  button {
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
    &:after {
      transition: all 0.5s;
      position: absolute;
      left: 0.1rem;
      bottom: 0.3em;
      display: block;
      content: "";
      // background: #aaf;
      background: #5c4957;
      width: 0;
      height: 0.1em;
      opacity: 0.5;
    }
  }
  li:hover > button {
    text-decoration: none;
    // background: rgba(238, 238, 238, 0.6);
    &:after {
      opacity: 1;
      width: 90%;
    }
  }
</style>
