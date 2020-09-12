<template>
    <div>
        <div v-if="!error">
            <md-progress-bar v-if="!load" class="md-accent" md-mode="indeterminate"></md-progress-bar>
        </div>
        <h3 class="title">Services</h3>
        <div v-if="load">
            <div v-for="(item, index) in data" :key="index">
                <md-card>
                    <md-card-header>
                        <md-card-header class="card-header-special" :style="item['style']">
                            <h4>{{item["name"]}}</h4>
                        </md-card-header>
                    </md-card-header>
                    <md-card-content>
                        <p class="text-gray">{{item['desc']}}</p>
                    </md-card-content>
                </md-card>
            </div>
        </div>
        <div>
            <h3 class="title">Order</h3>
            <div>
              <md-steppers :md-active-step.sync="active" md-linear>
                <md-step id="first" md-label="First Step" md-description="Personal Info" :md-done.sync="first">
                  <md-field :class="messageClass">
                    <label for="name">Name</label>
                    <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                    <span class="md-error" v-if="form.error">All fields are required</span>
                  </md-field>
                  <md-field :class="messageClass">
                      <label for="email">Email</label>
                      <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                      <span class="md-error" v-if="form.error">All fields are required</span>
                  </md-field>
                  <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
                </md-step>
                <md-step id="second" md-label="Second Step" md-description="Project Info" :md-done.sync="second">
                      <md-field :class="messageClass">
                        <label>Message</label>
                        <md-textarea v-model="form.comment" :disabled="sending"></md-textarea>
                        <span class="md-error" v-if="form.error">All fields are required</span>
                      </md-field>
                  <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
                </md-step>
                <md-step id="third" md-label="Third Step" md-description="submit" :md-done.sync="third">
                  <div>
                    <span class="md-caption">You can expect to recieve my response within 24 hrs.</span>
                  </div>
                  <md-button class="md-raised md-primary" @click="validateData" :disabled="sending">Done</md-button>
                </md-step>
              </md-steppers>
            </div>
        </div>
        <div v-if="error">
            <md-card>
                <md-card-content>
                    <h3>Error: unable to load, <a style="color:black" href="#!" @click="loadData">Retry</a> </h3>
                </md-card-content>
            </md-card>
        </div>
        <md-snackbar :md-active.sync="send">{{resp}}</md-snackbar>
    </div>
</template>

<script>
    import axios from "axios";
    import url from "@/url"

    export default {
        name: 'services',
        data() {
        return {
          form: {
          name: null,
          email: null,
          comment: null,
          error: false
        },
        data: [],
        load: false,
        error: false,
        active: 'first',
        first: false,
        second: false,
        third: false,
        send: false,
        sending: false,
        resp: ""
      }   
    },
    methods: {
      clearForm () {
        this.form.name = null
        this.form.email = null
        this.form.comment = null
      },
      sent () {
        this.sending = true
        axios.post("https://formspree.io/meqpjjbz", {
            name: this.form.name,
            _replyto: this.form.email,
            message: this.form.comment
        }).then(response => {
            this.resp = "The form submitted successfully!"
            this.send = true
            this.sending = false
            this.clearForm()
            this.setDone("", "first")
        }).catch(err => {
            this.resp = "Can't send an empty form"
            this.send = true
            this.sending = false
            this.clearForm()
            this.setDone("", "first")
        })
      },
      validateData () {
        //validate
        this.form.error = false
        if (this.form.name === '' || this.form.name === null || this.form.name === 0 || this.form.email === '' || this.form.email === null || this.form.email === 0 || this.form.comment === '' || this.form.comment === null || this.form.comment === 0){
            this.form.error = true
            this.setDone("", "first")
            return;
        }
        this.sent()
      },
      loadData() {
          this.data = []
          this.error = false
          axios.get(`${url}data/services.json?timestamp=${new Date().getTime()}`).then(response => {
              this.data =  response.data
              this.load = true
          }).catch(err => {
              this.error = true
          })
      },
      setDone (id, index) {
        this[id] = true
          if (index) {
            this.active = index
          }
        },
      },
    computed: {
      messageClass () {
        return {
          'md-invalid': this.form.error
        }
      }
    },
    mounted() {
        this.loadData()
    }
  }
</script>
