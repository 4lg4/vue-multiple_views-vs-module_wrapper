import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserSettings from '@/components/UserSettings.vue'
import UserProfilePreview from '@/components/UserProfilePreview.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserEmailsSubscriptions from '@/components/UserEmailsSubscriptions.vue'
import UserSettingsModule from '@/modules/UserSettingsModule.vue'
import UserProfileModule from '@/modules/UserProfileModule.vue'
import UserEmailsSubscriptionsModule from '@/modules/UserEmailsSubscriptionsModule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: '/settings',
      // You could also have named views at tho top
      component: UserSettings,
      children: [{
      	path: 'emails',
        component: UserEmailsSubscriptions
      }, {
      	path: 'profile',
        components: {
        	default: UserProfile,
          helper: UserProfilePreview
        }
      }]
    },
    { 
      path: '/settings2',
      component: UserSettingsModule,
    },
    { 
      path: '/settings2/emails',
      component: UserEmailsSubscriptionsModule,
    },
    { 
      path: '/settings2/profile',
      component: UserProfileModule,
    },
  ]
})
