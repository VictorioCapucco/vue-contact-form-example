<template>
  <div id="app">
    <section class="contact-form-section">
      <div class="container">
        <field width="full-desktop" label="Nome completo">
          <input />
        </field>
        <field width="half-desktop" label="CEP">
          <input />
        </field>
        <field width="half-desktop" label="Endereço">
          <input disabled class="disabled" />
        </field>
        <field width="half-desktop" label="Estado">
          <input disabled class="disabled" />
        </field>
        <field width="half-desktop" label="Cidade">
          <input disabled class="disabled" />
        </field>
        <field width="full-desktop" label="Informe suas dúvidas">
          <textarea rows="5"></textarea>
        </field>
      </div>
    </section>
  </div>
</template>

<script>
  import field from "./components/field.vue";
  export default {
    components: {
      field,
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
