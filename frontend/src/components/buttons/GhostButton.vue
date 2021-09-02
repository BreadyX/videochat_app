<template>
  <colored-button class="ghost-button" :disabled="disabled">
    <slot />
  </colored-button>
</template>

<script>
import ColoredButton from '@/components/buttons/ColoredButton.vue';

export default {
  components: {
    ColoredButton
  }
};
</script>

<style lang="scss" scoped>
.ghost-button {
  color: var(--color-text);
  background-color: transparent;

  &:hover {
    color: var(--color-button-text);
    background-color: var(--color-button);
    box-shadow: none;
  }

  &:active {
    background-color: var(--color-button-active);
    border-color: var(--color-button-active);
    box-shadow: none;
  }

  &:disabled {
    color: var(--color-button-text-disabled);
    background-color: var(--color-button-disabled);
    border-color: var(--color-button-disabled);
    box-shadow: none;
  }
}
</style>
