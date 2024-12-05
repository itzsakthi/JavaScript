var today = new Date();
var a = today.getDate();
console.log(a);


var Smithworksbilling = function(){ 

    this.domainTxt = localStorage.getItem('sw_b_domain');
    this.domain =  'https://'+ this.domainTxt+'.pearlreynolds.xyz/billing/';
    this.token = '';
    // this.domain =  'https://msm.pearlreynolds.xyz/billing/';

    this.checkLogin = function(){

        var _this = this;
        if(localStorage.getItem('sw_b_token') == null || localStorage.getItem('sw_b_token')==''){
            // window.location.href = 'app-login.html';
        } else {
            window.location.href = 'index.html';
        }
    }
    this.verifyLogin = function(){

        var _this = this;
        if(localStorage.getItem('sw_b_token') == null || localStorage.getItem('sw_b_token')==''){
            window.location.href = 'app-login.html';
        }
        if(localStorage.getItem('trigger_date_period')!='1' || dashboardPage!=undefined){
            _this.checkDateFrequency();
        }
    }
}
