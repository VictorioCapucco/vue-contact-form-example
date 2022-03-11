<template>
  <div :class="width" class="column-width">
    <div class="field">
      <label>{{ label }}</label>
      <ValidationProvider :rules="rules" v-slot="{ errors }">
        <span :class="{ error: errors.length > 0 }">
          <slot />
          <p v-if="errors.length > 0">{{ errors[0] }}</p>
        </span>
      </ValidationProvider>
    </div>
  </div>
</template>
<script>
  import { ValidationProvider } from "vee-validate";
  import Vue from "vue";

  Vue.component("ValidationProvider", ValidationProvider);
  export default {
    componets: {
      ValidationProvider,
    },
    props: {
      label: {
        type: String,
        default: "",
      },
      width: {
        type: String,
        default: "",
      },
      rules: {
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
  .error > input {
    border: 1px solid red;
  }
  .error {
    color: red;
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
