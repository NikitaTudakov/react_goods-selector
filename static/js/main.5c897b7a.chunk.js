(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),r=a(1),s=a(4),i=a(5),d=a(7),m=a(6),u=(a(13),function(e){var t=e.good,a=e.addGood,n=e.removeGood;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"list__item-name"},t),o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"list__button list__button_green",onClick:function(e){a(e,t)}},"add"),o.a.createElement("button",{type:"button",className:"list__button list__button_red",onClick:function(e){n(e,t)}},"remove")))}),g=function(e){var t=e.goods,a=e.addGood,n=e.removeGood;return o.a.createElement("ul",{className:"list"},t.map((function(e){return o.a.createElement("li",{key:e,className:"list__item"},o.a.createElement(u,{good:e,addGood:a,removeGood:n}))})))},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={selectedItem:[]},e.addGood=function(t,a){t.target.closest("li").classList.add("highlight"),e.setState((function(e){return{selectedItem:[].concat(Object(r.a)(e.selectedItem),[a])}}))},e.removeGood=function(t,a){var n=Object(r.a)(e.state.selectedItem);n.filter((function(e){return e===a})).length<=1&&t.target.closest("li").classList.remove("highlight"),n.includes(a)&&n.splice(n.indexOf(a),1),e.setState((function(){return{selectedItem:n}}))},e.clearAll=function(t){Object(r.a)(t.target.nextSibling.children).forEach((function(e){e.classList.remove("highlight")})),e.setState({selectedItem:[]})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.selectedItem;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"title"}," Selected Goods"),o.a.createElement("p",{className:"selected__items"},e.join(", ")),o.a.createElement("button",{type:"button",className:"button_clear",onClick:this.clearAll},"ClearAll"),o.a.createElement(g,{goods:h,addGood:this.addGood,removeGood:this.removeGood}))}}]),a}(o.a.Component);l.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.5c897b7a.chunk.js.map