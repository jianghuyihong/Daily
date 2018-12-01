Daily work report<br>
>>(daily document description)

知识点：<br>
>>1、contentEditable    开启元素的编辑状态<br>
>>2、LocalStorage       本地存贮器<br>
>>>>a、localStorage.setItem("_workTime", 0)   设置本地存储器的变量_workTime<br>
>>>>b、localStorage.getItem("_workTime")      获取本地存储器的变量_workTime<br>


参数：<br>
>>1、_nowDate     当前的日期<br>
>>2、_nowTime     当前的时间<br>
>>3、_lastDate    上一次日报的日期<br>
>>4、_workDay     当前星期的第几天<br>
>>5、_workTime    当前星期上班的时间长度<br>

说明：<br>
>>1、如果当天是星期一，也就是new Date().getDay() ==1,则设置 <br>
>>>>localStorage.setItem("_workDay", 1);    本地缓存上班天数<br>
>>>>localStorage.setItem("_workTime", 0);   本地缓存上班时长<br>
>>2、点击样式选择器editElement则开启此标签的编辑模式，反之关闭该元素的编辑模式<br>
