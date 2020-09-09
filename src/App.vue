<template>

  <div class=" md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">
        <router-link :to="{ name: 'index' }">Home</router-link>
      </span>

      <div class="md-toolbar-section-end">
        <md-button @click="showSidepanel = true"> <md-icon>settings_applications</md-icon> Options</md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Menu</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>rss_feed</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'blogs' }">Blogs</router-link></span>
        </md-list-item>
        <md-list-item>
          <md-icon>analytics</md-icon>
          <span class="md-list-item-text"><router-link :to="{ name: 'projects' }">Projects</router-link></span>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>person_outline</md-icon>
          <span class="md-list-item-text">About</span>
          <md-list slot="md-expand">
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'profile' }">Profile</router-link>
            </md-list-item>
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'education' }">Education</router-link>
            </md-list-item>
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'skill' }">Skills</router-link>
            </md-list-item>
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'experince' }">Work Experince</router-link>
            </md-list-item>
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'interests' }">Interests</router-link>
            </md-list-item>
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'awards' }">Awards</router-link>
            </md-list-item>
            <md-list-item class="md-list-item-text">
              <router-link :to="{ name: 'certificates' }">Certificates Archievement</router-link>
            </md-list-item>
            <md-list-item>
              <md-icon>insert_photo</md-icon>
              <span class="md-list-item-text"><router-link :to="{ name: 'gallary' }">Gallary</router-link></span>
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

    <md-drawer class="md-right" :md-active.sync="showSidepanel" style="display:none">
      <md-toolbar class="md-transparent" md-elevation="0">
      
        <span class="md-title"><md-icon>settings_applications</md-icon>Options</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Alex Nelson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>

        <md-list-item>
          <span class="md-list-item-text">Mary Johnson</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon>chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-drawer>

    <router-view></router-view>
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
