<template>
   <md-content>
        <md-card>
            <md-card-header>
                <md-toolbar :md-elevation="1">
                    <span class="md-title">Skills</span>
                </md-toolbar>
            </md-card-header>
            <md-card-content>
                <md-list class="md-double-line">
                    <md-subheader>Programming Languages</md-subheader>
                    <div v-for="item in Languages">
                        <md-list-item>
                            <md-icon class="md-primary"></md-icon>
                            <div class="md-list-item-text">
                            <span>{{item['name']}}</span>
                            <span>{{item['duration']}}</span>
                            </div>
                        </md-list-item>
                        <md-divider></md-divider>
                    </div>
                </md-list>

                <md-list class="md-double-line">
                    <md-subheader>Frameworks</md-subheader>
                    <div v-for="item in frameworks">
                        <md-list-item>
                            <md-icon class="md-primary"></md-icon>
                            <div class="md-list-item-text">
                            <span>{{item['name']}}</span>
                            <span>{{item['duration']}}</span>
                            </div>
                        </md-list-item>
                        <md-divider></md-divider>
                    </div>
                </md-list>

                <md-list class="md-double-line">
                    <md-subheader>Databases</md-subheader>
                    <div v-for="item in databases">
                        <md-list-item>
                            <md-icon class="md-primary"></md-icon>
                            <div class="md-list-item-text">
                            <span>{{item['name']}}</span>
                            <span>{{item['duration']}}</span>
                            </div>
                        </md-list-item>
                        <md-divider></md-divider>
                    </div>
                </md-list>
                <md-list class="md-double-line">
                    <md-subheader>Tools</md-subheader>
                    <div v-for="item in tools">
                        <md-list-item>
                            <md-icon class="md-primary"></md-icon>
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
  </md-content>
</template>
<script>
export default {
  name: 'skills',
  data() {
      return {
          Languages: [
            {
                name: "PHP",
                duration: "2017 - presnt",
                icon: ""
            },
            {
                name: "HTML/CSS/JavaScript",
                duration: "2017 - presnt",
                icon: ""
            },
            {
                name: "Python",
                duration: "2019 - preent",
                icon: ""
            },
            {
                name: "C / C++",
                duration: "2019 - preent",
                icon: ""
            },
            {
                name: "Dart/Java/ Ruby / Scale",
                duration: "2020 - preent",
                icon: ""
            },
          ],
          frameworks: [
            {
                name: "VueJs",
                duration: "2019 - present",
                icon: ""
            },
            {
                name: "Bootstrap / jQuery",
                duration: "2017 - presnt",
                icon: ""
            },
            {
                name: "Zest framework",
                duration: "2018 - preent",
                icon: ""
            },
            {
                name: "Laravel",
                duration: "2019 - preent",
                icon: ""
            },
            {
                name: "Flask / Fltter / D3",
                duration: "2020 - preent",
                icon: ""
            },
          ],
          databases: [
            {
                name: "SQL",
                duration: "2017 - present",
                icon: ""
            },
            {
                name: "NoSQL",
                duration: "2020 - presnt",
                icon: ""
            },
            {
                name: "...",
                duration: "",
                icon: ""
            },
            {
                name: "XML",
                duration: "2017 - preent",
                icon: ""
            },
            {
                name: "JSON",
                duration: "2017 - preent",
                icon: ""
            },
          ],
          tools: [
            {
                name: "Git",
                duration: "2017 - present",
                icon: ""
            },
            {
                name: "Markdown",
                duration: "2017 - presnt",
                icon: ""
            },
            {
                name: "LaTeX",
                duration: "2020 - present",
                icon: ""
            },
            {
                name: "Blender",
                duration: "2020 - preent",
                icon: ""
            },
            {
                name: "Ms office / Google Docs...",
                duration: "2017 - preent",
                icon: ""
            },
          ]
      }
  }
}
</script>
