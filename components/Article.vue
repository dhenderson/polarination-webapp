<template>
    <div>
        <div class="article-headline">
            <a :href="article.url" target="_blank">{{article.title}}</a>
        </div>
        <div class="article-date">{{prettyDate(article.publishedAt)}}</div>
            <a :href="article.url" target="_blank">
                <img :src="article.urlToImage" style="width: 100%;"/>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    methods: {
        prettyDate(dateString) {
        let d = new Date(dateString)
        return d.toLocaleDateString()
        }
    }
}
</script>
<style scoped>
.article-headline {
    font-weight: bold;
    font-size: 1.1em;
    padding-bottom: 5px;
}
.article-date {
    font-style: italic;
    font-size: 0.8em;
    color: #777;
    padding-bottom: 10px;
}
</style>