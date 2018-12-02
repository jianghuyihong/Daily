"use strict"

//下班函数（保存所有数据）
let EndworkS = () => {
    //计算下班时间
    totalTime();
    //保存本周的上班时长
    localStorage.setItem("_workTime", $("#workTime").html()); //设置本地缓存上班时长
    //保存本周的上班天数
    localStorage.setItem("_workDay", $("#workDay").html()); //设置本地缓存上班天数
    //保存今天的日期
    localStorage.setItem("_workDay", $("#workDay").html()); //设置本地缓存上班天数
    //保存今天工作任务
    localStorage.setItem("_workcontent", $("#workContent").html()); //设置本地缓存今天工作任务
    //保存延迟任务解决方案
    localStorage.setItem("_workContentDelay", $("#workContentDelay").html()); //设置本地缓存延迟任务解决方案
    //保存其他工作及进度
    localStorage.setItem("_workContentOther", $("#workContentOther").html()); //设置本地缓存其他工作及进度
    //保存收集到的需求
    localStorage.setItem("_workContentFatch", $("#workContentFatch").html()); //设置本地缓存收集到的需求
    //保存明日工作计划
    localStorage.setItem("_workContentPlay", $("#workContentPlay").html()); //设置本地缓存明日工作计划
}


//保存工作记录
let saveWork = () => {
    //保存今天工作任务
    localStorage.setItem("_workcontent", $("#workContent").html()); //设置本地缓存今天工作任务
    //保存延迟任务解决方案
    localStorage.setItem("_workContentDelay", $("#workContentDelay").html()); //设置本地缓存延迟任务解决方案
    //保存其他工作及进度
    localStorage.setItem("_workContentOther", $("#workContentOther").html()); //设置本地缓存其他工作及进度
    //保存收集到的需求
    localStorage.setItem("_workContentFatch", $("#workContentFatch").html()); //设置本地缓存收集到的需求
    //明日工作计划
    localStorage.setItem("_workContentPlay", $("#workContentPlay").html()); //设置本地缓存明日工作计划
}


//统计下班时间函数
let totalTime = () => {
    $("#Endwork").html(new Date().toTimeString().slice(0, 5));  //赋值下班班时间
    //计算多少小时
    let _h = parseFloat($("#Endwork").html().split(":")[0]).toFixed(1) - parseFloat($("#Startwork").html().split(":")[0]).toFixed(1);  //计算小时
    let _T = 0; //计算分钟
    if ($("#Endwork").html().split(":")[0] == $("#Startwork").html().split(":")[0]) {
        _T = parseInt($("#Endwork").html().split(":")[1]) - parseInt($("#Startwork").html().split(":")[1]); //计算分钟
    }
    else {
        _T = parseInt($("#Endwork").html().split(":")[1]) + 60 - parseInt($("#Startwork").html().split(":")[1]); //计算分钟
    }
    if (_T >= 0 && _T <= 15) {
        _T = 0.1
    }
    if (_T > 15 && _T <= 25) {
        _T = 0.2
    }
    if (_T > 25 && _T <= 35) {
        _T = 0.3
    }
    if (_T > 35 && _T <= 45) {
        _T = 0.4
    }
    if (_T > 45 && _T <= 55) {
        _T = 0.5
    }
    if (_T >= 55) {
        _T = 1
    }
    $("#workTime").html((parseFloat(_h) + parseFloat(_T) + parseFloat(localStorage.getItem("_workTime"))).toFixed(1));//计算小时
    //计算多少天
    $("#workDay").html(parseInt(localStorage.getItem("_workDay")) + 1)
}

//初始化今天的数据
let init = () => {
    //获取今天上班时间及日期
    let _nowDate = new Date().toLocaleDateString();  //本地缓存上班日期
    let _nowTime = new Date().toTimeString().slice(0, 5);  //本地缓存上班时间
    let _lastDate = localStorage.getItem("_LastDate"); //获取本地缓存上一次的更新上班日期
    if (_nowDate != _lastDate) {
        localStorage.clear();  //清空所有的本地化缓存
        localStorage.setItem("_LastDate", _nowDate); //本地缓存上班日期
        localStorage.setItem("_nowTime", _nowTime); //本地缓存上班时间
        if (new Date().getDay() == 1) {
            localStorage.setItem("_workDay", 1); //本地缓存上班天数
            localStorage.setItem("_workTime", 0); //本地缓存上班时长
        }

        $("#date").html(`${_date[0]}年${_date[1]}月${_date[2].length == 1 ? "0" + _date[2] : _date[2]}日`);  //赋值上班日期
        $("#Startwork").html(new Date().toTimeString().slice(0, 5));  //赋值上班时间
        //初始化今天的工作任务
        workInit();
    } else {
        let _date = _lastDate.split("/");  //获取日期
        $("#date").html(`${_date[0]}年${_date[1]}月${_date[2].length == 1 ? "0" + _date[2] : _date[2]}日`);  //赋值上班日期
        $("#Startwork").html(localStorage.getItem("_nowTime"));  //赋值上班时间
        //初始化时长
        if (localStorage.getItem("_workTime") == null) {
            localStorage.setItem("_workTime", 0);
        }
        //初始化上班天数
        if (localStorage.getItem("_workDay") == null) {
            localStorage.setItem("_workDay", 0);
        }
        //初始化今天的工作任务
        workInit();
    }
}


