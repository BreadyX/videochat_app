<template>
  <div class="floating-dialog">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/scss/components/containers';

.floating-dialog {
  background-color: var(--color-bg);
  padding: var(--space-l);

  @include containers.container-decoration(--radius-dialog);
}
</style>
