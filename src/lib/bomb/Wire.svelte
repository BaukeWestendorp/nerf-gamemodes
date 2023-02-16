<script lang="ts">
	import type { WireInfo } from './bomb';

	export let wireInfo: WireInfo | null;

	$: color = wireInfo?.color ?? 'transparent';
</script>

<div on:pointerdown class="wire" style="--wire-color: {color}" />

<style>
	.wire {
		width: 16px;
		border-left: 2px solid black;
		border-right: 2px solid black;
		height: 100%;
		background: var(--wire-color);
	}
</style>
