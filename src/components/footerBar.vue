<template>
	<div>
		<a-row>

			<a-col :span="8">
				<div class="linksGroup">
					<div class="linksGroupTitle">
						感谢链接
					</div>
					<div class="linksGroupWrap">
						<a href="https://www.antdv.com/docs/vue/" target="_blank" class="link">Ant Design</a>
						<a href="http://www.caiyunapp.com/" target="_blank" class="link">彩云天气</a>
						<a href="https://vue.docschina.org/" target="_blank" class="link">Vue</a>
						<a href="https://github.com/" target="_blank" class="link">Github</a>
					</div>
				</div>
			</a-col>

			<a-col :span="8">
				<div class="linksGroup">
					<div class="linksGroupTitle">
						友情链接
					</div>
					<div class="linksGroupWrap">

					</div>
				</div>
			</a-col>

			<a-col :span="8">
				<div class="linksGroup">
					<div class="linksGroupTitle">
						关于我
					</div>
					<div class="linksGroupWrap">
						<div class="linkWrap">
							<a-icon type="github"/>
							<a href="https://github.com/zhifanXU17" target="_blank">GitHub</a>
						</div>

						<div class="linkWrap">
							<a-icon type="google" />
							<span>zhifanXu17@gmail.com</span>
						</div>
					</div>
				</div>
			</a-col>

		</a-row>
	</div>
</template>

<script>
	export default {
		name: "footerBar"
	}
</script>

<style scoped lang="less">
	.linksGroup {
		text-align: left;
	}

	.linksGroupTitle {
		margin: 0 auto 24px;
		font-weight: bolder;
	}

	.linksGroupWrap .link {
		display: block;
		color: #ffffff;
		margin: 12px 0;
	}

	.linkWrap {
		margin-bottom: 12px;
	}

	.linkWrap a, .linkWrap span {
		color: #ffffff;
		margin: 12px 12px;
	}
</style>
