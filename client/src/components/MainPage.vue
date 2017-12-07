<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="column">
        <Navbar/>
        <div class="row">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>
