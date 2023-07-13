<template>
  <button
      @click="isLoggedIn ? handleLike() : register()"
      :class="{
      'btn': true,
      'btn-sm': true,
      'btn-primary': isFavoritedOptimistic,
      'btn-outline-primary': !isFavoritedOptimistic
    }"
  >
    <i class="ion-heart"/>
    <span>&nbsp; {{ favoritesCountOptimistic }}</span>
  </button>
</template>

<script>
import {actionTypes} from '@/store/modules/addToFavorites'
import {mapGetters} from "vuex";
import {getterTypes} from "@/store/modules/auth";

export default {
  name: 'McvAddToFavorites',
  props: {
    isFavorited: {
      type: Boolean,
      required: true
    },
    articleSlug: {
      type: String,
      required: true
    },
    favoritesCount: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn
    })
  },
  data() {
    return {
      isFavoritedOptimistic: this.isFavorited,
      favoritesCountOptimistic: this.favoritesCount
    }
  },
  methods: {
    handleLike() {
        this.$store.dispatch(actionTypes.addToFavorites, {
          slug: this.articleSlug,
          isFavorited: this.isFavoritedOptimistic
        })
        if (this.isFavoritedOptimistic) {
          this.favoritesCountOptimistic = this.favoritesCountOptimistic - 1
        } else {
          this.favoritesCountOptimistic = this.favoritesCountOptimistic + 1
        }
        this.isFavoritedOptimistic = !this.isFavoritedOptimistic

      },
    register(){
      this.$router.push({name: 'register'})
    }
  }
}
</script>
