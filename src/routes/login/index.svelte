<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import Button from "../../components/__button.svelte";

  // use session for register user

  export let register = false;
  function regTab() {
    register = true;
  }
  function autTab() {
    register = false;
  }
  var emptylink = "#";

  function handleSubmit() {
    console.log("Form Submitted");
  }
</script>

<style lang="scss">
  .login {
    margin: 2rem auto 1rem;
    max-width: 20rem;
    width: 100%;

    header {
      width: 100%;
      justify-content: space-around;
      display: flex;
      h3 {
        cursor: pointer;
        &.active {
          border-bottom: 4px solid orange;
        }
      }
    }
    section,
    form,
    .control_group,
    input {
      width: 100%;
    }
    :global(button) {
      display: block;
      margin: 0 auto;
      border-radius: 10px;
    }
  }
  a {
    color: grey;
    font-size: 0.9;
    display: block;
    width: 100%;
    text-align: right;
    margin-bottom: 0.5rem;
  }
</style>

<svelte:head>
  <title>ОТЕЛЬ - Войти</title>
</svelte:head>
<div class="login">
  <header>
    <h3 on:click={autTab} class:active={!register}>Авторизация</h3>
    <h3 on:click={regTab} class:active={register}>Регистрация</h3>
  </header>
  {#if register}
    <section>
      <form action="#" on:submit|preventDefault={handleSubmit}>
        <div class="control_group">
          <label for="emailField">Почта</label>
          <input type="email" id="emailField" />
        </div>
        <div class="control_group">
          <label for="nameField">Имя</label>
          <input type="name" id="nameField" />
        </div>
        <div class="control_group">
          <label for="nameField">Фамилия</label>
          <input type="name" id="nameField" />
        </div>
        <div class="control_group">
          <label for="passField">Пароль</label>
          <input type="password" id="passField" />
        </div>
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </section>
  {:else}
    <section>
      <form action="#" on:submit|preventDefault={handleSubmit}>
        <div class="control_group">
          <label for="emailField">Почта</label>
          <input type="email" id="emailField" />
        </div>
        <div class="control_group">
          <label for="passField">Пароль</label>
          <input type="password" id="passField" />
        </div>
        <a href={emptylink}>Забыл пароль</a>
        <Button type="submit">Войти</Button>
      </form>
    </section>
  {/if}
</div>
