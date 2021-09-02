<template>
  <div class="labeled labeled-combobox">
    <label v-if="label !== ''" class="labeled-combobox__label" :for="id">{{
      label
    }}</label>
    <div :id="id" ref="combobox" class="labeled-combobox__container">
      <div
        class="labeled-combobox__select"
        :class="{
          'labeled-combobox--selected': selected || hasFocus,
          'labeled-combobox--disabled': disabled
        }"
        tabindex="0"
        @click="toggleSelected"
        @focus="hasFocus = true"
        @blur="hasFocus = false"
        @keyup.enter="toggleSelected"
        @keydown.tab="selected = false"
        @keydown.down.prevent="focusNextItem"
        @keydown.up.prevent="focusPrevItem"
      >
        <span class="labeled-combobox__select__choice">{{ modelValue }}</span>
        <span class="labeled-combobox__select__arrow" />
      </div>
      <dropdown
        ref="dropdown"
        v-model="selected"
        class="labeled-combobox__items"
        @keydown.down.prevent="focusNextItem"
        @keydown.up.prevent="focusPrevItem"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          tabindex="-1"
          class="labeled-combobox__item"
          @click="clickItem(item)"
          @keyup.enter="clickItem(item)"
          @keydown.tab="clickItem(item)"
          @mouseover="focusItemN(index)"
        >
          <slot name="item" :item="item">
            <div>{{ item }}</div>
          </slot>
        </div>
      </dropdown>
    </div>
  </div>
</template>

<script>
import { v1 as uuid } from 'uuid';

import { ref, watch, onMounted, onUpdated } from 'vue';
import { unrefEl, unrefProps } from '@/composables/utilities.js';

import Dropdown from '@/components/containers/Dropdown.vue';

export default {
  components: { Dropdown },
  props: {
    label: {
      type: String,
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    items: {
      type: Array,
      default: () => []
    },
    stretch: {
      type: Boolean,
      default: () => false
    },
    initialValue: {
      type: Number,
      default: () => 0
    },
    modelValue: {
      type: String,
      default: () => ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    let id = uuid();
    let selected = ref(false);
    let hasFocus = ref(false);

    const combobox = ref(null);
    const dropdown = ref(null);
    let dropdownStyle;
    let dropdownSelectedItem = null;

    watch(selected, () => (dropdownSelectedItem = null));

    const toggleSelected = () => {
      selected.value = props.disabled ? false : !selected.value;
    };

    const clickItem = (item) => {
      emit('update:modelValue', item);
      toggleSelected();
    };

    const focusItem = (firstVal, nextProperty) => {
      if (dropdownSelectedItem === null) {
        dropdownSelectedItem = firstVal;
        dropdownSelectedItem.focus();
      } else {
        dropdownSelectedItem = dropdownSelectedItem[nextProperty];
        if (dropdownSelectedItem === null) {
          dropdownSelectedItem = firstVal;
        }
        dropdownSelectedItem.focus();
      }
    };
    const focusItemN = (n) => {
      dropdownSelectedItem = unrefEl(dropdown).children[n];
      unrefEl(dropdown).children[n].focus();
    };

    const focusNextItem = () =>
      focusItem(unrefEl(dropdown).firstElementChild, 'nextElementSibling');
    const focusPrevItem = () =>
      focusItem(unrefEl(dropdown).lastElementChild, 'previousElementSibling');

    onMounted(() => {
      dropdownStyle = unrefEl(dropdown).style;
      unrefProps(dropdown).exclude.push(combobox);

      if (props.initialValue >= 0)
        emit('update:modelValue', props.items[props.initialValue]);

      if (props.stretch) dropdownStyle.minWidth = '100%';
    });

    onUpdated(() => {
      let viewHeight = window.innerHeight;
      let dropdownBBox = unrefEl(dropdown).getBoundingClientRect();

      if (dropdownBBox.y > viewHeight - viewHeight / 4) {
        dropdownStyle.bottom = '100%';
        dropdownStyle.top = '';
        dropdownStyle.maxHeight = `${dropdownBBox.y - 60}px`;
      } else {
        dropdownStyle.top = '100%';
        dropdownStyle.bottom = '';
        dropdownStyle.maxHeight = `${viewHeight - dropdownBBox.y - 10}px`;
      }
    });

    return {
      id,
      selected,
      hasFocus,
      combobox,
      dropdown,
      toggleSelected,
      clickItem,
      focusNextItem,
      focusPrevItem,
      focusItemN
    };
  }
};
</script>

<style lang="scss" scoped>
@use '@/scss/components/input';

.labeled-combobox {
  display: flex;
  flex-flow: column nowrap;
}

.labeled-combobox__label {
  flex: 0;
}

.labeled-combobox__container {
  flex: 1;
  position: relative;
}

.labeled-combobox__select {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  font-size: var(--text-s);
  padding: var(--space-xs) var(--space-s);
  cursor: pointer;

  transition-duration: var(--transition-speed);

  @extend %input-decoration;

  .labeled-combobox__select__choice {
    flex: 1;
    min-height: 1rem;
    margin-right: var(--space-xs);
  }

  .labeled-combobox__select__arrow {
    flex: 0 0 0.8em;
    height: 0.5em;

    background-color: var(--color-text);
    clip-path: polygon(100% 0%, 0% 0%, 50% 100%);
  }

  &:hover {
    @extend %input-decoration--hover;
  }

  &.labeled-combobox--selected {
    @extend %input-decoration--focus;

    &:focus {
      @extend %input-decoration--focus;

      &.labeled-combobox--disabled {
        @extend %input-decoration--disabled;
      }
    }
  }

  &.labeled-combobox--disabled {
    @extend %input-decoration--disabled;
  }
}

.labeled-combobox__items {
  overflow-x: hidden;
  overflow-y: auto;

  margin: var(--space-s) 0;
}

.labeled-combobox__item {
  width: 100%;

  font-size: var(--text-s);
  padding: var(--space-xxs) var(--space-xxs);

  border-radius: var(--radius-subelement);
  cursor: pointer;

  transition-duration: var(--transition-speed-faster);

  &:focus {
    outline: none;
    background-color: var(--color-input-subelement-bg-focus);
  }
}
</style>
