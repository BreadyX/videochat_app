<template>
  <div class="topbar">
    <div class="topbar__left">
      <slot name="left" />
    </div>
    <div class="topbar__center">
      <slot name="center" />
    </div>
    <div class="topbar__right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '@/scss/components/containers';

.topbar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  padding: var(--space-s) var(--space-m);

  @include containers.container-decoration(--zero);
  border-top: none;
  border-left: none;
  border-right: none;
}

.topbar__left,
.topbar__center,
.topbar__right {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  flex: 1;
}

.topbar__left {
  justify-content: left;
}

.topbar__center {
  justify-content: center;
}

.topbar__right {
  justify-content: right;
}
</style>
