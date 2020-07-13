<template>
	<div>
		<a-row :gutter="16">
			<a-col :span="18">
				<a-input-search enter-button allow-clear size="large"
												@search="onSearch" />
			</a-col>

			<a-col :span="6">
				<transition name="fade">
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
	</div>
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
			onSearch: function (value,event) {
				event.preventDefault()
				let searchSrc = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
				window.open(searchSrc + value)
			},

			getUserLocation: function () {
				return new Promise((resolve) => {
					let userLocation = {}
					navigator.geolocation.getCurrentPosition(position => {
						//  获取用户的坐标经纬度
						userLocation.longitude = position.coords.longitude  // 经度
						userLocation.latitude = position.coords.latitude  //  纬度
						resolve(userLocation)
					})
				})
			},

			getWeatherInfo: function() {
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
				// 根据所获得天气条件确定地方天气同时改变小图标
				let iconType = ''
				let weather = ''
				switch (citySkyCondition) {
					case ('CLEAR_DAY' || 'CLEAR_NIGHT'):
						iconType =  'icon-qingtian'
						weather = '晴天'
						break
					case ('PARTLY_CLOUDY_DAY' || 'CLOUDY'):
						iconType = 'icon-jubuduoyun'
						weather = '多云'
						break
					case ('PARTLY_CLOUDY_NIGHT'):
						iconType = 'icon-yintian'
						weather = '阴天'
						break
					case ('LIGHT_HAZE' || 'MODERATE_HAZE' || 'HEAVY_HAZE' || 'FOG'):
						iconType = 'icon-dawu'
						weather = '雾霾'
						break
					case ('LIGHT_RAIN' || 'MODERATE_RAIN' || 'HEAVY_RAIN' || 'STORM_RAIN'):
						iconType = 'icon-yutian'
						weather = '雨天'
						break
					case ('LIGHT_SNOW' || 'MODERATE_SNOW' || 'HEAVY_SNOW' || 'STORM_SNOW'):
						iconType = 'icon-xuetian'
						weather = '下雪'
						break
					case ('DUST' || 'SAND' || 'WIND'):
						iconType = 'icon-longjuanfeng'
						weather = '沙尘天'
						break
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

	.fade-enter-active, .fade-leave-active {
		transition: opacity .8s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}

	.city-weather {
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
</style>
