/******************************************************************************************

 Now, if your weeks start on Sunday, pass in a "0" for the pStartOfWeek parameter, like so:

 var mThisSunday = new Date().startOfWeek(0);

 Similarly, if your weeks start on Monday, pass in a "1" for the pStartOfWeek parameter:
 var mThisMonday = new Date().startOfWeek(1);
 */
Date.prototype.startOfWeek = function (pStartOfWeek) {
    var mDifference = this.getDay() - pStartOfWeek;

    if (mDifference < 0) {
        mDifference += 7;
    }

    return new Date(this.addDay(mDifference * -1));
}


Date.prototype.addDay = function (pDays) {
    var mDate = new Date(this.valueOf());
    mDate.setDate(mDate.getDate() + pDays);
    return mDate;
};
/*_________________________________________________________________________________End __getweek date*/

/*_______________________________________________________________format*/

Date.prototype.format = function () {
    var numberPading = function (num) {
        return (num < 10) ? '0' + (num) : num;
    }
    var Result = this.getFullYear() + '-' + numberPading((this.getMonth() + 1)) + '-' + numberPading(this.getDate());
    return Result;
}
/*____________________________________________________end______format*/

/*_________________________________________________________________________________time*/


String.prototype.hourToSecond = function () {
    var hour = this.trim();
    var hourParts=hour.split(' ');

    var hourArray = hourParts[0].split(':');


    var hourWithType=(typeof hourParts[1]!= 'undefined' && hourParts[1]=='pm' )? parseInt(hourArray[0]) +12:parseInt(hourArray[0]);

    return (hourWithType * 60 * 60) + (parseInt(hourArray[1]) * 60);
}


Number.prototype.secondToHour = function () {
    var second = this;

    var hoursNumber = Math.floor(second / 3600);
    var reminderSeconds = second - (hoursNumber * 3600);
    var momentsNumber = Math.floor(reminderSeconds / 60);
    reminderSeconds = reminderSeconds - (momentsNumber * 60);


    return hoursNumber.zeroPadding() + ':' + momentsNumber.zeroPadding();
}


Number.prototype.secondToHourWithType = function () {
    var second = this;

    var hoursNumber = Math.floor(second / 3600);
    var reminderSeconds = second - (hoursNumber * 3600);
    var momentsNumber = Math.floor(reminderSeconds / 60);
    reminderSeconds = reminderSeconds - (momentsNumber * 60);

    var amPm='am';
    if(hoursNumber > 12){
        amPm='pm';
        hoursNumber-=12;
    }else if(hoursNumber == 12){

        amPm='pm';
    }else if(hoursNumber == 0){

        hoursNumber=12;
        amPm='am';
    }
    return hoursNumber.zeroPadding() + ':' + momentsNumber.zeroPadding()+' '+amPm;
}

String.prototype.addSecond=function (second){
    var newHour=this.hourToSecond() + second;

    return newHour.secondToHour();
}



function currentTime(){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    return h+':'+m+':'+s;
}
/*___________helper*/
String.prototype.zeroPadding = function () {

    return (this < 10) ? '0' + this : this;
}
Number.prototype.zeroPadding = function () {

    return (this < 10) ? '0' + this : this;
}
/*_______END____helper*/
/*_______________________________________________________________________end_time*/



function dividePeriodToInterval(startHour,endHour,period){
    var intervalArray={};
    if(!period>0){return {};}

    for(var i=startHour.hourToSecond();i<endHour.hourToSecond();i+=(period*60)){
        intervalArray[i.secondToHour()]=i.secondToHourWithType();
    }

    return intervalArray;
}
