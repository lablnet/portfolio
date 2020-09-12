<template>
    <div>
      <h3 class="title">Gallery</h3>
      <md-card>
        <md-card-content style="font-size: 19px">
          <h3 class="title">Coming soon.</h3>
        </md-card-content>
      </md-card>
    </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    loadGallery() {
      let url = "https://photos.google.com/share/AF1QipOoxrRka8tdGKHOoxj5D33zx-7lf9JLW9zYm2_HCqcihBX_ToMJQrnmOkCkTOStGw?key=TjdoUDlScXVHRjNrdWZrUWVuaEJFNUNwYVNuZklB"
      axios.get(url)  .then(response => {
            this.extractPhotos(response.data)
        }).catch(err => {
        })
    },
    extractPhotos(content) {
      let regex = /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g
      const links = new Set()
      let match
      while (match = regex.exec(content)) {
        console.log(match[1])
      } 
      return Array.from(links)
    }
  },
  mounted() {
    this.loadGallery()
  }
}
</script>