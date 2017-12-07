<template>
  <div class="row">
    <div class="ui segment">
      <img src="../assets/img/sample.jpg" alt="photo" class="ui image">
      <div class="ui segment">
        <p>{{photo.caption}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['photo']
}
</script>

<style>

</style>