//获取今天的工作内容
let workInit = () => {
    //赋值今天工作任务
    $("#workContent").html(localStorage.getItem("_workcontent") == undefined ? `无` : localStorage.getItem("_workcontent")); //获取本地缓存今天工作任务
    //赋值延迟任务解决方案
    $("#workContentDelay").html(localStorage.getItem("_workContentDelay") == undefined ? `无` : localStorage.getItem("_workContentDelay")); //获取本地缓存延迟任务解决方案
    //赋值其他工作及进度
    $("#workContentOther").html(localStorage.getItem("_workContentOther") == undefined ? `无` : localStorage.getItem("_workContentOther")); //获取本地缓存其他工作及进度
    //赋值收集到的需求
    $("#workContentFatch").html(localStorage.getItem("_workContentFatch") == undefined ? `无` : localStorage.getItem("_workContentFatch")); //获取本地缓存收集到的需求
    //赋值明日工作计划
    $("#workContentPlay").html(localStorage.getItem("_workContentPlay") == undefined ? `无` : localStorage.getItem("_workContentPlay")); //获取本地缓存明日工作计划
}



$(function () {

    //初始化页面数据
    init();

    //点击可编辑的元素（editElement）
    $("body").on("click", ".editElement", function (e) {
        e.stopPropagation();
        $(this).attr("contentEditable", true);  //开启编辑模式
        $(this).addClass("editElementClick");   //添加编辑样式
        $(this).parents(".Name").siblings().find(".editElement").removeAttr("contentEditable");  //关闭编辑模式
        $(this).parents(".Name").siblings().find(".editElement").removeClass("editElementClick");  //移除编辑样式
    })

    //点击不可编辑的元素
    $(document).click(function () {
        $(".editElement").removeAttr("contentEditable");  //关闭编辑模式
        $(".editElement").removeClass("editElementClick");  //移除编辑样式
    })

    let t;  //隐藏按钮计时标识
    let obj;  //编辑对象
    //显示添加行按钮
    $("body").on("mouseenter", ".title", function () {
        //赋值编辑对象
        obj = $(this).next();
        //清楚隐藏按钮
        clearTimeout(t);
        let _left = $(this).offset().left + $(this).outerWidth() + 4; //设置按钮左边的距离  
        let _top = $(this).offset().top; //设置按钮顶部的距离  
        //设置按钮的位置
        $("#addContent").css({ "top": _top, "left": _left, "display": "block" });
    }).on("mouseleave", ".title", function () {
        t = setTimeout(function () {
            //隐藏按钮
            $("#addContent").css({ "display": "none" });
        }, 500)

    })

    //隐藏按钮
    $("body").on("mouseenter", "#addContent", function () {
        //清楚隐藏按钮
        clearTimeout(t);
    }).on("mouseleave", "#addContent", function () {
        //隐藏按钮
        $("#addContent").css({ "display": "none" });
    })

    //添加按钮添加事件
    $("#addContent").click(function () {
        if (obj.html() == "无") {
            if (obj.attr("id") == 'workContent') {
                obj.html(`<div>1、【已完成】</div>`);   //主要工作及进度
            } else {
                obj.html(`<div>1、</div>`)
            }

        } else {
            let _num = obj.find("div").eq(obj.children().length - 1).text().split("、")[0];  //获取子元素的最后一位的序号
            if (obj.attr("id") == 'workContent') {
                obj.append(`<div>${parseInt(_num) + 1}、【已完成】</div>`);   //主要工作及进度
            } else {
                obj.append(`<div>${parseInt(_num) + 1}、</div>`)
            }
        }
    })
})