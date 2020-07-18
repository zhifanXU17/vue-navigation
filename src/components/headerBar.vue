<template>
	<a-row :gutter="16" type="flex" justify="space-between" align="middle">

		<a-col :span="18" >
			<!--  左边搜索框		-->
			<a-input-search enter-button size="large" @search="onSearch" :style="{ paddingTop: '12px' }">
				<!--  可选择搜索引擎	-->
				<a-select slot="addonBefore" v-model="searchEngine" class="searchEngine">
					<a-select-option value="dogedoge">
						多吉
					</a-select-option>
					<a-select-option value="baidu">
						百度
					</a-select-option>
					<a-select-option value="bing">
						必应
					</a-select-option>
				</a-select>
			</a-input-search>
		</a-col>

		<a-col :span="6">
			<!--	右边天气		-->
			<transition name="slide-fade">
				<div class="city-weather" v-if="cityWeatherInfo && cityName">
					<a-row>
						<a-col :span="6" :style="{ fontWeight:'bolder' }">{{ cityName.addressComponent.city }}:</a-col>    <!--  城市名字  -->
						<a-col :span="4">{{ weatherIcon(cityWeatherInfo.daily.skycon[0].value)[1] }}</a-col>  <!--  天气小图标  -->
						<a-col :span="2"><icon-font :type=weatherIcon(cityWeatherInfo.daily.skycon[0].value)[0] /></a-col>  <!--  天气情况  -->
						<a-col :span="12">{{ cityWeatherInfo.daily.temperature[0].min }} ~ {{ cityWeatherInfo.daily.temperature[0].max }}°C</a-col> <!--  温度范围  -->
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
				searchEngine: 'dogedoge' ,  //  用户所选搜索引擎
				userLocation: null, //  用户具体定位
				cityName: null,   //  经纬度获取具体定位城市
				cityWeatherInfo: null, // 用户所在城市的具体天气情况
			}
		},
		components: {
			IconFont
		},
		methods: {
			onSearch: function (value) {
				// 选择一个搜索引擎并进行搜索
				let url = ''
				if (this.searchEngine === 'dogedoge') {
					url = 'https://www.dogedoge.com/results?q='
					window.open(url + value)
				} else if (this.searchEngine === 'baidu') {
					url = 'https://www.baidu.com/s?wd='
					window.open(url + value)
				} else {
					url = 'https://www.bing.com/search?q='
					window.open(url + value)
				}
			},

			getUserLocation: function () {
				//  获取用户的坐标经纬度
				return new Promise((resolve) => {
					let userLocation = {}

					function success(pos) {
						userLocation.longitude = pos.coords.longitude  // 经度
						userLocation.latitude = pos.coords.latitude  //  纬度
						resolve(userLocation)
					}

					function error(err) {
						console.warn('ERROR(' + err.code + '): ' + err.message)
						// 若用户拒绝给予定位权限或者获取位置失败，则采用北京作为默认城市经纬度
						userLocation.longitude = 116.40  // 经度
						userLocation.latitude = 39.90  //  纬度
						resolve(userLocation)
					}

					navigator.geolocation.getCurrentPosition(success,error)
				})
			},

			getWeatherInfo: function() {
				// 根据定位获取天气信息
				this.getUserLocation().then(userLocation => {
					this.userLocation = userLocation
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
		},
		watch: {
			// eslint-disable-next-line no-unused-vars
			searchEngine: function (newValue,oldValue) {
				this.searchEngine = newValue
			}
		}
	}
</script>

<style scoped>
	.icons-list >>> .anticon {
		margin-right: 6px;
		font-size: 24px;
	}

	.searchEngine {
		color: rgba(0, 0, 0, 0.65);

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
