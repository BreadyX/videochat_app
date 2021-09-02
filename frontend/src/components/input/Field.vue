<template>
  <div class="labeled labeled-field">
    <label v-if="label !== ''" :style="{ textAlign: alignment }" :for="id">{{
      label
    }}</label>
    <div
      class="labeled-field__container"
      :class="{
        'labeled-field__container--disabled': disabled,
        'labeled-field__container--selected': selected,
        'labeled-field__container--error': wrong
      }"
    >
      <input
        :id="id"
        class="labeled-field__input"
        :value="modelValue"
        :type="type"
        :disabled="disabled"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="
          () => {
            selected = true;
            $emit('update:wrong', false);
          }
        "
        @blur="selected = false"
        @keyup.enter="$emit('submit', modelValue)"
      />
    </div>
  </div>
</template>

<script>
import { v1 as uuid } from 'uuid';

export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    modelValue: {
      type: String,
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    type: {
      type: String,
      default: () => 'text'
    },
    wrong: {
      type: Boolean,
      default: () => false
    },
    alignment: {
      type: String,
      default: () => 'left',
      validator: (value) => ['left', 'right', 'center'].includes(value)
    }
  },
  emits: {
    'update:modelValue': null,
    'update:wrong': null,
    submit(val) {
      if (val.length === 0) return false;
      return true;
    }
  },
  data() {
    return {
      id: uuid(),
      selected: false
    };
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/input';

.labeled-field {
  display: flex;
  flex-flow: column nowrap;
  font-size: inherit;

  width: 100%;
}

.labeled-field__label {
  flex: 0;
}

.labeled-field__container {
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  min-height: 1.1em;

  font-size: var(--text-s);
  padding: var(--space-xs) var(--space-s);

  @extend %input-decoration;

  transition-duration: var(--transition-speed);

  .labeled-field__input {
    background-color: transparent;
    outline: none;
    appearance: none;
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  &:hover {
    background-color: var(--color-input-bg-hover);
  }

  &.labeled-field__container--selected,
  &:focus {
    @extend %input-decoration--focus;
  }

  &.labeled-field__container--error {
    @extend %input-decoration--error;
  }

  &.labeled-field__container--disabled,
  &.labeled-field__container--disabled.labeled-field__container--error {
    @extend %input-decoration--disabled;
  }
}
</style>
