var monthNames = [
"Jan", 
"Feb", 
"Mar", 
"Apr", 
"May", 
"Jun",
"Jul", 
"Aug", 
"Sep", 
"Oct", 
"Nov", 
"Dec"
];

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth(); // getMonth() is zero-based
  var dd = this.getDate();

  return [
  			(mm>9 ? '' : '0') + monthNames[mm],
          	(dd>9 ? '-' : '-0') + dd,
         	"-" + this.getFullYear()
         ].join('');
};

var date = new Date();
console.log(date.yyyymmdd());