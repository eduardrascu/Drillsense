export function hexToRGBA(hex: string, alpha: number) {
	hex = hex.replace('#', '');
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	alpha = alpha || 1.0;
	if (alpha < 0 || alpha > 1.0) {
		alpha = 1.0;
	}
	if (r || g || b) {
		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
	} else return;
}
