<script>
  export let opt = {
    active: 10,
    len: 10
  };

  import { onMount } from "svelte";
  let items;
  onMount(() => {
    items = document.getElementById("pagination").getElementsByTagName("ul")[0]
      .children;
    items[opt.active - 1].classList.add("active");
  });

  $: if (opt.active < 1) opt.active = 1;
  $: if (opt.active > opt.len) opt.active = opt.len;

  $: {
    if (items) {
      for (var i = 0; i < items.length; i++)
        items[i].classList.remove("active");
      items[opt.active - 1].classList.add("active");
    }
  }

  var arr = [];
  for (var i = 1; i < opt.len + 1; i++) {
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
      &:before,
      &:after {
        transition: all 0.5s ease-in-out;
        width: 1.75rem;
        height: 1.75rem;
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
      }
      &:after {
        top: 0.25rem;
        right: 0.25rem;
      }
      &:before {
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
      &:before,
      &:after {
        opacity: 0.9;
      }
    }
    &:before,
    &:after {
      background: #443941;
    }
    &:after {
      top: -0.15rem;
      right: -0.15rem;
    }
    &:before {
      bottom: -0.15rem;
      left: -0.15rem;
    }
    color: #fff;
  }
</style>

<!-- <script context="module">

</script> -->
{#if opt.len > 0}
  <nav id="pagination" on:click class="pagination">
    <div class="arr {opt.active == 1 ? 'disabled' : ''}">&#60;</div>
    <ul>
      {#each arr as i}
        <li>{i}</li>
      {/each}
    </ul>
    <div class="arr {opt.active == opt.len ? 'disabled' : ''}">&#62;</div>
  </nav>
{/if}
