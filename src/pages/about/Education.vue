<template>
   <div>
        <div v-if="!error">
            <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
        </div>
        <h3 class="title">Education</h3>
        <div v-if="load">
            <div v-for="(item, index) in data" :key="index">
                <md-card>
                    <md-card-header>
                        <md-card-header class="card-header-special" :style="item['style']">
                            <h4>{{item["header"]}}</h4>
                        </md-card-header>
                    </md-card-header>
                    <md-table >
                        <md-table-row>
                            <md-table-cell><strong>Institute</strong></md-table-cell>
                            <md-table-cell>{{item["institute"]}}</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell><strong>Session</strong></md-table-cell>
                            <md-table-cell>{{item["session"]}}</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell><strong>Program</strong></md-table-cell>
                            <md-table-cell>{{item["program"]}}</md-table-cell>
                        </md-table-row>
                        <md-table-row>
                            <md-table-cell><strong>CGPA / Mark</strong></md-table-cell>
                            <md-table-cell>{{item["cgpa"]}}</md-table-cell>
                        </md-table-row>
                    </md-table>
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
        name: 'education',
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
                axios.get(`${url}data/education.json?timestamp=${new Date().getTime()}`).then(response => {
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
