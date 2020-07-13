<template>
	<div class="gutter-example">

		<a-row :gutter="[8,8]" :style="{ height: '60px', margin: '0' }">
			<a-col :span="4" v-for="item of links" :key="item.key" class="link">
				<img :src="item.favicon" alt="" class="linkImg">
				<a :href="item.link" target="_blank" class="linkContent">{{ item.siteName }}</a>
			</a-col>
		</a-row>

	</div>
</template>

<script>
	export default {
		name: "Shopping",
		data() {
			return {
				links: {
					taobao: {
						id: 1,
						siteName: '淘宝',
						link: 'https://www.taobao.com',
						favicon: 'https://img.alicdn.com/tfs/TB1VlKFRpXXXXcNapXXXXXXXXXX-16-16.png'
					},
					tmall: {
						id: 2,
						siteName: '天猫',
						link: 'https://www.tmall.com',
						favicon: 'https://img.alicdn.com/tfs/TB1XlF3RpXXXXc6XXXXXXXXXXXX-16-16.png'
					},
					jingdong: {
						id: 3,
						siteName: '京东',
						link: 'https://www.jd.com',
						favicon: 'https://www.jd.com/favicon.ico'
					},
					amazon: {
						id: 4,
						siteName: '亚马逊',
						link: 'https://www.amazon.cn/',
						favicon: 'https://favicon.link/www.amazon.cn/'
					},
					weipinhui: {
						id: 5,
						siteName: '唯品会',
						link: 'https://www.vip.com/',
						favicon: 'https://favicon.link/www.vip.com/'
					},
					suning: {
						id: 6,
						siteName: '苏宁',
						link: 'https://www.suning.com',
						favicon: 'https://favicon.link/www.suning.com/'
					}
				},
			}
		},
	}
</script>

<style scoped lang="less">
	.row {
		margin-bottom: 20px;
	}

	.link {
		text-align: center;
	}

	.linkContent {
		color: rgba(0, 0, 0, 0.65);
	}

	.linkContent:hover {
		color: #1890ff;
	}

	.linkImg {
		width: 16px;
		height: 16px;
		margin-right: 5px;
	}
</style>
