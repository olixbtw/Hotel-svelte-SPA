<script>
  export let register = false;
  function regTab() {
    register = true;
  }
  function autTab() {
    register = false;
  }
  var emptylink = "#";
</script>

<div class="login">
  <header>
    <h3 on:click={autTab} class:active={!register}>Авторизация</h3>
    <h3 on:click={regTab} class:active={register}>Регистрация</h3>
  </header>
  {#if register}
    <section>
      <form action="#">
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </section>
  {:else}
    <section>
      <form action="#">
        <div class="control_group">
          <label for="emailField">Почта</label>
          <input type="email" id="emailField" />
        </div>
        <div class="control_group">
          <label for="passField">Пароль</label>
          <input type="password" id="passField" />
        </div>
        <a href={emptylink}>Забыл пароль</a>
        <button type="submit">Войти</button>
      </form>
    </section>
  {/if}
</div>

<style lang="scss">
  .login {
    margin: 0 auto;
    max-width: 20rem;
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
    button {
      display: block;
      margin: 0 auto;
    }
  }
  a {
    color: grey;
    font-size: 0.9;
    display: block;
    width: 100%;
    text-align: right;
  }
</style>
