/**
 * @file 小程序核心逻辑层
 * @author yuanxin
 */
class Bridge {
	createView(id) {
		return new Promise(resolve => {
			let frame = document.createElement('iframe');
			frame.src = './view.html';
			frame.id = id;
			frame.className = 'view';
			frame.onload = () => resolve(frame);
			document.body.appendChild(frame);
		});
	}

	/**
	 * 逻辑层向视图层发消息
	 * @param {String} [id] - 视图的唯一标识
	 * @param {Object} [params] - 需要set的数据
	 */
	postMessage(id, params) {
		const target = document.querySelector('#' + id);
		target.contentWindow.postMessage(params);
	}

	onMessage(callback) {
		window.addEventListener('message', function (event) {
			callback && callback(event.data);
		});
	}
}

window.__bridge = new Bridge();