export const TRANSITION_PROPS = {
	duration: "duration-500",
	startTransY: "translate-y-20",
	startOpacity: "opacity-0",
	endTransY: "translate-y-0",
	endOpacity: "opacity-100",
	startClass: function(){
		return `transition transform ${this.duration} ${this.startTransY} ${this
			.startOpacity}`;
	}
};
