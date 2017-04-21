<template>
	<div class="modal" :class="{'is-active': show}">
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<slot></slot>
		</div>
		<button class="modal-close" @click="close"></button>
	</div>   
</template>

<script>
export default {
    name: 'Modal',
    props: {
    	show: {
    		type: Boolean,
    		default: true
    	}
    },
    data() {
        return {
        }
    },
    components: {
    },
    methods: {
    	close() {
    		this.$emit('close')
    	}
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">

</style>