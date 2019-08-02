<script context="module">

</script>

<script>
  import { stores } from "@sapper/app";
  const { page } = stores();

  console.log($page.params);
  console.log($page.query);

  export let segment;

  import { onMount } from "svelte";
  import translatePath from "./_paths.js";

  var path = [];
  var loaded = false;
  onMount(() => {
    loaded = true;
  });

  $: if (loaded) {
    path = $page.path.split("/");
    // ссылки
    path.forEach((element, index) => {
      if (element === segment) path = path.slice(index, path.length);
    });
    //имена
    for (var pathName in translatePath) {
      path.forEach((element, index) => {
        if (element == pathName) path[index] = translatePath[pathName];
      });
    }
    if (path[path.length - 1] == $page.params.slug) console.log("123");
  }
</script>

<style lang="scss">
  nav {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    color: #a1a1af;
    line-height: 2rem;
    // display: none;
  }
  li {
    cursor: pointer;
    margin-right: 0.25em;
    display: inline-block;
    &::after {
      margin-left: 0.5em;
      content: ">";
    }
    &:last-child {
      &::after {
        content: "";
      }
    }
  }
</style>

{#if path.length > 0}
  <nav>
    <ul>
      {#each path as node}
        <li>{node}</li>
      {/each}
    </ul>
  </nav>
  segment - {segment}
  <br />
  path - {path}
{/if}
