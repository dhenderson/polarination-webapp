<template>
    <div class="columns box" style="margin-bottom: 50px; padding: 15px;">
        <div class="column">
            <figure class="image is-32x32 news-source-logo-container" style="margin: 0px auto; margin-bottom: 15px;">
                <img class="is-rounded" src="~/assets/images/cnn.png"/>
            </figure> 
            <Article :key="articleLeft.url" :article="articleLeft" :left="true"/>
        </div>
        <div class="column">
            <figure class="image is-32x32 news-source-logo-container" style="margin: 0px auto; margin-bottom: 15px;">
                <img class="is-rounded" src="~/assets/images/fox_news.png" />
            </figure>
            <Article :key="articleRight.url" :article="articleRight" :left="false" />
        </div>
    </div>
</template>
<script>
import Article from "~/components/Article.vue"
export default {
  components: { Article },
    props: {
        articleLeft: {
            type: Object,
            required: true
        },
        articleRight: {
            type: Object,
            required: true
        }
    }
}
</script>