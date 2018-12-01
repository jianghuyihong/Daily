Daily work report
   (daily document description)

知识点：
1、contentEditable    开启元素的编辑状态
2、LocalStorage       本地存贮器
   a、localStorage.setItem("_workTime", 0)   设置本地存储器的变量_workTime
   b、localStorage.getItem("_workTime")      获取本地存储器的变量_workTime


参数：
1、_nowDate     当前的日期
2、_nowTime     当前的时间
3、_lastDate    上一次日报的日期
4、_workDay     当前星期的第几天
5、_workTime    当前星期上班的时间长度

说明：
     1、如果当天是星期一，也就是new Date().getDay() ==1,则设置 
        localStorage.setItem("_workDay", 1);    本地缓存上班天数
        localStorage.setItem("_workTime", 0);   本地缓存上班时长
     2、点击样式选择器editElement则开启此标签的编辑模式，反之关闭该元素的编辑模式