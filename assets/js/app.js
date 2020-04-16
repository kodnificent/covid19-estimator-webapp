(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(t,e,s){s(13),t.exports=s(54)},function(t,e,s){s(14),window.axios=s(15),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.Vue=s(32);var a=s(36);a.keys().map((function(t){Vue.component(t.split("/").pop().split(".")[0],a(t).default)}));new Vue({el:"#app",mounted:function(){}})},,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){var a={"./components/AppComponent.vue":41,"./components/ButtonComponent.vue":42,"./components/OutputComponent.vue":43,"./components/form/FormComponent.vue":40,"./components/form/FormProgressIndicator.vue":44};function i(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id=36},function(t,e,s){"use strict";var a=s(45);s.n(a).a},function(t,e,s){"use strict";var a=s(50);s.n(a).a},function(t,e,s){"use strict";var a=s(52);s.n(a).a},function(t,e,s){"use strict";s.r(e);var a=function(t,e){if(null===t||""==t)return e("Required")},i={props:{},computed:{isFirstStep:function(){return 1===this.current_step.sn},isLastStep:function(){return this.current_step.sn===this.steps.length-1}},methods:{setCurrentStep:function(t){this.steps.forEach((function(t){t.is_current=!1}));var e=this.steps[t-1];e.is_current=!0,this.current_step=e},previousStep:function(){this.setCurrentStep(this.current_step.sn-1)},nextStep:function(){this.validateCurrentStep()&&(this.current_step.is_completed=!0,this.setCurrentStep(this.current_step.sn+1))},validateCurrentStep:function(){var t=this.$refs.form,e=new FormData(t),s=this.current_step.rules,i=function(t,e){var s=[];return e.forEach((function(e){var i=t.get(e.attr);e.rule.some((function(t){if("required"===t){var r=a(i,(function(t){return t}));if(r)return s.push({attr:e.attr,msg:r}),!0}else if("function"==typeof t){var n=t(i,(function(t){return t}));if(n)return s.push({attr:e.attr,msg:n}),!0}}))})),s}(e,s);return s.forEach((function(e){var s=t.querySelector('[name="'.concat(e.attr,'"]'));s.dataset.invalid=!1;var a=s.getAttribute("aria-describedby"),i=document.getElementById(a);i&&(i.dataset.invalid=!1,i.innerText="")})),0===i.length||(i.forEach((function(e){var s=t.querySelector('[name="'.concat(e.attr,'"]'));s.dataset.invalid=!0;var a=s.getAttribute("aria-describedby"),i=document.getElementById(a);i&&(i.dataset.invalid=!0,i.innerText=e.msg)})),!1)},resetForm:function(){this.$refs.form.reset(),this.current_step=this.steps[0],this.output=null,this.success=!1},submitForm:function(){var t=this;if(this.validateCurrentStep()){var e=new FormData(this.$refs.form);this.submitting=!0,axios.post("http://covid19-estimator-api.herokuapp.com/api/v1/on-covid-19/json",e).then((function(e){t.success=!0,t.output=e.data,t.current_step.is_completed=!0,t.setCurrentStep(t.current_step.sn+1)})).catch((function(e){t.success=!1})).then((function(){t.submitting=!1}))}}},data:function(){return{output:null,success:!1,submitting:!1,steps:[{sn:1,progress_text:"Step 1 of 3: Period Type",progress_label:"step 1",is_current:!1,is_completed:!1,rules:[{attr:"region[name]",rule:["required","number"]},{attr:"region[avgAge]",rule:["required","number"]},{attr:"region[avgDailyIncomeInUSD]",rule:["required","number"]},{attr:"region[avgDailyIncomePopulation]",rule:["required","number"]}]},{sn:2,progress_text:"Step 2 of 3: Data",progress_label:"step 2",is_current:!1,is_completed:!1,rules:[{attr:"population",rule:["required","number"]},{attr:"timeToElapse",rule:["required","number"]},{attr:"reportedCases",rule:["required","number"]},{attr:"totalHospitalBeds",rule:["required","number"]},{attr:"periodType",rule:["required","number"]}]},{sn:3,progress_text:"Step 3 of 3: Complete",progress_label:"complete",is_current:!1,is_completed:!1}],current_step:{}}},created:function(){this.setCurrentStep(1)},mounted:function(){}},r=(s(38),s(1)),n=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{ref:"form",staticClass:"form md:w-1/2 lg:w-1/4",attrs:{name:"estimation-form"},on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.submitForm(e)}}},[s("form-progress-indicator",t._b({},"form-progress-indicator",{steps:t.steps,current_step:t.current_step},!1)),t._v(" "),s("fieldset",{directives:[{name:"show",rawName:"v-show",value:1===t.current_step.sn,expression:"current_step.sn === 1"}],staticClass:"form__fieldset",attrs:{"data-active":1===t.current_step.sn}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),s("fieldset",{directives:[{name:"show",rawName:"v-show",value:2===t.current_step.sn,expression:"current_step.sn === 2"}],staticClass:"form__fieldset",attrs:{"data-active":2===t.current_step.sn}},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)]),t._v(" "),s("div",{attrs:{role:"alert"}},[t.output?s("div",[s("output-component",{attrs:{output:t.output}}),t._v(" "),s("button",{staticClass:"btn btn--primary btn--rounded block w-full mt-6",attrs:{type:"button"},on:{click:t.resetForm}},[s("span",{staticClass:"btn__text"},[t._v("run new estimate")])])],1):t._e()]),t._v(" "),t.output?t._e():s("div",{staticClass:"form__group"},[s("button",{staticClass:"btn btn--rounded",attrs:{disabled:t.isFirstStep||t.submitting,type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.previousStep(e)}}},[s("span",{staticClass:"btn__text"},[t._v("previous")])]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.isLastStep,expression:"!isLastStep"}],staticClass:"btn btn--rounded btn--shadowed btn--primary mt-2",attrs:{disabled:t.submitting,type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.nextStep(e)}}},[s("span",{staticClass:"btn__text"},[t._v("next")])]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.isLastStep,expression:"isLastStep"}],staticClass:"btn btn--rounded btn--shadowed btn--primary mt-2",attrs:{disabled:t.submitting,type:"submit","data-go-estimate":""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitForm(e)}}},[s("span",{staticClass:"btn__text"},[t._v("estimate")])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("legend",{staticClass:"form__legend"},[this._v("\n            Region Information\n            "),e("span",{staticClass:"block text-xs text-gray-700",attrs:{"aria-hidden":"true"}},[this._v("\n                All fields are required "),e("span",{staticClass:"text-red-600"},[this._v("*")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form__group"},[s("label",{staticClass:"form__label",attrs:{for:"region.name"}},[t._v("\n                Which region would like to estimate for?\n            ")]),t._v(" "),s("select",{staticClass:"form__select",attrs:{"data-invalid":"false",id:"region.name",name:"region[name]","aria-required":"true","aria-describedby":"region.name-feedback"}},[s("option",{attrs:{value:"Africa"}},[t._v("Africa")]),t._v(" "),s("option",{attrs:{value:"Asia"}},[t._v("Asia")]),t._v(" "),s("option",{attrs:{value:"Australia"}},[t._v("Australia")]),t._v(" "),s("option",{attrs:{value:"Europe"}},[t._v("Europe")]),t._v(" "),s("option",{attrs:{value:"North America"}},[t._v("North America")]),t._v(" "),s("option",{attrs:{value:"South America"}},[t._v("South America")])]),t._v(" "),s("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.name-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"region.avgAge"}},[this._v("\n                What is the average age of the citizens?\n            ")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"region.avgAge",name:"region[avgAge]",type:"number",placeholder:"18","aria-required":"true","aria-describedby":"region.avgAge-feedback"}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.avgAge-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"region.avgDailyIncomeInUSD"}},[this._v("\n                What is the average daily income of the citizens? ($)\n            ")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"region.avgDailyIncomeInUSD",name:"region[avgDailyIncomeInUSD]",type:"number",placeholder:"10","aria-required":"true","aria-describedby":"region.avgDailyIncomeInUSD-feedback"}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.avgDailyIncomeInUSD-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"region.avgDailyIncomePopulation"}},[this._v("\n                What is the ratio of the average daily income to the population?\n            ")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"region.avgDailyIncomePopulation",name:"region[avgDailyIncomePopulation]",type:"number",placeholder:"0.75","aria-required":"true","aria-describedby":"region.avgDailyIncomePopulation-feedback"}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"region.avgDailyIncomePopulation-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("legend",{staticClass:"form__legend"},[this._v("\n            Estimation Data\n            "),e("span",{staticClass:"block text-xs text-gray-600",attrs:{"aria-hidden":"true"}},[this._v("\n                All fields are required "),e("span",{staticClass:"text-red-600"},[this._v("*")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"population"}},[this._v("Population of the region")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"population",name:"population",type:"number",placeholder:"58,000,000","aria-required":"true","aria-describedby":"population-feedback","data-population":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"population-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"timeToElapse"}},[this._v("What is the expected duration of this estimate?")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"timeToElapse",name:"timeToElapse",type:"number",placeholder:"28","aria-required":"true","aria-describedby":"timeToElapse-feedback","data-time-to-elapse":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"timeToElapse-feedback","aria-live":"polite"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form__group"},[s("label",{staticClass:"form__label",attrs:{for:"periodType"}},[t._v("Will this duration be in days, weeks or months?")]),t._v(" "),s("select",{staticClass:"form__select",attrs:{"data-invalid":"false",id:"periodType",name:"periodType","aria-required":"true","aria-describedby":"periodType-feedback","data-period-type":""}},[s("option",{attrs:{value:"days",selected:""}},[t._v("days")]),t._v(" "),s("option",{attrs:{value:"weeks"}},[t._v("weeks")]),t._v(" "),s("option",{attrs:{value:"months"}},[t._v("months")])]),t._v(" "),s("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"periodType-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"reportedCases"}},[this._v("How many positive cases of COVID19 has been reported?")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"reportedCases",name:"reportedCases",type:"number",placeholder:"5","aria-required":"true","aria-describedby":"reportedCases-feedback","data-reported-cases":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"reportedCases-feedback","aria-live":"polite"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form__group"},[e("label",{staticClass:"form__label",attrs:{for:"totalHospitalBeds"}},[this._v("How many hospital beds are available in this region?")]),this._v(" "),e("input",{staticClass:"form__input",attrs:{"data-invalid":"false",id:"totalHospitalBeds",name:"totalHospitalBeds",type:"number",placeholder:"28,000,000","aria-required":"true","aria-describedby":"totalHospitalBeds-feedback","data-total-hospital-beds":""}}),this._v(" "),e("small",{staticClass:"form__feedback",attrs:{"data-invalid":"false",id:"totalHospitalBeds-feedback","aria-live":"polite"}})])}],!1,null,"467af9c4",null);e.default=n.exports},function(t,e,s){"use strict";s.r(e);var a={props:{},mounted:function(){}},i=(s(37),s(1)),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gray-100"},[s("section",{staticClass:"bg-primary-lighter px-4 py-6 md:py-8",staticStyle:{"min-height":"250px"}},[s("div",{staticClass:"w-full md:w-1/2 mx-auto"},[s("h1",{staticClass:"text-4xl md:text-5xl font-black text-primary text-center"},[t._v("Covid19 Impact Estimator")]),t._v(" "),s("p",{staticClass:"text-center font-semibold italic text-lg text-gray-800"},[t._v("\n                Too many patients, not enough hospitals and beds. A serious shortage of ventilators, masks \n                and other PPE - if we donʼt practice social distancing.\n            ")]),t._v(" "),s("img",{staticClass:"mx-auto mt-4",attrs:{src:"./assets/imgs/corona.svg",height:"250",width:"250",alt:"corona virus"}})])]),t._v(" "),s("section",{staticClass:"section"},[t._m(0),t._v(" "),s("form-component")],1),t._v(" "),t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 mx-auto"},[e("h1",{staticClass:"section__title mb-0"},[this._v("Estimate Calculator")]),this._v(" "),e("p",{staticClass:"text-center text-gray-700"},[this._v("\n                This Estimate calculator calculates the impact of COVID19 on lives, health systems, supply chains, and the economy.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"bg-gray-300 py-4 px-4 text-center"},[e("p",[this._v("\n            Teched up by "),e("a",{staticClass:"text-primary-dark",attrs:{rel:"nofollow",target:"__blank",href:"https://twitter.com/_sirvic"}},[this._v("kodnificent")]),this._v(" © 2020 Covid-19 Impact Estimator\n        ")]),this._v(" "),e("p",[e("a",{staticClass:"text-primary-dark",attrs:{rel:"nofollow",target:"__blank",href:"https://github.com/kodnificent/covid-19-estimator-webapp"}},[this._v("source code")])])])}],!1,null,null,null);e.default=r.exports},function(t,e,s){"use strict";s.r(e);var a={props:{},mounted:function(){}},i=s(1),r=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=r.exports},function(t,e,s){"use strict";s.r(e);var a={props:{output:{required:!0,type:Object}},methods:{hospBedText:function(t){var e="";switch(!0){case t<0:e="there will be a shortage of ".concat(t.toLocaleString()," hospital beds for severe covid19 patients after hospitals are full to capacity.");break;case t>0:e="there will be ".concat(t.toLocaleString()," available hospital beds for severe covid19 patients.");default:e="there will be no available hospital beds for severe covid19 patients."}return e}},mounted:function(){}},i=s(1),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"text-primary mb-3 capitalize"},[t._v("Estimate result for "+t._s(t.output.data.region.name))]),t._v(" "),s("h4",{staticClass:"mb-1 font-semibold"},[t._v("Best case")]),t._v(" "),s("p",{staticClass:"mb-4"},[t._v("\n        Given the number of reported positive cases of covid19 infection, expect the number of "),s("span",{staticClass:"font-semibold"},[t._v("currently infected persons")]),t._v("\n        to be "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.impact.currentlyInfected.toLocaleString()))]),t._v("."),s("br"),t._v("\n        In the next \n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.data.timeToElapse)+" "+t._s(t.output.data.periodType))]),t._v(", expect this number to increase to \n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.impact.infectionsByRequestedTime.toLocaleString()))]),t._v(".\n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.impact.severeCasesByRequestedTime.toLocaleString()))]),t._v(" persons \n        will require "),s("span",{staticClass:"font-semibold"},[t._v("hospitalization to recover")]),t._v(".\n    ")]),t._v(" "),s("p",{staticClass:"mb-4"},[t._v("\n        In "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.data.timeToElapse)+" "+t._s(t.output.data.periodType))]),t._v(", \n        "+t._s(t.hospBedText(t.output.impact.hospitalBedsByRequestedTime))+"\n    ")]),t._v(" "),s("p",{staticClass:"mb-4"},[s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.impact.casesForICUByRequestedTime.toLocaleString()))]),t._v(" \n        covid19 positive patients will require "),s("span",{staticClass:"font-semibold"},[t._v("intense ICU care")]),t._v(" while \n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.impact.casesForVentilatorsByRequestedTime.toLocaleString()))]),t._v(" \n        will require "),s("span",{staticClass:"font-semibold"},[t._v("ventilators")]),t._v(".\n    ")]),t._v(" "),s("p",{staticClass:"mb-4"},[t._v("\n        The economy is likey to loose "),s("span",{staticClass:"font-semibold"},[t._v("$"+t._s(t.output.impact.dollarsInFlight.toLocaleString()))]),t._v("\n         daily within the\n         "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.data.timeToElapse)+" "+t._s(t.output.data.periodType))]),t._v(" period.\n    ")]),t._v(" "),s("h4",{staticClass:"mb-1 font-semibold"},[t._v("Worst case")]),t._v(" "),s("p",{staticClass:"mb-4"},[t._v("\n        Given the number of reported positive cases of covid19 infection, expect the number of "),s("span",{staticClass:"font-semibold"},[t._v("currently infected persons")]),t._v("\n        to be "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.severeImpact.currentlyInfected.toLocaleString()))]),t._v("."),s("br"),t._v("\n        In the next \n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.data.timeToElapse)+" "+t._s(t.output.data.periodType))]),t._v(", expect this number to increase to \n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.severeImpact.infectionsByRequestedTime.toLocaleString()))]),t._v(".\n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.severeImpact.severeCasesByRequestedTime.toLocaleString()))]),t._v(" persons \n        will require "),s("span",{staticClass:"font-semibold"},[t._v("hospitalization to recover")]),t._v(".\n    ")]),t._v(" "),s("p",{staticClass:"mb-4"},[t._v("\n        In "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.data.timeToElapse)+" "+t._s(t.output.data.periodType))]),t._v(", \n        "+t._s(t.hospBedText(t.output.severeImpact.hospitalBedsByRequestedTime))+"\n    ")]),t._v(" "),s("p",{staticClass:"mb-4"},[s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.severeImpact.casesForICUByRequestedTime.toLocaleString()))]),t._v(" \n        covid19 positive patients will require "),s("span",{staticClass:"font-semibold"},[t._v("intense ICU care")]),t._v(" while \n        "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.severeImpact.casesForVentilatorsByRequestedTime.toLocaleString()))]),t._v(" \n        will require "),s("span",{staticClass:"font-semibold"},[t._v("ventilators")]),t._v(".\n    ")]),t._v(" "),s("p",{staticClass:"mb-4"},[t._v("\n        The economy is likey to loose "),s("span",{staticClass:"font-semibold"},[t._v("$"+t._s(t.output.severeImpact.dollarsInFlight.toLocaleString()))]),t._v("\n         daily within the\n         "),s("span",{staticClass:"font-semibold"},[t._v(t._s(t.output.data.timeToElapse)+" "+t._s(t.output.data.periodType))]),t._v(" period.\n    ")])])}),[],!1,null,null,null);e.default=r.exports},function(t,e,s){"use strict";s.r(e);var a={props:{steps:{required:!0,type:Array},current_step:{required:!0,type:Object}}},i=(s(39),s(1)),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{staticClass:"progress-indicator",attrs:{tabindex:"0",role:"progressbar","aria-valuemin":"1","aria-valuemax":"3","aria-valuenow":t.current_step.sn,"aria-valuetext":t.current_step.progress_text,"aria-live":"polite"}},t._l(t.steps,(function(e){return s("li",{key:e.sn,staticClass:"progress-indicator__item",attrs:{"aria-hidden":"true","data-active":e.is_current?"true":"false","data-completed":e.is_completed?"true":"false"}},[s("span",{staticClass:"progress-indicator__icon"}),t._v(" "),s("button",{staticClass:"progress-indicator__text cursor-default",attrs:{type:"button",disabled:!e.is_current}},[t._v(t._s(e.progress_label))])])})),0)}),[],!1,null,"55f9d38d",null);e.default=r.exports},function(t,e){},,,,,function(t,e){},,function(t,e){},,function(t,e){}],[[12,1,2]]]);