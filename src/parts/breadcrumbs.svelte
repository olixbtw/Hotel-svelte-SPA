<script>

</script>

<style lang="scss">
  nav {
    margin-top: 0.25em;
    font-size: 0.9em;
    color: #a1a1af;
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

<nav>
  <ul>
    <li>Link1</li>
    <li>Link2</li>
    <li>Link3</li>
  </ul>
</nav>
