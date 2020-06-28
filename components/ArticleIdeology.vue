<template>
    <div>
        <figure class="image is-64x64 news-source-logo-container" v-if="ideology=='right'">
            <img class="is-rounded" src="~/assets/images/fox_news.png"/>
        </figure>
        <figure class="image is-64x64 news-source-logo-container" v-if="ideology=='left'">
            <img class="is-rounded" src="~/assets/images/cnn.png"/>
        </figure>
        <Article v-for="article in articles" :key="article.url" :article="article" class="box" />
    </div>
</template>
<script>
import Article from "~/components/Article.vue"
export default {
    components: {
        Article
    },
    props: {
        articles: {
            type: Array,
            required: true
        },
        ideology: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.news-source-logo-container {
  display: block;
  margin: 25px auto;
}
</style>