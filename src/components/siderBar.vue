<template>
	<a-menu
		mode="inline"
		id="menu"
		:open-keys="openKeys"
		@openChange="onOpenChange"
		:default-selected-keys="['1']"
	>
		<a-sub-menu key="sub1">
			<span slot="title">
				<router-link to="life" :style="{ color: 'rgba(0, 0, 0, 0.65)' }">
					<a-icon type="bulb" />
					<span>生活</span>
				</router-link>
			</span>

			<a-menu-item key="1" :style="{ fontSize: '15px' }">
				<router-link to="life#购物">
					<a-icon type="bulb" />
					<span>购物</span>
				</router-link>
			</a-menu-item>

			<a-menu-item key="2" :style="{ fontSize: '15px' }">
				<router-link to="life#便利">
					<a-icon type="wallet" />
					<span>便利</span>
				</router-link>

			</a-menu-item>
		</a-sub-menu>

		<a-sub-menu key="sub2">
			<span slot="title">
				<router-link to="entertain" :style="{ color: 'rgba(0, 0, 0, 0.65)' }">
					<a-icon type="crown" />
					<span>娱乐</span>
				</router-link>
			</span>

			<a-menu-item key="3" class="fz15">
				<a-icon type="thunderbolt" />
				游戏
			</a-menu-item>

			<a-menu-item key="4" class="fz15">
				<a-icon type="customer-service" />
				音乐
			</a-menu-item>

			<a-menu-item key="5" class="fz15">
				<a-icon type="video-camera" />
				电影
			</a-menu-item>
		</a-sub-menu>

		<a-sub-menu key="sub3">
			<span slot="title">
				<router-link to="study" :style="{ color: 'rgba(0, 0, 0, 0.65)' }">
					<a-icon type="read" />
					<span>学习</span>
				</router-link>
			</span>

			<a-menu-item key="6" class="fz15">
				<a-icon type="tool" />
				编程
			</a-menu-item>

			<a-menu-item key="7" class="fz15">
				<a-icon type="paper-clip" />
				设计
			</a-menu-item>
		</a-sub-menu>

		<a-sub-menu key="sub4">
			<span slot="title">
				<router-link to="travel" :style="{ color: 'rgba(0, 0, 0, 0.65)' }">
					<a-icon type="compass" />
					<span>旅游</span>
				</router-link>
			</span>

			<a-menu-item key="8" class="fz15">
				<a-icon type="project" />
				购票
			</a-menu-item>

			<a-menu-item key="9" :style="{ fontSize: '15px' }">
				<a-icon type="car" />
				攻略
			</a-menu-item>
		</a-sub-menu>

	</a-menu>
</template>

<script>
	export default {
		name: "siderBar",
		data() {
			return {
				rootSubmenuKeys: ['sub1', 'sub2', 'sub3', 'sub4'],
				openKeys: ['sub1'],
			}
		},
		methods: {
			onOpenChange(openKeys) {
				const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
				if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
					this.openKeys = openKeys;
				} else {
					this.openKeys = latestOpenKey ? [latestOpenKey] : [];
				}
			},
		}
	}
</script>

<style scoped lang="less">
	.fz15 {
		font-size: 15px;
	}
</style>
