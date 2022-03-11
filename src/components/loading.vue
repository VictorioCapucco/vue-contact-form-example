<template>
  <div v-if="active" class="loading">
    <div class="content"></div>
  </div>
</template>
<script>
  export default {
    props: {
      active: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
<style>
  .loading {
    background-color: lightgray;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.6;
    z-index: 1000;
    position: fixed;
  }
  .loading > .content {
    position: absolute;
    display: block;
    top: calc(50% - 2.5rem);
    left: calc(50% - 3rem);
    width: 50px;
    height: 50px;
    border-top: 2px solid black;
    border-radius: 100%;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 0.5s linear infinite;
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
