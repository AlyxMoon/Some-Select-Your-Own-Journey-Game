import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Page from '@/components/Page'

import pageData from '@static/stories/the-dark-woods/pages.json'

const pageRoutes = pageData.map(data => {
  return {
    path: `/page/${data.name}`,
    name: `Page ${data.name}`,
    component: Page,
    props: data
  }
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
      props: { firstPageLink: `/page/page-1` }
    },
    ...pageRoutes
  ]
})
