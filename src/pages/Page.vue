<template>
  <div id="page">

    <p v-if="config.bettenTextMode">
      <span
        class="bonus-text"
        v-for="i in Math.floor(pagesContent[name].length / 4)"
        :key="i"
      >
        It's Pretty Dark and That's Kind of Scary
      </span>
    </p>
    <p v-else>
      {{ pagesContent[name] }}
    </p>

    <div>
      <figure>
        <audio
            controls
            :autoplay="config.autoplay"
            :src="'/static/stories/the-dark-woods/audio/' + name + '.mp3'">
        </audio>
      </figure>

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
  props: ['config', 'name', 'text', 'next_pages'],
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

p {
  white-space: pre-wrap;
}

.bonus-text {
  white-space: normal;
}

figure {
  margin: 10px 0;
}

figure audio {
  width: 100%;

  border-radius: 10px;

  box-shadow: 0 0 10px 8px #AAA;
  background-color: #AAA;
}
figure audio:focus {
  outline: none;
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
