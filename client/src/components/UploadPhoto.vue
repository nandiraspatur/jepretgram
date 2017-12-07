<template>
  <div v-if="!image">
    <h2>Select an image</h2>
    <input type="file" @change="onFileChange">
    <button @click="uploadPhoto">submit</button>
  </div>
</template>

<script>
export default {
  data () {
    file: ''
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files)
      if (!files.length)
        return;
      this.file = files[0]
    },
    uploadPhoto(file) {
      var formData = new FormData();
      // formData.append('_token', this.token); // just the csrf token
      formData.append('file', this.file);
      console.log(formData)
      this.$http.post('http://localhost:3000/photos/upload', formData)
      .then((response) => {
        console.log('File sent...'); // this block is never triggered
        console.log(response);
      }, (response) => {
        console.log('Error occurred...');
      });
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
}
</script>

<style>

</style>
