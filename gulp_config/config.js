var config = {
	"VERSION": 1.2,
	"APP_NAME": "indranil-sen",
	"LANDING_PAGE": "index.html",
	"SERVER": "server.js",
	"folders": {
		"css":"css",
		"js":"js",
		"partials":"partials",
		"img":"img",
		"assets":"assets"
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
			"styles": ["public/css/**/*.css","!public/css/styles-main.css"]
		},
		concat_file_name : function() {
			return config.APP_NAME+'-v'+config.VERSION+'.min.css';
		}
	},
	"partials": {
		"tasks": {
			"src": "public/partials/**/*"
		}
	},
	"js": {
		"tasks": {
			"scripts": "public/js/**/*.js"
		},
		concat_file_name : function() {
			return config.APP_NAME+'-v'+config.VERSION+'.min.js';
		}
	},
	"img": {
		"tasks": {
			"src": "public/img/**/*"
		}
	},
	"assets": {
		"tasks": {
			"src": "public/assets/**/*"
		}
	}
};

module.exports = config;