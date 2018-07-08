function calc(km,wt)
{
	var p=0;
	if(km<5)
		p= km*10;
    else if (km>=5 && km<=10) {
    	p = 5*10 + (km-5)*20;
    }
    else if (km>10 && km<=15) {
    	p = 5*10 + 5*20 + (km-10)*35;
    }

 var w=0;

   if(wt<5)
   {
     w = wt*0;
   }
    else if (wt>5 && wt<=10) {
    	w = (wt-5)*10;
    }
    else if (wt>10 && wt<=15) {
    	w = 5*10 + (wt-10)*15;
    }

    return p+w;
}



window.onload = function(){

  var time = document.getElementById('time');
  var km = document.getElementById('km');
  var result = document.getElementById('result');
  var btn = document.getElementById('btn');

  btn.onclick = function(){
  	var timevalue = time.value;
  	var kmvalue = km.value;
  	var total = calc(timevalue,kmvalue)
    result.innerHTML = total;

  }
};