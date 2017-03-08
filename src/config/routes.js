import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
                },
                {
                    path: '/mixcharts',
                    component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
                },
				{
					path: '/layout',
					component: resolve => require(['../components/page/layout.vue'], resolve)    // message弹出框组件
				},
				{
					path: '/color',
					component: resolve => require(['../components/page/color.vue'], resolve)    // message弹出框组件
				},
				{
					path: '/button',
					component: resolve => require(['../components/page/button.vue'], resolve)    // message弹出框组件
				},
				{
					path: '/alert',
					component: resolve => require(['../components/page/alert.vue'], resolve)    // message弹出框组件
				},
				{
					path: '/loading',
					component: resolve => require(['../components/page/loading.vue'], resolve)    // message弹出框组件
				},
				{
					path: '/message',
					component: resolve => require(['../components/page/messageBox.vue'], resolve)    // message弹出框组件
				},
				{
					path: '/dialog',
					component: resolve => require(['../components/page/dialog.vue'], resolve)    // message弹出框组件
				}

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
