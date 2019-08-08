
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
		const resourceInit = Promise.all([
			imgTask(heroImg, './hero.png'),
			imgTask(allSpriteImg, './all.jpg'),
		]);
		return {
			/**
			 * @param {Function} [callback] - 当准备好了之后要调用的回掉函数
			 */
			getResource(callback) {
				resourceInit.then(function () {
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
				width: 20,
				height: 30
			},

			draw: draw,
			clear: clear
		};
		hero.draw();

		
		function Monster (location) {
			this.img = allSpriteImg,
			this.context = context,
			this.imgPos = {
				x: 858,
				y: 529,
				width: 33,
				height: 33
			},
			this.rect = {
				x: location.x,
				y: location.y,
				width: 50,
				height: 20
			}
		};
		Monster.prototype.draw = draw;
		var monster = new Monster( { x:100, y:140 } );
		monster.draw();


		function Greenbone(location) {
			Monster.call(this,location);	
			this.rect.width = 50;
			this.rect.height = 50;
			this.imgPos.x = 660;
			this.imgPos.y = 165;
		}
		Greenbone.prototype = Object.create( Monster.prototype );
		var greenBone = new Greenbone( { x:200, y:200 } );
		greenBone.draw();

		var max = monster.rect.x + monster.rect.width 	//200
		var min = monster.rect.x - hero.rect.width;	//70
		var y_min = monster.rect.y; //100
		var y_max = monster.rect.y - hero.rect.height - 10; //50
		var left_x_max = monster.rect.x + monster.rect.width +10 	//220
		var left_y_min = monster.rect.y - hero.rect.height;		//60
		var left_y_max = monster.rect.y + monster.rect.height 	//130
		var right_x_min = monster.rect.x - hero.rect.width - 10;
		var up_max_y = monster.rect.y + hero.rect.height; 
		var up_min_y = monster.rect.y 	
		var up_min_x = monster.rect.x - hero.rect.width 
		var up_max_x = monster.rect.x + monster.rect.width
		console.log( max,min,y_min,y_max,up_min_y,up_max_y,left_x_max,left_y_min,left_y_max )

		document.onkeydown = function (event) {
 			var e = event || window.event || arguments.callee.call.arguments[0];
			switch (e && e.keyCode) {
				case 40:
					if(hero.rect.y != 260) {
						if( hero.rect.y > y_max && hero.rect.y < y_min && hero.rect.x > min && hero.rect.x < max ){
							// confirm('与野怪相撞，发起攻击获得红包奖励')
							console.log('下')
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
						if( hero.rect.x > monster.rect.x && hero.rect.x < left_x_max && hero.rect.y > left_y_min && hero.rect.y < left_y_max ){
							// confirm('与野怪相撞，发起攻击获得红包奖励')
							console.log('左')
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
						if( hero.rect.x > right_x_min && hero.rect.y < left_y_max && hero.rect.y > left_y_min  && hero.rect.x < monster.rect.x ){
							//
							// confirm('与野怪相撞，发起攻击获得红包奖励')
							console.log('右')
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
						if( hero.rect.y < up_max_y && hero.rect.y > monster.rect.y && hero.rect.x > up_min_x && hero.rect.x < up_max_x ){
							// confirm(`与野怪相撞! 发起攻击获得红包奖励`)
							console.log('上')
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