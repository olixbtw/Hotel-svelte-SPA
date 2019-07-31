<script>
  import Pagination from "./__pagination.svelte";
  import Filter from "./__filter.svelte";

  var activePag = 5;
  var pagesPag = 5;

  function paginationClick(event) {
    console.log(event.target);
    // activePag = 10;
  }

  import rooms from "./_rooms.js";
  // console.log(rooms);
</script>

<style lang="scss">
  .room-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    article {
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
  }
</style>

<h1>Номера</h1>

<Filter />

<div class="room-list">
  <!-- <article>-image -type\number of beds -heading -price\night</article> -->
  {#each rooms as room}
    <article>
      <figure>
        <img src={room.photos[0].source} alt={room.photos[0].alt} />
      </figure>
      <div class="type">
        {room.type}
        <span class="n_people">
          {room.people} {room.n_people == 1 ? 'guest' : 'guests'}
        </span>
      </div>
      <h4>{room.title}</h4>
      <div class="price">{room.price.currency}{room.price.value}/night</div>
    </article>
  {/each}



  {#each rooms as room}
    <article>
      <figure>
        <img src={room.photos[0].source} alt={room.photos[0].alt} />
      </figure>
      <div class="type">
        {room.type}
        <span class="n_people">
          {room.people} {room.n_people == 1 ? 'guest' : 'guests'}
        </span>
      </div>
      <h4>{room.title}</h4>
      <div class="price">{room.price.currency}{room.price.value}/night</div>
    </article>
  {/each}
  {#each rooms as room}
    <article>
      <figure>
        <img src={room.photos[0].source} alt={room.photos[0].alt} />
      </figure>
      <div class="type">
        {room.type}
        <span class="n_people">
          {room.people} {room.n_people == 1 ? 'guest' : 'guests'}
        </span>
      </div>
      <h4>{room.title}</h4>
      <div class="price">{room.price.currency}{room.price.value}/night</div>
    </article>
  {/each}

</div>

<Pagination on:click={paginationClick} active={activePag} />
