<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateData">
      <md-card class="md-layout-item" style="padding:25px">
        <md-card-header>
            <md-toolbar :md-elevation="1">
                <span class="md-title">Contact me</span>
            </md-toolbar>
        </md-card-header>
        <md-card-content>
            <md-field>
                <label for="name">Name</label>
                <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                <span class="md-error" v-if="form.error">The name is required</span>
            </md-field>
            <md-field>
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="form.error">The email is required</span>
            </md-field>
            <md-field>
                <label>Message</label>
                <md-textarea v-model="form.comment" :disabled="sending"></md-textarea>
            </md-field>
          </md-card-content>
          <md-progress-bar md-mode="indeterminate" v-if="sending" />
          <span class="md-caption">You can expect to recieve my response within 24 hrs.</span>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Send</md-button>
        </md-card-actions>
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
        let valid = true
        if (valid) {
          this.sent()
        } else {
            this.error = true
        }
      }
    }
  }
</script>
