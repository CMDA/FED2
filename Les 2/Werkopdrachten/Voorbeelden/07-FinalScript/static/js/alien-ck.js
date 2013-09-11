/**
 *	Alien script
 *	
 *
 */// Create local scope with self-invoked function, passing jQuery
(function(e){function n(t,n){this.name=t;this.visual=e("img");this.message=e("figcaption");this.speak();var r=this;e(n).click(function(){var t=e(this).attr("class"),n=e(this).attr("data-animation");r.behave(t,n)})}var t="./static/images/";n.prototype.speak=function(){this.message.text("Hi, my name is "+this.name)};n.prototype.behave=function(e,n){this.visual.attr("src",t+e+".png").attr("class","").addClass("animated "+n)};var r=new n("Robert Rock","button")})(jQuery);