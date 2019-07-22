<script>

</script>

<nav>
  <ul>
    <li>Link1</li>
    <li>Link2</li>
    <li>Link3</li>
  </ul>
</nav>

<style lang="scss">
  nav {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    color: #a1a1af;
    line-height: 2rem;
  }
  li {
    cursor: pointer;
    margin-right: 0.25em;
    display: inline-block;
    &:after {
      margin-left: 0.5em;
      content: ">";
    }
    &:last-child {
      &:after {
        content: "";
      }
    }
  }
</style>
