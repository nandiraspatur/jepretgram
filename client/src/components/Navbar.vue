<template>
  <div class="ui stackable container menu">
    <router-link to="/" class="item">Home</router-link>
    <router-link to="/upload" class="item" v-if="isLogin">Upload</router-link>
    <a @click="logout" class="right item" v-if="isLogin">Logout</a>
    <router-link to="/login" class="right item" v-else>Login</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: localStorage.getItem('accesstoken')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      window.location.reload()
    }
  }

}
</script>

<style>

</style>
