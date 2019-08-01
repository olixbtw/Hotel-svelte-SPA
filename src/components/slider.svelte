<script context="module">
  import imageList from "./_slider.js";
</script>

<script>
  export let value = "";

  let sliderScroll = 0;
</script>

<style lang="scss">
  h1,
  h2 {
    color: #fff;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .slider {
    height: 400px;
    width: 100vw;
    background: #5c505e;
    position: relative;
    // margin-top: auto;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -2rem;

    // width: 100%;
    // height: 100%;
    // position: relative;
    // background: #4f3552;
    display: flex;
    overflow: hidden;

    img {
      scroll-snap-align: center;
      object-fit: cover;
      width: 100%;
    }
    .slider__button {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      width: 5em;
      height: 450px;
      background: #4f3552;
      // border-radius: 4px;
      opacity: 0.1;
      transition: all 0.5s;
      &:hover {
        opacity: 0.5;
      }

      &-left {
        left: 0.5em;
      }
      &-right {
        right: 0.5em;
      }
    }
  }

  img {
    transition: margin 1s linear;
  }

  @for $i from 1 through 10 {
    .slide#{$i} {
      margin-left: #{$i * -100%};
      margin-right: #{$i * 100%};
    }
  }
</style>

<div class="slider">
  <h1>Title</h1>
  <h2>{value}</h2>
  {#each imageList as img}
    <img
      rel="preload"
      src={img.src}
      alt={img.alt}
      class="slide{sliderScroll}" />
  {/each}
  <div
    class="slider__button slider__button-left"
    on:click={() => {
      sliderScroll--;
    }} />
  <div
    class="slider__button slider__button-right"
    on:click={() => {
      sliderScroll++;
    }} />
</div>
