<template>
  <div>
    <topbar>
      <template #left>
        <logo :shadow="false" :width="40" :height="40" redirect />
        <colored-button>Oggi</colored-button>
        <combobox v-model="choice" :items="['Mese', 'Giorno', 'Settimana']" />
      </template>
      <template #center>
        <switcher :items="['Calendario', 'Pazienti']" />
      </template>
      <template #right>
        <user-profile-pic :width="40" :height="40" />
      </template>
    </topbar>
  </div>
</template>

<script>
import Topbar from '@/components/containers/Topbar.vue';
import Logo from '@/components/graphics/Logo.vue';
import ColoredButton from '@/components/buttons/ColoredButton.vue';
import Combobox from '@/components/input/Combobox.vue';
import Switcher from '@/components/buttons/Switcher';
import UserProfilePic from '@/components/graphics/UserProfilePic.vue';

export default {
  components: {
    Topbar,
    Logo,
    ColoredButton,
    Combobox,
    Switcher,
    UserProfilePic
  },
  data() {
    return { choice: '' };
  }
};
</script>

<style lang="scss" scoped>
.colored-button {
  width: 100px;
}

.labeled-combobox {
  font-size: var(--text-m);
}
</style>
