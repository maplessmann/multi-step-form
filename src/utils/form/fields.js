import TextField from '~/components/Fields/Text'

export const steps = [
  {
    title: 'Personal info',
    fields: [
      {
        component: TextField,
        name: 'first_name',
        label: 'First name',
      },
      {
        component: TextField,
        name: 'last_name',
        label: 'Last name',
      },
      {
        component: TextField,
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        component: TextField,
        name: 'country',
        label: 'Country',
      },
    ],
  },
  {
    title: 'Shipping Address',
    fields: [
      {
        component: TextField,
        name: 'street',
        label: 'Street',
      },
      {
        component: TextField,
        name: 'city',
        label: 'City',
      },
      {
        component: TextField,
        name: 'state',
        label: 'State',
      },
      {
        component: TextField,
        name: 'zip',
        label: 'Zip code',
      },
    ],
  },
]
