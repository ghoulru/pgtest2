var Test = {
	container: '',
	init : function( _container ){
		this.container = _container;
		document.addEventListener('deviceready', Test.onDeviceReady, false);
		//this.onDeviceReady();
	},
	
	onDeviceReady: function(){
		document.querySelector(this.container).innerHTML = 'device ready';
	}
}