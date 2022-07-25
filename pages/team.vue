<template>
  <v-container fluid class="content-container">
    <v-container>
      <v-row class="content team">
        <v-col cols="12" class="text-center">
          <h1 class="title-main dot-pink">
            <span>Our Team</span>
          </h1>
          <!-- <p class="title-sub">
          </p> -->
        </v-col>
        <v-col cols="12">
          <SwiperTeam :items="members" @memberSelected="showMember" />
          <v-divider class="my-15"></v-divider>
        </v-col>
        <v-col cols="4">
          <img src="../static/img/team/2.png">
        </v-col>
        <v-col cols="7 offset-1" class="team-details">
          <h2 class="name">{{ member.name }}</h2>
          <h3 class="role">{{ member.role }}</h3>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis imperdiet egestas leo ligula interdum. Neque dolor lectus sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis imperdiet .</p>
          <ul>
            <li>
              saina.ghaasemi
            </li>
            <li>
              saina.ghaasemi
            </li>
            <li>
              saina.ghaasemi
            </li>
            <li>
              saina.ghaasemi
            </li>
          </ul>
          <div>
            <v-btn dark outlined class="btn-main mb-1" :color="$store.state.cPrimary">
              <em v-html="downloadIcon" class="mr-1"></em>
              Send an email
            </v-btn>
            <v-btn dark outlined class="btn-main mb-1" :color="$store.state.cPrimary">
              <em v-html="downloadIcon" class="mr-1"></em>
              Send an email
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'Team',
  data: () => ({
    downloadIcon: require('../static/img/icons/download.svg?raw'),
    crowdSale: "",
    members: [
      {
        name: '1',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '2',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '3',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '4',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '5',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '6',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '7',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '8',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '9',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
      {
        name: '10',
        role: 'Developer',
        avatar: require('../static/img/team/2.png'),
        socials: {
          email : "",
          twitter : "",
          instagram : "",
          linkedin : ""
        }
      },
    ],
    member: ""
  }),
  created: function () {
    this.member = this.members[0];
  },
  methods: {
    showMember(index) {
      this.member = this.members[index];
    },
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";

.team {
  margin-bottom: 100px!important;

  .team-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    font-weight: 500;
    font-size: 30px;
    line-height: 23px;
    color: #3B4C68;
  }

  .role {
    font-weight: 500;
    font-size: 19px;
    letter-spacing: 0.05em;
    color: #3B4C68;
    margin-bottom: 15px!important;
  }

  .description {
    font-weight: 400;
    font-size: 15px;
    line-height: 28px;
    color: #3B4C68;
    opacity: 0.5;
    margin-bottom: 15px!important;
  }

  ul {
    margin-bottom: 50px;

    li {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #5B626E;
      display: inline-block;
      width: 48%;
      margin-bottom: 10px;
    }
  }

  .v-btn {
    min-width: 190px!important;
    height: 48px!important;
    margin-right: 20px;
  }
}

</style>