<script>
  export let active = 1;
  // console.log("active pagination - " + active);

  function myfunc() {
    console.log("123");
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
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      box-sizing: content-box;
      transition: all 0.2s linear;
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
        transition: all 0.4s ease-in-out;
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
      &.active {
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
    }

    .arr {
      line-height: 1.85rem;
    }
  }
</style>

<nav class="pagination">
  <div class="arr">&#60;</div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li class="active">5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul>
  <div class="arr">&#62;</div>
</nav>
<!-- 
<nav class="pagination" on:click>
  <div class="arr">&#60;</div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li class="active">5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
  </ul>
  <div class="arr">&#62;</div>
</nav> -->
