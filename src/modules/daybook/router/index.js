export default {
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import('@/modules/daybook/views/NoEntrySelected.vue')
    },
    {
      path: ':daybookid',
      name: 'daybook-entry',
      component: () => import('@/modules/daybook/views/EntryView.vue'),
      props: (route) => {
        return {
          id: route.params.daybookid
        }
      }
    }
  ]
}
