
(function () {
	// Action1
	function prepare() {
		const imgTask = (img, src) => {
			return new Promise(function (resolve, reject) {
				img.onload = resolve;
				img.onerror = reject;
				img.src = src;
			});
		};
		const context = document.getElementById('content').getContext('2d');
		const heroImg = new Image();
		const allSpriteImg = new Image();
		const allresourceTask = Promise.all([
			imgTask(heroImg, './hero.png'),
			imgTask(allSpriteImg, './all.jpg'),
		]);
		return {
			/**
			 * @param {Function} [callback] - 当准备好了之后要调用的回掉函数
			 */
			getResource(callback) {
				allresourceTask.then(function () {
					callback && callback(context, heroImg, allSpriteImg);
				});
			}
		};
	}
	// Action2
	function drawHero(context, heroImg, allSpriteImg) {
		var draw = function () {
				this.context
				.drawImage(
					this.img,
					this.imgPos.x,
					this.imgPos.y,
					this.imgPos.width,
					this.imgPos.height,
					this.rect.x,
					this.rect.y,
					this.rect.width,
					this.rect.height
				);
		}

		var clear = function () {
			this.context
				.clearRect(
					this.rect.x,
					this.rect.y,
					this.rect.width,
					this.rect.height
				)
		}

		var hero = {
			img: heroImg,
			context: context,
			imgPos: {
				x: 0,
				y: 0,
				width: 32,
				height: 32
			},

			rect: {
				x: 0,
				y: 0,
				width: 40,
				height: 40
			},

			draw: draw,
			clear: clear
		};

		var monster = {
			img: allSpriteImg,
			context: context,
			imgPos: {
				x: 858,
				y: 529,
				width: 32,
				height: 32
			},

			rect: {
				x: 100,
				y: 100,
				width: 40,
				height: 40
			},

			draw: draw
		};
		hero.draw();
		monster.draw();
		document.onkeydown = function (event) {
			var e = event || window.event || arguments.callee.call.arguments[0];
			switch (e && e.keyCode) {
				case 40:
					if(hero.rect.y != 260) {
						if( hero.rect.y < 100 && hero.rect.y > 50 && hero.rect.x > 65 &&  hero.rect.x < 140 ){
							confirm('与野怪相撞，发起攻击获得红包奖励')
							return;
						}else{
							hero.clear();
							hero.rect.y += 10;
							hero.draw();
						}
					}
					break;
				case 37:
					if(hero.rect.x != 0) {
						if( hero.rect.x > 60 && hero.rect.x < 150 && hero.rect.y > 60 && hero.rect.y < 140){
							confirm('与野怪相撞，发起攻击获得红包奖励')
							return;
						}else{
							hero.clear();
							hero.rect.x -= 10;
							hero.draw();
						}
					}
					break;
				case 39:
					if(hero.rect.x != 460) {
						if( hero.rect.x < 140 && hero.rect.x > 50 && hero.rect.y > 60 && hero.rect.y < 140){
							confirm('与野怪相撞，发起攻击获得红包奖励')
							return;
						}else{
							hero.clear();
							hero.rect.x += 10;
							hero.draw();
						}
					}
					break;
				case 38:
					if(hero.rect.y != 0) {
						if( hero.rect.y > 100 && hero.rect.y < 150 && hero.rect.x > 65 &&  hero.rect.x < 140 ){
							confirm(`与野怪相撞! 发起攻击获得红包奖励`)
							return;
						}else{
							hero.clear();
							hero.rect.y -= 10;
							hero.draw();
						}
					}
					break;
				default:
					break;
			}
		}
	}
	var resourceManager = prepare();
	resourceManager.getResource(function (context, heroImg, allSpriteImg) {
		drawHero(context, heroImg, allSpriteImg);
	});
})();