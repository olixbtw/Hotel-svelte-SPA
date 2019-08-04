<script>
  export let pag_opt;
  import { onMount } from "svelte";
  let numberItems;
  let diffPagination;
  onMount(() => {
    diffPagination = document.getElementsByClassName("pagination_bar");
    for (let i = 0; i < diffPagination.length; i++) {
      numberItems = diffPagination[i].getElementsByTagName("ul")[0].children;
      numberItems[pag_opt.active - 1].classList.add("active");
    }
  });

  $: {
    if (numberItems) {
      //рабтаем с ДОМ, а не с данными - каждый раз надо перестраивать все пагинации на странице
      diffPagination = document.getElementsByClassName("pagination_bar");

      for (let jj = 0; jj < diffPagination.length; jj++) {
        numberItems = diffPagination[jj].getElementsByTagName("ul")[0].children;
        for (let i = 0; i < numberItems.length; i++)
          numberItems[i].classList.remove("active");
        numberItems[pag_opt.active - 1].classList.add("active");
      }
    }
  }

  let arr = [];
  for (let i = 1; i < pag_opt.len + 1; i++) {
    arr[i - 1] = i;
  }
</script>

<style lang="scss">
  .pagination_bar {
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;

    ul {
      display: flex;
    }

    .arr,
    ul li {
      color: #444b57;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      box-sizing: content-box;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        // 444b57
        background: rgba(68, 57, 65, 0.9);
        color: #f2f2f2;
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
        color: #444b57;
        &:hover {
          color: inherit;
          background: transparent;
        }
      }
    }
  }
  .pagination_bar .active {
    color: #f2f2f2;
    &:hover {
      color: #f2f2f2;
      background: transparent;
      &::before,
      &::after {
        opacity: 1;
      }
    }
    &::before,
    &::after {
      opacity: 0.9;
      background: #444b57;
    }
    &::after {
      top: -0.15rem;
      right: -0.15rem;
    }
    &::before {
      bottom: -0.15rem;
      left: -0.15rem;
    }
    color: #f2f2f2;
  }
</style>

{#if pag_opt.len > 1}
  <nav on:click class="pagination_bar">
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
