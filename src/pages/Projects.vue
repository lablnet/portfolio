<template>
    <div>
        <div v-if="!error">
            <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
        </div>
        <h3 class="title">Projects</h3>
        <div v-if="load">
            <div v-for="(item, index) in data" :key="index">
                <md-card>
                    <md-card-header>
                        <md-card-header class="card-header-special" :style="item['style']">
                            <h4>{{item["name"]}}</h4>
                        </md-card-header>
                    </md-card-header>
                    <div style="padding: 16px">
                        <p class="text-gray">{{item['desc']}}</p>

                        <h3 class="">Applied technologies</h3>
                        <span class="project-tech" v-for="(value, index) in item['tech']" :key="index">
                            <p class="">{{value}}</p>
                        </span>

                        <span class="project-btn">
                            <a :href="item['github']">Github</a>
                        </span>
                        <span class="project-note">
                            <p>{{item['note']}}</p>
                        </span>
                    </div>
                </md-card>
            </div>
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
        name: 'projeects',
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
                this.error = false
                axios.get(`${url}data/projects.json?timestamp=${new Date().getTime()}`).then(response => {
                    console.log(response.data)
                    this.data =  response.data
                    this.load = true
                    console.log(this.data)
                    console.log(this.load)
                }).catch(err => {
                    this.error = true
                })
            }
        },
        mounted() {
            console.log("workig")
            this.loadData()
        }
    }
</script>
