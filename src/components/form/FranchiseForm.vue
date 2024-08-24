<template>
  <form @submit.prevent="submitForm" class="form">
    <!-- NAME -->
    <div class="form-group" :class="{ invalid: !name.isValid }">
      <label for="name"> Name <abbr title="Pflichtfeld">*</abbr> </label>
      <input class="form-control" type="text" id="name" v-model.trim="name.val" @blur="clearValidity('name')"
        placeholder="Name" />
      <p v-if="!name.isValid" :class="{ invalid: !message.isValid }">
        Bitte geben Sie Ihren Namen an.
      </p>
    </div>
    <!-- EMAIL -->
    <div class="form-group" :class="{ invalid: !email.isValid }">
      <label for="email"> E-Mail <abbr title="Pflichtfeld">*</abbr> </label>
      <input class="form-control" type="email" id="email" v-model.trim="email.val" @blur="clearValidity('email')"
        placeholder="E-Mail" />
      <p v-if="!email.isValid" :class="{ invalid: !message.isValid }">
        Das E-Mail Feld darf nicht leer sein!
      </p>
    </div>
    <!-- MESSAGE -->
    <div class="form-group" :class="{ invalid: !message.isValid }">
      <label for="message">
        Ihre Nachricht <abbr title="Pflichtfeld">*</abbr>
      </label>
      <textarea class="form-control" id="message" rows="7" v-model.trim="message.val" @blur="clearValidity('message')"
        placeholder="Ihre Nachricht"></textarea>
      <p v-if="!message.isValid" :class="{ invalid: !message.isValid }">
        Nachricht darf nicht leer sein
      </p>
    </div>
    <!-- RECHENAUFGABE -->
    <div class="form-group" :class="{ invalid: !mathProblem.isValid }">
      <label for="mathProblem">Rechenaufgabe: {{ mathProblem.example }} <abbr title="Pflichtfeld">*</abbr></label>
      <input class="form-control" type="number" id="mathProblem" v-model.trim="mathProblem.val"
        @blur="clearValidity('mathProblem')" placeholder="Lösen Sie die Rechenaufgabe" />
      <p v-if="!mathProblem.isValid" :class="{ invalid: !mathProblem.isValid }">
        Bitte lösen Sie die Rechenaufgabe korrekt.
      </p>
    </div>
    <p v-if="!formIsValid">Bitte überprüfen Sie noch einmal ihre Angaben.</p>
    <base-button mode="btn--primary">Nachricht abschicken</base-button>
  </form>
</template>

<script>
import BaseButton from '../button/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      message: {
        val: "",
        isValid: true,
      },
      mathProblem: { val: '', isValid: true, example: this.generateRandomMathProblem() },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (
        this.email.val === "" ||
        !this.email.val.includes("@") ||
        this.email.val < 8
      ) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      const correctAnswer = eval(this.mathProblem.example);
      if (parseInt(this.mathProblem.val, 10) !== correctAnswer) {
        this.mathProblem.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === "") {
        this.message.isValid = false;
        this.formIsValid = false;
      }
    },
    generateRandomMathProblem() {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operator = '+';
      return `${num1} ${operator} ${num2}`;
    },
    async submitForm() {
      this.validateForm();

      if (!this.formIsValid) return;

      const formData = {
        name: this.name.val,
        email: this.email.val,
        message: this.message.val,
      };

      try {
        const response = await fetch("/.netlify/functions/sendFranchiseEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: 'franchise@ramen1974.de', // set email of receiver
            name: formData.name,
            email: formData.email,
            text: formData.message,
          }),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        this.$router.push("/success");
      } catch (error) {
        console.error("Fehler beim Abschicken des Kontaktformulars:", error);
        this.$router.push("/error");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding-top: 3rem;

  @include for-tablet-portrait-up {
    padding: 3.5rem;
  }

  @include for-tablet-landscape-up {
    margin: -3rem;
  }
}

.form-group {
  margin-bottom: 2rem;
}

.form-control {
  @include responsive-font-size(1.8rem, 1.9rem);
  border: 2px solid #51515137;
  border-radius: 4px;
  display: block;
  color: $color-body;
  font-family: inherit;
  line-height: 1.3;
  min-height: 5rem;
  outline: none;
  padding: 1rem 2rem;
  transition: border 0.3s;
  width: 100%;

  &:hover,
  &:focus,
  &:focus-visible {
    border: 2px solid $color-primary;
  }
}

label {
  @include responsive-font-size(1.8rem, 1.9rem);
  color: $color-body;
  display: block;
  font-weight: 500;
  margin-bottom: 1rem;
}

textarea {
  resize: vertical;
}

.invalid {

  label,
  p {
    @include responsive-font-size(1.8rem, 1.9rem);
    color: $color-error;
    margin-top: 0.5rem;
  }

  input,
  textarea {
    border: 1px solid $color-error;
  }
}
</style>