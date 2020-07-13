<template>
	<a-menu
		:default-selected-keys="['1']"
		mode="inline"
		id="menu"
	>
		<a-menu-item key="1">
			<router-link to="shopping">
				<a-icon type="shopping" />
				<span>购物</span>
			</router-link>
		</a-menu-item>

		<a-menu-item key="2" to="game">
			<router-link to="game">
				<a-icon type="crown" />
				<span>游戏</span>
			</router-link>
		</a-menu-item>

		<a-menu-item key="3">
			<a-icon type="video-camera" />
			<span>影视</span>
		</a-menu-item>

		<a-menu-item key="4">
			<a-icon type="customer-service" />
			<span>音乐</span>
		</a-menu-item>

		<a-menu-item key="5">
			<a-icon type="book" />
			<span>学习</span>
		</a-menu-item>

		<a-menu-item key="6">
			<a-icon type="compass" />
			<span>旅游</span>
		</a-menu-item>

		<a-menu-item key="7">
			<a-icon type="profile" />
			<span>信息</span>
		</a-menu-item>

	</a-menu>
</template>

<script>
	export default {
		name: "siderBar",
	}
</script>

<style scoped lang="less">
	#menu{
		height: 100vh;
	}
</style>
