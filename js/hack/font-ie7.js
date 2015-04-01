/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_checkmark': '&#xe60a;',
		'icon_checkmark2': '&#xe60b;',
		'icon_cancel': '&#xe60c;',
		'icon_cancel2': '&#xe60d;',
		'icon_plus': '&#xe60e;',
		'icon_plus2': '&#xe60f;',
		'icon_minus': '&#xe610;',
		'icon_minus2': '&#xe611;',
		'icon_time': '&#xe613;',
		'icon_bike': '&#xe614;',
		'icon_snowy': '&#xe600;',
		'icon_search': '&#xe601;',
		'icon_brightness': '&#xe602;',
		'icon_office': '&#xe903;',
		'icon_coin_rmb': '&#xe93e;',
		'icon_spinner': '&#xe97b;',
		'icon_fire': '&#xe9a9;',
		'icon_logo': '&#xe603;',
		'icon_logo_icon': '&#xe604;',
		'icon_video': '&#xe61e;',
		'icon_plentiful': '&#xe605;',
		'icon_info_large': '&#xe61d;',
		'icon_directions_bike': '&#xe615;',
		'icon_directions_bus': '&#xe616;',
		'icon_directions_car': '&#xe617;',
		'icon_directions_ferry': '&#xe618;',
		'icon_directions_subway': '&#xe619;',
		'icon_directions_train': '&#xe61a;',
		'icon_directions_walk': '&#xe61b;',
		'icon_flight': '&#xe61c;',
		'icon_mapmarker': '&#xe612;',
		'icon_atom': '&#xe606;',
		'icon_thumbs_o_up': '&#xf087;',
		'icon_thumbs_o_down': '&#xf088;',
		'icon_paper_plane': '&#xf1d8;',
		'icon_aircraft': '&#xe607;',
		'icon_heart_outlined': '&#xe608;',
		'icon_heart': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
