<script context="module">
  import imageList from "./_slider.js";
</script>

<script>
  export let sliderScroll = 1;

  import { onMount } from "svelte";

  onMount(() => {
    //добавить первый слайд справа
    //добавить последний слева

    setInterval(() => {
      nextSlide();
    }, 3000);
  });

  var transition = true;
  function nextSlide() {
    if (sliderScroll === imageList.length) {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            transition = true;
          }, 0);
          sliderScroll = 1;
        }, 100);
        transition = false;
      }, 1000);
    }
    sliderScroll++;
  }
  function prevSlide() {
    if (sliderScroll === 1) {
      setTimeout(() => {
        setTimeout(() => {
          setTimeout(() => {
            transition = true;
          }, 0);
          sliderScroll = imageList.length;
        }, 100);
        transition = false;
      }, 1000);
    }
    sliderScroll--;
  }
</script>

<style lang="scss">
  .slider {
    height: 400px;
    width: 100vw;
    background: #5c505e;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -2rem;

    display: flex;
    overflow: hidden;

    img {
      scroll-snap-align: center;
      object-fit: cover;
      width: 100%;
    }
    &__button {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      width: 5em;
      height: 450px;
      background: #4f3552;
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
    &__text {
      color: white;
      position: absolute;
      top: 30px;
      left: 30px;
    }
  }

  .transition {
    img {
      transition: margin 1s ease-in;
    }
  }

  @for $i from 1 through 10 {
    .slide#{$i} {
      transition: margin 1s ease-out;
      margin-left: #{$i * -100%};
      margin-right: #{$i * 100%};
    }
  }
</style>

<div class="slider {transition ? 'transition' : ''}">
  <div class="slider__text">
    <slot />
  </div>
  <img
    src={imageList[imageList.length - 1].src}
    alt={imageList[imageList.length - 1].alt}
    class="slide{sliderScroll}" />
  {#each imageList as img}
    <img src={img.src} alt={img.alt} class="slide{sliderScroll}" />
  {/each}
  <img
    src={imageList[0].src}
    alt={imageList[0].alt}
    class="slide{sliderScroll}" />
  <div class="slider__button slider__button-left" on:click={prevSlide} />
  <div class="slider__button slider__button-right" on:click={nextSlide} />
</div>
