let routes = [
    {
        path: '/',
        name: 'home',
        component: require('@/views/Home').default
    },
    {
        path: '/create',
        name: 'create',
        component: require('@/views/Create').default
    },
    {
        path: '/gender',
        name: 'gender',
        component: require('@/views/Gender').default
    },
    {
        path: '/religion',
        name: 'religion',
        component: require('@/views/Religion').default
    },
    {
        path: '/bloodtype',
        name: 'bloodtype',
        component: require('@/views/BloodType').default
    },
    {
        path: '/Island',
        name: 'Island',
        component: require('@/views/Island').default
    },
    {
        path: '/areamaintenance',
        name: 'areamaintenance',
        component: require('@/views/AreaMaintenance').default
    },
    {
        path: '/*',
        component: require('@/views/404').default
    },
];

export default routes