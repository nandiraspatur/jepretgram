<template>
  <div class="ui grid centered">
    <div class="five wide column center aligned">
      <div class="ui segment">
        <div class="ui header">
          Login
        </div>
        <div class="ui form">
          <div class="field">
            <input type="text" placeholder="Username" v-model="username">
          </div>
          <div class="field">
            <input type="text" placeholder="Password" v-model="password">
          </div>
          <div class="field">
            <div class="ui primary button" @click="login">Login</div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <a @click="modalSignUp" href="#">SignUp</a>
      </div>
    </div>
    <div class="ui tiny modal">
      <i class="close icon"></i>
      <div class="header">
        SignUp
      </div>
      <div class="content">
        <div class="ui segment">
        <div class="ui form">
          <div class="field">
            <input type="text" placeholder="Username">
          </div>
          <div class="field">
            <input type="text" placeholder="Password">
          </div>
          <div class="field">
            <input type="text" placeholder="First Name">
          </div>
          <div class="field">
            <input type="text" placeholder="Last Name">
          </div>
          <div class="field">
            <input type="text" placeholder="Email">
          </div>
        </div>
      </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancle
        </div>
        <div class="ui positive right labeled icon button">
          SignUp
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    modalSignUp () {
      $('.tiny.modal')
        .modal('show')
    },
    // login () {
    //   let user = {
    //     username: this.username,
    //     password: this.password
    //   }
    //   this.$http.post('/users/login', user)
    //   .then(({data}) => {
    //     localStorage.setItem('accesstoken', data.accesstoken)
    //     console.log(localStorage)
    //   })
    //   .catch(err => console.log(err))
    // }
  }
}
</script>

<style>

</style>
