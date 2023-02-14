import {writable} from 'svelte/store';

export const capturingTeam = writable<string | null>(null);