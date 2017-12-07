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
            <img :src="imageSrc" class="image" style="max-width: 100px">
          </div>
          <div class="field">
            <label>Select an image</label>
            <input @change="uploadImage" type="file" name="photo" accept="image/*">
          </div>
          <button class="ui primary button" @click="submitUpload">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      caption: '',
      imageSrc: 'http://nahmdong.com/vitalhill/img/default.png',
      data: ''
    }
  },
  methods: {
    uploadImage: function (e) {
      var files = e.target.files
      console.log(files)
      if (!files[0]) {
        return
      }
      var data = new FormData()
      data.append('image', files[0])
      data.append('caption', this.caption)
      var reader = new FileReader()
      reader.onload = (e) => {
        this.imageSrc = e.target.result
      }
      reader.readAsDataURL(files[0])

      this.data = data
    },
    submitUpload () {
      this.$http.post('/photos/uploads', this.data, {
        headers: {
          accesstoken: localStorage.getItem('accesstoken')
          // 'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        console.log('success')
      }).catch(function (error) {
        console.log(error) // catch your error
        console.log(error.response)
      })
      window.location.replace('/')
    }
  }
}
</script>

<style>

</style>
