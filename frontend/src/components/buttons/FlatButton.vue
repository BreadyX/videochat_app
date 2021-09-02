<template>
  <button class="flat-button" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/buttons';

.flat-button {
  @extend %button;

  color: var(--color-button);
  background-color: transparent;
  border-color: transparent;

  font-weight: var(--text-bold);

  padding: var(--space-xs) var(--space-s);

  &:hover {
    color: var(--color-button-hover);
  }

  &:active {
    color: var(--color-button-active);
  }

  &:disabled {
    color: var(--color-button-text-disabled);
    cursor: default;
  }
}
</style>
