<script lang="ts">
	import type { WireInfo } from './bomb';

	export let wireInfo: WireInfo | null;

	$: color = wireInfo?.color ?? 'transparent';
</script>

<div on:pointerdown class="wire" style="--wire-color: {color}" />

<style>
	.wire {
		width: 16px;
		height: 100%;
		background: var(--wire-color);
	}
</style>
