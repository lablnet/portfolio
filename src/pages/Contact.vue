<template>
  <div>
    <h3 class="title">Contact Me</h3>
    <form novalidate class="md-layout" @submit.prevent="validateData">
      <md-card class="md-layout-item" style="padding:25px">
        <md-card-content>
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
            <md-field :class="messageClass">
                <label>Message</label>
                <md-textarea v-model="form.comment" :disabled="sending"></md-textarea>
                <span class="md-error" v-if="form.error">All fields are required</span>
            </md-field>
          </md-card-content>
          <md-progress-bar md-mode="indeterminate" v-if="sending" />
          <span class="md-caption">You can expect to recieve my response within 24 hrs.</span>
          <md-button type="submit" style="float: right" class="md-raised md-primary" :disabled="sending">Send</md-button>
      </md-card>
      <md-snackbar :md-active.sync="send">{{resp}}</md-snackbar>
    </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'Contact',
    data: () => ({
      form: {
        name: null,
        email: null,
        comment: null,
        error: false
      },
      send: false,
      sending: false,
      resp: ""
    }),

    methods: {
      clearForm () {
        this.form.name = null
        this.form.email = null
        this.form.comment = null
      },
      sent () {
        this.sending = true
        axios.post("https://formspree.io/mlepqodq", {
            name: this.form.name,
            _replyto: this.form.email,
            message: this.form.comment
        }).then(response => {
            this.resp = "The form submitted successfully!"
            this.send = true
            this.sending = false
            this.clearForm()
        }).catch(err => {
            this.resp = "Can't send an empty form"
            this.send = true
            this.sending = false
            this.clearForm()
        })
      },
      validateData () {
        //validate
        this.form.error = false
        if (this.form.name === '' || this.form.name === null || this.form.name === 0 || this.form.email === '' || this.form.email === null || this.form.email === 0 || this.form.comment === '' || this.form.comment === null || this.form.comment === 0){
            this.form.error = true
            return;
        }
        this.sent()
      }
    },
    computed: {
      messageClass () {
        return {
          'md-invalid': this.form.error
        }
      }
    }
  }
</script>
