<template>
  <div class="signin">
    <div class="bg" />
    <div class="page">
      <logo redirect :size="80" />
      <h1 class="title">Entra in Psylean</h1>
      <floating-dialog>
        <component :is="currentDialogComponent" />
      </floating-dialog>
      <div class="switcher">
        <p v-if="currentDialog == guest">
          Sei uno psicologo?
          <a class="link-primary" @click="currentDialog = login">Accedi</a>
          oppure
          <a class="link-primary" @click="currentDialog = signup">registrati</a
          >.
        </p>
        <p v-else>
          <span v-if="currentDialog == login">
            Non hai un account?
            <a class="link-primary" @click="currentDialog = signup"
              >Registrati</a
            >.
          </span>
          <span v-else>
            Hai già un account?
            <a class="link-primary" @click="currentDialog = login">Accedi</a>.
          </span>
          <br />
          Sei un paziente? Inserisci il
          <a class="link-primary" @click="currentDialog = guest"
            >codice di accesso</a
          >.
        </p>
      </div>
      <div class="footer">
        <a class="link-secondary" @click="$router.push('/terms')"
          >Termini e condizioni</a
        >
        <a class="link-secondary" @click="$router.push('/privacy')">Privacy</a>
        <a class="link-secondary" @click="$router.push('/support')">Supporto</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/graphics/Logo.vue';
import FloatingDialog from '@/components/containers/FloatingDialog.vue';
import LoginGuest from '@/components/signin/LoginGuest.vue';
import LoginDoctor from '@/components/signin/LoginDoctor.vue';
import SignupDoctor from '@/components/signin/SignupDoctor.vue';

export default {
  components: {
    Logo,
    FloatingDialog,
    LoginGuest,
    LoginDoctor,
    SignupDoctor
  },
  data() {
    return {
      guest: 'login-guest',
      login: 'login-doctor',
      signup: 'signup-doctor',
      currentDialog: 'login-guest'
    };
  },
  computed: {
    currentDialogComponent() {
      return this.currentDialog;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/components/signin';

.bg {
  background-image: linear-gradient(
    to bottom right,
    var(--color-login-gradient-light),
    var(--color-login-gradient-dark)
  );
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.page {
  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;
}

.logo {
  margin: var(--space-xl) auto;
}

.title {
  margin: 0 auto var(--space-s) auto;
  font-size: var(--text-xl);
  font-weight: var(--text-light);
}

.floating-dialog {
  display: flex;
  flex-direction: column;

  margin-bottom: var(--space-m);

  width: 380px;
}

.switcher {
  font-size: var(--text-s);
  margin: 0 auto var(--space-xl) auto;

  & > * {
    margin: 0;
  }
}

.footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: stretch;

  width: 250px;
  font-size: var(--text-xs);
  margin: 0 auto var(--space-l) auto;
}
</style>
