//  GAME CONTROLLER
//  @ragingwind

var game = {
	score:0,
	point:10,
	scoreWeight:0.0,
	timeLimit: (1000 * 60) * 3,
	time:0,
	gameTimer: undefined,
	events: function(e, param) {
		game[e].apply(game, arguments);
	},
	clearall: function() {
		game.stop();
	},
	hitbat: function() {
		game.scoreWeight = 0.0;
	},
	timeover: function() {
		game.stop();
	},
	hitblock: function() {
		game.score += game.point * game.scoreWeight;
		game.scoreWeight += 0.2;
		document.getElementById('score').innerHTML = game.score;
	},
	outofbound: function() {
		game.breakout.setpos();
	},
	stop: function() {
		clearTimeout(game.gameTimer);
		clearTimeout(game.scoreTimer);
		game.breakout.stop();
	},
	start: function() {
		var opt = {
			view: document.getElementById('surface'),
			fps: true,
			callback: game.events
		};

		game.breakout = new Breakout(opt);
		setTimeout(function() {
			game.breakout.start();
			game.gameTimer = setTimeout(game.timer, 1000);
		}, 200);
	},
	timer: function() {
		var remainTime = game.timeLimit - (game.time += 1000);
		game.updateTime(remainTime);
		if (remainTime > 0) {
      game.gameTimer = setTimeout(game.timer, 1000);
    }
    else {
      game.events('timeover');
    }
	},
	updateTime: function(remain) {
		var date = new Date(remain);
		var sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
		document.getElementById('time').innerHTML = date.getMinutes() + ':' + sec;
	}
};
