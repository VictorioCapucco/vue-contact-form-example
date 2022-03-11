<template>
  <div id="app">
    <section class="contact-form-section">
      <ValidationObserver ref="contact">
        <div class="container">
          <field width="full-desktop" label="Nome completo" rules="required">
            <input
              :value="form.name"
              @input="updateVuex('name', $event.target.value)"
            />
          </field>
          <field width="half-desktop" label="CEP" rules="required">
            <input
              :value="form.zipcode"
              @input="updateVuex('zipcode', $event.target.value)"
            />
          </field>
          <field width="half-desktop" label="Endereço" rules="required">
            <input
              :value="form.address"
              disabled
              class="disabled"
              @input="updateVuex('address', $event.target.value)"
            />
          </field>
          <field width="half-desktop" label="Estado" rules="required">
            <input
              :value="form.state"
              disabled
              class="disabled"
              @input="updateVuex('state', $event.target.value)"
            />
          </field>
          <field width="half-desktop" label="Cidade" rules="required">
            <input
              :value="form.city"
              disabled
              class="disabled"
              @input="updateVuex('city', $event.target.value)"
            />
          </field>
          <field
            width="full-desktop"
            label="Informe suas dúvidas"
            rules="required"
          >
            <textarea
              :value="form.doubts"
              rows="5"
              @input="updateVuex('doubts', $event.target.value)"
            ></textarea>
          </field>
          <div class="button">
            <button @click="submit">Enviar</button>
          </div>
        </div>
      </ValidationObserver>
    </section>
    <loading :active="loading" />
  </div>
</template>

<script>
  import field from "./components/field.vue";
  import loading from "./components/loading.vue";
  import { ValidationObserver, extend } from "vee-validate";
  import { required } from "vee-validate/dist/rules";
  import store from "/store.js";

  extend("required", {
    ...required,
    message: "Por favor, preencha este campo.",
  });

  export default {
    components: {
      field,
      ValidationObserver,
      loading,
    },
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      form() {
        return store.state.form;
      },
    },
    watch: {
      "form.zipcode"() {
        this.updateVuex("address", "");
        this.updateVuex("city", "");
        this.updateVuex("state", "");
        if (this.form.zipcode.length === 8) {
          this.loading = true;
          store
            .dispatch("getCep")
            .then((result) => {
              if (Object.prototype.hasOwnProperty.call(result.data, "erro"))
                console.log(result.data.erro);
              else {
                try {
                  this.updateVuex("address", result.data.logradouro);
                  this.updateVuex("city", result.data.localidade);
                  this.updateVuex("state", result.data.uf);
                } catch {
                  console.log(result.data);
                }
              }
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              this.loading = false;
            });
        }
      },
    },
    methods: {
      updateVuex(key, value) {
        store.dispatch("updateForm", { [key]: value });
      },
      submit() {
        this.$refs.contact.validate().then((success) => {
          if (success) {
            this.loading = true;
            setTimeout(() => {
              this.loading = false;
            }, 3000);
          }
        });
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
    font-size: 16px;
  }
  .button > button {
    background-color: black;
    color: white;
    padding: 20px 50px;
    border-radius: 10px;
    border: none;
    font-family: Verdana;
    font-size: 15px;
    cursor: pointer;
  }
  .button {
    width: 100%;
    text-align: right;
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
