<template>
  <div class="logo">
    <router-link to="/">
      <img
        class="logo__img"
        :class="{ 'logo__img--shadow': shadow }"
        src="@/assets/logo.svg"
        :width="size"
        :height="size"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    redirect: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: Number,
      default: () => 80
    },
    shadow: {
      type: Boolean,
      default: () => true
    }
  }
};
</script>

<style lang="scss">
:root {
  --logo-shadow-size: 5px;
}
</style>

<style lang="scss" scoped>
.logo__img {
  display: block;
}

.logo__img--shadow {
  filter: drop-shadow(0 0 var(--logo-shadow-size) var(--color-shadow));
}
</style>
