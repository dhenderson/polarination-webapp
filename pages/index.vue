<template>
  <div>
    <template v-if="screenWidth < 770">
      <b-tabs position="is-centered" class="block">
        <b-tab-item label="🐴 Left" class="background-color-left">

          <div class="box background-color-left">
            <ArticleIdeology ideology="left" :articles="left" />
          </div>

        </b-tab-item>
        <b-tab-item label="Right 🐘">

          <div class="box background-color-right">
            <ArticleIdeology ideology="right" :articles="right" />
          </div>

        </b-tab-item>
      </b-tabs>
    </template>
    <div class="columns" v-else>
      <div class="column box background-color-left">
        <ArticleIdeology ideology="left" :articles="left" />
      </div>
      <div class="column box background-color-right">
        <ArticleIdeology ideology="right" :articles="right" />
      </div>
    </div>
  </div>
</template>
<script>
import ArticleIdeology from "~/components/ArticleIdeology.vue"

export default {
  components: {
    ArticleIdeology
  },
  data () {
    return {
      left: null,
      right: null,
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