// Composables
import { userProfile } from '@/stores/store'
import { createRouter, createWebHistory } from 'vue-router'

// https://github.com/intlify/vue-i18n-next/issues/904#issuecomment-1056984826
import i18n from '@/plugins/i18n'
const t = i18n.global.t

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/landing/Landing.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: ('metas.home.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.home.description')
            },
            {
              property: 'og:description',
              content: ('metas.home.ogDescription')
            }
          ]
        }
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: () => import('@/views/About.vue'),
        meta: {
          title: ('metas.aboutUs.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.aboutUs.description')
            },
            {
              property: 'og:description',
              content: ('metas.aboutUs.ogDescription')
            }
          ]
        }
      },
      {
        path: 'contact-us',
        name: 'contact-us',
        component: () => import('@/views/ContactUs.vue'),
        meta: {
          title: ('metas.contactUs.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.contactUs.description')
            },
            {
              property: 'og:description',
              content: ('metas.contactUs.ogDescription')
            }
          ]
        }
      },
      {
        path: 'tos',
        name: 'terms-of-service',
        component: () => import('@/views/TermsOfService.vue'),
        meta: {
          title: ('metas.termsOfService.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.termsOfService.description')
            },
            {
              property: 'og:description',
              content: ('metas.termsOfService.ogDescription')
            }
          ]
        }
      },
      {
        path: 'pp',
        name: 'privacy-policy',
        component: () => import('@/views/PrivacyPolicy.vue'),
        meta: {
          title: ('metas.privacyPolicy.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.privacyPolicy.description')
            },
            {
              property: 'og:description',
              content: ('metas.privacyPolicy.ogDescription')
            }
          ]
        }
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('@/views/FAQ.vue'),
        meta: {
          title: ('metas.faq.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.faq.description')
            },
            {
              property: 'og:description',
              content: ('metas.faq.ogDescription')
            }
          ]
        }
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/Silk.vue'),
        meta: {
          title: ('metas.dashboard.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.dashboard.description')
            },
            {
              property: 'og:description',
              content: ('metas.dashboard.ogDescription')
            }
          ]
        }
      },
      {
        path: 'profiles',
        name: 'profiles',
        component: () => import('@/views/Profiles.vue'),
        meta: {
          title: ('metas.profiles.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.profiles.description')
            },
            {
              property: 'og:description',
              content: ('metas.profiles.ogDescription')
            }
          ]
        }
      },
      {
        path: 'changelog',
        name: 'changelog',
        component: () => import('@/views/Changelog.vue'),
        meta: {
          title: ('metas.changelog.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.changelog.description')
            },
            {
              property: 'og:description',
              content: ('metas.changelog.ogDescription')
            }
          ]
        }
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'writing',
        name: 'writing',
        meta: {
          auth: true,
          title: ('metas.writing.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.writing.description')
            },
            {
              property: 'og:description',
              content: ('metas.writing.ogDescription')
            }
          ]
        },
        component: () => import('@/views/Writing.vue'),
      },
      {
        path: 'word-paper',
        name: 'word-paper',
        meta: {
          auth: true,
          title: ('metas.wordPaper.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.wordPaper.description')
            },
            {
              property: 'og:description',
              content: ('metas.wordPaper.ogDescription')
            }
          ]
        },
        component: () => import('@/views/WordPaper.vue'),
      },
      {
        path: 'user-profile',
        name: 'user-profile',
        meta: {
          auth: true,
          title: ('metas.userProfile.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.userProfile.description')
            },
            {
              property: 'og:description',
              content: ('metas.userProfile.ogDescription')
            }
          ]
        },
        component: () => import('@/views/UserProfile.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/landing/Landing.vue'),
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: () => import('@/views/Auth/SignIn.vue'),
        meta: {
          title: ('metas.signIn.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.signIn.description')
            },
            {
              property: 'og:description',
              content: ('metas.signIn.ogDescription')
            }
          ]
        }
      },
      {
        path: 'sign-up',
        name: 'sign-up',
        component: () => import('@/views/Auth/SignUp.vue'),
        meta: {
          title: ('metas.signUp.title'),
          metaTags: [
            {
              name: 'description',
              content: ('metas.signUp.description')
            },
            {
              property: 'og:description',
              content: ('metas.signUp.ogDescription')
            }
          ]
        }
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/silk/Silk.vue'),
    children: [
      {
        path: 'silk-route',
        name: 'silk-route',
        component: () => import('@/views/Silk.vue'),
        // meta: {
        //   title: ('metas.signIn.title'),
        //   metaTags: [
        //     {
        //       name: 'description',
        //       content: ('metas.signIn.description')
        //     },
        //     {
        //       property: 'og:description',
        //       content: ('metas.signIn.ogDescription')
        //     }
        //   ]
        // }
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = userProfile.value?.token

  if (to.matched.some(record => record.meta.auth)) {
    if (!isAuthenticated) {
      setMetas(to)
      // Redirect to the Login page or any public page
      next({ name: 'sign-in' });
    } else {
      setMetas(to)
      // Proceed to the route if the user is authenticated
      next();
    }
  } else {
    setMetas(to)
    // If the route does not require auth, always let them through
    next();
  }
});

function setMetas(to) {
  if (to.meta.title) {
    document.title = i18n.global.t(to.meta.title);
  }

  to.meta.metaTags?.forEach(metaTag => {
    const selector = metaTag.name ? `meta[name="${metaTag.name}"]` : `meta[property="${metaTag.property}"]`;
    let tag = document.querySelector(selector);

    if (!tag) {
      tag = document.createElement('meta');
      metaTag.name ? tag.setAttribute('name', metaTag.name) : tag.setAttribute('property', metaTag.property);
      document.head.appendChild(tag);
    }

    Object.entries(metaTag).forEach(([key, value]) => {
      if (key !== 'name' && key !== 'property') {
        const content = i18n.global.t(value);
        tag.setAttribute(key, content);
      }
    });
  });
}

export default router
