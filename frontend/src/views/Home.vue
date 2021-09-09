<template>
  <div class="home">
    <topbar>
      <template #left>
        <logo :size="50" />
        <span>Psylean</span>
      </template>

      <template #right>
        <p>Home</p>
        <p>Funzionalità</p>
        <p>Piani</p>
        <p>|</p>
        <flat-button @click="$router.push('/signin')"> Accedi </flat-button>
        <colored-button @click="$router.push('/signin')">
          Iscriviti
        </colored-button>
      </template>
    </topbar>
    <div class="home__content">
      <h1>Benvenuti su Psylean!</h1>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/containers/Topbar.vue';
import Logo from '@/components/graphics/Logo.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';
import FlatButton from '@/components/buttons/FlatButton.vue';

export default {
  components: {
    Topbar,
    Logo,
    ColoredButton,
    FlatButton
  }
};
</script>

<style lang="scss" scoped>
.topbar__left {
  & > * {
    margin-right: var(--space-s);
  }
}

.topbar__right {
  & > * {
    margin-left: var(--space-m);
  }

  & > .colored-button,
  & > .flat-button {
    margin-left: var(--space-xxs);
  }
}

.home__content {
  padding: var(--space-m);
}
</style>
