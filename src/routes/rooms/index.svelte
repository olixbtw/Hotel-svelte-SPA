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
  import Button from "../../components/__button.svelte";
  export let rooms;

  //pagination - данные в родитель-ребенок
  //данные передаем напрямую в компонент, но логика остается у родителя
  // + удобнее потому что вешаем обработчик на общий елемент, а не на кажый
  // ПОЭТОМУ МОЖЕМ работать с компонентом извне
  // в зависимости от изменений переменных извне, перестраивается структура внутри.
  // логика переключения страниц - снаружи
  import Pagination from "./_filter/pagination.svelte";
  var y;

  var roomsPerPage = 5;
  var pag_opt = {
    active: 1,
    len: Math.ceil(rooms.length / roomsPerPage)
  };

  // $: if (pag_opt.active) console.log(pag_opt.active);

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
      if (y > 200) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setTimeout(() => {
          pag_opt.active = destination; //переключаем страницу
        }, 150);
      } else {
        pag_opt.active = destination; //переключаем страницу
      }
    }
  }

  //filter - данные через store.js
  // нужно связать каждое поле со значением
  // + удобнее передавать через общие свойства (но наверное дольше)

  import { onMount, onDestroy } from "svelte";
  import Filter from "./_filter/filter.svelte";
  import { roomsFilter } from "../../data/_stores.js";
  let loaded_flag = false;

  var REFERENCE = [];
  onMount(() => {
    REFERENCE = rooms.concat();
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  import guestsFilter from "./_filter/guests.js";
  import roomSortOrder from "./_filter/order.js";
  import amenitiesFilter from "./_filter/amen.js";

  $: if (loaded_flag) rooms = doSorting($roomsFilter);

  function doSorting(allFilters) {
    var newArray = REFERENCE.concat();
    newArray = guestsFilter(newArray, allFilters); //убрать
    newArray = amenitiesFilter(newArray, allFilters); //оставить только
    newArray = roomSortOrder(newArray, allFilters); //посортировать
    return newArray;
  }

  $roomsFilter = {
    guests: {
      n: 1,
      larger: true
    },
    amenities: [false, false, false],
    sort: "",
    reverse: false,
    view: "cards"
  };

  function resetFilter() {
    $roomsFilter = {
      guests: {
        n: 1,
        larger: true
      },
      amenities: [false, false, false],
      sort: "",
      reverse: false,
      view: "cards"
    };
  }
</script>

<style lang="scss">
  $perPage: 5;
  $pages: 50;

  .room-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    article {
      > a {
        color: inherit;
        &:hover {
          text-decoration: none;
        }
      }
      pointer-events: none;
      opacity: 0;
      position: absolute;
      animation: pagination-hide 150ms linear;
      h4 {
        margin: 0;
      }
      .type {
        text-transform: uppercase;
        font-weight: 300;
        color: #9f9f9f;
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
        color: #444b57;
        font-weight: 300;
        font-size: 1.3rem;
      }
    }
    &.list-VIEW {
      flex-direction: column;
      article {
        padding: 1rem;
        margin-bottom: 1.5rem;
        @media (min-width: 500px) {
          padding-left: 13rem;
        }
        a {
          min-height: 10rem;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
        }

        figure {
          width: 10rem;
          height: 10rem;

          margin: 0 2rem 0 0;
          position: absolute;
          right: 100%;
          top: 0;

          @media (max-width: 499px) {
            width: 15rem;
            height: 15rem;
            position: relative;
            right: 0;
            margin: 0 0 1.5rem;
          }

          &::before {
            width: 80%;
            height: 80%;
            bottom: 5%;
            left: 2.5rem;
            transition: all 0.4s ease-in-out;
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            background: #eb9a21;
          }
          img {
            transition: all 0.2s ease-in-out;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            margin: 0;
          }
        }
        &:hover {
          img {
            box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
          }
          figure::before {
            bottom: -0.5em;
            left: -0.5em;
            width: 50%;
            height: 50%;
          }
        }
        &:hover {
          figure::before {
            bottom: -0.5em;
            left: -0.5em;
            width: 50%;
            height: 50%;
          }
        }
      }
      &::after {
        display: block;
        content: "";
        clear: both;
      }
      .amenities {
        margin: 0.5rem 0;
      }
    }
    &.cards-VIEW {
      .amenities {
        opacity: 0;
        pointer-events: none;
        margin: 0;
        position: absolute;
        top: 2rem;
        right: 2rem;
        color:#f2f2f2;
        background: #eb9a21;
        transition: all 0.2s ease-in-out;
        li {
          padding: 0.25rem 0.75rem 0.25rem 0;
          // padding-left: 0.75rem;
          &:first-child {
            padding-top: 1rem;
          }
          &:last-child {
            padding-bottom: 1rem;
          }
          &.disabled {
            color: inherit;
          }
        }
      }
      article {
        a {
          position: relative;
          &:hover {
            .amenities {
              opacity: 1;
              pointer-events: all;
              top: 1rem;
              right: -0.5rem;
            }
          }
        }
        margin: 0 0.5em 1.75em;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        max-width: 450px;
        min-width: 300px;
        width: 90%;
        @media (min-width: 500px) {
          width: 45%;
        }
        @media (min-width: 1000px) {
          width: 30%;
          max-width: 500px;
        }

        figure {
          &::before {
            width: 80%;
            height: 80%;
            bottom: 5%;
            left: 5%;
            transition: all 0.4s ease-in-out;
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            background: #eb9a21;
          }

          position: relative;
          margin: 0;
          margin-bottom: 0.75em;

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

        &:hover {
          figure::before {
            bottom: -0.5em;
            left: -0.5em;
            width: 50%;
            height: 50%;
          }
        }
      }
    }

    &::after {
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
  @for $i from 1 through $pages {
    //#of pages
    .activePage#{$i} {
      @for $jj
        from (($i - 1) * $perPage + 1)
        through (($i - 1) * $perPage + $perPage)
      {
        //#of elements per page
        article:nth-child(#{$jj}) {
          animation: pagination-show 150ms linear 150ms forwards;
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
      pointer-events: all;
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
  .show_roooms {
    &::after {
      animation: hide-overlay 300ms ease-in-out 250ms forwards;
    }
  }
  .no-rooms {
    :global(button) {
      display: inline-block;
    }
  }
  .amenities {
    li {
      &.disabled {
        color: #9f9f9f;
        text-decoration: line-through;
      }
    }
  }
</style>

<svelte:head>
  <title>Pris - Номера</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<h1>Номера</h1>

{#if loaded_flag}
  <Filter />
{/if}

{#if rooms.length > 0}
  <Pagination on:click={paginationClick} {pag_opt} />
  <br />

  <div
    class="room-list {$roomsFilter.view}-VIEW activePage{pag_opt.active}
    {loaded_flag ? 'show_roooms' : ''}">
    {#each rooms as room}
      <!-- SAME SLUG ??-->
      <article>
        <a rel="prefetch" href="rooms/{room.slug}" target="_self">
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
          <ul class="amenities">
            {#each room.amenities.additional as item}
              <li class="enabled">{item}</li>
            {/each}
            {#each room.amenities.abscent as item}
              <li class="disabled">{item}</li>
            {/each}
          </ul>
        </a>
      </article>
    {/each}
  </div>

  <Pagination on:click={paginationClick} {pag_opt} />
{:else}
  <div class="no-rooms">
    <br />
    <p>No rooms selected</p>
    <Button on:click={resetFilter}>Reset filter</Button>
  </div>
{/if}
