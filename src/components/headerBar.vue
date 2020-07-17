<template>
	<a-row :gutter="16" type="flex" justify="space-between" align="middle">

		<a-col :span="18" >
			<!--  左边搜索框		-->
			<a-input-search enter-button size="large" @search="onSearch" :style="{ paddingTop: '12px' }"/>
		</a-col>

		<a-col :span="6">
			<!--	右边天气		-->
			<transition name="slide-fade">
				<div class="city-weather" v-if="cityWeatherInfo && cityName">
					<a-row>
						<a-col :span="4" :style="{ fontWeight:'bolder' }">{{ cityName.addressComponent.city }}:</a-col>    <!--  城市名字  -->
						<a-col :span="4">{{ weatherIcon(cityWeatherInfo.daily.skycon[0].value)[1] }}</a-col>  <!--  天气小图标  -->
						<a-col :span="2"><icon-font :type=weatherIcon(cityWeatherInfo.daily.skycon[0].value)[0] /></a-col>  <!--  天气情况  -->
						<a-col :span="14">{{ cityWeatherInfo.daily.temperature[0].min }} ~ {{ cityWeatherInfo.daily.temperature[0].max }}°C</a-col> <!--  温度范围  -->
					</a-row>
				</div>
			</transition>
		</a-col>

	</a-row>
</template>

<script>
	import axios from 'axios'
	import { Icon } from 'ant-design-vue'

	const IconFont = Icon.createFromIconfontCN({
		scriptUrl: '//at.alicdn.com/t/font_1937755_tayvck72haa.js'
	})

	export default {
		name: "header-bar",
		data () {
			return {
				cityName: null,   //  经纬度获取具体定位城市
				cityWeatherInfo: null, // 用户所在城市的具体天气情况
			}
		},
		components: {
			IconFont
		},
		methods: {
			onSearch: function (value) {
				// 搜索
				let searchSrc = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
				window.open(searchSrc + value)
			},

			getUserLocation: function () {
				//  获取用户的坐标经纬度
				return new Promise((resolve) => {
					let userLocation = {}
					navigator.geolocation.getCurrentPosition(position => {
						userLocation.longitude = position.coords.longitude  // 经度
						userLocation.latitude = position.coords.latitude  //  纬度
						resolve(userLocation)
					})
				})
			},

			getWeatherInfo: function() {
				// 根据定位获取天气信息
				this.getUserLocation().then(userLocation => {
					//  经度在前，纬度在后，中间用半角逗号隔开，dailysteps 表示天步长选项，可选，缺省值是 5， 选择范围 1 ~ 15
					let caiyunWeatherUrl = `/weather/${ userLocation.longitude },${ userLocation.latitude }/daily.json?dailysteps=1`
					// 通过百度地图提供的API，使用用户的经纬度逆向获取用户具体地点
					let baiduMapUrl = `/baiduMap/?ak=qL6wjcIurSM7AbZ5ilLaCwGIYEnfHA1Y&output=json&coordtype=wgs84ll&location=${ userLocation.latitude },${ userLocation.longitude }`

					function getWeather() {
						return axios.get(caiyunWeatherUrl)
					}

					function getCity() {
						return axios.get(baiduMapUrl)
					}

					Promise.all([getWeather(),getCity()])
						.then(function (results) {
							const weather = results[0]
							const city = results[1]

							if (weather.status === 200 && weather.statusText === "OK") {
								this.cityWeatherInfo = weather.data.result
							} else {
								console.log(weather)
							}

							if (city.status === 200 && city.statusText === "OK") {
								this.cityName = city.data.result
							} else {
								console.log(city)
							}

						}.bind(this))
						.catch(error => console.log(error))
				})
			},

			weatherIcon: function (citySkyCondition) {
				// 根据所获得天气条件确定地方天气情况并同时改变小图标
				let iconType = ''
				let weather = ''
				if (citySkyCondition === 'CLEAR_NIGHT' || citySkyCondition === 'CLEAR_DAY') {
					iconType =  'icon-qingtian'
					weather = '晴天'
				} else if (citySkyCondition === 'PARTLY_CLOUDY_DAY' || citySkyCondition === 'CLOUDY') {
					iconType = 'icon-jubuduoyun'
					weather = '多云'
				} else if (citySkyCondition === 'PARTLY_CLOUDY_NIGHT') {
					iconType = 'icon-yintian'
					weather = '阴天'
				} else if (citySkyCondition === 'LIGHT_HAZE' || citySkyCondition === 'MODERATE_HAZE' || citySkyCondition === 'HEAVY_HAZE' || citySkyCondition === 'FOG') {
					iconType = 'icon-dawu'
					weather = '雾霾'
				} else if (citySkyCondition === 'LIGHT_RAIN' || citySkyCondition === 'MODERATE_RAIN' || citySkyCondition === 'HEAVY_RAIN' || citySkyCondition === 'STORM_RAIN') {
					iconType = 'icon-yutian'
					weather = '雨天'
				} else if (citySkyCondition === 'LIGHT_SNOW' || citySkyCondition === 'MODERATE_SNOW' || citySkyCondition === 'HEAVY_SNOW' || citySkyCondition === 'STORM_SNOW') {
					iconType = 'icon-xuetian'
					weather = '下雪'
				} else {
					iconType = 'icon-longjuanfeng'
					weather = '沙尘天'
				}
				return [iconType,weather]
			}
		},

		mounted() {
			this.getWeatherInfo()
		}
	}
</script>

<style scoped>
	.icons-list >>> .anticon {
		margin-right: 6px;
		font-size: 24px;
	}

	.slide-fade-enter-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter {
		transform: translateX(10px);
		opacity: 0;
	}

	.city-weather {
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
</style>
