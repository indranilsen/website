var config = {
	"VERSION": 1.0,
	"APP_NAME": "indranil-sen",
	"LANDING_PAGE": "index.html",
	"SERVER": "server.js",
	"folders": {
		"css":"css",
		"js":"js",
		"partials":"partials",
		"img":"img",
	},
	"inject": {
		"injectOptionsCss": {
			ignorePath: 'css',
			addRootSlash: false,
			transform: function(elm){
				var prepend = '/';
				return '<link rel="stylesheet" href="'+prepend+elm+'">';
			}
		},
		"injectOptionsJs": {
			ignorePath: 'js',
			addRootSlash: false,
			transform: function(elm){
				var prepend = '/';
				return '<script src="'+prepend+elm+'"></script>';
			}
		}
	},
	"prod": {
		"main_folder": "dist"
	},
	"css": {
		"tasks": {
			"styles": ["css/**/*.css","!css/styles-main.css"]
		},
		concat_file_name : function() {
			return config.APP_NAME+'-v'+config.VERSION+'.min.css';
		}
	},
	"partials": {
		"tasks": {
			"src": "partials/**/*"
		}
	},
	"js": {
		"tasks": {
			"scripts": "js/**/*.js"
		},
		concat_file_name : function() {
			return config.APP_NAME+'-v'+config.VERSION+'.min.js';
		}
	},
	"img": {
		"tasks": {
			"src": "img/**/*"
		}
	}
};

module.exports = config;
