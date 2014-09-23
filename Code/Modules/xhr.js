var xhr = {
	trigger: function (type, url, success, data) {
		var req = new XMLHttpRequest;
		req.open(type, url, true);

		req.setRequestHeader('Content-type','application/json');

		type === 'POST' ? req.send(data) : req.send(null);

		req.onreadystatechange = function() {
			if (req.readyState === 4) {
				if (req.status === 200 || req.status === 201) {
					success(req.responseText);
				}
			}
		}
	}
};