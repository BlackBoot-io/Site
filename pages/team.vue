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
          <v-divider class="team-divider"></v-divider>
        </v-col>
        <v-col cols="12" sm="5" md="5" lg="4" class="team-avatar">
          <img class="avatar" :src="member.avatar">
        </v-col>
        <v-col cols="12" sm="7" md="7" lg="8" class="team-details">
          <div>
            <h2 class="name">{{ member.name }}</h2>
            <h3 class="role">{{ member.role }}</h3>
          </div>
          <p class="description">{{ member.description }}</p>
          <ul>
            <li v-for="(value, name, index) in member.socials" :key="index">
              <a :href="value" target="_blank">
                <!-- <em v-html="`../img/socials/${name}.svg?raw`"></em> -->
                <em>
                  <img :src="`../img/socials/${name}.svg`" :alt="name" />
                </em>
                {{ value.substring(value.lastIndexOf('/') + 1) }}
              </a>
            </li>
          </ul>
          <div>
            <a :href="'mailto:' + member.email">
              <v-btn dark outlined class="btn-main mb-1" :color="$store.state.cPrimary">
                <em v-html="arrowIcon" class="mr-2"></em>
                Send an email
              </v-btn>
            </a>
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
    arrowIcon: require('../static/img/icons/arrow.svg?raw'),
    emailIcon: require('../static/img/socials/email.svg?raw'),
    crowdSale: "",
    members: [
      {
        name: 'Mehdi Emrani',
        role: 'Program Manager',
        description: "Mehdi has more than 15 years of management and development tech lead experience in exchange brokerages and has multiple successful launches for finance and online trading projects. Nowadays he focuses on NFT and Defi and tries to start a new business based on Blockchain.",
        avatar: require('../static/img/team/emrani.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/mehdiemrani",
        }
      },
      {
        name: 'Mohammad Karimi',
        role: 'Founder',
        description: "Mohammad has over 15 years of experience working in software development. Currently, He has the Founder & CTO of Avanod Co, where He leads a cross-functional team of nine, building unique products ( NFT as a service ) that are helping businesses to mint NFTs for their customers! He is deeply passionate about creating, coaching and coding loved and trusted products in the Blockchain ecosystem. He mainly focused on designing and developing products and services for Avanod's customers. If you catch him outside of work, he is a blockchain adventurous. P.S. If you're passionate about creating or learning blockchain-focused products to help people reach their potential, contact him!.",
        avatar: require('../static/img/team/karimi.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/mha-karimi",
          twitter: "https://twitter.com/mha_karimi",
          instagram: "https://www.instagram.com/mha.karimi",
          github: "https://github.com/mohammadKarimi"
        }
      },
      {
        name: 'Shahrooz Bazrafshan',
        role: 'Software Developer',
        description: "Shahrooz is a developer since 2014 and started to grow with every line of code and study meanwhile. right now he is focusing on web3 and blockchain technologies.",
        avatar: require('../static/img/team/bazrafshan.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/shahrooz-bazrafshan-78bb5765",
        }
      },
      {
        name: 'Navid Montazeripour',
        role: 'Software Engineer',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis imperdiet egestas leo ligula interdum. Neque dolor lectus sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis imperdiet.",
        avatar: require('../static/img/team/montazeripour.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/navidmontazeripour",
        }
      },
      {
        name: 'Mohammad Mokhtari',
        role: 'Co-Founder',
        description: "Mohammad began his career as a Full-stack developer. Eventually, he seized the opportunity to lead teams and products to success. He worked on several successful projects as a developer and technical team leader. These days, he focuses on the blockchain tech and keeps learning more and more about it.",
        avatar: require('../static/img/team/mokhtari.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/mohammadmokhtari",
        }
      },
      {
        name: 'Roozbeh Eslami',
        role: 'Front-End Engineer',
        description: "Roozbeh began programming at university and he understands the importance of a well-designed and functional website. Nowadays, he is mostly focusing on front-end development and web3.",
        avatar: require('../static/img/team/eslami.jpg'),
        email: 'eslami.roozbeh@gmail.com',
        socials: {
          linkedin: "https://www.linkedin.com/in/roozbeheslami",
          twitter: "https://www.twitter.com/roozbeh_eslami",
          instagram: "https://www.instagram.com/roosbeh",
          github: "https://github.com/roozbeheslami"
        }
      },
      {
        name: 'Farhad Zohoor Alishahi',
        role: 'Software Developer',
        description: "Farhad is a full stack developer, working on several company-scaled projects. He got interested in the new horizon of Web3 and Blockchain technologies and spends most of his time researching on it.",
        avatar: require('../static/img/team/zohooralishahi.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/farhad-zohooralishahi-1035ab1aa",
        }
      },
      {
        name: 'Esmaeil Rastipour',
        role: 'Co-Founder & Business Expert',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis imperdiet egestas leo ligula interdum. Neque dolor lectus sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis imperdiet.",
        avatar: require('../static/img/team/rastipour.jpg'),
        email: '',
        socials: {
          linkedin: "https://www.linkedin.com/in/erastipour",
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
  margin-bottom: 100px !important;

  @include res(599px) {
    margin-bottom: 0 !important;
  }

  .team-divider {
    margin-top: 30px;
    margin-bottom: 30px;

    @include res(849px) {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    @include res(599px) {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  .team-avatar {

    @include res(599px) {
      text-align: center;
      padding-bottom: 0;
    }

    .avatar {
      border-radius: 12px;
      max-width: 100%;
      text-align: center;
    }
  }

  .team-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include res(599px) {
      text-align: center;
    }

    .name {
      font-weight: 500;
      font-size: 30px;
      line-height: 23px;
      color: #3B4C68;
      margin-bottom: 15px !important;

      @include res(599px) {
        font-size: 24px;
        line-height: 20px;
        margin-bottom: 10px !important;
      }
    }

    .role {
      font-weight: 500;
      font-size: 19px;
      letter-spacing: 0.05em;
      color: #3B4C68;
      margin-bottom: 15px !important;

      @include res(599px) {
        font-size: 14px;
        margin-bottom: 5px !important;
      }
    }

    .description {
      font-weight: 400;
      font-size: 15px;
      line-height: 28px;
      color: #3B4C68;
      margin-bottom: 15px !important;
      text-align: justify;
    }

    ul {
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;

      @include res($md) {
        display: block;
      }

      li {
        font-weight: 400;
        font-size: 14px;
        color: #5B626E;
        margin-bottom: 5px;
        margin-right: 0px;
        display: inline-block;
        width: 45%;

        a {
          display: block;

          em {
            width: 33px;
            height: 33px;
            text-align: center;
            display: inline-flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      }
    }

    .v-btn {
      min-width: 190px !important;
      height: 48px !important;
      margin-right: 20px;
    }
  }
}
</style>