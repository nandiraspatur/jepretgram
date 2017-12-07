<template>
  <div class="ui grid stackable">
    <div class="column">
      <PhotoSingle v-for="photo in photos" :key="photo._id" :photo="photo"/>
    </div>
  </div>
</template>

<script>
import PhotoSingle from '@/components/PhotoSingle'
export default {
  data () {
    return {
      photos: []
    }
  },
  components: {
    PhotoSingle
  },
  methods: {
    getAllPhotos () {
      this.$http.get('/photos')
      .then(({data}) => {
        this.photos = data
      })
      .catch(err => console.log(err))
    }
  },
  created () {
    this.getAllPhotos()
  }
}
</script>

<style>

</style>
