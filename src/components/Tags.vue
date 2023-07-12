<template>
  <div>
    <app-loading v-if="isLoading"/>
    <app-error-message v-if="error"/>

    <div class="sidebar" v-if="tags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
            v-for="tag in tags"
            :key="tag"
            :to="{name: 'tag', params: {slug: tag}}"
            class="tag-default tag-pill"
        >
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {actionTypes} from "@/store/modules/tags";
import AppLoading from '@/components/Loading'
import AppErrorMessage from '@/components/ErrorMessage'

export default {
  name: "AppTags",
  computed: {
    ...mapState({
      isLoading: state => state.tags.isLoading,
      tags: state => state.tags.data,
      error: state => state.tags.error
    })
  },
  components: {
    AppLoading,
    AppErrorMessage
  },
  mounted() {
    console.log('init tags')
    this.$store.dispatch(actionTypes.getTags)
  },

}
</script>

<style scoped>

</style>