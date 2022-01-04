<template>
    <div class="columns" style="margin-bottom: 50px;">
        <div class="column" style="background-color: #172556; padding-bottom: 25px;">
            <figure class="image is-32x32 news-source-logo-container" style="margin: 0px auto;">
                <img class="is-rounded" src="~/assets/images/cnn.png" style="position: relative; top: 10px;"/>
            </figure> 
            <Article :key="articleLeft.url" :article="articleLeft" />
        </div>
        <div class="column" style="background-color: #c61e15; padding-bottom: 25px;">
            <figure class="image is-32x32 news-source-logo-container" style="margin: 0px auto;">
                <img class="is-rounded" src="~/assets/images/fox_news.png" style="position: relative; top: 10px;"/>
            </figure>
            <Article :key="articleRight.url" :article="articleRight" />
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