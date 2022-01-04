<template>
  <div>
    <div v-if="articles">
      <compare-articles v-for="(articleLeft, index) in left" 
        :article-left="left[index]" :article-right="right[index]" :key="'compare-article-' + index" />  
    </div>
  </div>
</template>
<script>
import CompareArticles from "~/components/CompareArticles.vue"

export default {
  components: {
    CompareArticles
  },
  data () {
    return {
      left: null,
      right: null,
      articles: null,
      screenWidth: null
    }
  },
  methods: {
    getNews() {
      this.$axios
        .get("polarination.json")
        .then(response => {
          this.left = response.data.left.articles
          this.right = response.data.right.articles
          this.articles = response.data
        })
    }
  },
  mounted () {
    this.screenWidth = window.innerWidth
    this.getNews()
    window.addEventListener('resize', e => {
      this.screenWidth = window.innerWidth
    });
  }
}
</script>