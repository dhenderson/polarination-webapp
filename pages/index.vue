<template>
  <div class="columns">
    <div class="column box background-color-left">
      <figure class="image is-64x64 news-source-logo-container">
        <img class="is-rounded" src="http://i.cdn.turner.com/cnn/2012/images/10/15/cnn_logo_144_144.png"/>
      </figure>
      <Article v-for="article in left" :key="article.url" :article="article" class="box" />
    </div>
    <div class="column box background-color-right">
      <figure class="image is-64x64 news-source-logo-container">
          <img class="is-rounded" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/637px-Fox_News_Channel_logo.svg.png"/>
      </figure>
      <Article v-for="article in right" :key="article.url" :article="article" class="box" />
    </div>
  </div>
</template>
<script>
import Article from "~/components/Article.vue"

export default {
  components: {
    Article
  },
  data () {
    return {
      left: null,
      right: null
    }
  },
  methods: {
    getNews() {
      this.$axios
        .get("polarination.json")
        .then(response => {
          this.left = response.data.left.articles
          this.right = response.data.right.articles
        })
    }
  },
  mounted () {
    this.getNews()
  }
}
</script>
<style scoped>
.news-source-logo-container {
  display: block;
  margin: 25px auto;
}
</style>