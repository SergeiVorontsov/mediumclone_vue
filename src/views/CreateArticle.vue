<template>
  <app-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
  />
</template>

<script>
import {mapState} from "vuex";
import AppArticleForm from "@/components/ArticleForm";
import {actionTypes} from "@/store/modules/createArticle";

export default {
  name: "AppCreateArticle",
  components: {
    AppArticleForm
  },
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.createArticle.isSubmitting,
      validationErrors: state => state.createArticle.validationErrors
    })
  },
  methods: {
    onSubmit(articleInput) {
      this.$store
          .dispatch(actionTypes.createArticle, {articleInput})
          .then(article => {
            this.$router.push({name: 'article', params: {slug: article.slug}})
          })
    }
  }
}
</script>
