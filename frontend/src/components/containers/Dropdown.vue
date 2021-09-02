<template>
  <div
    ref="dropdown"
    class="dropdown"
    :class="{ 'dropdown--visible': modelValue }"
  >
    <slot />
  </div>
</template>

<script>
import { ref, toRef } from 'vue';
import useOutsideClick from '@/composables/useOutsideClick';

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: () => false
    },
    exclude: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const dropdown = ref(null);

    useOutsideClick(dropdown, toRef(props, 'modelValue'), props.exclude, () => {
      emit('update:modelValue', !props.modelValue);
    });

    return { dropdown };
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/containers';

.dropdown {
  display: none;
  background-color: var(--color-bg);

  @include containers.container-decoration(--radius-element);

  padding: var(--space-xs) var(--space-xs);

  &.dropdown--visible {
    display: block;
    position: absolute;
    z-index: 1;
  }
}
</style>
