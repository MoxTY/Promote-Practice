/**
 * @file 小程序核心逻辑层
 * @author yuanxin
 */
(function (global) {
	let wx = {};
	let classMap = {};

	class Logic {

		init() {
			this.uniqIndex = 0;
			const firstPageUri = window.appJson.pages[0];
			this.navigateTo(firstPageUri);
		}

		_generateUniqId() {
			return 'id' + (this.uniqIndex++);
		}

		navigateTo(uri) {
			const PageClass = classMap[uri];
			const page = new PageClass(this._generateUniqId(), uri);
		}

	}

	class PageBase {

		constructor(id, uri) {
			this.uri = uri;
			this.id = id;
			this._initData();
			this._render()
				.then(() => {
					global.__bridge.postMessage(this.id, {
						type: 'initSet',
						data: this.data
					});
				});
		}

		_initData() {
			this.data = JSON.parse(JSON.stringify(this.data || {}));
		}

		_render() {
			return global.__bridge.createView(this.id)
				.then(frame => {
					this.$el = frame;
				});
		}

		setData() {
			global.__bridge.postMessage(this.id, {
				type: 'setData',
				data: this.data
			});
		}
	}

	const createPageClass = options => {
		class Page extends PageBase {
			constructor(...args) {
				super(...args);
			}
		}
		Object.assign(Page.prototype, options);
		return Page;
	};

	const Page = (uri, options) => {
		classMap[uri] = createPageClass(options);
	};

	global.logic = new Logic();
	global.Page = Page;
})(window);