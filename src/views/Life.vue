<template>
	<div class="contentWrap">
		<router-link to="/life#购物" class="contentTitle">购物</router-link>
		<a-row :gutter="[8,8]" :style="{ backgroundColor: '#ffffff', borderRadius: '6px', marginBottom: '15px' }">
			<a-col :span="4" v-for="item of shoppingLinks" :key="item.key" class="linksWrap">
				<img :src="item.favicon" alt="" class="linkImg">
				<a :href="item.link" target="_blank" class="linkContent">{{ item.siteName }}</a>
			</a-col>
		</a-row>

		<router-link to="/life#便利" class="contentTitle">便利</router-link>
		<a-row :gutter="[8,8]" :style="{ backgroundColor: '#ffffff', borderRadius: '6px' }">
			<a-col :span="4" v-for="item of convenienceLinks" :key="item.key" class="linksWrap">
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
				shoppingLinks: {
					taobao: {
						id: 1,
						siteName: '淘宝',
						category: 'shopping',
						link: 'https://www.taobao.com',
						favicon: 'https://img.alicdn.com/tfs/TB1VlKFRpXXXXcNapXXXXXXXXXX-16-16.png'
					},
					tmall: {
						id: 2,
						siteName: '天猫',
						category: 'shopping',
						link: 'https://www.tmall.com',
						favicon: 'https://img.alicdn.com/tfs/TB1XlF3RpXXXXc6XXXXXXXXXXXX-16-16.png'
					},
					jingdong: {
						id: 3,
						siteName: '京东',
						category: 'shopping',
						link: 'https://www.jd.com',
						favicon: 'https://www.jd.com/favicon.ico'
					},
					amazon: {
						id: 4,
						siteName: '亚马逊',
						category: 'shopping',
						link: 'https://www.amazon.cn/',
						favicon: 'https://favicon.link/www.amazon.cn/'
					},
					weipinhui: {
						id: 5,
						siteName: '唯品会',
						category: 'shopping',
						link: 'https://www.vip.com/',
						favicon: 'https://favicon.link/www.vip.com/'
					},
					suning: {
						id: 6,
						siteName: '苏宁',
						category: 'shopping',
						link: 'https://www.suning.com',
						favicon: 'https://favicon.link/www.suning.com/'
					},
					dangdang: {
						id: 7,
						siteName: '当当网',
						category: 'shopping',
						link: 'http://www.dangdang.com/',
						favicon: 'http://union.dangdang.com/favicon.ico'
					},
					kaolahaigou: {
						id: 8,
						siteName: '考拉海购',
						category: 'shopping',
						link: 'https://www.kaola.com/',
						favicon: 'http://img.ilxdh.com/navig/2019-12-07/1575707416_2044.png?auth_key=1594714349-e2b822121b90eee1b7aa295c5ede197e2f1badb6-0-69fb60bce8fb503619ad227bdc3c8032'
					},
					guomei: {
						id: 9,
						siteName: '国美',
						category: 'shopping',
						link: 'https://www.gome.com.cn/',
						favicon: 'https://lingquan.gome.com.cn/favicon.ico'
					},
					xiaomishangcheng: {
						id: 10,
						siteName: '小米商城',
						category: 'shopping',
						link: 'https://www.mi.com/index.html',
						favicon: 'https://favicon.link/www.mi.com/'
					},
					jvhuasuan: {
						id: 11,
						siteName: '聚划算',
						category: 'shopping',
						link: 'https://ju.taobao.com/',
						favicon: 'https://favicon.link/ju.taobao.com/'
					},
					aitaobao: {
						id: 12,
						siteName: '爱淘宝',
						category: 'shopping',
						link: 'https://ai.taobao.com/',
						favicon: 'https://favicon.link/ai.taobao.com/'
					}
				},

				convenienceLinks: {
					meituan: {
						id: 1,
						siteName: '美团',
						category: 'convenience',
						link: 'https://www.meituan.com/',
						favicon: 'https://www.meituan.com/favicon.ico'
					},
					dazhongdianping: {
						id: 2,
						siteName: '大众点评',
						category: 'convenience',
						link: 'https://www.dianping.com/',
						favicon: 'http://img.ilxdh.com/navig/2019-12-07/1575708503_3559.png?auth_key=1594714349-9ff2c7baa8bc1e5415c0e7b7030287994c274439-0-a2331bafe65dfaee77e0970023c79383'
					},
					tengxunyouxiang: {
						id: 3,
						siteName: 'QQ邮箱',
						category: 'convenience',
						link: 'https://mail.qq.com/',
						favicon: 'https://favicon.link/mail.qq.com/'
					},
					wangyiyouxiang: {
						id: 4,
						siteName: '网易邮箱',
						category: 'convenience',
						link: 'https://mail.163.com/',
						favicon: 'https://favicon.link/mail.163.com/'
					},
					baiduwangpan: {
						id: 5,
						siteName: '百度网盘',
						category: 'convenience',
						link: 'https://pan.baidu.com/',
						favicon: 'https://favicon.link/pan.baidu.com/'
					},
					yiyiwuwangpan: {
						id: 6,
						siteName: '115网盘',
						category: 'convenience',
						link: 'https://115.com/',
						favicon: 'https://favicon.link/115.com/'
					},
					chakuaidi: {
						id: 7,
						siteName: '快递100',
						category: 'convenience',
						link: 'https://www.kuaidi100.com/',
						favicon: 'https://favicon.link/kuaidi100.com/'
					},
					weixin: {
						id: 8,
						siteName: '微信网页版',
						category: 'convenience',
						link: 'https://wx.qq.com/',
						favicon: 'https://favicon.link/wx.qq.com/'
					},
					huochepiao: {
						id: 9,
						siteName: '12306',
						category: 'convenience',
						link: 'https://www.12306.cn/',
						favicon: 'http://img.ilxdh.com/navig/2019-12-16/1576463253_3736.png?auth_key=1594714349-c9f59bdca0607fedec6cf10b7f72aaed92a7b917-0-39808d72c153ff0425abb69fdade8685'
					},
					wasiyuedu: {
						id: 10,
						siteName: '瓦斯阅读',
						category: 'convenience',
						link: 'https://qnmlgb.tech/',
						favicon: 'https://favicon.link/qnmlgb.tech/'
					},
					taimeiti: {
						id: 11,
						siteName: '钛媒体',
						category: 'convenience',
						link: 'https://www.tmtpost.com/',
						favicon: 'https://favicon.link/www.tmtpost.com/'
					},
					zhihu: {
						id: 12,
						siteName: '知乎',
						category: 'convenience',
						link: 'https://www.zhihu.com/',
						favicon: 'https://favicon.link/www.zhihu.com/'
					}
				}
			}
		},
	}
</script>

<style scoped lang="less">
	.contentTitle {
		display: inline-block;

		color: #262729;
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.linksWrap {
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 14px;
		height: 50px;
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
