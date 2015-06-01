var Test = {
	container: '',
	initialize: function( _container ){
		this.container = _container;
		this.bindEvents();
	},
	bindEvents: function(){
		this.log(this.container);
		var self = this;
		//document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("deviceready", function(){

			self.log('deviceready inner function');
		},false);
		
		/*document.addEventListener('menubutton', function(){
			self.log('push menu');
		}, false);*/
		document.addEventListener('menubutton', Test.pushMenu, false);
		
		document.addEventListener('resume', function(){
			self.log('resume');
		}, false);
		
		document.querySelector('.btn').addEventListener('click', function(){
			self.pushMenu();
			self.log('pushMenu from button');
		}, false);
	},
	
	onDeviceReady: function(){
		this.log('onDeviceReady work');
		document.querySelector(this.container).innerHTML = 'device ready';
	},
	
	pushMenu: function(){
		this.log('pushMenu work');
		document.querySelector(this.container).innerHTML = 'device pushMenu';
	},
	log: function( str ){
		document.querySelector('.log').innerHTML += str + '<br />';
	}
};