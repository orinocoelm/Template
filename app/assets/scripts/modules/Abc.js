import $ from 'jquery';

class Abc {
	constructor() {
		this.linky =  $(".linky");
		this.events();
	}
	
	events() {
		this.linky.hover(this.linkyHover.bind(this));
	}
	
	linkyHover() {
		this.linky.toggleClass("linky-larger");
	}
};

export default Abc;