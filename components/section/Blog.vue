<template>
  <v-container class="blog">
    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title-main dot-pink">
          Join the <span>Blog</span>
        </h3>
      </v-col>
    </v-row>
    <v-row class="blog-posts">
      <v-col cols="12" lg="6" v-for="(post, index) in posts" :key="index">
        <div class="post">
          <div>
            <h5 class="b-title">{{ post.title }}</h5>
            <p class="b-desc">{{ post.text }}</p>
          </div>
          <div class="b-details">
              <v-avatar width="40" height="40" v-for="(avatar, index) in post.avatars" :key="index">
                <img :src="avatar" width="40" height="40" :alt="post.name">
              </v-avatar>
              <div class="b-text">
                <span class="b-name">{{ post.name }}</span>
                <span class="b-date">{{ post.date }}</span>
              </div>
            <v-btn
              dark
              outlined
              class="btn-main"
              :color="$store.state.cPrimary"
            >
              Read more
              <em v-html="readMoreIcon" class="ml-1"></em>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      readMoreIcon: require('../../static/img/icons/readmore.svg?raw'),
      posts: [
        {
          title: 'How to enable social login for the comunity?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend faucibus ut egestas non risus. Facilisi convallis arcu, amet, libero vel non ipsum. Pellentesque ultrices semper sollicitudin imperdiet. Arcu orci leo neque, id euismod. Iaculis ac faucibus pharetra at.',
          name: 'Rio ferdanen',
          date: 'updated 1 day ago',
          avatars: [
            require('../../static/img/contact.webp'),
            require('../../static/img/contact.webp'),
          ]
        },
        {
          title: 'How to enable social login for the comunity?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend faucibus ut egestas non risus. Facilisi convallis arcu, amet, libero vel non ipsum. Pellentesque ultrices semper sollicitudin imperdiet. Arcu orci leo neque, id euismod. Iaculis ac faucibus pharetra at.',
          name: 'Rio ferdanen',
          date: 'updated 1 day ago',
          avatars: [
            require('../../static/img/contact.webp'),
          ]
        },
        {
          title: 'How to enable social login for the comunity?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend faucibus ut egestas non risus. Facilisi convallis arcu, amet, libero vel non ipsum. Pellentesque ultrices semper sollicitudin imperdiet. Arcu orci leo neque, id euismod. Iaculis ac faucibus pharetra at.',
          name: 'Rio ferdanen',
          date: 'updated 1 day ago',
          avatars: [
            require('../../static/img/contact.webp'),
            require('../../static/img/contact.webp'),
          ]
        },
        {
          title: 'How to enable social login for the comunity?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend faucibus ut egestas non risus. Facilisi convallis arcu, amet, libero vel non ipsum. Pellentesque ultrices semper sollicitudin imperdiet. Arcu orci leo neque, id euismod. Iaculis ac faucibus pharetra at.',
          name: 'Rio ferdanen',
          date: 'updated 1 day ago',
          avatars: [
            require('../../static/img/contact.webp'),
          ]
        },
      ]
    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.blog {
  padding-bottom: 80px;

  @include res($sm) {
    padding-bottom: 40px;
  } 

  .blog-posts {
    margin-top: 40px;

    @include res($sm) {
      margin-top: 15px;
    }
  
    .post {
      padding: 35px;
      border-radius: 15px;
      background: #F6FBFE;

      @include res($sm) {
        padding: 25px;
      }

      &:hover {
        .b-img {
          transform: scale(1.1);
        }
      }

      .b-title {
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        color: $cb;
        margin-bottom: 20px;

        @include res($sm) {
          font-size: 14px;
          margin-bottom: 5px;
        }
      }

      .b-desc {
        font-weight: 400;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 0.01em;
        color: #000000;

        @include res($sm) {
          font-size: 13px;
        }
      }

      .b-details {
        display: flex;
        align-items: center;
        margin-top: 15px;

        .v-avatar {
          &:nth-child(n+2) {
            margin-left: -25px;
          }
        }

        .b-text {
          margin-left: 5px;

          span {
            display: block;
            line-height: 20px;
            color: #4E4E53;
          }

          .b-name {
            font-weight: 600;
            font-size: 13px;
          }

          .b-date {
            font-weight: 400;
            font-size: 12px;
          }
        }

        .v-btn {
          margin-left: auto; 
          padding: 12px 10px; 
          height: 48px; 

          @include res($sm) {
            height: 33px;
            font-size: 14px!important;
          }   

          @include res($xs) {
            font-size: 13px!important;
            padding: 12px 7px; 
          }   
        }
      }
    }
  }
}

</style>
