<template>
  <div id="page">
    <p>
      {{ text }}
    </p>
    <ul class="next-pages">
      <li v-for="page in next_pages">
        <span>{{ page.description }}</span>
        <router-link :to="`/page/${page.name}`" class="btn btn-primary btn-small">Go to {{ page.name }}</router-link>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['name', 'text', 'next_pages']
}
</script>

<style scoped>
#page {
  height: calc(100% - 52px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.next-pages {
  border-bottom: 2px solid #3FB0AC;
  border-top: 2px solid #3FB0AC;
  list-style: none;
  padding: 0 0.3rem;
  margin: 0 -1rem;
}

.next-pages li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  text-align: left;
}

.next-pages li:not(:last-child) {
  border-bottom: 1px solid #3FB0AC;
}
</style>
