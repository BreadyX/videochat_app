<template>
  <div class="user-profile-pic">
    <img
      class="user-profile-pic__img"
      src="@/assets/user-profile.svg"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: () => 256
    },
    height: {
      type: Number,
      default: () => 256
    }
  }
};
</script>

<style lang="scss" scoped>
.user-profile-pic__img {
  display: block;
  cursor: pointer;
}
</style>
