<template>
	<a-menu
		:default-selected-keys="['1']"
		mode="inline"
		id="menu"
	>
		<a-menu-item key="1">
			<router-link to="life">
				<a-icon type="bulb" />
				<span>生活</span>
			</router-link>
		</a-menu-item>

		<a-menu-item key="2">
			<router-link to="entertain">
				<a-icon type="crown" />
				<span>娱乐</span>
			</router-link>
		</a-menu-item>

		<a-menu-item key="3">
			<router-link to="study">
				<a-icon type="book" />
				<span>学习</span>
			</router-link>
		</a-menu-item>

		<a-menu-item key="4">
			<router-link to="travel">
				<a-icon type="compass" />
				<span>旅游</span>
			</router-link>
		</a-menu-item>

	</a-menu>
</template>

<script>
	export default {
		name: "siderBar",
	}
</script>

<style scoped lang="less">

</style>
