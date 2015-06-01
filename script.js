var Test = {
	container: '',
	initialize: function( _container ){
		this.container = _container;
		this.bindEvents();
	},
	bindEvents: function(){
		this.log(this.container);
		//document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("deviceready", function(){
			alert("123");
		},true);
		//this.onDeviceReady();
		//this.log(typeof(Test.onDeviceReady));
		//this.log('this ready='+ typeof(this.onDeviceReady));

		document.addEventListener('menubutton', function(){
			this.log('push menu');
		}, false);
	},
	
	onDeviceReady: function(){
		this.log('onDeviceReady work');
		document.querySelector(this.container).innerHTML = 'device ready';
	},
	
	
	log: function( str ){
		document.querySelector('.log').innerHTML += str + '<br />';
	}
};