<template>
  <div :class="width" class="column-width">
    <div class="field">
      <label>{{ label }}</label>
      <slot />
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      label: {
        type: String,
        default: "",
      },
      width: {
        type: String,
        default: "",
      },
    },
  };
</script>
<style>
  .field {
    padding: 10px;
  }
  .column-width {
    width: 100%;
    text-align: left;
    margin-bottom: 15px;
  }
  label {
    font-size: 18px;
    font-weight: bold;
    padding-left: 5px;
  }
  @media screen and (min-width: 768px) {
    .full-desktop {
      width: 100%;
    }
    .half-desktop {
      width: 50%;
    }
  }
</style>
