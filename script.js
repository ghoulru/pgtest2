var Test {
	container: '',
	init : function( _container ){
		this.container = _container;
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	
	onDeviceReady: function(){
		document.querySelector(this.cont).innerHTML = 'device ready';
	}
}