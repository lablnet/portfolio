<template>
  <div>
    <div v-if="!error">
      <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
    </div>
    <h3 class="title">Umer's Quotes</h3>
    <div v-if="load">
      <md-card v-for="(interest, index) in data" :key="index">
        <md-card-content>
          <span class="md-list-item-text">{{interest["title"]}}</span>  
        </md-card-content>
      </md-card>
    </div>
    <div v-if="error">
        <md-card>
            <md-card-content>
                <h3>Error: unable to load, <a style="color:black" href="#!" @click="loadData">Retry</a> </h3>
            </md-card-content>
        </md-card>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    import url from "@/url"
    export default {
        name: 'interests',
        data() {
            return {
                data: [],
                load: false,
                error: false
            }
        },
        methods: {
            loadData() {
                this.data = []
                this.error =  false
                axios.get(`${url}data/quotes.json?timestamp=${new Date().getTime()}`).then(response => {
                    this.data =  response.data
                    this.load = true
                }).catch(err => {
                    this.error = true
                })
            }
        },
        mounted() {
            this.loadData()
        }
    }
</script>

<style lang="scss" scoped>
  .md-list {
    width: 100%;
    max-width: 100%;
    padding: 10%;
  }
</style>
