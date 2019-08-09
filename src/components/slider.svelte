<script context="module">
  import imageList from "./../data/slider.js";
</script>

<script>
  export let sliderScroll = 1;

  import { onMount, onDestroy } from "svelte";

  var myTimer;
  onMount(() => {
    myTimer = setInterval(nextSlide, 15000);
  });

  onDestroy(() => {
    clearInterval(myTimer);
  });

  var transition = true;
  function nextSlide() {
    clearInterval(myTimer);
    if (sliderScroll === imageList.length) {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            transition = true;
          }, 0);
          sliderScroll = 1;
        }, 200);
        transition = false;
      }, 1000);
    }
    sliderScroll++;
    myTimer = setInterval(nextSlide, 15000);
  }
  function prevSlide() {
    clearInterval(myTimer);
    if (sliderScroll === 1) {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            transition = true;
          }, 0);
          sliderScroll = imageList.length;
        }, 200);
        transition = false;
      }, 1000);
    }
    sliderScroll--;
    myTimer = setInterval(nextSlide, 15000);
  }
</script>

<style lang="scss">
  .slider {
    height: 50vh;
    width: 101vw;
    background: #444b57;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -2rem;
    margin-bottom: 2rem;

    display: flex;
    overflow: hidden;
    &::after {
      position: absolute;
      z-index: 1;
      display: block;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0.4;
      background: #444b57;
    }

    img {
      object-fit: cover;
      width: 100%;
      //firefox fix below
      flex-shrink: 0;
      flex-basis: 101vw;
    }

    &__button {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;

      width: 6em;
      height: 450px;
      background: #444b57;
      opacity: 0.05;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        opacity: 0.15;
      }

      &-left {
        left: 0.5em;
      }

      &-right {
        right: 0.5em;
      }
    }
    &__text {
      :global(*) {
        color: #f2f2f2;
      }
      color: #f2f2f2;
      position: absolute;
      text-align: center;
      // width: 50rem;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      z-index: 2;
    }
  }

  .transition {
    img {
      transition: margin 1s ease-in;
    }
  }

  @for $i from 1 through 10 {
    .slide#{$i} {
      img {
        margin-left: #{$i * -100%};
        margin-right: #{$i * 100%};
      }
    }
  }
</style>

<div class="slider {transition ? 'transition' : ''} slide{sliderScroll}">
  <div class="slider__text">
    <slot />
  </div>
  <img
    src={imageList[imageList.length - 1].src}
    alt={imageList[imageList.length - 1].alt} />
  {#each imageList as img}
    <img src={img.src} alt={img.alt} class="" />
  {/each}
  <img src={imageList[0].src} alt={imageList[0].alt} />
  <div class="slider__button slider__button-left" on:click={prevSlide} />
  <div class="slider__button slider__button-right" on:click={nextSlide} />
</div>
