<script>
  export let pag_opt;

  import { onMount } from "svelte";

  var numberItems;
  onMount(() => {
    numberItems = document
      .getElementById("pagination")
      .getElementsByTagName("ul")[0].children;
    numberItems[pag_opt.active - 1].classList.add("active");
  });

  $: {
    if (numberItems) {
      for (var i = 0; i < numberItems.length; i++)
        numberItems[i].classList.remove("active");
      numberItems[pag_opt.active - 1].classList.add("active");
    }
  }

  var arr = [];
  for (var i = 1; i < pag_opt.len + 1; i++) {
    arr[i - 1] = i;
  }
</script>

<style lang="scss">
  .pagination {
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;

    ul {
      display: flex;
    }

    .arr,
    ul li {
      color: #4f4f4f;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      box-sizing: content-box;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background: rgba(68, 57, 65, 0.9);
        color: #fff;
      }
    }
    ul li {
      position: relative;
      &::before,
      &::after {
        transition: all 0.5s ease-in-out;
        width: 1.75rem;
        height: 1.75rem;
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
      }
      &::after {
        top: 0.25rem;
        right: 0.25rem;
      }
      &::before {
        bottom: 0.25rem;
        left: 0.25rem;
      }
    }

    .arr {
      line-height: 1.85rem;
      &.disabled {
        opacity: 0.4;
        color: hsl(0, 0%, 31%);
        &:hover {
          color: inherit;
          background: transparent;
        }
      }
    }
  }
  .pagination .active {
    color: white;
    &:hover {
      color: white;
      background: transparent;
      &::before,
      &::after {
        opacity: 1;
      }
    }
    &::before,
    &::after {
      opacity: 0.9;
      background: #443941;
    }
    &::after {
      top: -0.15rem;
      right: -0.15rem;
    }
    &::before {
      bottom: -0.15rem;
      left: -0.15rem;
    }
    color: #fff;
  }
</style>

{#if pag_opt.len > 1}
  <nav id="pagination" on:click class="pagination">
    <div class="arr {pag_opt.active == 1 ? 'disabled' : ''}">&#60;</div>
    <ul>
      {#each arr as i}
        <li>{i}</li>
      {/each}
    </ul>
    <div class="arr {pag_opt.active == pag_opt.len ? 'disabled' : ''}">
      &#62;
    </div>
  </nav>
{/if}
