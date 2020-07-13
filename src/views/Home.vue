<template>
	<div>
		<a-layout>
			<a-layout-sider theme="light">
				<div class="logo">
					<a-icon type="fire" />
					<a class="logoText" href="/">阳光导航</a>
				</div>

				<siderBar />
			</a-layout-sider>
			<a-layout>
				<a-layout-header :style="{ background: '#fff', padding: '12px 50px', lineHeight: '0', minWidth: '1065px' }">
					<headerBar />
				</a-layout-header>

				<a-layout-content :style="{ margin: '24px 16px 0', maxHeight: '384px' }">
					<div :style="{ padding: '24px', background: '#fff', maxHeight: '384px' }">
						<router-view/>
					</div>
				</a-layout-content>

				<a-layout-footer :style="{ textAlign: 'center', background: 'black', color: 'white',marginTop: '24px',padding: '86px 144px 93px 144px' }">
					<footerBar />
				</a-layout-footer>
			</a-layout>
		</a-layout>
	</div>
</template>

<style lang="less">
	.logo {
		height: 32px;
		text-align: center;
		background: rgba(255, 255, 255, 0.2);
		margin: 16px;
	}

	.logo>i {
		margin-right: 5px;
		vertical-align: middle;
	}

	.logoText{
		color: rgba(0, 0, 0, 0.65);
		vertical-align: middle;
	}
</style>

<script>
	import headerBar from "../components/headerBar"
	import siderBar from "../components/siderBar"
	import footerBar from "../components/footerBar"

	export default {
		name: 'Home',
		components: {
			headerBar,
			siderBar,
			footerBar
		},
	}
</script>


