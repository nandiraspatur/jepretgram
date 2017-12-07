<template>
  <div class="ui grid centered stackable">
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
            <label>Username</label>
            <input type="text" placeholder="Username" v-model="formSignup.username">
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" placeholder="Password" v-model="formSignup.password">
          </div>
          <div class="field">
            <label>First Name</label>
            <input type="text" placeholder="First Name" v-model="formSignup.first_name">
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" v-model="formSignup.last_name">
          </div>
          <div class="field">
            <label>Email</label>
            <input type="text" placeholder="Email" v-model="formSignup.email">
          </div>
        </div>
      </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">
          Cancle
        </div>
        <div class="ui positive right labeled icon button" @click="signup">
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
      password: '',
      formSignup: {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
      }
    }
  },
  methods: {
    modalSignUp () {
      // eslint-disable-next-line
      $('.tiny.modal')
        .modal('show')
    },
    login () {
      let user = {
        username: this.username,
        password: this.password
      }
      this.$http.post('/users/login', user)
      .then(({data}) => {
        localStorage.setItem('accesstoken', data.accesstoken)
        console.log(localStorage)
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    },
    signup () {
      this.$http.post('/users/signup', this.formSignup)
      .then(({data}) => {
        console.log('signup succes!!')
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
