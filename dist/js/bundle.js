function eventCache(){function e(e){var t=new Date(e.time).format("h:MM TT"),a=new Date(e.time).format("dddd, mmmm dS, yyyy"),n=e.venue;null!==e.name&&(null!==n?($("#next-meetup .meetup").html('<h3><a href="'+e.event_url+'">'+e.name+'</a></h3><p class="meetup-deets">'+t+"<br />"+a+'<br /><a href="http://google.ca/maps?q='+n.name+"+"+n.address_1+'">'+n.name+", "+n.address_1+"</a></p>").fadeIn(),$("#next-meetup .meetup").after('<a class="sign-up btn btn-chevron" href="'+e.event_url+'">Sign Up Now</a>')):($("#next-meetup .meetup").html('<h3><a href="'+e.event_url+'">'+e.name+'</a></h3><p class="meetup-deets">'+t+"<br />"+a+"</p>").fadeIn(),$("#next-meetup .meetup").after('<a class="sign-up btn btn-chevron" href="'+e.event_url+'">Sign Up Now</a>')))}function t(e){var t=new Date,a=new Date(e);return t-a>=864e5?!1:!0}"undefined"!=typeof Storage?localStorage.event&&t(localStorage.eventCacheDate)?e(JSON.parse(localStorage.event)):$.getJSON("http://api.meetup.com/2/events?status=upcoming&_=1340331595000&order=time&group_urlname=secrethandshake&desc=false&offset=0&format=json&page=1&fields=&sig_id=11518245&sig=842ec88019c16dae46ccc7e01ff55a11aae99ad9&callback=?",function(t){localStorage.event=JSON.stringify(t.results[0]),localStorage.eventCacheDate=new Date,e(JSON.parse(localStorage.event))}):$.getJSON("http://api.meetup.com/2/events?status=upcoming&_=1340331595000&order=time&group_urlname=secrethandshake&desc=false&offset=0&format=json&page=1&fields=&sig_id=11518245&sig=842ec88019c16dae46ccc7e01ff55a11aae99ad9&callback=?",function(t){e(t.results[0])})}function Testimonials(e,t){var a=this;a.quotes=[{quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum justo, eget condimentum nulla mollis sagittis.",author:"Laura Collins",title:"Web Designer"},{quote:"Atqui reperies, inquit, in hoc quidem pertinacem.",author:"Ann Campbell",title:"Illustrator"},{quote:"Vestibulum vitae ullamcorper turpis, vitae euismod turpis. Suspendisse interdum nibh in ipsum euismod, et feugiat ante convallis.",author:"Daniel Bradley",title:"Photographer"},{quote:"Etiam dictum sagittis magna aliquet suscipit.",author:"Douglas Reed",title:"Graphic Artist"}],a.current=0,a.totalQuotes=a.quotes.length,a.showQuote=function(e){$("#testimonials blockquote").fadeOut(t,function(){$("#testimonials .quote").text('"'+a.quotes[e].quote+'"'),$("#testimonials .author").text(a.quotes[e].author),$("#testimonials blockquote").fadeIn(t)})},a.nextQuote=function(){a.current++,a.current>a.totalQuotes-1&&(a.current=0),a.showQuote(a.current)},a.showQuote(0),setInterval(function(){a.nextQuote()},e)}function Slideshow(e,t){var a=this;a.location="images/photos/",a.ext=".jpeg",a.limit=8,a.current=1,a.pushToList=function(){$("#photos #images").html("");for(var e=1;e<=a.limit;e++)$("#photos #images").append("<li><img src='"+a.location+e+a.ext+"'></li>")},a.showSlide=function(){$("#photos #images li").each(function(e,t){$(this).hasClass("current")&&$(this).removeClass("current"),e+1===a.current&&$(this).addClass("current")})},a.nextSlide=function(){a.current++,a.current>a.limit&&(a.current=1),a.showSlide()},a.pushToList(),a.showSlide(1),setInterval(function(){a.nextSlide()},e)}var dateFormat=function(){var e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,a=/[^-+\dA-Z]/g,n=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e};return function(s,i,o){var r=dateFormat;if(1!=arguments.length||"[object String]"!=Object.prototype.toString.call(s)||/\d/.test(s)||(i=s,s=void 0),s=s?new Date(s):new Date,isNaN(s))throw SyntaxError("invalid date");i=String(r.masks[i]||i||r.masks["default"]),"UTC:"==i.slice(0,4)&&(i=i.slice(4),o=!0);var u=o?"getUTC":"get",m=s[u+"Date"](),l=s[u+"Day"](),d=s[u+"Month"](),c=s[u+"FullYear"](),h=s[u+"Hours"](),p=s[u+"Minutes"](),f=s[u+"Seconds"](),y=s[u+"Milliseconds"](),g=o?0:s.getTimezoneOffset(),v={d:m,dd:n(m),ddd:r.i18n.dayNames[l],dddd:r.i18n.dayNames[l+7],m:d+1,mm:n(d+1),mmm:r.i18n.monthNames[d],mmmm:r.i18n.monthNames[d+12],yy:String(c).slice(2),yyyy:c,h:h%12||12,hh:n(h%12||12),H:h,HH:n(h),M:p,MM:n(p),s:f,ss:n(f),l:n(y,3),L:n(y>99?Math.round(y/10):y),t:12>h?"a":"p",tt:12>h?"am":"pm",T:12>h?"A":"P",TT:12>h?"AM":"PM",Z:o?"UTC":(String(s).match(t)||[""]).pop().replace(a,""),o:(g>0?"-":"+")+n(100*Math.floor(Math.abs(g)/60)+Math.abs(g)%60,4),S:["th","st","nd","rd"][m%10>3?0:(m%100-m%10!=10)*m%10]};return i.replace(e,function(e){return e in v?v[e]:e.slice(1,e.length-1)})}}();dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},dateFormat.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},Date.prototype.format=function(e,t){return dateFormat(this,e,t)},$.fn.parallax=function(e){var t=this,a=a||window.event,n={x:a.pageX,y:a.pageY},s={x:-20+n.x*-.01,y:-20+n.y*-.01};$(t).css({"-webkit-transform":"translate3d("+s.x+"px,"+s.y+"px,0px)","-moz-transform":"translate3d("+s.x+"px,"+s.y+"px,0px)",transform:"translate3d("+s.x+"px,"+s.y+"px,0px)"})},$(document).ready(function(){eventCache();var e=$(".photos-content").width()/$(".photos-bg").width();$(".photos-content").on("scroll",function(){var t=$(this).scrollLeft()*-e;$(".photos-bg").css("left",""+t+"px")}),$("#slack form").on("submit",function(e){e.preventDefault();var t=this;$.ajax({url:"/invite",type:"post",data:{email:$(t).find('[name="email"]').val()},beforeSend:function(){$(t).find(".message").addClass("visible").text("Sending invite...")},success:function(e){$(t).find(".message").text(e)},error:function(e){$(t).find(".message").addClass("visible").text(e.responseText)}})});var t="hello",a="secrethandshake",n="@",s="mail";$("#main-footer .social").append('<li><a href="'+s+"to:"+t+n+a+'.ca" title="Email Secret Handshake">Email</a></li>'),new Slideshow(6e3),$(window).width()<=750&&($("#organizers .cta").find("span").text(""),$("#organizers .cta").find(".email").text("Email us"))}),$(window).on("mousemove",function(){$(this).width()>=1200&&$("#hero #hero-stripes").parallax()});