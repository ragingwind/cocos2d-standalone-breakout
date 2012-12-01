//  ASSETS MANAGER
//  @ragingwind

(function(window) {

	window.Assets = function() {
		this.type = 'chrome';
		this.assets = {
			'google': {
				map: 'assets/google.tmx',
				maxblock:90,
				sprite: 'assets/sprites.png',
				pos: {
					bat:{x:1, y:29},
					ball:{x:0, y:21}
				}
			},
			'chrome': {
				map: 'assets/chrome.tmx',
				maxblock:128,
				sprite: 'assets/sprites-chrome.png',
				pos: {
					bat:{x:1, y:29},
					ball:{x:0, y:21}
				},
				sound: {
					hitbar:'assets/hitbar.mp3',
					hitblock:'assets/hitblock.mp3'
				}
			}
		};
		return this.assets[this.type];
	};

})(window);
