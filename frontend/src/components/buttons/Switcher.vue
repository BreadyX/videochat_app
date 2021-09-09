<template>
  <div class="switcher">
    <div
      v-for="(item, index) in items"
      :key="index"
      tabindex="-1"
      class="switcher__item"
    >
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: String,
      default: () => ''
    }
  }
};
</script>

<style lang="scss" scoped>
.switcher {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  @extend %input-decoration;
}

.switcher__item {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: 'item';
  align-items: center;

  height: 100%;
  padding: var(--space-xs) var(--space-s);

  border-radius: var(--radius-element);

  & + & {
    padding-left: 0;

    &::before {
      content: '';

      display: block;
      grid-area: item;

      background-color: black;

      width: 1px;
      height: 1em;
      margin-right: var(--space-s);
    }
  }

  &:hover {
    background-color: var(--color-input-subelement-bg-focus);
  }

  &:focus {
    background-color: lightblue;
  }
}
</style>
