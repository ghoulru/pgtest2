var pushMenuOutside = function(){
	Test.log('pushMenuOutside');
}

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
		document.addEventListener('menubutton', pushMenuOutside, false);
		
		document.addEventListener('resume', function(){
			self.log('resume');
		}, false);
		
		document.querySelector('.btn').addEventListener('click', function(){
			self.pushMenu();
			self.log('pushMenu from button');
		}, false);
		
		document.querySelector('.btn-ajax').addEventListener('click', function(){
			self.getAjaxData();			
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
	
	getAjaxData: function(){
		this.log('getAjaxData work');

		$.ajax({
			type: 'POST',
			url: 'http://design.ghoul.ru/pgtest2.php',
			cache: false,
			data: {}
		}).done(function ($data){
			this.log( $data );
			this.log( $data.orderId );
		});
	},	
	
	log: function( str ){
		document.querySelector('.log').innerHTML += str + '<br />';
	}
};

