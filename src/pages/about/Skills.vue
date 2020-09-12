<template>
   <div>
        <div>
            <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
        </div>
        <h3 class="title">Skills</h3>
        <md-card v-if="load">
            <md-card-content>
                <md-list class="md-double-line" v-for="items in data" v-bind:key="items[0]">
                    <md-card-header class="card-header-special" :md-elevation="2">
                        <h4>{{items[0]}}</h4>
                    </md-card-header>
                    <div v-for="item in items" v-bind:key="item['name']">
                        <md-list-item v-if="item['name']">
                            <md-icon class="md-primary">{{item['icon']}}</md-icon>
                            <div class="md-list-item-text">
                                <span>{{item['name']}}</span>
                                <span>{{item['duration']}}</span>
                            </div>
                        </md-list-item>
                        <md-divider></md-divider>
                    </div>
                </md-list>
            </md-card-content>
        </md-card>
  </div>
</template>

<script>
    import axios from "axios";
    import url from "@/url"
    export default {
        name: 'skills',
        data() {
            return {
                data: [],
                load: false
            }
        },
        methods: {
            loadData() {
                this.data = []
                axios.get(`${url}data/skills.json?timestamp=${new Date().getTime()}`).then(response => {
                    this.data =  response.data
                    this.load = true
                }).catch(err => {
                    //todo...
                })
            }
        },
        mounted() {
            this.loadData()
        }
    }
</script>
