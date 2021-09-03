<template>
  <div class="not-found">
    <div class="bg"></div>
    <div class="content">
      <logo redirect :width="80" />
      <h1 class="title">Ops!</h1>
      <floating-dialog>
        <p class="not-found__inner-title">La pagina non esiste!</p>
        <p class="not-found__p">
          Verifica di aver digitato l'indirizzo correttamente.
        </p>
        <colored-button @click="$router.push('/')">
          Torna alla home
        </colored-button>
      </floating-dialog>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/graphics/Logo.vue';
import FloatingDialog from '@/components/containers/FloatingDialog.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    Logo,
    FloatingDialog,
    ColoredButton
  }
};
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: var(--gradient-bg);
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.logo {
  margin: var(--space-xl) auto;
}

.title {
  font-size: var(--text-xl);
  font-weight: var(--text-light);
  margin: 0 auto var(--space-s) auto;
}

.floating-dialog {
  width: 380px;
  text-align: center;
}

.not-found__inner-title {
  font-size: 1.2em;
  margin: 0 0 var(--space-xs) 0;
}

.not-found__p {
  font-size: 0.85em;
  margin: 0;
}

.colored-button {
  margin-top: var(--space-l);
}
</style>
