<template>
  <div>
    <div class="modal"></div>
    <div class="modal-content"><slot /></div>
  </div>
</template>
<style>
  .modal {
    background-color: lightgray;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.6;
    z-index: 999;
    position: fixed;
  }
  .modal-content {
    background-color: white;
    box-shadow: 10px 5px 5px #ccc;
    width: 500px;
    position: absolute;
    display: block;
    top: calc(50% - 2.5rem);
    left: calc(50% - 16.5rem);
    z-index: 1000;
    padding: 20px;
  }
  .modal-content > p {
    text-align: left;
  }
</style>
