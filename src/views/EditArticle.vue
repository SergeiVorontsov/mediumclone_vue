<template>
  <div>
    <app-loading v-if="isLoading"/>
    <app-article-form
        v-if="initialValues"
        :initial-values="initialValues"
        :errors="validationErrors"
        :is-submitting="isSubmitting"
        @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import {mapState} from "vuex";
import AppArticleForm from "@/components/ArticleForm";
import AppLoading from "@/components/Loading"
import {actionTypes} from "@/store/modules/editArticle";

export default {
  name: "AppEditArticle",
  components: {
    AppArticleForm,
    AppLoading
  },
  /*data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },*/
  computed: {
    ...mapState({
      isSubmitting: state => state.editArticle.isSubmitting,
      isLoading: state => state.editArticle.isLoading,
      article: state => state.editArticle.article,
      validationErrors: state => state.editArticle.validationErrors
    }),
    initialValues(){
      if(!this.article) {
        return null
      }
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body,
        tagList: this.article.tagList
      }
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getArticle,{
      slug: this.$route.params.slug
    })
  },
  methods: {
    onSubmit(articleInput) {
      const slug = this.$route.params.slug
      this.$store
          .dispatch(actionTypes.updateArticle, {slug, articleInput})
          .then(article => {
            this.$router.push({name: 'article', params: {slug: article.slug}})
          })
    }
  }
}
</script>
