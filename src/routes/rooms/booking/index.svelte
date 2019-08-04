<script>
  import rooms from "./../_rooms.js";
  $reservedRoom.push(rooms[0]);
  //
  //
  //  TEST ADDING
  //
  //

  import { reservedRoom } from "../../../components/_stores.js";
  import Button from "../../../components/__button.svelte";

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
    n = checkNumber(n, 5);
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
</script>

<style lang="scss">
  .container {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto 13rem;

    position: relative;
  }
  .col-left {
    grid-column: 1 / 2;
  }
  .col-right {
    grid-column: 2 / 3;
  }
  .card_view {
    background: grey;
    border-radius: 8px;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
    padding: 2.2rem 1rem;
    width: 23rem;
    position: relative;
    margin-bottom: 2rem;

    input {
      margin-bottom: 0;
    }
    input[name="num"] {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
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
      width: 4rem;
      text-align: center;
      position: absolute;
      bottom: 1rem;
      right: -5rem;
    }
    &::after {
      //op-te side
      display: block;
      content: "";
      background: rgb(175, 169, 169);
      position: absolute;
      z-index: -1;
      top: 1rem;
      left: 6.5rem;
      width: 100%;
      height: 100%;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.2);
    }
  }
</style>

<svelte:head>
  <title>ОТЕЛЬ - Резервация</title>
</svelte:head>

<svelte:window bind:scrollY={y} />
{#if $reservedRoom.length && activeBookingPage >= 0}
  <div class="container">
    <div class="col-left">

      {#if activeBookingPage == 0}
        <section>

          <h1>1. Review rules</h1>
          <h3>3 nights in L'viv</h3>
          <div>
            August
            <br />
            AUG
            <br />
            18
            <br />
            Sunday check-in
            <br />
            1PM - 6PM
          </div>
          <div>
            August
            <br />
            AUG
            <br />
            21
            <br />
            Wednesday check-out
            <br />
            11AM
          </div>

          <h3>Things to keep in mind</h3>
          <ul>
            <li>Not suitable for children and infants</li>
            <li>No pets</li>
            <li>No parties or events</li>
            <li>No smoking</li>
          </ul>

          <div class="additional">
            <h3>Additional rules</h3>
            <p>Dear guests-to-be,</p>
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
            <p>Yaryna & Yaroslav</p>
          </div>

          <Button on:click={prevBooking}>Back</Button>
          <Button on:click={nextBooking} type="active">
            Agree and continue
          </Button>

        </section>
      {:else if activeBookingPage == 1}
        <section>
          <h1>Confirm and pay</h1>
          <h3>Pay with card:</h3>
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
            type={cardValid ? 'succes' : 'disabled'}>
            Next
          </Button>
        </section>
      {:else if activeBookingPage > 1}
        <section>
          <h1>Thank you for your booking!</h1>
          <Button on:click={resetBooking}>Close</Button>
        </section>
      {/if}

    </div>
    <div class="col-right">
      <h3>Информация о бронировании</h3>
      <ul>
        <li>
          room title
          <br />
          Checkin - DATE
          <br />
          Checkout - DATE
          <br />
          Days total
          <br />
          Price total
        </li>
      </ul>
      <h3>Дополнительная информация</h3>
      Если что - вонить сюда, ТЕЛЕФОН
      <br />
      адресс отеля
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
