<template>
   <div>
        <div>
            <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
        </div>
        <h3 class="title" style="text-align: center">Skills</h3>
        <div v-if="load">
            <div v-for="items in data" :key="items[0]">
                <h3 class="title">{{items[0]}}</h3>
                <span v-for="item in items" :key="item['name']">
                    <md-card class="profile-cards " v-if="item['name']">
                        <md-card-header class="card-header-special" style="width: 180px">
                            <h4>{{item['duration']}}</h4>
                        </md-card-header>
                        <md-card-content>
                            <h4>{{item['name']}}</h4>
                        </md-card-content>
                    </md-card>
                </span>
            </div>
        </div>
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
