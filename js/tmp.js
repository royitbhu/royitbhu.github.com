function WriteTodaysDate() { document.write("roy");
var months = new Array();
months[1] = "January"; months[2] = "February"; months[3] = "March";
months[4] = "April"; months[5] = "May"; months[6] = "June";
months[7] = "July"; months[8] = "August"; months[9] = "September";
months[10] = "October"; months[11] = "November"; months[12] = "December";
var todaysdate = new Date();
var date  = todaysdate.getDate(); var day  = todaysdate.getDay() + 1;
var month = todaysdate.getMonth() + 1; var yy = todaysdate.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var year2 = year - (2000*1); year2 = (year2 < 10) ? "0" + year2 : year2;
document.write("roy");
}document.write("roy");
WriteTodaysDate(TodaysDateStyle);
