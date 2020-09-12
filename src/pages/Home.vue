<template>
    <div>
        <div v-if="!error">
            <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
        </div>
        <div v-if="load">
            <md-card class="md-card-profile">
                <div class="md-card-avatar">
                    <img class="img" :src="pic" />
                </div>
                <md-card-content>
                    <h6 class="category text-gray">{{title}}</h6>
                    <h4 class="card-title">{{name}}</h4>
                    <p class="card-description text-gray">
                        {{bio}}
                    </p>
                    <md-button class="md-raised md-primary github"><a :href="github">Github</a></md-button>
                    <md-button class="md-raised md-primary twitter"><a :href="twitter">Twitter</a></md-button>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special">
                    <h4>Name</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{name}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special">
                    <h4>DOB</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{dob}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special" style="width: 160px">
                    <h4>Nationality</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{nationality}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special">
                    <h4>Race</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{race}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special">
                    <h4>Email</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{email}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special" style="width: 150px">
                    <h4>Religion</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{religion}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special">
                    <h4>City</h4>
                </md-card-header>
                <md-card-content>
                    <h4> {{city}}</h4>
                </md-card-content>
            </md-card>
            <md-card class="profile-cards ">
                <md-card-header class="card-header-special" style="width: 180px">
                    <h4>Occupation</h4>
                </md-card-header>
                <md-card-content>
                    <h4>{{occupation}}</h4>
                </md-card-content>
            </md-card>
            <md-card>
                <md-card-header class="card-header-special" style="background:#fff; color:#000; width: 180px;">
                    <h4>Fav Quote</h4>
                </md-card-header>
                <md-card-content v-for="(quote, index) in quotes" :key="index">
                    <blockquote>
                        <p>{{quote['text']}} <md-divider/> - {{quote['author']}}</p>
                    </blockquote>
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
        name: 'skills',
        data() {
            return {
                name: "",
                dob: "",
                nationality: "",
                race: "",
                email: "",
                religion: "",
                city: "",
                occupation: "",
                pic: "",
                title: "",
                bio: "",
                github: "",
                twitter: "",
                quotes: [],
                load: false,
                error: false,
            }
        },
        methods: {
            loadData() {
                this.data = []
                this.error = false
                axios.get(`${url}data/profile.json?timestamp=${new Date().getTime()}`).then(response => {
                    let data =  response.data
                    this.name = data.name
                    this.dob = data.dob
                    this.nationality = data.nationality
                    this.race = data.race
                    this.email = data.email
                    this.religion = data.religion
                    this.city = data.city
                    this.occupation = data.occupation
                    this.pic = data.pic
                    this.title = data.title
                    this.bio = data.bio
                    this.github = data.github
                    this.twitter = data.twitter
                    this.quotes = data.quotes
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