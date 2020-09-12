<template>

  <div class=" md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">
      
        <span class="md-list-item-text"><md-icon>home</md-icon><router-link :to="{ name: 'index' }">Home</router-link></span>
      </span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0  ">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>rss_feed</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'blogs' }">Blogs</router-link></span>
        </md-list-item>
        <md-list-item>
          <md-icon>design_services</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'services' }">Services</router-link></span>
        </md-list-item>
        <md-list-item>
          <md-icon>analytics</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'projects' }">Projects</router-link></span>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>person_outline</md-icon>
          <span class="md-list-item-text">About</span>
          <md-list slot="md-expand">
            <md-list-item>
              <md-icon>people</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'profile' }">Profile</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>school</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'education' }">Education</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>filter_alt</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'skill' }">Skills</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>work</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'experince' }">Work Experince</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>thumb_up</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'interests' }">Interests</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>emoji_events</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'award' }">Awards</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>done_outline</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'certificate' }">Certificates Archievement</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>format_quote</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'quotes' }">Quotes</router-link></span>
            </md-list-item>
            <md-list-item>
              <md-icon>insert_photo</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'gallery' }">Gallary</router-link></span>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item>
          <md-icon>menu_book</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'publication' }">Publication</router-link></span>
        </md-list-item>

        <md-list-item>
          <md-icon>payments</md-icon>
           <span class="md-list-item-text"><router-link :to="{ name: 'donate' }">Support</router-link></span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'contact' }">Contact</router-link></span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <div class="page-content">
      <router-view></router-view>
    </div>

    <footer>
      <p>Made with <md-icon style="color: red">favorite</md-icon> by <a href="https://github.com/lablnet">Umer</a>.  <a href="https://github.com/lablnet">v1.1.0</a></p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    }),
    watch: {
      '$route' (to, from) {
          this.showSidepanel = false
          this.showNavigation = false // hide navigation on click.
          document.title = to.meta.title || 'Muhammad Umer Farooq'
      },
    }
  }
</script>
