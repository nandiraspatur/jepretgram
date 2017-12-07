<template>
  <div class="ui grid centered">
    <div class="five wide column center aligned">
      <div class="ui segment">
        <div class="ui form">
          <div class="field">
            <label>Caption</label>
            <input type="text" placeholder="Caption" v-model="caption">
          </div>
          <div class="field">
            <label>Select an image</label>
            <input type="file" @change="onFileChange">
          </div>
          <button class="ui primary button" @click="uploadPhoto">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      file: '',
      caption: ''
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      if (!files.length)
        return
      this.file = files[0]
    },
    uploadPhoto(file) {
      var formData = new FormData();
      // formData.append('_token', this.token); // just the csrf token
      formData.append('file', this.file);
      formData.append('caption', this.caption);

      this.$http.post('http://localhost:3000/photos/upload', {caption: this.caption}, {
        headers: {
          accesstoken: localStorage.getItem('accesstoken')
        }
      })
      .then((response) => {
        console.log(response)
        this.$router.push('/')
      })
      .catch(err => console.log(err))
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>

<style>

</style>
