window.__require=function t(n,i,o){function s(a,h){if(!i[a]){if(!n[a]){var c=a.split("/");if(c=c[c.length-1],!n[c]){var r="function"==typeof __require&&__require;if(!h&&r)return r(c,!0);if(e)return e(c,!0);throw new Error("Cannot find module '"+a+"'")}}var u=i[a]={exports:{}};n[a][0].call(u.exports,function(t){return s(n[a][1][t]||t)},u,u.exports,t,n,i,o)}return i[a].exports}for(var e="function"==typeof __require&&__require,a=0;a<o.length;a++)s(o[a]);return s}({draw:[function(t,n,i){"use strict";cc._RF.push(n,"f5462TtujJN24Qel9ioahcR","draw"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.startPoint=cc.v2(0,0),this.draw=this.node.getComponent(cc.Graphics)},start:function(){this.node.on("touchstart",function(t){var n=t.getLocation(),i=this.node.convertToNodeSpaceAR(n);this.startPoint=i},this),this.node.on("touchmove",function(t){var n=t.getLocation(),i=this.node.convertToNodeSpaceAR(n);this.draw.clear(),this.draw.moveTo(this.startPoint.x,this.startPoint.y),this.draw.lineTo(i.x,i.y),this.draw.stroke()},this),this.node.on("touchend",function(t){this.draw.clear()},this)}}),cc._RF.pop()},{}],main:[function(t,n,i){"use strict";cc._RF.push(n,"cb5f2YxrbJCa5HR0MAjoBMg","main"),cc.Class({extends:cc.Component,properties:{hand:cc.Node,qiang:cc.Node},onLoad:function(){this.startPoint=cc.v2(0,0),this.hudu=0,this.lidu=0},start:function(){this.node.on("touchstart",function(t){var n=t.getLocation(),i=this.node.convertToNodeSpaceAR(n);this.startPoint=i},this),this.node.on("touchmove",function(t){var n=t.getLocation(),i=this.node.convertToNodeSpaceAR(n),o=this.startPoint.x-i.x,s=this.startPoint.y-i.y;this.hudu=Math.atan2(s,o),this.lidu=this.startPoint.sub(i).mag(),this.hand.angle=-45,this.qiang.x=-399,this.qiang.y=-94},this),this.node.on("touchend",function(t){this.hand.angle=0,this.qiang.x=-369,this.qiang.y=-84,this.qiang.angle=this.hudu,console.log(this.hudu),this.qiangFlay(2*this.lidu,this.hudu)},this)},qiangFlay:function(t,n){var i=this.qiang.getComponent("qiang");i.v_x=t*Math.cos(n),i.v_y=t*Math.sin(n),i.fly=!0}}),cc._RF.pop()},{}],qiang:[function(t,n,i){"use strict";cc._RF.push(n,"24ae5BtRxxBsYYGsGq6A0Yy","qiang"),cc.Class({extends:cc.Component,properties:{fly:!1,v_x:0,v_y:0},start:function(){},update:function(t){this.fly&&(this.node.x+=this.v_x*t,this.v_y-=500*t,this.node.y+=this.v_y*t,this.node.x>960||this.node.y<-640?(this.node.angle=0,this.fly=!1):this.node.angle-=50*t)}}),cc._RF.pop()},{}]},{},["draw","main","qiang"]);