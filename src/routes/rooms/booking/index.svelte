<script>
  import { reservedRoom } from "../../../data/_stores.js";
  import Button from "../../../components/__button.svelte";
  import address from "./../../../data/address.js";

  var activeBookingPage = 0;
  function nextBooking() {
    activeBookingPage += 1;
  }
  function prevBooking() {
    activeBookingPage -= 1;
  }
  function resetBooking() {
    activeBookingPage = 0;
    $reservedRoom = [];
    localStorage.removeItem("roomsBooked");
  }
  var y;
  var card_num = "",
    card_expire = "",
    card_name = "",
    card_cvv = "";

  $: card_expire = checkDate(card_expire);
  $: card_num = checkCard(card_num);
  $: card_cvv = checkCVV(card_cvv);
  $: card_name = checkName(card_name);

  function checkCard(n) {
    n = checkNumber(n, 16);
    return n;
  }
  function checkCVV(n) {
    n = checkNumber(n, 3);
    return n;
  }
  function checkDate(n) {
    n = checkNumber(n, 6);
    return n;
  }

  function checkName(n) {
    var regexp = /[0-9]/;
    n = n.replace(regexp, "");

    if (n.length > 40) {
      n = n.substr(0, 40);
    }
    return n;
  }

  function checkNumber(n, max) {
    var regexp = /[^0-9]/;
    n = n.replace(regexp, "");

    if (n.length > max) {
      n = n.substr(0, max);
    }

    return n;
  }

  var cardValid = false;
  $: {
    if (
      card_expire.length > 4 &&
      card_num.length == 16 &&
      card_cvv.length == 3 &&
      card_name.length > 4
    ) {
      cardValid = true;
    } else {
      cardValid = false;
    }
  }

  // id: room.slug,
  // content: room,
  // date1: Date_a,
  // date2: Date_b,
  // days: daysTotal

  // $reservedRoom

  var totalPrice = 0;
  $: $reservedRoom.forEach(element => {
    console.log(element);
    totalPrice += element.content.price.value * element.days;
  });

  function getDate(n) {
    return n;
  }
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-gap: 3rem;

    @media (min-width: 1000px) {
      grid-template-columns: auto auto;

      .col-left {
        grid-column: 1 / 2;
      }
      .col-right {
        max-width: 20rem;
        grid-column: 2 / 3;
      }
    }
  }

  .card_view {
    background: #444b57;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
    padding: 2.2rem 1rem;
    width: 25rem;
    position: relative;
    margin-bottom: 2rem;

    input {
      margin-bottom: 0;
    }
    input[name="num"] {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      width: 100%;
      margin-bottom: 2.3rem;
      letter-spacing: 0.1em;
      font-size: 1.1rem;
    }

    input[name="expire"] {
      width: 6.5rem;
      text-align: center;
    }
    input[name="name"] {
      float: right;
    }
    input[name="cvv"] {
      width: 3rem;
      text-align: center;
      position: absolute;
      bottom: 1rem;
      right: -3.5rem;
    }
    &::before {
      content: "";
      background: #ef9f9f;
      position: absolute;
      z-index: -1;
      top: 3rem;
      left: 4rem;
      width: 100%;
      height: 2rem;
    }
    &::after {
      border-radius: 8px;
      //op-te side
      display: block;
      content: "";
      background: #9f9f9f;
      position: absolute;
      z-index: -2;
      top: 1rem;
      left: 4rem;
      width: 100%;
      height: 100%;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
  .container :global(button) {
    display: inline-block;
  }
  .price {
    margin: 0 0 1rem 1rem;
    font-size: 1.5rem;
    color: grey;
    letter-spacing: -0.05em;
    font-weight: 600;
  }
  .reserved_rooms_info {
    li {
      list-style-type: decimal;
      margin-bottom: 0.75rem;
    }
  }
</style>

<svelte:head>
  <title>Pris - Резервация</title>
</svelte:head>

<svelte:window bind:scrollY={y} />
{#if $reservedRoom.length && activeBookingPage >= 0}
  <div class="container">
    <div class="col-left">

      {#if activeBookingPage == 0}
        <section>

          <h1>1. Правила поеления</h1>
          <hr />
          <h4>Забронированые комнаты:</h4>
          <ul class="reserved_rooms_info">
            {#each $reservedRoom as room}
              <li>
                <h6>{room.content.title}</h6>
                <div class="dates">
                  <div class="arrive">
                    <strong>Заселение:</strong>
                    {room.date1} - 13.00
                  </div>
                  <div class="depart">
                    <strong>Отбытие:</strong>
                    {room.date2} - 10.00
                  </div>
                </div>
              </li>
            {/each}
          </ul>

          <h4>Это важно</h4>
          <ul>
            <li>Не для детей или подростков</li>
            <li>Без домашних животных</li>
            <li>Курение запрещено</li>
          </ul>

          <div class="additional">
            <h4>Дополнительные правила</h4>
            <p>Дорогие гости,</p>
            <p>
              If You're making the booking on the same day as the check-in is,
              please note that we might need up to two hours to check you in (to
              physically deliver the key and set you up for the stay). Also, we
              would appreciate for guests not to violate public order (loud
              noises after 23:00, etc.).
            </p>
            <p>
              Thanks for the understanding, we hope You will have a great time
              at our apartment in Lviv!
            </p>
            <p>Администрация отеля</p>
          </div>
          <br />
          <Button on:click={prevBooking}>Назад</Button>
          <Button on:click={nextBooking} type="active">Продолжить</Button>

        </section>
      {:else if activeBookingPage == 1}
        <section>
          <h1>Confirm and pay</h1>
          <hr />
          <h4>Pay with card:</h4>
          <!-- {card_num} -->
          <div class="card_view">
            <input
              type="text"
              bind:value={card_num}
              name="num"
              placeholder="XXXX XXXX XXXX XXXX" />
            <input
              type="text"
              bind:value={card_expire}
              name="expire"
              placeholder="MM/YYYY" />
            <input
              type="text"
              bind:value={card_name}
              name="name"
              placeholder="Cardholder's name" />
            <input
              type="password"
              bind:value={card_cvv}
              name="cvv"
              placeholder="cvv" />
          </div>
          <br />
          <Button on:click={prevBooking}>Back</Button>
          <Button
            on:click={nextBooking}
            type={cardValid ? 'success' : 'disabled'}>
            Next
          </Button>
        </section>
      {:else if activeBookingPage > 1}
        <section style="text-align:center;">
          <br />
          <br />
          <br />
          <br />
          <h1>Спасибо за регистрацию!</h1>
          <br />
          <h4 style="color:#9f9f9f;">Ждем вас в гости :)</h4>
          <br />
          <br />
          <Button on:click={resetBooking} type="success">Закрыть</Button>
          <br />
          <br />
        </section>
      {/if}

    </div>
    <div class="col-right">
      <h4>Информация о бронировании</h4>
      <ul>
        {#each $reservedRoom as room}
          <li>
            <h6>{room.content.title}</h6>
            {room.days} дней - {room.content.price.value * room.days}{room.content.price.currency}
          </li>
        {/each}
      </ul>
      <div class="price">
        Всего: {totalPrice}{$reservedRoom[0].content.price.currency}
      </div>
      <h5>Дополнительно</h5>
      по всем вопросам обращайтесь
      <br />
      <a href="tel:{address.phone}">{address.phone}</a>
    </div>
  </div>
{:else}
  <section>
    <p>Для продолжения резервации</p>
    <h1>Выберите номер</h1>
    <Button href="/rooms">Номера</Button>
    {#if $reservedRoom.length}
      <Button on:click={nextBooking}>Вернуться к регистрации</Button>
    {/if}
  </section>
{/if}
