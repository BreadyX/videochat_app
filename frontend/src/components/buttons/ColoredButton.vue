<template>
  <button class="colored-button" :disabled="disabled">
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

.colored-button {
  @extend %button;

  color: var(--color-button-text);
  background-color: var(--color-button);
  border-color: var(--color-button);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
    box-shadow: 0 0 3px var(--color-button-shadow);
  }

  &:active {
    background-color: var(--color-button-active);
    border-color: var(--color-button-active);
    box-shadow: 0 0 6px var(--color-button-shadow);
  }

  &:disabled {
    color: var(--color-button-text-disabled);
    background-color: var(--color-button-disabled);
    border-color: var(--color-button-disabled);
    box-shadow: none;

    cursor: default;
  }
}
</style>
