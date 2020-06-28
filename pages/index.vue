<template>
  <div class="columns">
    <div class="column box background-color-left">
      <figure class="image is-64x64 news-source-logo-container">
        <img class="is-rounded" src="~/assets/images/cnn.png"/>
      </figure>
      <Article v-for="article in left" :key="article.url" :article="article" class="box" />
    </div>
    <div class="column box background-color-right">
      <figure class="image is-64x64 news-source-logo-container">
          <img class="is-rounded" src="~/assets/images/fox_news.png"/>
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