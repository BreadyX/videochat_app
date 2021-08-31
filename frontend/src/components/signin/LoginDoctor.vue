<template>
  <div>
    <field
      v-model="user.username"
      class="form-element"
      label="Email"
      @submit="loginClick(user)"
    />
    <div class="form-element password-input">
      <a class="password-input__a link-secondary" @click="resetPassword"
        >Hai dimenticato la password?</a
      >
      <field
        v-model="user.password"
        label="Password"
        type="password"
        @submit="loginClick(user)"
      />
    </div>
    <colored-button
      class="submit-btn"
      :disabled="isDisabled"
      @click="loginClick(user)"
    >
      Accedi
    </colored-button>
  </div>
</template>

<script>
import Field from '@/components/input/Field.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    ColoredButton,
    Field
  },
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  computed: {
    isDisabled() {
      if (this.user.username.length > 0 && this.user.password.length > 0)
        return false;
      return true;
    }
  },
  methods: {
    loginClick() {
      if (!this.isDisabled) {
        alert(
          `Richiesta di accesso '${this.user.username}:${this.user.password}'`
        );
      }
    },
    resetPassword() {
      alert('Resettando la password');
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/signin';

.password-input {
  position: relative;
}

.password-input__a {
  position: absolute;
  top: var(--space-xxxs);
  right: 0;

  font-size: var(--text-s);
}
</style>
