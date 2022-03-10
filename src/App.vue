<template>
  <div id="app">
    <section class="contact-form-section">
      <div class="container">
        <field width="full-desktop" label="Nome completo">
          <input
            :value="form.name"
            @input="updateVuex('name', $event.target.value)"
          />
        </field>
        <field width="half-desktop" label="CEP">
          <input
            :value="form.cep"
            @input="updateVuex('cep', $event.target.value)"
          />
        </field>
        <field width="half-desktop" label="Endereço">
          <input
            :value="form.address"
            disabled
            class="disabled"
            @input="updateVuex('address', $event.target.value)"
          />
        </field>
        <field width="half-desktop" label="Estado">
          <input
            :value="form.state"
            disabled
            class="disabled"
            @input="updateVuex('state', $event.target.value)"
          />
        </field>
        <field width="half-desktop" label="Cidade">
          <input
            :value="form.city"
            disabled
            class="disabled"
            @input="updateVuex('city', $event.target.value)"
          />
        </field>
        <field width="full-desktop" label="Informe suas dúvidas">
          <textarea
            :value="form.doubts"
            rows="5"
            @input="updateVuex('doubts', $event.target.value)"
          ></textarea>
        </field>
      </div>
    </section>
  </div>
</template>

<script>
  import field from "./components/field.vue";
  import store from "/store.js";

  export default {
    components: {
      field,
    },
    computed: {
      form() {
        return store.state.form;
      },
    },
    methods: {
      updateVuex(key, value) {
        store.dispatch("updateForm", { [key]: value });
      },
    },
    name: "App",
  };
</script>

<style>
  html {
    background-color: #ccc;
  }
  input,
  textarea {
    width: 100%;
    margin-top: 10px;
    border: 1px solid;
    color: #666;
    border-radius: 10px;
    outline: none;
    padding: 9px 14px;
    box-sizing: border-box;
    font-size: 14px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .contact-form-section {
    max-width: 750px;
    margin: auto;
    padding: 20px;
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .container {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    flex-wrap: wrap;
    background-color: white;
  }
</style>
