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
			alert("123");
			self.log('deviceready inner function');
		},false);
		//this.onDeviceReady();
		//this.log(typeof(Test.onDeviceReady));
		//this.log('this ready='+ typeof(this.onDeviceReady));

		document.addEventListener('menubutton', function(){
			self.log('push menu');
		}, false);
		
		document.addEventListener('resume', this.onResume, false);
	},
	
	onDeviceReady: function(){
		this.log('onDeviceReady work');
		document.querySelector(this.container).innerHTML = 'device ready';
	},
	
	onResume: function(){
		this.log('onResume work');
		document.querySelector(this.container).innerHTML = 'device onResume';
	},
	log: function( str ){
		document.querySelector('.log').innerHTML += str + '<br />';
	}
};