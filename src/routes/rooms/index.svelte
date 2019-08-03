<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`rooms.json`)
      .then(r => r.json())
      .then(rooms => {
        return { rooms };
      });
  }
</script>

<script>
  export let rooms;
  //pagination - данные в родитель-ребенок
  //данные передаем напрямую в компонент, но логика остается у родителя
  // + удобнее потому что вешаем обработчик на общий елемент, а не на кажый
  // ПОЭТОМУ МОЖЕМ работать с компонентом извне
  // в зависимости от изменений переменных извне, перестраивается структура внутри.
  // логика переключения страниц - снаружи
  import Pagination from "./__pagination.svelte";
  var y;
  var roomsPerPage = 9;
  var pag_opt = {
    active: 1,
    len: Math.ceil(rooms.length / roomsPerPage)
  };
  function paginationClick(event) {
    //check if page is changing
    var destination = pag_opt.active;
    if (event.target.innerHTML == "&lt;") {
      destination--;
      if (destination < 1) destination = 1;
    } else if (event.target.innerHTML == "&gt;") {
      destination++;
      if (destination > pag_opt.len) destination = pag_opt.len;
    } else {
      destination = +event.target.innerHTML;
    }

    //change pages
    if (destination !== pag_opt.active) {
      if (y > 270) {
        window.scrollTo({
          top: 150,
          behavior: "smooth"
        });
        setTimeout(() => {
          pag_opt.active = destination;
        }, 300);
      } else {
        pag_opt.active = destination;
      }
    }
  }

  //filter - данные через store.js
  // нужно связать каждое поле со значением
  // + удобнее передавать через общие свойства (но наверное дольше)
  import { onMount } from "svelte";
  import Filter from "./__filter.svelte";
  import { roomsFilter } from "../../components/_stores.js";
  let loaded_filter = false;
  onMount(() => {
    loaded_filter = true;
  });

  $roomsFilter = {
    guests: {
      n: 1,
      larger: true
    },
    unavailable: true,
    sort: "",
    view: "cards"
  };
  //additional
  // FIX
  // вствить сортировку по датам в объект комнат
  var room_available = true;
</script>

<style lang="scss">
  $perPage: 9;
  $pages: 50;

  .room-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
    article {
      > a {
        color: inherit;
        &:hover {
          text-decoration: none;
        }
      }
      cursor: pointer;
      width: 90%;
      max-width: 350px;
      min-width: 300px;
      @media (min-width: 1000px) {
        width: 30%;
        max-width: 450px;
      }

      margin: 0 0.25em 1.5em;
      display: flex;
      flex-direction: column;

      animation: pagination-hide 250ms linear;
      opacity: 0;
      position: absolute;

      &:hover {
        figure:before {
          bottom: -0.5em;
          left: -0.5em;
          width: 50%;
          height: 50%;
        }
      }

      figure {
        &::before {
          width: 80%;
          height: 80%;
          bottom: 5%;
          left: 5%;
          transition: all 0.6s;
          content: "";
          display: block;
          position: absolute;
          z-index: -1;
          background: #eb9a21;
        }

        position: relative;
        margin: 0;
        margin-bottom: 0.5em;

        img {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          width: 100%;
          object-fit: cover;
        }

        &::after {
          padding-bottom: 80%;
          display: block;
          content: "";
        }
      }
      h4 {
        margin: 0;
      }
      .type {
        text-transform: uppercase;
        font-weight: bold;
        color: gray;
        font-size: 0.8em;
        letter-spacing: -0.025em;

        span {
          &::before {
            content: "| ";
            margin: 0 0.25em;
          }
        }
      }
      .price {
        color: #443941;
      }
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: white;
    }
  }
  .show_roooms {
    &:after {
      animation: hide-overlay 1500ms ease-in-out 450ms forwards;
    }
  }
  @for $i from 1 through $pages {
    //#of pages
    .activePage#{$i} {
      @for $jj
        from (($i - 1) * $perPage + 1)
        through (($i - 1) * $perPage + $perPage)
      {
        //#of elements per page

        article:nth-child(#{$jj}) {
          animation: pagination-show 250ms linear 250ms forwards;
        }
      }
    }
  }

  @keyframes hide-overlay {
    from {
      opacity: 1;
    }
    to {
      pointer-events: none;
      opacity: 0;
    }
  }
  @keyframes pagination-show {
    from {
      position: static;
      opacity: 0;
    }
    to {
      opacity: 1;
      position: static;
    }
  }

  @keyframes pagination-hide {
    from {
      position: static;
      opacity: 1;
    }
    to {
      opacity: 0;
      position: static;
    }
  }
</style>

<svelte:head>
  <title>ОТЕЛЬ - Номера</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<h1>Номера</h1>
<Pagination on:click={paginationClick} {pag_opt} />

{#if loaded_filter}
  <Filter />
{/if}
<!-- 
$roomsFilter.guests.n {$roomsFilter.guests.n}
<br />
$roomsFilter.larger {$roomsFilter.guests.larger}
<br />
$roomsFilter.unavailable {$roomsFilter.unavailable}
<br />
$roomsFilter.sort {$roomsFilter.sort}
<br />
$roomsFilter.view {$roomsFilter.view}
<br />
-->

<div
  class="room-list activePage{pag_opt.active}
  {loaded_filter ? 'show_roooms' : ''}">
  {#each rooms as room}
    <!-- <article class="guests{room.people} available{room_available} price{room.price}"> -->
    <article>
      <a rel="prefetch" href="rooms/{room.slug}">
        <figure>
          <img src={room.photo.src} alt={room.photo.alt} />
        </figure>
        <div class="type">
          {room.type}
          <span class="n_people">
            {room.people} {room.people == 1 ? 'guest' : 'guests'}
          </span>
        </div>
        <h4>{room.title}</h4>
        <div class="price">{room.price}/night</div>
      </a>
    </article>
  {/each}
</div>

<Pagination on:click={paginationClick} {pag_opt} />
