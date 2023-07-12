<template>
  <div class="home-page">
    <app-banner/>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <app-feed-toggler :tag-name="tagName"/>
          <app-feed :api-url ="apiUrl"/>
        </div>
        <div class="col-md-3">
          <app-tags/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppFeed from '@/components/Feed'
import AppTags from "@/components/Tags";
import AppBanner from "@/components/Banner";
import AppFeedToggler from "@/components/FeedToggler";


export default {
  name: 'AppGlobalFeed',
  components: {
    AppTags,
    AppFeed,
    AppBanner,
    AppFeedToggler
  },
computed:{
    tagName(){
      return this.$route.params.slug
    },
    apiUrl(){
      return `/articles?tag=${this.tagName}`
    }
  }
}
</script>