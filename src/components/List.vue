<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col">
        <b-card v-for="item in allTasks" :key="item.key">{{ item.title }}</b-card>
        <b-card class="align-middle text-center" v-if="allTasks.length == 0" v-cloak>Your list is empty</b-card>
      </div>
    </div>
    <NewItem class="pt-2" @item-created="itemCreated"></NewItem>
  </div>
</template>

<script>
import NewItem from './NewItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { NewItem },
  computed : {
    ...mapGetters({
      allTasks: 'allTasks'
    })
  },
  methods: {
    ...mapActions({
      addTask: 'addTask'
    }),
    itemCreated(value) {
      this.addTask(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  div.card:last-child {
    margin-bottom:70px;
  }
  div.card {
    margin-bottom:2px;
  }
  [v-cloak] {display: none}
</style>
