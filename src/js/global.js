import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {
	install() {
		Vue.prototype.$getTimes=function(){
			var _date = new Date()
				var year = _date.getFullYear()
				var month = _date.getMonth() + 1
				if(month <= 9) {
					month = '0' + month.toString()
				}
				var day = _date.getDate()
				if(day <= 9) {
					day = '0' + day.toString()
				}
				var hours = _date.getHours()
				if(hours <= 9) {
					hours = '0' + hours.toString()
				}
				var minitue = _date.getMinutes()
				if(minitue <= 9) {
					minitue = '0' + minitue.toString()
				}
				var second = _date.getSeconds()
				if(second<=9){
					minitue = '0' + second.toString()
				}
				var time = year + '-' + month + '-' + day + ' ' + hours + ':' + minitue + ':' + second
			return time
		}
		Vue.prototype.$setCookie = function(name, value) {
			var Days = 30;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
			document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
		}
		Vue.prototype.$getCookie = function(name) {
			var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");　　
			return(arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
		}
		Vue.prototype.$delCookie = function(name) {
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			var getCookie=Vue.prototype.$setCookie;
			var cval = getCookie(name);
			if(cval != null)
				document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		}
		Vue.prototype.$goPrev = function() {
			window.history.go(-1)
		}
		Vue.prototype.$gotoPages = function(path, params) {
			if(params == '' || params == null) {
				this.$router.push(path)
			} else {
				this.$router.push({
					path: path,
					query: params
				})
			}
		}
		Vue.prototype.$fixedTop = function(baseCls, activeCls, scrollT) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			if(document.getElementsByClassName(baseCls)[0]) {
				var header = document.getElementsByClassName(baseCls)[0]
				this.windowScrollTop = scrollTop
				if(scrollTop >= scrollT) {
					header.classList = baseCls + ' ' + activeCls
				} else {
					header.classList = baseCls
				}
			}
		}
	}
}