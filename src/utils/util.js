export const TRANSITION_ON_SCROLL = {
	duration: "duration-500",
	hideTransform: "translate-y-20",
	hideOpacity: "opacity-0",
	showTransform: "translate-y-0",
	showOpacity: "opacity-100",
	getRequiredTransitionClasses: function(){
		return `transition transform ${this.duration}`;
	},
	getHideClasses: function(){
		return `${this.hideTransform} ${this.hideOpacity}`;
	}
};
