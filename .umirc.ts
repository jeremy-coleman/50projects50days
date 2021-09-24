import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/expanding_cards',
      component: '@/pages/projects/expanding_cards/index',
    },
    {
      path: '/progress_steps',
      component: '@/pages/projects/progress_steps/index',
    },
    {
      path: '/rotating_navigation',
      component: '@/pages/projects/rotating_navigation/index',
    },
    {
      path: '/hidden_search',
      component: '@/pages/projects/hidden_search/index',
    },
    {
      path: '/blurry_loading',
      component: '@/pages/projects/blurry_loading/index',
    },
    {
      path: '/scroll_animation',
      component: '@/pages/projects/scroll_animation/index',
    },
    {
      path: '/split_landing_page',
      component: '@/pages/projects/split_landing_page/index',
    },
    {
      path: '/form_input_wave',
      component: '@/pages/projects/form_input_wave/index',
    },
    {
      path: '/sound_board',
      component: '@/pages/projects/sound_board/index',
    },
    {
      path: '/dad_jokes',
      component: '@/pages/projects/dad_jokes/index',
    },
    {
      path: '/event_keycodes',
      component: '@/pages/projects/event_keycodes/index',
    },
    {
      path: '/faq_collapse',
      component: '@/pages/projects/faq_collapse/index',
    },
    {
      path: '/random_choice_picker',
      component: '@/pages/projects/random_choice_picker/index',
    },
    {
      path: '/animated_navigation',
      component: '@/pages/projects/animated_navigation/index',
    },
    {
      path: '/incrementing_counter',
      component: '@/pages/projects/incrementing_counter/index',
    },
    {
      path: '/drink_water',
      component: '@/pages/projects/drink_water/index',
    },
    {
      path: '/background_slider',
      component: '@/pages/projects/background_slider/index',
    },
  ],
  fastRefresh: {},
  chainWebpack: (config) => {
    config.module
      .rule('media')
      .test(/.mp3$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'));
  },
});
