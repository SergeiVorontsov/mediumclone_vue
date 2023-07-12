<template>
  <div>CreateArticle</div>
  <app-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
  />
</template>

<script>
import AppArticleForm from "@/components/ArticleForm";

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
      },
      validationErrors: {},
      isSubmitting: false,

    }
  },
  methods: {
    onSubmit(data) {
      console.log('onSubmit in create article', data)
    }
  }
}
</script>
