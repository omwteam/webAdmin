<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>自述
            </el-menu-item>
            <el-submenu :index="index.toString()" v-for="(item, index) in list">
                <template slot="title"><i class="el-icon-menu"></i>{{ item.title }}</template>
                <el-menu-item :index="s.url" v-for="s in item.subItem">{{ s.name }}</el-menu-item>

            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
	import axios from 'axios';
    export default {
        data:function () {
          return {
          	list: []
          }
		},
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
		created: function(){
        	let self = this;
        	console.log(self.customData)
			axios.get('/static/siderBar.json')
				.then(function (response) {

					self.list = response.data;
					console.log(self.list);
				})
				.catch(function (error) {
					console.log(error);
				});

        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
