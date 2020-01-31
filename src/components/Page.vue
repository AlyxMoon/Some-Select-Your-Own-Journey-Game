<template>
  <div id="page">
    <p>
      {{ pagesContent[name] }}
    </p>
    <ul class="next-pages">
      <li
        :key="'page-' + i"
        v-for="(page, i) in next_pages"
      >
        <span>{{ page.description }}</span>
        <router-link :to="`/page/${page.name}`" class="btn btn-primary btn-small">Go to {{ page.name }}</router-link>

      </li>
    </ul>
  </div>
</template>

<script>
import page1Content from '@static/stories/the-dark-woods/page-1.txt'
import page2Content from '@static/stories/the-dark-woods/page-2.txt'
import page3Content from '@static/stories/the-dark-woods/page-3.txt'
import page4Content from '@static/stories/the-dark-woods/page-4.txt'
import page5Content from '@static/stories/the-dark-woods/page-5.txt'

export default {
  name: 'Page',
  props: ['name', 'text', 'next_pages'],
  data () {
    return {
      pagesContent: {
        'page-1': page1Content,
        'page-2': page2Content,
        'page-3': page3Content,
        'page-4': page4Content,
        'page-5': page5Content,
      },
    }
  }
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
