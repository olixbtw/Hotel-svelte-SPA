<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  export let segment;
  import { onMount, onDestroy } from "svelte";
  import { slugTitle } from "./../data/_stores.js";
  import translatePath from "./../data/pathsTranslate.js";

  var path = [];
  var loaded_flag = false;
  onMount(() => {
    loaded_flag = true;
  });
  onDestroy(() => {
    loaded_flag = false;
  });

  $: if (loaded_flag) {
    path = $page.path.split("/");
    // ссылки
    path.forEach((element, index) => {
      if (element === segment)
        path = path.slice(index - 1, path.length).filter(Boolean);
    });
    let itemNames = [...path];
    let pathNames = [...path];
    //имена
    for (var pathName in translatePath) {
      itemNames.forEach((element, index) => {
        if (element == pathName) itemNames[index] = translatePath[pathName];
      });
    }
    if (itemNames[itemNames.length - 1] == $page.params.slug)
      itemNames[itemNames.length - 1] = $slugTitle;
    //в общий массив
    itemNames.forEach((element, index) => {
      path[index] = {
        name: element,
        path: pathNames.slice(0, index + 1).join("/")
      };
    });
  }
</script>

<style lang="scss">
  nav {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    color: #9f9f9f;
    line-height: 2rem;
    position: relative;
    top: -1rem;
  }
  li {
    a {
      color: inherit;
    }
    cursor: pointer;
    margin-right: 0.25em;
    vertical-align: top;
    display: inline-block;
    &::after {
      margin-left: 0.5em;
      margin-right: 0.25em;
      content: ">";
    }
    &:last-child {
      &::after {
        content: "";
        display: none;
      }
    }
  }
</style>

{#if path.length > 0 && segment}
  <nav>
    <ul>
      {#each path as node}
        <li>
          <a href={node.path}>{node.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
