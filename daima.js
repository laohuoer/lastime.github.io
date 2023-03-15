document.onreadystatechange = function () { //即在加载的过程中执行下面的代码
    if (document.readyState == "uninitialized") {
        $('.loading').show();
        $('#border').show();
    }

    if (document.readyState == "loading") {
        $('.loading').show();
        $('#border').show();
    }

    if (document.readyState == "interactive") {
        $('.loading').show();
        $('#border').show();
    }

    if (document.readyState == "complete") { //complete加载完成
        $('.first').show();
        $('.loading').hide();
        story1hide();
        story2hide();
        story3hide();
        story4hide();
        story5hide();
        story6hide();
        story7hide();
        story8hide();
    }
}

var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x5 = 0;
var x6 = 0;
var x7 = 0;
var x8 = 0;
var d = 0;
var p1=0;
var p2=0;
var p3=0;
var p4=0;
var a=0;
var b=0;
var c=0;
var j = 0;


/////////////////////////////

$("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8").mouseover(function () {
    dong.play();
}, );

//////////////////////////////

function story8hide(){
   $("#story8-1-next").hide();
$("#story8-1").hide();
$("#story8-2-next").hide();
$("#story8-2").hide();
$("#story8-3-next").hide();
$("#story8-3").hide();
$("#story8-4-next").hide();
$("#story8-4").hide();
$("#story8-5-next").hide();
$("#story8-5").hide();
$("#story8-6-next").hide();
$("#story8-6").hide();
$("#story8-7-next").hide();
$("#story8-7").hide();
$("#story8-8-next").hide();
$("#story8-8").hide();
$("#story8-9-next").hide();
$("#story8-9").hide();
$("#story8-10-next").hide();
$("#story8-10").hide();
$("#story8-11-next").hide();
$("#story8-11").hide();
$("#story8-12-next").hide();
$("#story8-12").hide();
$("#story8-13-next").hide();
$("#story8-13").hide();
$("#story8-14-next").hide();
$("#story8-14").hide();
$("#story8-15-next").hide();
$("#story8-15").hide();
$("#story8-16-next").hide();
$("#story8-16").hide();
$("#story8-17-next").hide();
$("#story8-17").hide();
$("#story8-18-next").hide();
$("#story8-18").hide();
$("#story8-19-next").hide();
$("#story8-19").hide();
$("#story8-20-next").hide();
$("#story8-20").hide();
$("#story8-21-next").hide();
$("#story8-21").hide();
$("#story8-22-next").hide();
$("#story8-22").hide();
$("#story8-23-next").hide();
$("#story8-23").hide();
$("#story8-24-next").hide();
$("#story8-24").hide();
$("#story8-25-next").hide();
$("#story8-25").hide();
$("#story8-26-next").hide();
$("#story8-26").hide();
$("#story8-27-next").hide();
$("#story8-27").hide();
$("#story8-28-next").hide();
$("#story8-28").hide();
$("#story8-29-next").hide();
$("#story8-29").hide();
$("#story8-30-next").hide();
$("#story8-30").hide();
$("#story8-31-next").hide();
$("#story8-31").hide();
$("#story8-32-next").hide();
$("#story8-32").hide();
$("#story8-33-next").hide();
$("#story8-33").hide();
$("#story8-34-next").hide();
$("#story8-34").hide();
$("#story8-35-next").hide();
$("#story8-35").hide();
$("#story8-36-next").hide();
$("#story8-36").hide();
$("#story8-37-next").hide();
$("#story8-37").hide();
$("#story8-38-next").hide();
$("#story8-38").hide();
$("#story8-39-next").hide();
$("#story8-39").hide();
$("#story8-40-next").hide();
$("#story8-40").hide();
$("#story8-41-next").hide();
$("#story8-41").hide();
$("#story8-42-next").hide();
$("#story8-42").hide();
$("#story8-43-next").hide();
$("#story8-43").hide();
$("#story8-44-next").hide();
$("#story8-44").hide();
$("#story8-45-next").hide();
$("#story8-45").hide();
$("#story8-46-next").hide();
$("#story8-46").hide();
$("#story8-47-next").hide();
$("#story8-47").hide();
$("#story8-48-next").hide();
$("#story8-48").hide();
$("#story8-49-next").hide();
$("#story8-49").hide();
$("#story8-50-next").hide();
$("#story8-50").hide();
$("#story8-51-next").hide();
$("#story8-51").hide();
$("#story8-52-next").hide();
$("#story8-52").hide();
$("#story8-53-next").hide();
$("#story8-53").hide();
$("#story8-54-next").hide();
$("#story8-54").hide();
$("#story8-55-next").hide();
$("#story8-55").hide();
$("#story8-56-next").hide();
$("#story8-56").hide();
$("#story8-57-next").hide();
$("#story8-57").hide();
$("#story8-58-next").hide();
$("#story8-58").hide();
$("#story8-59-next").hide();
$("#story8-59").hide();
$("#story8-60-next").hide();
$("#story8-60").hide();
$("#end8").hide();
$("#end8btn").hide();
}

function story7hide(){
$("#story7-1-next").hide();
$("#story7-1").hide();
$("#story7-2-next").hide();
$("#story7-2").hide();
$("#story7-3-next").hide();
$("#story7-3").hide();
$("#story7-4-next").hide();
$("#story7-4").hide();
$("#story7-5-next").hide();
$("#story7-5").hide();
$("#story7-6-next").hide();
$("#story7-6").hide();
$("#story7-7-next").hide();
$("#story7-7").hide();
$("#story7-8-next").hide();
$("#story7-8").hide();
$("#story7-9-next").hide();
$("#story7-9").hide();
$("#story7-10-next").hide();
$("#story7-10").hide();
$("#story7-11-next").hide();
$("#story7-11").hide();
$("#story7-12-next").hide();
$("#story7-12").hide();
$("#story7-13-next").hide();
$("#story7-13").hide();
$("#story7-14-next").hide();
$("#story7-14").hide();
$("#story7-15-next").hide();
$("#story7-15").hide();
$("#story7-16-next").hide();
$("#story7-16").hide();
$("#story7-17-next").hide();
$("#story7-17").hide();
$("#story7-18-next").hide();
$("#story7-18").hide();
$("#story7-19-next").hide();
$("#story7-19").hide();
$("#story7-20-next").hide();
$("#story7-20").hide();
$("#story7-21-next").hide();
$("#story7-21").hide();
$("#story7-22-next").hide();
$("#story7-22").hide();
$("#story7-23-next").hide();
$("#story7-23").hide();
$("#story7-24-next").hide();
$("#story7-24").hide();
$("#story7-25-next").hide();
$("#story7-25").hide();
$("#story7-26-next").hide();
$("#story7-26").hide();
$("#story7-27-next").hide();
$("#story7-27").hide();
$("#story7-28-next").hide();
$("#story7-28").hide();
$("#story7-29-next").hide();
$("#story7-29").hide();
$("#story7-30-next").hide();
$("#story7-30").hide();
$("#story7-31-next").hide();
$("#story7-31").hide();
$("#story7-32-next").hide();
$("#story7-32").hide();
$("#story7-33-next").hide();
$("#story7-33").hide();
$("#story7-34-next").hide();
$("#story7-34").hide();
$("#story7-35-next").hide();
$("#story7-35").hide();
$("#story7-36-next").hide();
$("#story7-36").hide();
$("#story7-37-next").hide();
$("#story7-37").hide();
$("#story7-special").hide();
$("#story7-erhu").hide()
$("#story7-luo").hide()
$("#story7-sheng").hide()
$("#story7-bo").hide()
$("#story7-zhuangzhong").hide()
$("#story7-suona").hide()
$("#story7-cidai").hide()
$("#story7nextcidai").hide();
$("#end7").hide();
$("#end7btn").hide();
}

function story6hide(){
$("#story6-1-next").hide();
$("#story6-1").hide();
$("#story6-2-next").hide();
$("#story6-2").hide();
$("#story6-3-next").hide();
$("#story6-3").hide();
$("#story6-4-next").hide();
$("#story6-4").hide();
$("#story6-5-next").hide();
$("#story6-5").hide();
$("#story6-6-next").hide();
$("#story6-6").hide();
$("#story6-7-next").hide();
$("#story6-7").hide();
$("#story6-8-next").hide();
$("#story6-8").hide();
$("#story6-9-next").hide();
$("#story6-9").hide();
$("#story6-10-next").hide();
$("#story6-10").hide();
$("#story6-11-next").hide();
$("#story6-11").hide();
$("#story6-12-next").hide();
$("#story6-12").hide();
$("#story6-13-next").hide();
$("#story6-13").hide();
$("#story6-14-next").hide();
$("#story6-14").hide();
$("#story6-15-next").hide();
$("#story6-15").hide();
$("#story6-16-next").hide();
$("#story6-16").hide();
$("#story6-17-next").hide();
$("#story6-17").hide();
$("#story6-18-next").hide();
$("#story6-18").hide();
$("#story6-19-next").hide();
$("#story6-19").hide();
$("#story6-20-next").hide();
$("#story6-20").hide();
$("#story6-21-next").hide();
$("#story6-21").hide();
$("#story6-22-next").hide();
$("#story6-22").hide();
$("#story6-23-next").hide();
$("#story6-23").hide();
$("#story6-24-next").hide();
$("#story6-24").hide();
$("#story6-25-next").hide();
$("#story6-25").hide();
$("#story6-26-next").hide();
$("#story6-26").hide();
$("#story6-27-next").hide();
$("#story6-27").hide();
$("#story6-28-next").hide();
$("#story6-28").hide();
$("#story6-29-next").hide();
$("#story6-29").hide();
$("#story6-30-next").hide();
$("#story6-30").hide();
$("#story6-31-next").hide();
$("#story6-31").hide();
$("#story6-32-next").hide();
$("#story6-32").hide();
$("#story6-33-next").hide();
$("#story6-33").hide();
$("#story6-34-next").hide();
$("#story6-34").hide();
$("#story6-35-next").hide();
$("#story6-35").hide();
$("#story6-36-next").hide();
$("#story6-36").hide();
$("#story6-37-next").hide();
$("#story6-37").hide();
$("#story6-38-next").hide();
$("#story6-38").hide();
$("#story6-39-next").hide();
$("#story6-39").hide();
$("#story6-40-next").hide();
$("#story6-40").hide();
$("#story6-41-next").hide();
$("#story6-41").hide();
$("#story6-42").hide();
$("#choose").hide();
$("#story6-special").hide();
$("#story6-qin").hide();
$("#story6-shouyi").hide();
$("#story6-shoubei").hide();
$("#story6-shouxie").hide();
$("#story6-shoumao").hide();
$("#end6").hide()
$("#end6btn").hide()
}

function story5hide() {
$("#story5-1-next").hide();
$("#story5-1").hide();
$("#story5-2-next").hide();
$("#story5-2").hide();
$("#story5-3-next").hide();
$("#story5-3").hide();
$("#story5-4-next").hide();
$("#story5-4").hide();
$("#story5-5-next").hide();
$("#story5-5").hide();
$("#story5-6-next").hide();
$("#story5-6").hide();
$("#story5-7-next").hide();
$("#story5-7").hide();
$("#story5-8-next").hide();
$("#story5-8").hide();
$("#story5-9-next").hide();
$("#story5-9").hide();
$("#story5-10-next").hide();
$("#story5-10").hide();
$("#story5-11-next").hide();
$("#story5-11").hide();
$("#story5-12-next").hide();
$("#story5-12").hide();
$("#story5-13-next").hide();
$("#story5-13").hide();
$("#story5-14-next").hide();
$("#story5-14").hide();
$("#story5-15-next").hide();
$("#story5-15").hide();
$("#story5-16-next").hide();
$("#story5-16").hide();
$("#story5-17-next").hide();
$("#story5-17").hide();
$("#story5-18-next").hide();
$("#story5-18").hide();
$("#story5-19-next").hide();
$("#story5-19").hide();
$("#story5-20-next").hide();
$("#story5-20").hide();
$("#story5-21-next").hide();
$("#story5-21").hide();
$("#story5-22-next").hide();
$("#story5-22").hide();
$("#story5-23-next").hide();
$("#story5-23").hide();
$("#story5-24-next").hide();
$("#story5-24").hide();
$("#story5-25-next").hide();
$("#story5-25").hide();
$("#story5-26-next").hide();
$("#story5-26").hide();
$("#story5-27-next").hide();
$("#story5-27").hide();
$("#story5-28-next").hide();
$("#story5-28").hide();
$("#story5-29-next").hide();
$("#story5-29").hide();
$("#story5-30-next").hide();
$("#story5-30").hide();
$("#story5-31-next").hide();
$("#story5-31").hide();
$("#story5-32-next").hide();
$("#story5-32").hide();
$("#story5-33-next").hide();
$("#story5-33").hide();
$("#story5-34-next").hide();
$("#story5-34").hide();
$("#story5-35-next").hide();
$("#story5-35").hide();
$("#story5-36-next").hide();
$("#story5-36").hide();
$("#story5-37-next").hide();
$("#story5-37").hide();
$("#story5-38-next").hide();
$("#story5-38").hide();
$("#story5-39-next").hide();
$("#story5-39").hide();
$("#story5-40-next").hide();
$("#story5-40").hide();
$("#story5-41-next").hide();
$("#story5-41").hide();
$("#story5-42-next").hide();
$("#story5-42").hide();
$("#story5-43-next").hide();
$("#story5-43").hide();
$("#story5-44-next").hide();
$("#story5-44").hide();
$("#story5-45-next").hide();
$("#story5-45").hide();
$("#story5-46-next").hide();
$("#story5-46").hide();
$("#story5-47-next").hide();
$("#story5-47").hide();
$("#story5-48-next").hide();
$("#story5-48").hide();
$("#story5-49-next").hide();
$("#story5-49").hide();
$("#story5-50-next").hide();
$("#story5-50").hide();
$("#story5-51-next").hide();
$("#story5-51").hide();
$("#story5-52-next").hide();
$("#story5-52").hide();
$("#end5").hide()
$("#end5btn").hide()
}

function story4hide() {
    $("#story4-1-next").hide();
    $("#story4-1").hide();
    $("#story4-2-next").hide();
    $("#story4-2").hide();
    $("#story4-3-next").hide();
    $("#story4-3").hide();
    $("#story4-4-next").hide();
    $("#story4-4").hide();
    $("#story4-5-next").hide();
    $("#story4-5").hide();
    $("#story4-6-next").hide();
    $("#story4-6").hide();
    $("#story4-7-next").hide();
    $("#story4-7").hide();
    $("#story4-8-next").hide();
    $("#story4-8").hide();
    $("#story4-9-next").hide();
    $("#story4-9").hide();
    $("#story4-10-next").hide();
    $("#story4-10").hide();
    $("#story4-11-next").hide();
    $("#story4-11").hide();
    $("#story4-12-next").hide();
    $("#story4-12").hide();
    $("#story4-13-next").hide();
    $("#story4-13").hide();
    $("#story4-14-next").hide();
    $("#story4-14").hide();
    $("#story4-15-next").hide();
    $("#story4-15").hide();
    $("#story4-16-next").hide();
    $("#story4-16").hide();
    $("#story4-17-next").hide();
    $("#story4-17").hide();
    $("#story4-special").hide();
    $("#story4-18-next").hide();
    $("#story4-18").hide();
    $("#story4-19-next").hide();
    $("#story4-19").hide();
    $("#story4-20-next").hide();
    $("#story4-20").hide();
    $("#story4-21-next").hide();
    $("#story4-21").hide();
    $("#story4-22-next").hide();
    $("#story4-22").hide();
    $("#story4-23-next").hide();
    $("#story4-23").hide();
    $("#story4-24-next").hide();
    $("#story4-24").hide();
    $("#story4-25-next").hide();
    $("#story4-25").hide();
    $("#story4-26-next").hide();
    $("#story4-26").hide();
    $("#story4-27-next").hide();
    $("#story4-27").hide();
    $("#story4-28-next").hide();
    $("#story4-28").hide();
    $("#story4-29-next").hide();
    $("#story4-29").hide();
    $("#story4-30-next").hide();
    $("#story4-30").hide();
    $("#story4-31-next").hide();
    $("#story4-31").hide();
    $("#story4-32-next").hide();
    $("#story4-32").hide();
    $("#story4-33-next").hide();
    $("#story4-33").hide();
    $("#story4-34-next").hide();
    $("#story4-34").hide();
    $("#story4-35-next").hide();
    $("#story4-35").hide();
    $("#story4-36-next").hide();
    $("#story4-36").hide();
    $("#story4-37-next").hide();
    $("#story4-37").hide();
    $("#story4-38-next").hide();
    $("#story4-38").hide();
    $("#story4-39-next").hide();
    $("#story4-39").hide();
    $("#story4-40-next").hide();
    $("#story4-40").hide();
    $("#story4-41-next").hide();
    $("#story4-41").hide();
    $("#story4-42-next").hide();
    $("#story4-42").hide();
    $("#story4-baosang").hide()
    $("#story4-zhaohun").hide()
    $("#story4-songzhong").hide()
    $("#story4-rulian").hide()
    $("#story4-qiling").hide()
    $("#story4-songsang").hide()
    $("#story4-xiazang").hide()
    $("#story4-zuoqi").hide()
    $("#story4-diaoyan").hide()
    $("#end4").hide()
    $("#end4btn").hide()
}

function story3hide() {
    $("#story3-1-next").hide();
    $("#story3-1").hide();
    $("#story3-2-next").hide();
    $("#story3-2").hide();
    $("#story3-3-next").hide();
    $("#story3-3").hide();
    $("#story3-4-next").hide();
    $("#story3-4").hide();
    $("#story3-5-next").hide();
    $("#story3-5").hide();
    $("#story3-6-next").hide();
    $("#story3-6").hide();
    $("#story3-7-next").hide();
    $("#story3-7").hide();
    $("#story3-8-next").hide();
    $("#story3-8").hide();
    $("#story3-9-next").hide();
    $("#story3-9").hide();
    $("#story3-10-next").hide();
    $("#story3-10").hide();
    $("#story3-11-next").hide();
    $("#story3-11").hide();
    $("#story3-12-next").hide();
    $("#story3-12").hide();
    $("#story3-13-next").hide();
    $("#story3-13").hide();
    $("#story3-14-next").hide();
    $("#story3-14").hide();
    $("#story3-15-next").hide();
    $("#story3-15").hide();
    $("#story3-16-next").hide();
    $("#story3-16").hide();
    $("#story3-17-next").hide();
    $("#story3-17").hide();
    $("#story3-18-next").hide();
    $("#story3-18").hide();
    $("#story3-19-next").hide();
    $("#story3-19").hide();
    $("#story3-20-next").hide();
    $("#story3-20").hide();
    $("#story3-21-next").hide();
    $("#story3-21").hide();
    $("#story3-22-next").hide();
    $("#story3-22").hide();
    $("#story3-23-next").hide();
    $("#story3-23").hide();
    $("#story3-24-next").hide();
    $("#story3-24").hide();
    $("#story3-25-next").hide();
    $("#story3-25").hide();
    $("#story3-26-next").hide();
    $("#story3-26").hide();
    $("#story3-27-next").hide();
    $("#story3-27").hide();
    $("#story3-28-next").hide();
    $("#story3-28").hide();
    $("#story3-29-next").hide();
    $("#story3-29").hide();
    $("#story3-30-next").hide();
    $("#story3-30").hide();
    $("#story3-31-next").hide();
    $("#story3-31").hide();
    $("#story3-32-next").hide();
    $("#story3-32").hide();
    $("#story3-33-next").hide();
    $("#story3-33").hide();
    $("#story3-34-next").hide();
    $("#story3-34").hide();
    $("#story3-35-next").hide();
    $("#story3-35").hide();
    $("#story3-36-next").hide();
    $("#story3-36").hide();
    $("#story3-37-next").hide();
    $("#story3-37").hide();
    $("#story3-38-next").hide();
    $("#story3-38").hide();
    $("#story3-39-next").hide();
    $("#story3-39").hide();
    $("#story3-40-next").hide();
    $("#story3-40").hide();
    $("#story3-41-next").hide();
    $("#story3-41").hide();
    $("#story3-42-next").hide();
    $("#story3-42").hide();
    $("#story3-43-next").hide();
    $("#story3-43").hide();
    $("#story3-44-next").hide();
    $("#story3-44").hide();
    $("#story3-45-next").hide();
    $("#story3-45").hide();
    $("#story3-46-next").hide();
    $("#story3-46").hide();
    $("#story3-47-next").hide();
    $("#story3-47").hide();
    $("#story3-48-next").hide();
    $("#story3-48").hide();
    $("#story3-49-next").hide();
    $("#story3-49").hide();
    $("#story3-50-next").hide();
    $("#story3-50").hide();
    $("#story3-51-next").hide();
    $("#story3-51").hide();
    $("#story3-52-next").hide();
    $("#story3-52").hide();
    $("#story3-53-next").hide();
    $("#story3-53").hide();
    $("#story3-54-next").hide();
    $("#story3-54").hide();
    $("#story3-55-next").hide();
    $("#story3-55").hide();
    $("#story3-56-next").hide();
    $("#story3-56").hide();
    $("#story3-57-next").hide();
    $("#story3-57").hide();
    $("#story3-58-next").hide();
    $("#story3-58").hide();
    $("#story3-59-next").hide();
    $("#story3-59").hide();
    $("#story3-60-next").hide();
    $("#story3-60").hide();
    $("#end3").hide();
    $("#end3btn").hide();


}

function story2hide() {
    $("#story2-1-next").hide();
    $("#story2-1").hide();
    $("#story2-2-next").hide();
    $("#story2-2").hide();
    $("#story2-3-next").hide();
    $("#story2-3").hide();
    $("#story2-4-next").hide();
    $("#story2-4").hide();
    $("#story2-5-next").hide();
    $("#story2-5").hide();
    $("#story2-6-next").hide();
    $("#story2-6").hide();
    $("#story2-7-next").hide();
    $("#story2-7").hide();
    $("#story2-8-next").hide();
    $("#story2-8").hide();
    $("#story2-9-next").hide();
    $("#story2-9").hide();
    $("#story2-10-next").hide();
    $("#story2-10").hide();
    $("#story2-11-next").hide();
    $("#story2-11").hide();
    $("#story2-12-next").hide();
    $("#story2-12").hide();
    $("#story2-13-next").hide();
    $("#story2-13").hide();
    $("#story2-14-next").hide();
    $("#story2-14").hide();
    $("#story2-15-next").hide();
    $("#story2-15").hide();
    $("#story2-16-next").hide();
    $("#story2-16").hide();
    $("#story2-17-next").hide();
    $("#story2-17").hide();
    $("#story2-18-next").hide();
    $("#story2-18").hide();
    $("#story2-19-next").hide();
    $("#story2-19").hide();
    $("#story2-20-next").hide();
    $("#story2-20").hide();
    $("#story2-21-next").hide();
    $("#story2-21").hide();
    $("#story2-22-next").hide();
    $("#story2-22").hide();
    $("#story2-23-next").hide();
    $("#story2-23").hide();
    $("#story2-24-next").hide();
    $("#story2-24").hide();
    $("#story2-25-next").hide();
    $("#story2-25").hide();
    $("#story2-26-next").hide();
    $("#story2-26").hide();
    $("#story2-27-next").hide();
    $("#story2-27").hide();
    $("#story2-28-next").hide();
    $("#story2-28").hide();
    $("#story2-29-next").hide();
    $("#story2-29").hide();
    $("#story2-30-next").hide();
    $("#story2-30").hide();
    $("#story2-31-next").hide();
    $("#story2-31").hide();
    $("#story2-32-next").hide();
    $("#story2-32").hide();
    $("#story2-33-next").hide();
    $("#story2-33").hide();
    $("#story2-34-next").hide();
    $("#story2-34").hide();
    $("#story2-35-next").hide();
    $("#story2-35").hide();
    $("#story2-36-next").hide();
    $("#story2-36").hide();
    $("#story2-37-next").hide();
    $("#story2-37").hide();
    $("#story2-38-next").hide();
    $("#story2-38").hide();
    $("#story2-39-next").hide();
    $("#story2-39").hide();
    $("#story2-40-next").hide();
    $("#story2-40").hide();
    $("#story2-41-next").hide();
    $("#story2-41").hide();
    $("#story2-42-next").hide();
    $("#story2-42").hide();
    $("#story2-43-next").hide();
    $("#story2-43").hide();
    $("#story2-44-next").hide();
    $("#story2-44").hide();
    $("#story2-45-next").hide();
    $("#story2-45").hide();
    $("#story2-46-next").hide();
    $("#story2-46").hide();
    $("#end2").hide();
    $("#end2btn").hide();
}

function story1hide() {
    $("#story1-0-next").hide();
    $("#story1-0").hide();
    $("#story1-1-next").hide();
    $("#story1-1").hide();
    $("#story1-2-next").hide();
    $("#story1-2").hide();
    $("#story1-3-next").hide();
    $("#story1-3").hide();
    $("#story1-4-next").hide();
    $("#story1-4").hide();
    $("#story1-5-next").hide();
    $("#story1-5").hide();
    $("#story1-6-next").hide();
    $("#story1-6").hide();
    $("#story1-7-next").hide();
    $("#story1-7").hide();
    $("#story1-8-next").hide();
    $("#story1-8").hide();
    $("#story1-9-next").hide();
    $("#story1-9").hide();
    $("#story1-10-next").hide();
    $("#story1-10").hide();
    $("#story1-11-next").hide();
    $("#story1-11").hide();
    $("#story1-12-next").hide();
    $("#story1-12").hide();
    $("#story1-13-next").hide();
    $("#story1-13").hide();
    $("#story1-14-next").hide();
    $("#story1-14").hide();
    $("#story1-15-next").hide();
    $("#story1-15").hide();
    $("#story1-16-next").hide();
    $("#story1-16").hide();
    $("#story1-17-next").hide();
    $("#story1-17").hide();
    $("#story1-18-next").hide();
    $("#story1-18").hide();
    $("#story1-19-next").hide();
    $("#story1-19").hide();
    $("#story1-20-next").hide();
    $("#story1-20").hide();
    $("#story1-21-next").hide();
    $("#story1-21").hide();
    $("#story1-22-next").hide();
    $("#story1-22").hide();
    $("#story1-23-next").hide();
    $("#story1-23").hide();
    $("#story1-24-next").hide();
    $("#story1-24").hide();
    $("#story1-25-next").hide();
    $("#story1-25").hide();
    $("#story1-26-next").hide();
    $("#story1-26").hide();
    $("#story1-27-next").hide();
    $("#story1-27").hide();
    $("#story1-28-next").hide();
    $("#story1-28").hide();
    $("#story1-29-next").hide();
    $("#story1-29").hide();
    $("#story1-30-next").hide();
    $("#story1-30").hide();
    $("#story1-31-next").hide();
    $("#story1-31").hide();
    $("#story1-32-next").hide();
    $("#story1-32").hide();
    $("#story1-33-next").hide();
    $("#story1-33").hide();
    $("#story1-34-next").hide();
    $("#story1-34").hide();
    $("#story1-35-next").hide();
    $("#story1-35").hide();
    $("#story1-36-next").hide();
    $("#story1-36").hide();
    $("#story1-37-next").hide();
    $("#story1-37").hide();
    $("#story1-38-next").hide();
    $("#story1-38").hide();
    $("#story1-39-next").hide();
    $("#story1-39").hide();
    $("#story1-40-next").hide();
    $("#story1-40").hide();
    $("#story1-41-next").hide();
    $("#story1-41").hide();
    $("#story1-42-next").hide();
    $("#story1-42").hide();
    $("#story1-43-next").hide();
    $("#story1-43").hide();
    $("#story1-44-next").hide();
    $("#story1-44").hide();
    $("#story1-45-next").hide();
    $("#story1-45").hide();
    $("#story1-46-next").hide();
    $("#story1-46").hide();
    $("#story1-47-next").hide();
    $("#story1-47").hide();
    $("#story1-48-next").hide();
    $("#story1-48").hide();
    $("#story1-49-next").hide();
    $("#story1-49").hide();
    $("#story1-50-next").hide();
    $("#story1-50").hide();
    $("#story1-51-next").hide();
    $("#story1-51").hide();
    $("#story1-52-next").hide();
    $("#story1-52").hide();
    $("#story1-53-next").hide();
    $("#story1-53").hide();
    $("#story1-54-next").hide();
    $("#story1-54").hide();
    $("#story1-55-next").hide();
    $("#story1-55").hide();
    $("#story1-56-next").hide();
    $("#story1-56").hide();
    $("#story1-57-next").hide();
    $("#story1-57").hide();
    $("#story1-58-next").hide();
    $("#story1-58").hide();
    $("#story1-59-next").hide();
    $("#story1-59").hide();
    $("#story1-60-next").hide();
    $("#story1-60").hide();
    $("#end1").hide();
    $("#end1btn").hide();
    $("#end2").hide();
    $("#end2btn").hide();
}

/////////////////////////////////

function go1() {
    clickitem.play();
    clickthen.play();

    $("#tag-qingbaozhan").hide()
    $("#tag-jiuwenlu").hide()
    $("#tag-xunfangtu").hide()
    $("#tag-iphonix").hide()
    $(".tag-content1").hide()
    $(".tag-content2").hide()
    $(".tag-content3").hide()
    $(".tag-content4").hide()
    $("#qingbaozhanzong").hide()
    $("#shouji").hide()
    $('.change').show()
    setTimeout(function () {
        $(".first").hide();
        $('.main').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}

function go2() {
    clickitem.play();
    clickthen.play();
    $("#tag-qingbaozhan").hide()
    $("#tag-jiuwenlu").hide()
    $("#tag-xunfangtu").hide()
    $("#tag-iphonix").hide()
    $(".tag-content1").hide()
    $(".tag-content2").hide()
    $(".tag-content3").hide()
    $(".tag-content4").hide()
    $("#shouji").hide()
    $('.change').show()

    setTimeout(function () {
        $(".first").hide();
        $('.jiaochengshuoming').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}

function go3() {
    clickitem.play();
    clickthen.play();

    $("#tag-qingbaozhan").hide()
    $("#tag-jiuwenlu").hide()
    $("#tag-xunfangtu").hide()
    $("#tag-iphonix").hide()
    $(".tag-content1").hide()
    $(".tag-content2").hide()
    $(".tag-content3").hide()
    $(".tag-content4").hide()
    $("#shouji").hide()
    $('.change').show()

    $(".tijiaowancheng").hide()
    $(".tijiaowanchengbtn").hide()
    
    setTimeout(function () {
        $(".first").hide();
        $('.pingfenfankui').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });


}

function go4() {
    clickitem.play();
    clickthen.play();

    $("#tag-qingbaozhan").hide()
    $("#tag-jiuwenlu").hide()
    $("#tag-xunfangtu").hide()
    $("#tag-iphonix").hide()
    $(".tag-content1").hide()
    $(".tag-content2").hide()
    $(".tag-content3").hide()
    $(".tag-content4").hide()
    $("#shouji").hide()
    $('.change').show()
    
    setTimeout(function () {
        $(".first").hide();
        $('.tebiemingxie').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });


}

///////////////////////////////////

function star1(){
    $(".yellowstar").css("width", "53px");
}

function star2(){
    $(".yellowstar").css("width", "118px");
}

function star3(){
    $(".yellowstar").css("width", "186px");
}

function star4(){
    $(".yellowstar").css("width", "255px");
}

function star5(){
    $(".yellowstar").css("width", "320px");
}

/////////////////////////////

function tijiao(){
    $(".tijiaowancheng").show()
    $(".tijiaowanchengbtn").show()
}

function tijiaowancheng(){
    $(".tijiaowancheng").hide()
    $(".tijiaowanchengbtn").hide()
}

/////////////////////////////////

function back1() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $(".main").hide(),
            $('.first').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

function back2() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $(".jiaochengshuoming").hide(),
            $('.first').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

function back3() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $(".pingfenfankui").hide(),
            $('.first').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

function back4() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $(".tebiemingxie").hide(),
            $('.first').show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

/////////////////////////////////

function jingyin() {
    Howler.volume(0);
    $(".musicon").hide()
    $(".musicoff").show()
}

function kaishengyin() {
    Howler.volume(0.2);
    $(".musicon").show()
    $(".musicoff").hide()
}

/////////////////////////////////

function tag1on() {
    $("#tag-qingbaozhan").show()
    $(".tag-content1").show()
    $(".chazi1").show()
}

function tag1off() {
    $("#tag-qingbaozhan").hide()
    $(".tag-content1").hide()
    $(".chazi1").hide()
}

function tag2on() {
    $("#tag-jiuwenlu").show()
    $(".tag-content2").show()
    $(".chazi2").show()
}

function tag2off() {
    $("#tag-jiuwenlu").hide()
    $(".chazi2").hide()
    $(".tag-content2").hide()
}

function tag3on() {
    $(".tag-content3").show()
    $("#tag-iphonix").show()
    $(".chazi3").show()
}

function tag3off() {
    $("#tag-iphonix").hide()
    $(".chazi3").hide()
    $(".tag-content3").hide()
}

function tag4on() {
    $(".tag-content4").show()
    $("#tag-xunfangtu").show()
    $(".chazi4").show()
}

function tag4off() {
    $("#tag-xunfangtu").hide()
    $(".chazi4").hide()
    $(".tag-content4").hide()
}

/////////////////////////////////

function taniphonix() {
    $("#shouji").show()
}

function guaniphonix1() {
    $("#shouji").hide()
    $(".iphonix-in2").animate({
        height: '701.1px'
    });
    $(".center-xy").css("display", "");
    $(".fenghuang").fadeIn(200)
}

/////////////////////////////////

function renwunotoff(){
    $("#renwunot").hide()
}

function renwunoton(){
    $("#renwunot").show()
}
//////////////////////////////

function tanxunfangtu() {
    $("#huode").hide();
    $("#wancheng").hide();
    $("#yijingwancheng").hide();
    $("#yijingwanchengbtn").hide();
    $("#meiwancheng").hide();
    $("#meiwanchengbtn").hide();
    clickitem.play();
    clickthen.play();

    $('.change').show()
    a2open()
    a3open()
    a4open()
    a5open()
    a6open()
    a7open()
    a8open()
    $("#renwunot").hide()
    setTimeout(function () {
        $('.main').hide()
        $('.map').show()

    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

    document.getElementById("renwushu").innerHTML = a;
    document.getElementById("yinyangling").innerHTML = b;
    document.getElementById("shengmingyin").innerHTML = c;
}

/////////////////////////////////

function a1() {
    document.getElementById("renwushu").innerHTML = a;
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a1w").show()
    }, );
    setTimeout(function () {
        $("#a1w").animate({
            height: "312px",
            opacity: "1.0"
        })
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main1").show()
    }, );
    setTimeout(function () {
        $("#choice-main1").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a2() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a2w").show()
    }, );
    setTimeout(function () {
        $("#a2w").animate({
            height: "312px",
            opacity: "1.0"
        })
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main2").show()
    }, );
    setTimeout(function () {
        $("#choice-main2").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a3() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();
    setTimeout(function () {
        $("#a3w").show()
    }, );
    setTimeout(function () {
        $("#a3w").animate({
            height: "312px",
            opacity: "1.0"
        })
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main3").show()
    }, );
    setTimeout(function () {
        $("#choice-main3").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a4() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a4w").show()
    }, );
    setTimeout(function () {
        $("#a4w").animate({
            height: "312px",
            opacity: "1.0"
        })
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main4").show()
    }, );
    setTimeout(function () {
        $("#choice-main4").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a5() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a5w").show()
    }, );
    setTimeout(function () {
        $("#a5w").animate({
            height: "312px",
            opacity: "1.0"
        })
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main5").show()
    }, );
    setTimeout(function () {
        $("#choice-main5").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a6() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a6w").show()
    }, );
    setTimeout(function () {
        $("#a6w").animate({
            height: "312px",
            opacity: "1.0"
        })
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main6").show()
    }, );
    setTimeout(function () {
        $("#choice-main6").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a7() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a7w").show()
    }, );
    setTimeout(function () {
        $("#a7w").animate({
            height: "312px",
            opacity: "1.0"
        }, 200)
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main7").show()
    }, );
    setTimeout(function () {
        $("#choice-main7").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

function a8() {
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".icon-word").hide();

    setTimeout(function () {
        $("#a8w").show()
    }, );
    setTimeout(function () {
        $("#a8w").animate({
            height: "312px",
            opacity: "1.0"
        }, 200)
    }, );

    $(".choice-main").animate({
        height: "0",
        opacity: "0"
    }, 1);
    $(".choice-main").hide();

    setTimeout(function () {
        $("#choice-main8").show()
    }, );
    setTimeout(function () {
        $("#choice-main8").animate({
            height: "300px",
            opacity: "1.0"
        }, 200)
    }, );
}

/////////////////////////////////
function yijingwancheng() {
    $("#yijingwancheng").show()
    $("#yijingwanchengbtn").show()
    $("#judge1").hide()
}

function yijingwanchengbtn() {
    $("#yijingwancheng").hide()
    $("#yijingwanchengbtn").hide()
}

function meiwancheng() {
    $("#meiwancheng").show()
    $("#meiwanchengbtn").show()
    $("#judge1").hide()
}

function meiwanchengbtn() {
    $("#meiwancheng").hide()
    $("#meiwanchengbtn").hide()
}
/////////////////////////////////

function a1start() {
    if (x1 == 0) {
        $("#judge1").show()
    } else {
        yijingwancheng()
    }

}

function a2start() {
    if (x2 == 0) {
        $("#judge2").show()
    } else {
        yijingwancheng()
    }
}

function a3start() {
    if (x3 == 0) {
        $("#judge3").show()
    } else {
        yijingwancheng()
    }
}

function a4start() {
    if (x4 == 0) {
        $("#judge4").show()
    } else {
        yijingwancheng()
    }
}

function a5start() {
    if (x5 == 0) {
        $("#judge5").show()
    } else {
        yijingwancheng()
    }
}

function a6start() {
    if (x6 == 0) {
        $("#judge6").show()
    } else {
        yijingwancheng()
    }
}

function a7start() {
    if (x7 == 0) {
        $("#judge7").show()
    } else {
        yijingwancheng()
    }
}

function a8start() {
    if (x8 == 0) {
        $("#judge8").show()
    } else {
        yijingwancheng()
    }
}

/////////////////////////////////

function a1restart() {
    if (x1 == 1) {
        kaishirenwu.play()
        bgm.stop()
        setTimeout(function () {
            bgma10.play()
        }, 1000);
        story1hide();
        $("#judge1").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story1").show(),
                $(".story1backhomejudge").hide(),
                $(".story1backhome").show(),
                $("#story1-0-next").show(),
                $("#story1-0").show()
        }, 200);
        setTimeout(function () {
            $("#story1").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a2restart() {
    if (x2 == 1) {
        setTimeout(function () {
            bgma20.play()
        }, 1000);
        kaishirenwu.play()
        bgm.stop()
        story2hide();
        $("#judge2").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story2").show(),
                $(".story2backhomejudge").hide(),
                $(".story2backhome").show(),
                $("#story2-1-next").show(),
                $("#story2-1").show()
        }, 200);
        setTimeout(function () {
            $("#story2").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a3restart() {
    if (x3 == 1) {
        setTimeout(function () {
            bgma30.play()
        }, 1000);
        kaishirenwu.play()
        bgm.stop()
        story3hide();
        $("#judge3").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story3").show(),
                $(".story3backhomejudge").hide(),
                $(".story3backhome").show(),
                $("#story3-1-next").show(),
                $("#story3-1").show()
        }, 200);
        setTimeout(function () {
            $("#story3").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a4restart() {
    if (x4 == 1) {
        setTimeout(function () {
            bgma40.play()
            bgma41.play()
        }, 1000);
        kaishirenwu.play()
        bgm.stop()
        story4hide();
        $("#judge4").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story4").show(),
                $(".story4backhomejudge").hide(),
                $(".story4backhome").show(),
                $("#story4-1-next").show(),
                $("#story4-1").show()
        }, 200);
        setTimeout(function () {
            $("#story4").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a5restart() {
    if (x5 == 1) {
        setTimeout(function () {
            bgma50.play()
        }, 1000);
        kaishirenwu.play()
        bgm.stop()
        story5hide();
        $("#judge5").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story5").show(),
                $(".story5backhomejudge").hide(),
                $(".story5backhome").show(),
                $("#story5-1-next").show(),
                $("#story5-1").show()
        }, 200);
        setTimeout(function () {
            $("#story5").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a6restart() {
    if (x6 == 1) {
        
    setTimeout(function () {
        bgma60.play()
    bgma61.play()
    }, 1000);
        kaishirenwu.play()
        bgm.stop()
        story4hide();
        $("#judge6").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story6").show(),
                $(".story6backhomejudge").hide(),
                $(".story6backhome").show(),
                $("#story6-1-next").show(),
                $("#story6-1").show()
        }, 200);
        setTimeout(function () {
            $("#story6").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a7restart() {
    if (x7 == 1) {
        
    setTimeout(function () {
        bgma70.play()
    }, 1000);
        kaishirenwu.play()
        bgm.stop()
        story7hide();
        $("#judge7").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story7").show(),
                $(".story7backhomejudge").hide(),
                $(".story7backhome").show(),
                $("#story7-1-next").show(),
                $("#story7-1").show()
        }, 200);
        setTimeout(function () {
            $("#story7").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}

function a8restart() {
    if (x8 == 1) {
        kaishirenwu.play()
        bgm.stop()
        story8hide();
        $("#judge8").hide()
        $(".map").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").hide()
        }, 1000);
        setTimeout(function () {
            $("#story8").show(),
                $(".story8backhomejudge").hide(),
                $(".story8backhome").show(),
                $("#story8-1-next").show(),
                $("#story8-1").show()
        }, 200);
        setTimeout(function () {
            $("#story8").animate({
                opacity: 1
            }, 1000)
        }, 1000);
    } else {
        meiwancheng()
    }
}
/////////////////////////////////

function closejudge1() {
    $("#judge1").hide()
}

function closejudge2() {
    $("#judge2").hide()
}

function closejudge3() {
    $("#judge3").hide()
}

function closejudge4() {
    $("#judge4").hide()
}

function closejudge5() {
    $("#judge5").hide()
}

function closejudge6() {
    $("#judge6").hide()
}

function closejudge7() {
    $("#judge7").hide()
}

function closejudge8() {
    $("#judge8").hide()
}

/////////////////////////////////

function story1backhome() {
    $(".story1backhomejudge").show()
}

function story1backhome1() {
    bgma10.stop()
    bgma11.stop()
    bgma12.stop()
    bgma13.stop()
    bgma14.stop()
    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story1").hide(), story1hide()
    }, 1200);
    setTimeout(function () {
        $("#story1").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story1backhomejudge").hide()
    }, 1200)
}

function story1backhome2() {
    $(".story1backhomejudge").hide()
}
/////////////////////////

function story2backhome() {
    $(".story2backhomejudge").show()
}

function story2backhome1() {
    bgma20.stop()
    bgma21.stop()
    bgma22.stop()
    bgma23.stop()
    bgma24.stop()
    bgma25.stop()
    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story2").hide(), story2hide()
    }, 1200);
    setTimeout(function () {
        $("#story2").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story2backhomejudge").hide()
    }, 1200)
}

function story2backhome2() {
    $(".story2backhomejudge").hide()
}
/////////////////////////////////

function story3backhome() {
    $(".story3backhomejudge").show()
}

function story3backhome1() {
    bgma30.stop()
    bgma31.stop()
    bgma32.stop()
    bgma33.stop()

    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story3").hide(), story3hide()
    }, 1200);
    setTimeout(function () {
        $("#story3").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story3backhomejudge").hide()
    }, 1200)
}

function story3backhome2() {
    $(".story3backhomejudge").hide()
}

/////////////////////////////////

function story4backhome() {
    $(".story4backhomejudge").show()
}

function story4backhome1() {
    bgma40.stop()
    bgma41.stop()
    bgma42.stop()
    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story4").hide(), story4hide()
    }, 1200);
    setTimeout(function () {
        $("#story4").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story4backhomejudge").hide()
    }, 1200)
}

function story4backhome2() {
    $(".story4backhomejudge").hide()
}

/////////////////////////////////

function story5backhome() {
    $(".story5backhomejudge").show()
}

function story5backhome1() {
    bgma50.stop()
    bgma51.stop()
    bgma52.stop()
    bgma53.stop()
    bgma54.stop()
    bgma55.stop()
    bgma56.stop()
    bgma57.stop()
    bgma58.stop()
    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story5").hide(), story5hide()
    }, 1200);
    setTimeout(function () {
        $("#story5").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story5backhomejudge").hide()
    }, 1200)
}

function story5backhome2() {
    $(".story5backhomejudge").hide()
}

/////////////////////////////////

function story6backhome() {
    $(".story6backhomejudge").show()
}

function story6backhome1() {
    bgma60.stop()
    bgma61.stop()
    bgma62.stop()
    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story6").hide(), story6hide()
    }, 1200);
    setTimeout(function () {
        $("#story6").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story6backhomejudge").hide()
    }, 1200)
}

function story6backhome2() {
    $(".story6backhomejudge").hide()
}

/////////////////////////////////

function story7backhome() {
    $(".story7backhomejudge").show()
}

function story7backhome1() {
    bgma70.stop()
    bgm.play()
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story7").hide(), story7hide()
    }, 1200);
    setTimeout(function () {
        $("#story7").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story7backhomejudge").hide()
    }, 1200)
}

function story7backhome2() {
    $(".story7backhomejudge").hide()
}

////////////////////////////////

function story8backhome() {
    $(".story8backhomejudge").show()
}

function story8backhome1() {
    setTimeout(function () {
        $(".map").animate({
            opacity: "1"
        }, 800)
    }, 1200);
    setTimeout(function () {
        $(".map").show()
    }, 1200);
    setTimeout(function () {
        $("#story8").hide(), story8hide()
    }, 1200);
    setTimeout(function () {
        $("#story8").animate({
            opacity: 0
        }, 1000)
    }, 200);
    setTimeout(function () {
        $("story8backhomejudge").hide()
    }, 1200)
}

function story8backhome2() {
    $(".story8backhomejudge").hide()
}

/////////////////////////////////

function story1go() {
    kaishirenwu.play()
    bgm.stop()
    story1hide();
    setTimeout(function () {
        bgma10.play()
    }, 1000);

    $("#judge1").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story1").show(),
            $(".story1backhomejudge").hide(),
            $(".story1backhome").show(),
            $("#story1-0-next").show(),
            $("#story1-0").show()
    }, 200);
    setTimeout(function () {
        $("#story1").animate({
            opacity: 1
        }, 1000)
    }, 1000);

}

function story2go() {
    kaishirenwu.play()
    bgm.stop()
    setTimeout(function () {
        bgma20.play()
    }, 1000);
   
    story2hide();
    $("#judge2").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story2").show(),
            $(".story2backhome").show(),
            $(".story2backhomejudge").hide(),
            $("#story2-1-next").show(),
            $("#story2-1").show()
    }, 200);
    setTimeout(function () {
        $("#story2").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

function story3go() {
    kaishirenwu.play()
    bgm.stop()
  
    setTimeout(function () {
        bgma30.play()
    }, 1000);
    story3hide();

    $("#judge3").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story3").show(),
            $(".story3backhome").show(),
            $(".story3backhomejudge").hide(),
            $("#story3-1-next").show(),
            $("#story3-1").show()
    }, 200);
    setTimeout(function () {
        $("#story3").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

function story4go() {
    kaishirenwu.play()
    bgm.stop()
    
    setTimeout(function () {
        bgma40.play()
        bgma41.play()
    }, 1000);
    story3hide();
    $("#judge4").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story4").show(), $(".story4backhomejudge").hide(), $("#story4-1-next").show(), $("#story4-1").show()
    }, 1000);
    setTimeout(function () {
        $("#story4").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

function story5go() {
    kaishirenwu.play()
    bgm.stop()
   
    setTimeout(function () {
        bgma50.play()
    }, 1000);
    story5hide();

    $("#judge5").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story5").show(), $(".story5backhomejudge").hide(), $("#story5-1-next").show(), $("#story5-1").show()
    }, 1000);
    setTimeout(function () {
        $("#story5").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

function story6go() {
    kaishirenwu.play()
    bgm.stop()
  
    setTimeout(function () {
        bgma60.play()
    bgma61.play()
    }, 1000);
    story6hide();

    $("#judge6").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story6").show(), $(".story6backhomejudge").hide(), $("#story6-1-next").show(), $("#story6-1").show()
    }, 1000);
    setTimeout(function () {
        $("#story6").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

function story7go() {
    kaishirenwu.play()
    bgm.stop()
   
    
    setTimeout(function () {
        bgma70.play()
    }, 1000);
    story7hide();

    $("#judge7").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story7").show(), $(".story7backhomejudge").hide(), $("#story7-1-next").show(), $("#story7-1").show()
    }, 1000);
    setTimeout(function () {
        $("#story7").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

function story8go() {
    kaishirenwu.play()
    bgm.stop()
    story8hide();

    $("#judge8").hide()
    $(".map").animate({
        opacity: "0"
    }, 1000);
    setTimeout(function () {
        $(".map").hide()
    }, 1000);
    setTimeout(function () {
        $("#story8").show(), $(".story8backhomejudge").hide(), $("#story8-1-next").show(), $("#story8-1").show()
    }, 1000);
    setTimeout(function () {
        $("#story8").animate({
            opacity: 1
        }, 1000)
    }, 1000);
}

//////////////////////////////////////////////////////////

function story1next0() {
    setTimeout(function () {
        $("#story1-0-next").hide();
        $("#story1-0").hide()
    }, 50)
    fanye.play()
    $("#story1-1-next").show();
    $("#story1-1").show()
}

function story1next1() {
    setTimeout(function () {
        $("#story1-1-next").hide();
        $("#story1-1").hide()
    }, 50)
    fanye.play()
    $("#story1-2-next").show();
    $("#story1-2").show()
}

function story1next2() {
    setTimeout(function () {
        $("#story1-2-next").hide();
        $("#story1-2").hide()
    }, 50)
    fanye.play()
    $("#story1-3-next").show();
    $("#story1-3").show()
}

function story1next3() {
    setTimeout(function () {
        $("#story1-3-next").hide();
        $("#story1-3").hide()
    }, 50)
    fanye.play()
    bgma10.volume(0.05)
    bgma12.play()
    $("#story1-4-next").show();
    $("#story1-4").show()
}

function story1next4() {
    setTimeout(function () {
        $("#story1-4-next").hide();
        $("#story1-4").hide()
    }, 50)
    fanye.play()
    $("#story1-5-next").show();
    $("#story1-5").show()
}

function story1next5() {
    setTimeout(function () {
        $("#story1-5-next").hide();
        $("#story1-5").hide()
    }, 50)
    fanye.play()
    $("#story1-6-next").show();
    $("#story1-6").show()
}

function story1next6() {
    setTimeout(function () {
        $("#story1-6-next").hide();
        $("#story1-6").hide()
    }, 50)
    fanye.play()
    $("#story1-7-next").show();
    $("#story1-7").show()
}

function story1next7() {
    setTimeout(function () {
        $("#story1-7-next").hide();
        $("#story1-7").hide()
    }, 50)
    fanye.play()
    bgma13.play()
    $("#story1-8-next").show();
    $("#story1-8").show()
}

function story1next8() {
    setTimeout(function () {
        $("#story1-8-next").hide();
        $("#story1-8").hide()
    }, 50)
    fanye.play()
    bgma13.stop()
    $("#story1-9-next").show();
    $("#story1-9").show()
}

function story1next9() {
    setTimeout(function () {
        $("#story1-9-next").hide();
        $("#story1-9").hide()
    }, 50)
    fanye.play()
    $("#story1-10-next").show();
    $("#story1-10").show()
}

function story1next10() {
    setTimeout(function () {
        $("#story1-10-next").hide();
        $("#story1-10").hide()
    }, 50)
    fanye.play()
    bgma12.stop()
    $("#story1-11-next").show();
    $("#story1-11").show()
}

function story1next11() {
    setTimeout(function () {
        $("#story1-11-next").hide();
        $("#story1-11").hide()
    }, 50)
    fanye.play()
    $("#story1-12-next").show();
    $("#story1-12").show()
}

function story1next12() {
    setTimeout(function () {
        $("#story1-12-next").hide();
        $("#story1-12").hide()
    }, 50)
    fanye.play()
    $("#story1-13-next").show();
    $("#story1-13").show()
}

function story1next13() {
    setTimeout(function () {
        $("#story1-13-next").animate({
            opacity: "0"
        }, 1000);
        $("#story1-13").animate({
            opacity: "0"
        }, 1000);
    }, 50)

    setTimeout(function () {
        $("#story1-13-next").hide();
        $("#story1-13").hide()
    }, 1050)

    fanye.play()
    bgma11.play()
    bgma10.volume(0.02)

    $("#story1-14-next").show();
    $("#story1-14").show()

    setTimeout(function () {
    $("#story1-14-next").animate({
        opacity: "1"
    }, 1000);
    $("#story1-14").animate({
        opacity: "1"
    }, 1000);
}, 1000)
    
}

function story1next14() {
    setTimeout(function () {
        $("#story1-14-next").hide();
        $("#story1-14").hide()
    }, 50)

    fanye.play()

    $("#story1-15-next").show();
    $("#story1-15").show()

    $("#story1-13-next").animate({
        opacity: "1"
    }, 1);
    $("#story1-13").animate({
        opacity: "1"
    }, 1);

    $("#story1-14-next").animate({
        opacity: "0"
    }, 1);
    $("#story1-14").animate({
        opacity: "0"
    }, 1);
}

function story1next15() {
    setTimeout(function () {
        $("#story1-15-next").hide();
        $("#story1-15").hide()
    }, 50)
    fanye.play()
    $("#story1-16-next").show();
    $("#story1-16").show()
}

function story1next16() {
    setTimeout(function () {
        $("#story1-16-next").hide();
        $("#story1-16").hide()
    }, 50)
    fanye.play()
    $("#story1-17-next").show();
    $("#story1-17").show()
}

function story1next17() {
    setTimeout(function () {
        $("#story1-17-next").hide();
        $("#story1-17").hide()
    }, 50)
    fanye.play()
    $("#story1-18-next").show();
    $("#story1-18").show()
}

function story1next18() {
    setTimeout(function () {
        $("#story1-18-next").hide();
        $("#story1-18").hide()
    }, 50)
    fanye.play()
    $("#story1-19-next").show();
    $("#story1-19").show()
}

function story1next19() {
    setTimeout(function () {
        $("#story1-19-next").hide();
        $("#story1-19").hide()
    }, 50)
    fanye.play()
    $("#story1-20-next").show();
    $("#story1-20").show()
}

function story1next20() {
    setTimeout(function () {
        $("#story1-20-next").hide();
        $("#story1-20").hide()
    }, 50)
    fanye.play()
    $("#story1-21-next").show();
    $("#story1-21").show()
}

function story1next21() {
    setTimeout(function () {
        $("#story1-21-next").hide();
        $("#story1-21").hide()
    }, 50)
    fanye.play()
    $("#story1-22-next").show();
    $("#story1-22").show()
}

function story1next22() {
    setTimeout(function () {
        $("#story1-22-next").hide();
        $("#story1-22").hide()
    }, 50)
    fanye.play()
    $("#story1-23-next").show();
    $("#story1-23").show()
}

function story1next23() {
    setTimeout(function () {
        $("#story1-23-next").hide();
        $("#story1-23").hide()
    }, 50)
    fanye.play()
    $("#story1-24-next").show();
    $("#story1-24").show()
}

function story1next24() {
    setTimeout(function () {
        $("#story1-24-next").hide();
        $("#story1-24").hide()
    }, 50)
    fanye.play()
    $("#story1-25-next").show();
    $("#story1-25").show()
}

function story1next25() {
    setTimeout(function () {
        $("#story1-25-next").hide();
        $("#story1-25").hide()
    }, 50)
    fanye.play()
    $("#story1-26-next").show();
    $("#story1-26").show()
}

function story1next26() {
    setTimeout(function () {
        $("#story1-26-next").hide();
        $("#story1-26").hide()
    }, 50)
    fanye.play()
    $("#story1-27-next").show();
    $("#story1-27").show()
}

function story1next27() {
    setTimeout(function () {
        $("#story1-27-next").hide();
        $("#story1-27").hide()
    }, 50)
    fanye.play()
    $("#story1-28-next").show();
    $("#story1-28").show()
}

function story1next28() {
    setTimeout(function () {
        $("#story1-28-next").hide();
        $("#story1-28").hide()
    }, 50)
    fanye.play()
    bgma14.play()
    $("#story1-29-next").show();
    $("#story1-29").show()
}

function story1next29() {
    setTimeout(function () {
        $("#story1-29-next").hide();
        $("#story1-29").hide()
    }, 50)
    fanye.play()
    bgma14.stop()
    $("#story1-30-next").show();
    $("#story1-30").show()
}

function story1next30() {
    setTimeout(function () {
        $("#story1-30-next").hide();
        $("#story1-30").hide()
    }, 50)
    fanye.play()
    $("#story1-31-next").show();
    $("#story1-31").show()
}

function story1next31() {
    setTimeout(function () {
        $("#story1-31-next").hide();
        $("#story1-31").hide()
    }, 50)
    fanye.play()
    $("#story1-32-next").show();
    $("#story1-32").show()
}

function story1next32() {
    setTimeout(function () {
        $("#story1-32-next").hide();
        $("#story1-32").hide()
    }, 50)
    fanye.play()
    $("#story1-33-next").show();
    $("#story1-33").show()
}

function story1next33() {
    setTimeout(function () {
        $("#story1-33-next").hide();
        $("#story1-33").hide()
    }, 50)
    fanye.play()
    bgma10.stop()
    $("#story1-34-next").show();
    $("#story1-34").show()
}

function story1next34() {
    setTimeout(function () {
        $("#story1-34-next").hide();
        $("#story1-34").hide()
    }, 50)
    fanye.play()
    $("#story1-35-next").show();
    $("#story1-35").show()
}

function story1next35() {
    setTimeout(function () {
        $("#story1-35-next").hide();
        $("#story1-35").hide()
    }, 50)
    fanye.play()
    $("#story1-36-next").show();
    $("#story1-36").show()
}

function story1next36() {
    setTimeout(function () {
        $("#story1-36-next").hide();
        $("#story1-36").hide()
    }, 50)
    fanye.play()
    $("#story1-37-next").show();
    $("#story1-37").show()
}

function story1next37() {
    setTimeout(function () {
        $("#story1-37-next").hide();
        $("#story1-37").hide()
    }, 50)
    fanye.play()
    $("#story1-38-next").show();
    $("#story1-38").show()
}

function story1next38() {
    setTimeout(function () {
        $("#story1-38-next").hide();
        $("#story1-38").hide()
    }, 50)
    fanye.play()
    $("#story1-39-next").show();
    $("#story1-39").show()
}

function story1next39() {
    setTimeout(function () {
        $("#story1-39-next").hide();
        $("#story1-39").hide()
    }, 50)
    fanye.play()
    $("#story1-40-next").show();
    $("#story1-40").show()
}

function story1next40() {
    setTimeout(function () {
        $("#story1-40-next").hide();
        $("#story1-40").hide()
    }, 50)
    fanye.play()
    $("#story1-41-next").show();
    $("#story1-41").show()
}

function story1next41() {
    setTimeout(function () {
        $("#story1-41-next").hide();
        $("#story1-41").hide()
    }, 50)
    fanye.play()
    $("#story1-42-next").show();
    $("#story1-42").show()
}

function story1next42() {
    setTimeout(function () {
        $("#story1-42-next").hide();
        $("#story1-42").hide()
    }, 50)
    fanye.play()
    $("#story1-43-next").show();
    $("#story1-43").show()
}

function story1next43() {
    setTimeout(function () {
        $("#story1-43-next").hide();
        $("#story1-43").hide()
    }, 50)
    fanye.play()
    $("#story1-44-next").show();
    $("#story1-44").show()
}

function story1next44() {
    setTimeout(function () {
        $("#story1-44-next").hide();
        $("#story1-44").hide()
    }, 50)
    fanye.play()
    $("#story1-45-next").show();
    $("#story1-45").show()
}

function story1next45() {
    setTimeout(function () {
        $("#story1-45-next").hide();
        $("#story1-45").hide()
    }, 50)
    fanye.play()
    $("#story1-46-next").show();
    $("#story1-46").show()
}

function story1next46() {
    setTimeout(function () {
        $("#story1-46-next").hide();
        $("#story1-46").hide()
    }, 50)
    fanye.play()
    $("#story1-47-next").show();
    $("#story1-47").show()

}

function story1next47() {
    setTimeout(function () {
        $("#story1-47-next").hide();
        $("#story1-47").hide()
    }, 50)
    fanye.play()
    $("#story1-48-next").show();
    $("#story1-48").show()
}

function story1next48() {
    setTimeout(function () {
        $("#story1-48-next").hide();
        $("#story1-48").hide()
    }, 50)
    fanye.play()
    $("#story1-49-next").show();
    $("#story1-49").show()
}

function story1next49() {
    setTimeout(function () {
        $("#story1-49-next").hide();
        $("#story1-49").hide()
    }, 50)
    fanye.play()
    $("#story1-50-next").show();
    $("#story1-50").show()
}

function story1next50() {
    setTimeout(function () {
        $("#story1-50-next").hide();
        $("#story1-50").hide()
    }, 50)
    fanye.play()
    $("#story1-51-next").show();
    $("#story1-51").show()
}

function story1next51() {
    setTimeout(function () {
        $("#story1-51-next").hide();
        $("#story1-51").hide()
    }, 50)
    fanye.play()
    $("#story1-52-next").show();
    $("#story1-52").show()
}

function story1next52() {
    setTimeout(function () {
        $("#story1-52-next").hide();
        $("#story1-52").hide()
    }, 50)
    fanye.play()
    $("#story1-53-next").show();
    $("#story1-53").show()
}

function story1next53() {
    setTimeout(function () {
        $("#story1-53-next").hide();
        $("#story1-53").hide()
    }, 50)
    fanye.play()
    $("#story1-54-next").show();
    $("#story1-54").show()
}

function story1next54() {
    setTimeout(function () {
        $("#story1-54-next").hide();
        $("#story1-54").hide()
    }, 50)
    fanye.play()
    $("#story1-55-next").show();
    $("#story1-55").show()
}

function story1next55() {
    setTimeout(function () {
        $("#story1-55-next").hide();
        $("#story1-55").hide()
    }, 50)
    fanye.play()
    $("#story1-56-next").show();
    $("#story1-56").show()
}

function story1next56() {
    setTimeout(function () {
        $("#story1-56-next").hide();
        $("#story1-56").hide()
    }, 50)
    fanye.play()
    $("#story1-57-next").show();
    $("#story1-57").show()
}

function story1next57() {
    setTimeout(function () {
        $("#story1-57-next").hide();
        $("#story1-57").hide()
    }, 50)
    fanye.play()
    $("#story1-58-next").show();
    $("#story1-58").show()
}

function story1next58() {
    setTimeout(function () {
        $("#story1-58-next").hide();
        $("#story1-58").hide()
    }, 50)
    fanye.play()
    $("#story1-59-next").show();
    $("#story1-59").show()
}

function story1next59() {
    setTimeout(function () {
        $("#story1-59-next").hide();
        $("#story1-59").hide()
    }, 50)
    fanye.play()
    
    $("#story1-60-next").show();
    $("#story1-60").show()
}

function story1next60() {
    if (x1 == 1) {
        bgma11.stop()
        bgm.play()
        $("#story1-60-next").hide();
        $(".story1backhome").hide()
        $("#story1-60").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story1").hide()
        }, 2000)
        setTimeout(function () {
            $("#story1").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story1-60").animate({
                opacity: "1"
            }, 2);
        }, 2001)
        
    } else {
        bgma11.stop()
        bgm.play()
        $("#story1-60-next").hide();
        $(".story1backhome").hide()
        $("#story1-60").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end1").show()
        }, 1000)
        setTimeout(function () {
            $("#end1").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end1btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end1btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        a = a + 1;
        b = b + 3;
        c = c + 1
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
    }
}

function story1end() {
    $("#story1").hide()
    $("#story1").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x1 = 1;
    setTimeout(function () {
        $("#story1-60").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end1").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    a2open()
}

//////////////////////////////////////////////////////////
function story2next1() {
    setTimeout(function () {
        $("#story2-1-next").hide();
        $("#story2-1").hide()
    }, 50)
    fanye.play()
    $("#story2-2-next").show();
    $("#story2-2").show()
}

function story2next2() {
    setTimeout(function () {
        $("#story2-2-next").hide();
        $("#story2-2").hide()
    }, 50)
    fanye.play()
    $("#story2-3-next").show();
    $("#story2-3").show()
}

function story2next3() {
    setTimeout(function () {
        $("#story2-3-next").hide();
        $("#story2-3").hide()
    }, 50)
    fanye.play()
    $("#story2-4-next").show();
    $("#story2-4").show()
}

function story2next4() {
    setTimeout(function () {
        $("#story2-4-next").hide();
        $("#story2-4").hide()
    }, 50)
    fanye.play()
    $("#story2-5-next").show();
    $("#story2-5").show()
}

function story2next5() {
    setTimeout(function () {
        $("#story2-5-next").hide();
        $("#story2-5").hide()
    }, 50)
    fanye.play()
    $("#story2-6-next").show();
    $("#story2-6").show()
}

function story2next6() {
    setTimeout(function () {
        $("#story2-6-next").hide();
        $("#story2-6").hide()
    }, 50)
    fanye.play()
    $("#story2-7-next").show();
    $("#story2-7").show()
}

function story2next7() {
    setTimeout(function () {
        $("#story2-7-next").hide();
        $("#story2-7").hide()
    }, 50)
    fanye.play()
    $("#story2-8-next").show();
    $("#story2-8").show()
}

function story2next8() {
    setTimeout(function () {
        $("#story2-8-next").hide();
        $("#story2-8").hide()
    }, 50)
    fanye.play()
    $("#story2-9-next").show();
    $("#story2-9").show()
}

function story2next9() {
    setTimeout(function () {
        $("#story2-9-next").hide();
        $("#story2-9").hide()
    }, 50)
    fanye.play()
    $("#story2-10-next").show();
    $("#story2-10").show()
}

function story2next10() {
    setTimeout(function () {
        $("#story2-10-next").hide();
        $("#story2-10").hide()
    }, 50)
    fanye.play()
    $("#story2-11-next").show();
    $("#story2-11").show()
}

function story2next11() {
    setTimeout(function () {
        $("#story2-11-next").hide();
        $("#story2-11").hide()
    }, 50)
    fanye.play()
    $("#story2-12-next").show();
    $("#story2-12").show()
}

function story2next12() {
    setTimeout(function () {
        $("#story2-12-next").hide();
        $("#story2-12").hide()
    }, 50)
    fanye.play()
    $("#story2-13-next").show();
    $("#story2-13").show()
}

function story2next13() {
    setTimeout(function () {
        $("#story2-13-next").hide();
        $("#story2-13").hide()
    }, 50)
    fanye.play()
    $("#story2-14-next").show();
    $("#story2-14").show()
}

function story2next14() {
    setTimeout(function () {
        $("#story2-14-next").hide();
        $("#story2-14").hide()
    }, 50)
    fanye.play()
    bgma20.stop()
    bgma21.play()
    $("#story2-15-next").show();
    $("#story2-15").show()
}

function story2next15() {
    setTimeout(function () {
        $("#story2-15-next").hide();
        $("#story2-15").hide()
    }, 50)
    fanye.play()
    $("#story2-16-next").show();
    $("#story2-16").show()
}

function story2next16() {
    setTimeout(function () {
        $("#story2-16-next").hide();
        $("#story2-16").hide()
    }, 50)
    fanye.play()
    $("#story2-17-next").show();
    $("#story2-17").show()
}

function story2next17() {
    setTimeout(function () {
        $("#story2-17-next").hide();
        $("#story2-17").hide()
    }, 50)
    fanye.play()
    $("#story2-18-next").show();
    $("#story2-18").show()
}

function story2next18() {
    setTimeout(function () {
        $("#story2-18-next").hide();
        $("#story2-18").hide()
    }, 50)
    fanye.play()
    $("#story2-19-next").show();
    $("#story2-19").show()
}

function story2next19() {
    setTimeout(function () {
        $("#story2-19-next").hide();
        $("#story2-19").hide()
    }, 50)
    fanye.play()
    $("#story2-20-next").show();
    $("#story2-20").show()
}

function story2next20() {
    setTimeout(function () {
        $("#story2-20-next").hide();
        $("#story2-20").hide()
    }, 50)
    fanye.play()
    $("#story2-21-next").show();
    $("#story2-21").show()
}

function story2next21() {
    setTimeout(function () {
        $("#story2-21-next").hide();
        $("#story2-21").hide()
    }, 50)
    fanye.play()
    $("#story2-22-next").show();
    $("#story2-22").show()
}

function story2next22() {
    setTimeout(function () {
        $("#story2-22-next").hide();
        $("#story2-22").hide()
    }, 50)
    fanye.play()
    $("#story2-23-next").show();
    $("#story2-23").show()
}

function story2next23() {
    setTimeout(function () {
        $("#story2-23-next").hide();
        $("#story2-23").hide()
    }, 50)
    fanye.play()
    $("#story2-24-next").show();
    $("#story2-24").show()
}

function story2next24() {
    setTimeout(function () {
        $("#story2-24-next").hide();
        $("#story2-24").hide()
    }, 50)
    fanye.play()
    $("#story2-25-next").show();
    $("#story2-25").show()
}

function story2next25() {
    setTimeout(function () {
        $("#story2-25-next").hide();
        $("#story2-25").hide()
    }, 50)
    fanye.play()
    bgma20.play()
    bgma21.stop()
    $("#story2-26-next").show();
    $("#story2-26").show()
}

function story2next26() {
    setTimeout(function () {
        $("#story2-26-next").hide();
        $("#story2-26").hide()
    }, 50)
    fanye.play()
    $("#story2-27-next").show();
    $("#story2-27").show()
}

function story2next27() {
    setTimeout(function () {
        $("#story2-27-next").hide();
        $("#story2-27").hide()
    }, 50)
    fanye.play()
    $("#story2-28-next").show();
    $("#story2-28").show()
}

function story2next28() {
    setTimeout(function () {
        $("#story2-28-next").hide();
        $("#story2-28").hide()
    }, 50)
    fanye.play()
    $("#story2-29-next").show();
    $("#story2-29").show()
}

function story2next29() {
    setTimeout(function () {
        $("#story2-29-next").hide();
        $("#story2-29").hide()
    }, 50)
    fanye.play()
    bgma23.play()
    $("#story2-30-next").show();
    $("#story2-30").show()
}

function story2next30() {
    setTimeout(function () {
        $("#story2-30-next").hide();
        $("#story2-30").hide()
    }, 50)
    fanye.play()
    bgma23.stop()
    $("#story2-31-next").show();
    $("#story2-31").show()
}

function story2next31() {
    setTimeout(function () {
        $("#story2-31-next").hide();
        $("#story2-31").hide()
    }, 50)
    fanye.play()
    bgma22.play()
    $("#story2-32-next").show();
    $("#story2-32").show()
}

function story2next32() {
    setTimeout(function () {
        $("#story2-32-next").hide();
        $("#story2-32").hide()
    }, 50)
    fanye.play()
    bgma22.stop()
    $("#story2-33-next").show();
    $("#story2-33").show()
}

function story2next33() {
    setTimeout(function () {
        $("#story2-33-next").hide();
        $("#story2-33").hide()
    }, 50)
    fanye.play()
    $("#story2-34-next").show();
    $("#story2-34").show()
}

function story2next34() {
    setTimeout(function () {
        $("#story2-34-next").hide();
        $("#story2-34").hide()
    }, 50)
    fanye.play()
    $("#story2-35-next").show();
    $("#story2-35").show()
}

function story2next35() {
    setTimeout(function () {
        $("#story2-35-next").hide();
        $("#story2-35").hide()
    }, 50)
    fanye.play()
    $("#story2-36-next").show();
    $("#story2-36").show()
}

function story2next36() {
    setTimeout(function () {
        $("#story2-36-next").hide();
        $("#story2-36").hide()
    }, 50)
    fanye.play()
    $("#story2-37-next").show();
    $("#story2-37").show()
}

function story2next37() {
    setTimeout(function () {
        $("#story2-37-next").hide();
        $("#story2-37").hide()
    }, 50)
    fanye.play()
    $("#story2-38-next").show();
    $("#story2-38").show()
}

function story2next38() {
    setTimeout(function () {
        $("#story2-38-next").hide();
        $("#story2-38").hide()
    }, 50)
    fanye.play()
    $("#story2-39-next").show();
    $("#story2-39").show()
}

function story2next39() {
    setTimeout(function () {
        $("#story2-39-next").hide();
        $("#story2-39").hide()
    }, 50)
    fanye.play()
    $("#story2-40-next").show();
    $("#story2-40").show()
}

function story2next40() {
    setTimeout(function () {
        $("#story2-40-next").hide();
        $("#story2-40").hide()
    }, 50)
    fanye.play()
    $("#story2-41-next").show();
    $("#story2-41").show()
}

function story2next41() {
    setTimeout(function () {
        $("#story2-41-next").hide();
        $("#story2-41").hide()
    }, 50)
    fanye.play()
    bgma24.play()
    bgma25.play()
    $("#story2-42-next").show();
    $("#story2-42").show()
}

function story2next42() {
    setTimeout(function () {
        $("#story2-42-next").hide();
        $("#story2-42").hide()
    }, 50)
    fanye.play()
    bgma24.stop()
    $("#story2-43-next").show();
    $("#story2-43").show()
}

function story2next43() {
    setTimeout(function () {
        $("#story2-43-next").hide();
        $("#story2-43").hide()
    }, 50)
    fanye.play()
    $("#story2-44-next").show();
    $("#story2-44").show()
}

function story2next44() {
    setTimeout(function () {
        $("#story2-44-next").hide();
        $("#story2-44").hide()
    }, 50)
    fanye.play()
    $("#story2-45-next").show();
    $("#story2-45").show()
}

function story2next45() {
    setTimeout(function () {
        $("#story2-45-next").hide();
        $("#story2-45").hide()
    }, 50)
    fanye.play()
    $("#story2-46-next").show();
    $("#story2-46").show()
}

function story2next46() {
    if (x2 == 1) {
        bgma20.stop()
        bgma25.stop()
        bgm.play()
        $("#story2-46-next").hide();
        $(".story2backhome").hide()
        $("#story2-46").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story2").hide()
        }, 2000)
        setTimeout(function () {
            $("#story2").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story2-46").animate({
                opacity: "1"
            }, 2);
        }, 2001)

    } else {
        bgma20.stop()
        bgma25.stop()
        bgm.play()
        $("#story2-46-next").hide();
        $(".story2backhome").hide()
        $("#story2-46").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end2").show()
        }, 1000)
        setTimeout(function () {
            $("#end2").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end2btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end2btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        a = a + 1;
        b = b + 3;
        c = c + 1
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
    }
}

function story2end() {
    $("#story2").hide()
    $("#story2").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x2 = 1;
    setTimeout(function () {
        $("#story2-46").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end2").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    a3open()
}

//////////////////////////////////////////////////////////
function story3next1() {
    setTimeout(function () {
        $("#story3-1-next").hide();
        $("#story3-1").hide()
    }, 50)
    fanye.play()
    $("#story3-2-next").show();
    $("#story3-2").show()
}

function story3next2() {
    setTimeout(function () {
        $("#story3-2-next").hide();
        $("#story3-2").hide()
    }, 50)
    fanye.play()
    $("#story3-3-next").show();
    $("#story3-3").show()
}

function story3next3() {
    setTimeout(function () {
        $("#story3-3-next").hide();
        $("#story3-3").hide()
    }, 50)
    fanye.play()
    $("#story3-4-next").show();
    $("#story3-4").show()
}

function story3next4() {
    setTimeout(function () {
        $("#story3-4-next").hide();
        $("#story3-4").hide()
    }, 50)
    fanye.play()
    $("#story3-5-next").show();
    $("#story3-5").show()
}

function story3next5() {
    setTimeout(function () {
        $("#story3-5-next").hide();
        $("#story3-5").hide()
    }, 50)
    fanye.play()
    $("#story3-6-next").show();
    $("#story3-6").show()
}

function story3next6() {
    setTimeout(function () {
        $("#story3-6-next").hide();
        $("#story3-6").hide()
    }, 50)
    fanye.play()
    $("#story3-7-next").show();
    $("#story3-7").show()
}

function story3next7() {
    setTimeout(function () {
        $("#story3-7-next").hide();
        $("#story3-7").hide()
    }, 50)
    fanye.play()
    $("#story3-8-next").show();
    $("#story3-8").show()
}

function story3next8() {
    setTimeout(function () {
        $("#story3-8-next").hide();
        $("#story3-8").hide()
    }, 50)
    fanye.play()
    $("#story3-9-next").show();
    $("#story3-9").show()
}

function story3next9() {
    setTimeout(function () {
        $("#story3-9-next").hide();
        $("#story3-9").hide()
    }, 50)
    fanye.play()
    $("#story3-10-next").show();
    $("#story3-10").show()
}

function story3next10() {
    setTimeout(function () {
        $("#story3-10-next").hide();
        $("#story3-10").hide()
    }, 50)
    fanye.play()
    $("#story3-11-next").show();
    $("#story3-11").show()
}

function story3next11() {
    setTimeout(function () {
        $("#story3-11-next").hide();
        $("#story3-11").hide()
    }, 50)
    fanye.play()
    $("#story3-12-next").show();
    $("#story3-12").show()
}

function story3next12() {
    setTimeout(function () {
        $("#story3-12-next").hide();
        $("#story3-12").hide()
    }, 50)
    fanye.play()
    $("#story3-13-next").show();
    $("#story3-13").show()
}

function story3next13() {
    setTimeout(function () {
        $("#story3-13-next").hide();
        $("#story3-13").hide()
    }, 50)
    fanye.play()
    $("#story3-14-next").show();
    $("#story3-14").show()
}

function story3next14() {
    setTimeout(function () {
        $("#story3-14-next").hide();
        $("#story3-14").hide()
    }, 50)
    fanye.play()
    $("#story3-15-next").show();
    $("#story3-15").show()
}

function story3next15() {
    setTimeout(function () {
        $("#story3-15-next").hide();
        $("#story3-15").hide()
    }, 50)
    fanye.play()
    $("#story3-16-next").show();
    $("#story3-16").show()
}

function story3next16() {
    setTimeout(function () {
        $("#story3-16-next").hide();
        $("#story3-16").hide()
    }, 50)
    fanye.play()
    $("#story3-17-next").show();
    $("#story3-17").show()
}

function story3next17() {
    setTimeout(function () {
        $("#story3-17-next").hide();
        $("#story3-17").hide()
    }, 50)
    fanye.play()
    bgma31.play()
    $("#story3-18-next").show();
    $("#story3-18").show()
}

function story3next18() {
    setTimeout(function () {
        $("#story3-18-next").hide();
        $("#story3-18").hide()
    }, 50)
    fanye.play()
    $("#story3-19-next").show();
    $("#story3-19").show()
}

function story3next19() {
    setTimeout(function () {
        $("#story3-19-next").hide();
        $("#story3-19").hide()
    }, 50)
    fanye.play()
    $("#story3-20-next").show();
    $("#story3-20").show()
}

function story3next20() {
    setTimeout(function () {
        $("#story3-20-next").hide();
        $("#story3-20").hide()
    }, 50)
    fanye.play()
    $("#story3-21-next").show();
    $("#story3-21").show()
}

function story3next21() {
    setTimeout(function () {
        $("#story3-21-next").hide();
        $("#story3-21").hide()
    }, 50)
    fanye.play()
    $("#story3-22-next").show();
    $("#story3-22").show()
}

function story3next22() {
    setTimeout(function () {
        $("#story3-22-next").hide();
        $("#story3-22").hide()
    }, 50)
    fanye.play()
    bgma31.stop()
    $("#story3-23-next").show();
    $("#story3-23").show()
}

function story3next23() {
    setTimeout(function () {
        $("#story3-23-next").hide();
        $("#story3-23").hide()
    }, 50)
    fanye.play()
    $("#story3-24-next").show();
    $("#story3-24").show()
}

function story3next24() {
    setTimeout(function () {
        $("#story3-24-next").hide();
        $("#story3-24").hide()
    }, 50)
    fanye.play()
    $("#story3-25-next").show();
    $("#story3-25").show()
}

function story3next25() {
    setTimeout(function () {
        $("#story3-25-next").hide();
        $("#story3-25").hide()
    }, 50)
    fanye.play()
    $("#story3-26-next").show();
    $("#story3-26").show()
}

function story3next26() {
    setTimeout(function () {
        $("#story3-26-next").hide();
        $("#story3-26").hide()
    }, 50)
    fanye.play()
    $("#story3-27-next").show();
    $("#story3-27").show()
}

function story3next27() {
    setTimeout(function () {
        $("#story3-27-next").hide();
        $("#story3-27").hide()
    }, 50)
    fanye.play()
    $("#story3-28-next").show();
    $("#story3-28").show()
}

function story3next28() {
    setTimeout(function () {
        $("#story3-28-next").hide();
        $("#story3-28").hide()
    }, 50)
    fanye.play()
    $("#story3-29-next").show();
    $("#story3-29").show()
}

function story3next29() {
    setTimeout(function () {
        $("#story3-29-next").hide();
        $("#story3-29").hide()
    }, 50)
    fanye.play()
    $("#story3-30-next").show();
    $("#story3-30").show()
}

function story3next30() {
    setTimeout(function () {
        $("#story3-30-next").hide();
        $("#story3-30").hide()
    }, 50)
    fanye.play()
    $("#story3-31-next").show();
    $("#story3-31").show()
}

function story3next31() {
    setTimeout(function () {
        $("#story3-31-next").hide();
        $("#story3-31").hide()
    }, 50)
    fanye.play()
    $("#story3-32-next").show();
    $("#story3-32").show()
}

function story3next32() {
    setTimeout(function () {
        $("#story3-32-next").hide();
        $("#story3-32").hide()
    }, 50)
    fanye.play()
    $("#story3-33-next").show();
    $("#story3-33").show()
}

function story3next33() {
    setTimeout(function () {
        $("#story3-33-next").hide();
        $("#story3-33").hide()
    }, 50)
    fanye.play()
    $("#story3-34-next").show();
    $("#story3-34").show()
}

function story3next34() {
    setTimeout(function () {
        $("#story3-34-next").hide();
        $("#story3-34").hide()
    }, 50)
    fanye.play()
    bgma32.play()
    bgma33.play()
    $("#story3-35-next").show();
    $("#story3-35").show()
}

function story3next35() {
    setTimeout(function () {
        $("#story3-35-next").hide();
        $("#story3-35").hide()
    }, 50)
    fanye.play()
    $("#story3-36-next").show();
    $("#story3-36").show()
}

function story3next36() {
    setTimeout(function () {
        $("#story3-36-next").hide();
        $("#story3-36").hide()
    }, 50)
    fanye.play()
    $("#story3-37-next").show();
    $("#story3-37").show()
}

function story3next37() {
    setTimeout(function () {
        $("#story3-37-next").hide();
        $("#story3-37").hide()
    }, 50)
    fanye.play()
    $("#story3-38-next").show();
    $("#story3-38").show()
}

function story3next38() {
    setTimeout(function () {
        $("#story3-38-next").hide();
        $("#story3-38").hide()
    }, 50)
    fanye.play()
    $("#story3-39-next").show();
    $("#story3-39").show()
}

function story3next39() {
    setTimeout(function () {
        $("#story3-39-next").hide();
        $("#story3-39").hide()
    }, 50)
    fanye.play()
    $("#story3-40-next").show();
    $("#story3-40").show()
}

function story3next40() {
    setTimeout(function () {
        $("#story3-40-next").hide();
        $("#story3-40").hide()
    }, 50)
    fanye.play()
    $("#story3-41-next").show();
    $("#story3-41").show()
}

function story3next41() {
    if (x3 == 1) {
        bgma32.stop()
        bgma33.stop()
        bgma30.stop()
        bgm.play()
        $("#story3-41-next").hide();
        $(".story3backhome").hide()
        $("#story3-41").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story3").hide()
        }, 2000)
        setTimeout(function () {
            $("#story3").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story3-41").animate({
                opacity: "1"
            }, 2);
        }, 2001)

    } else {
        bgma32.stop()
        bgma33.stop()
        bgma30.stop()
        bgm.play()
        $("#story3-41-next").hide();
        $(".story3backhome").hide()
        $("#story3-41").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end3").show()
        }, 1000)
        setTimeout(function () {
            $("#end3").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end3btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end3btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        a = a + 1;
        b = b + 3;
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
    }
}

function story3end() {
    $("#story3").hide()
    $("#story3").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x3 = 1;
    setTimeout(function () {
        $("#story3-41").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end3").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    a4open()
}
//////////////////////////////////////////////////////////
function story4next1() {
    setTimeout(function () {
        $("#story4-1-next").hide();
        $("#story4-1").hide()
    }, 50)
    fanye.play()
    $("#story4-2-next").show();
    $("#story4-2").show()
}

function story4next2() {
    setTimeout(function () {
        $("#story4-2-next").hide();
        $("#story4-2").hide()
    }, 50)
    fanye.play()
    $("#story4-3-next").show();
    $("#story4-3").show()
}

function story4next3() {
    setTimeout(function () {
        $("#story4-3-next").hide();
        $("#story4-3").hide()
    }, 50)
    fanye.play()
    $("#story4-4-next").show();
    $("#story4-4").show()
}

function story4next4() {
    setTimeout(function () {
        $("#story4-4-next").hide();
        $("#story4-4").hide()
    }, 50)
    fanye.play()
    $("#story4-5-next").show();
    $("#story4-5").show()
}

function story4next5() {
    setTimeout(function () {
        $("#story4-5-next").hide();
        $("#story4-5").hide()
    }, 50)
    fanye.play()
    $("#story4-6-next").show();
    $("#story4-6").show()
}

function story4next6() {
    setTimeout(function () {
        $("#story4-6-next").hide();
        $("#story4-6").hide()
    }, 50)
    fanye.play()
    bgma41.stop()
    bgma42.play()
    $("#story4-7-next").show();
    $("#story4-7").show()
}

function story4next7() {
    setTimeout(function () {
        $("#story4-7-next").hide();
        $("#story4-7").hide()
    }, 50)
    fanye.play()
    $("#story4-8-next").show();
    $("#story4-8").show()
}

function story4next8() {
    setTimeout(function () {
        $("#story4-8-next").hide();
        $("#story4-8").hide()
    }, 50)
    fanye.play()
    $("#story4-9-next").show();
    $("#story4-9").show()
}

function story4next9() {
    setTimeout(function () {
        $("#story4-9-next").hide();
        $("#story4-9").hide()
    }, 50)
    fanye.play()
    $("#story4-10-next").show();
    $("#story4-10").show()
}

function story4next10() {
    setTimeout(function () {
        $("#story4-10-next").hide();
        $("#story4-10").hide()
    }, 50)
    fanye.play()
    $("#story4-11-next").show();
    $("#story4-11").show()
}

function story4next11() {
    setTimeout(function () {
        $("#story4-11-next").hide();
        $("#story4-11").hide()
    }, 50)
    fanye.play()
    $("#story4-12-next").show();
    $("#story4-12").show()
}

function story4next12() {
    setTimeout(function () {
        $("#story4-12-next").hide();
        $("#story4-12").hide()
    }, 50)
    fanye.play()
    $("#story4-13-next").show();
    $("#story4-13").show()
}

function story4next13() {
    setTimeout(function () {
        $("#story4-13-next").hide();
        $("#story4-13").hide()
    }, 50)
    fanye.play()
    $("#story4-14-next").show();
    $("#story4-14").show()
}

function story4next14() {
    setTimeout(function () {
        $("#story4-14-next").hide();
        $("#story4-14").hide()
    }, 50)
    fanye.play()
    $("#story4-15-next").show();
    $("#story4-15").show()
}

function story4next15() {
    setTimeout(function () {
        $("#story4-15-next").hide();
        $("#story4-15").hide()
    }, 50)
    fanye.play()
    $("#story4-16-next").show();
    $("#story4-16").show()
}

function story4next16() {
    setTimeout(function () {
        $("#story4-16").hide()
        $("#story4-16-next").hide();
    }, 50)
    $("#story4-special").show();
    $("#story4-17").show();
    $("#story4-17-next").show()
}

function story4next17() {
    setTimeout(function () {
        $("#story4-special").hide();
        $("#story4-17").hide()
        $("#story4-17-next").hide()
    }, 50)
    fanye.play()
    $("#story4-18-next").show();
    $("#story4-18").show()
}

function story4next18() {
    setTimeout(function () {
        $("#story4-18").hide()
        $("#story4-18-next").hide();
    }, 50)
    $("#story4-19-next").show();
    $("#story4-19").show()

}

function story4next19() {
    setTimeout(function () {
        $("#story4-19-next").hide();
        $("#story4-19").hide()
    }, 50)
    fanye.play()
    $("#story4-20-next").show();
    $("#story4-20").show()
}

function story4next20() {
    setTimeout(function () {
        $("#story4-20-next").hide();
        $("#story4-20").hide()
    }, 50)
    fanye.play()
    $("#story4-21-next").show();
    $("#story4-21").show()
}

function story4next21() {
    setTimeout(function () {
        $("#story4-21-next").hide();
        $("#story4-21").hide()
    }, 50)
    fanye.play()
    $("#story4-22-next").show();
    $("#story4-22").show()
}

function story4next22() {
    setTimeout(function () {
        $("#story4-22-next").hide();
        $("#story4-22").hide()
    }, 50)
    fanye.play()
    $("#story4-23-next").show();
    $("#story4-23").show()
}

function story4next23() {
    setTimeout(function () {
        $("#story4-23-next").hide();
        $("#story4-23").hide()
    }, 50)
    fanye.play()
    $("#story4-24-next").show();
    $("#story4-24").show()
}

function story4next24() {
    setTimeout(function () {
        $("#story4-24-next").hide();
        $("#story4-24").hide()
    }, 50)
    fanye.play()
    $("#story4-25-next").show();
    $("#story4-25").show()
}

function story4next25() {
    setTimeout(function () {
        $("#story4-25-next").hide();
        $("#story4-25").hide()
    }, 50)
    fanye.play()
    $("#story4-26-next").show();
    $("#story4-26").show()
}

function story4next26() {
    setTimeout(function () {
        $("#story4-26-next").hide();
        $("#story4-26").hide()
    }, 50)
    fanye.play()
    $("#story4-27-next").show();
    $("#story4-27").show()
}

function story4next27() {
    setTimeout(function () {
        $("#story4-27-next").hide();
        $("#story4-27").hide()
    }, 50)
    fanye.play()
    $("#story4-28-next").show();
    $("#story4-28").show()
}

function story4next28() {
    setTimeout(function () {
        $("#story4-28-next").hide();
        $("#story4-28").hide()
    }, 50)
    fanye.play()
    $("#story4-29-next").show();
    $("#story4-29").show()
}

function story4next29() {
    setTimeout(function () {
        $("#story4-29-next").hide();
        $("#story4-29").hide()
    }, 50)
    fanye.play()
    $("#story4-30-next").show();
    $("#story4-30").show()
}

function story4next30() {
    setTimeout(function () {
        $("#story4-30-next").hide();
        $("#story4-30").hide()
    }, 50)
    fanye.play()
    $("#story4-31-next").show();
    $("#story4-31").show()
}

function story4next31() {
    setTimeout(function () {
        $("#story4-31-next").hide();
        $("#story4-31").hide()
    }, 50)
    fanye.play()
    $("#story4-32-next").show();
    $("#story4-32").show()
}

function story4next32() {
    setTimeout(function () {
        $("#story4-32-next").hide();
        $("#story4-32").hide()
    }, 50)
    fanye.play()
    $("#story4-33-next").show();
    $("#story4-33").show()
}

function story4next33() {
    setTimeout(function () {
        $("#story4-33-next").hide();
        $("#story4-33").hide()
    }, 50)
    fanye.play()
    $("#story4-34-next").show();
    $("#story4-34").show()
}

function story4next34() {
    setTimeout(function () {
        $("#story4-34-next").hide();
        $("#story4-34").hide()
    }, 50)
    fanye.play()
    $("#story4-35-next").show();
    $("#story4-35").show()
}

function story4next35() {
    setTimeout(function () {
        $("#story4-35-next").hide();
        $("#story4-35").hide()
    }, 50)
    fanye.play()
    $("#story4-36-next").show();
    $("#story4-36").show()
}

function story4next36() {
    setTimeout(function () {
        $("#story4-36-next").hide();
        $("#story4-36").hide()
    }, 50)
    fanye.play()
    $("#story4-37-next").show();
    $("#story4-37").show()
}

function story4next37() {
    setTimeout(function () {
        $("#story4-37-next").hide();
        $("#story4-37").hide()
    }, 50)
    fanye.play()
    $("#story4-38-next").show();
    $("#story4-38").show()
}

function story4next38() {
    setTimeout(function () {
        $("#story4-38-next").hide();
        $("#story4-38").hide()
    }, 50)
    fanye.play()
    $("#story4-39-next").show();
    $("#story4-39").show()
}

function story4next39() {
    setTimeout(function () {
        $("#story4-39-next").hide();
        $("#story4-39").hide()
    }, 50)
    fanye.play()
    $("#story4-40-next").show();
    $("#story4-40").show()
}

function story4next40() {
    setTimeout(function () {
        $("#story4-40-next").hide();
        $("#story4-40").hide()
    }, 50)
    fanye.play()
    $("#story4-41-next").show();
    $("#story4-41").show()
}

function story4next41() {
    setTimeout(function () {
        $("#story4-41-next").hide();
        $("#story4-41").hide()
    }, 50)
    fanye.play()
    $("#story4-42-next").show();
    $("#story4-42").show()
}

function story4next42() {
    if (x4 == 1) {
        bgma40.stop()
        bgma42.stop()
        bgm.play()
        $("#songzhong").hide()
        $("#baosang").hide()
        $("#zhaohun").hide()
        $("#diaoyan").hide()
        $("#rulian").hide()
        $("#qiling").hide()
        $("#songsang").hide()
        $("#xiazang").hide()
        $("#zuoqi").hide()
        $("#story4-42-next").hide();
        $(".story4backhome").hide()
        $("#story4-42").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story4").hide()
        }, 2000)
        setTimeout(function () {
            $("#story4").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story4-42").animate({
                opacity: "1"
            }, 2);
        }, 2001)

    } else {
        $("#songzhong").hide()
        $("#baosang").hide()
        $("#zhaohun").hide()
        $("#diaoyan").hide()
        $("#rulian").hide()
        $("#qiling").hide()
        $("#songsang").hide()
        $("#xiazang").hide()
        $("#zuoqi").hide()
        bgma40.stop()
        bgma42.stop()
        bgm.play()
        $("#story4-42-next").hide();
        $(".story4backhome").hide()
        $("#story4-42").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end4").show()
        }, 1000)
        setTimeout(function () {
            $("#end4").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        setTimeout(function () {
            $("#end4btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end4btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)
        a = a + 1;
        b = b + 3;
        c = c + 1
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
    }
}

function story4end() {
    $("#story4").hide()
    $("#story4").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x4 = 1;
    setTimeout(function () {
        $("#story4-42").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end4").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    a5open()
}

//////////////////////////////////////////////////////////
function story5next1() {
    setTimeout(function () {
        $("#story5-1-next").hide();
        $("#story5-1").hide()
    }, 50)
    fanye.play()
    $("#story5-2-next").show();
    $("#story5-2").show()
}
function story5next2() {
    setTimeout(function () {
        $("#story5-2-next").hide();
        $("#story5-2").hide()
    }, 50)
    fanye.play()
    $("#story5-3-next").show();
    $("#story5-3").show()
}
function story5next3() {
    setTimeout(function () {
        $("#story5-3-next").hide();
        $("#story5-3").hide()
    }, 50)
    fanye.play()
    $("#story5-4-next").show();
    $("#story5-4").show()
}
function story5next4() {
    setTimeout(function () {
        $("#story5-4-next").hide();
        $("#story5-4").hide()
    }, 50)
    fanye.play()
    $("#story5-5-next").show();
    $("#story5-5").show()
}
function story5next5() {
    setTimeout(function () {
        $("#story5-5-next").hide();
        $("#story5-5").hide()
    }, 50)
    fanye.play()
    $("#story5-6-next").show();
    $("#story5-6").show()
}
function story5next6() {
    setTimeout(function () {
        $("#story5-6-next").hide();
        $("#story5-6").hide()
    }, 50)
    fanye.play()
    $("#story5-7-next").show();
    $("#story5-7").show()
}
function story5next7() {
    setTimeout(function () {
        $("#story5-7-next").hide();
        $("#story5-7").hide()
    }, 50)
    fanye.play()
    $("#story5-8-next").show();
    $("#story5-8").show()
}
function story5next8() {
    setTimeout(function () {
        $("#story5-8-next").hide();
        $("#story5-8").hide()
    }, 50)
    fanye.play()
    $("#story5-9-next").show();
    $("#story5-9").show()
}
function story5next9() {
    setTimeout(function () {
        $("#story5-9-next").hide();
        $("#story5-9").hide()
    }, 50)
    fanye.play()
    $("#story5-10-next").show();
    $("#story5-10").show()
}
function story5next10() {
    setTimeout(function () {
        $("#story5-10-next").hide();
        $("#story5-10").hide()
    }, 50)
    fanye.play()
    $("#story5-11-next").show();
    $("#story5-11").show()
}
function story5next11() {
    setTimeout(function () {
        $("#story5-11-next").hide();
        $("#story5-11").hide()
    }, 50)
    fanye.play()
    bgma51.play()
    $("#story5-12-next").show();
    $("#story5-12").show()
}
function story5next12() {
    setTimeout(function () {
        $("#story5-12-next").hide();
        $("#story5-12").hide()
    }, 50)
    fanye.play()
    $("#story5-13-next").show();
    $("#story5-13").show()
}
function story5next13() {
    setTimeout(function () {
        $("#story5-13-next").hide();
        $("#story5-13").hide()
    }, 50)
    fanye.play()
    $("#story5-14-next").show();
    $("#story5-14").show()
}
function story5next14() {
    setTimeout(function () {
        $("#story5-14-next").hide();
        $("#story5-14").hide()
    }, 50)
    fanye.play()
    $("#story5-15-next").show();
    $("#story5-15").show()
}
function story5next15() {
    setTimeout(function () {
        $("#story5-15-next").hide();
        $("#story5-15").hide()
    }, 50)
    fanye.play()
    $("#story5-16-next").show();
    $("#story5-16").show()
}
function story5next16() {
    setTimeout(function () {
        $("#story5-16-next").hide();
        $("#story5-16").hide()
    }, 50)
    fanye.play()
    $("#story5-17-next").show();
    $("#story5-17").show()
}
function story5next17() {
    setTimeout(function () {
        $("#story5-17-next").hide();
        $("#story5-17").hide()
    }, 50)
    fanye.play()
    bgma50.stop()
    bgma51.stop()
    bgma52.play()
    bgma58.play()
    $("#story5-18-next").show();
    $("#story5-18").show()
}
function story5next18() {
    setTimeout(function () {
        $("#story5-18-next").hide();
        $("#story5-18").hide()
    }, 50)
    fanye.play()
    bgma53.play()
    $("#story5-19-next").show();
    $("#story5-19").show()
}
function story5next19() {
    setTimeout(function () {
        $("#story5-19-next").hide();
        $("#story5-19").hide()
    }, 50)
    fanye.play()
    bgma58.stop()
    bgma52.stop()
    
    $("#story5-20-next").show();
    $("#story5-20").show()
}
function story5next20() {
    setTimeout(function () {
        $("#story5-20-next").hide();
        $("#story5-20").hide()
    }, 50)
    fanye.play()
    bgma50.play()
    bgma53.stop()
    $("#story5-21-next").show();
    $("#story5-21").show()
}
function story5next21() {
    setTimeout(function () {
        $("#story5-21-next").hide();
        $("#story5-21").hide()
    }, 50)
    fanye.play()
    $("#story5-22-next").show();
    $("#story5-22").show()
}
function story5next22() {
    setTimeout(function () {
        $("#story5-22-next").hide();
        $("#story5-22").hide()
    }, 50)
    fanye.play()
    $("#story5-23-next").show();
    $("#story5-23").show()
}
function story5next23() {
    setTimeout(function () {
        $("#story5-23-next").hide();
        $("#story5-23").hide()
    }, 50)
    fanye.play()
    $("#story5-24-next").show();
    $("#story5-24").show()
}
function story5next24() {
    setTimeout(function () {
        $("#story5-24-next").hide();
        $("#story5-24").hide()
    }, 50)
    fanye.play()
    $("#story5-25-next").show();
    $("#story5-25").show()
}
function story5next25() {
    setTimeout(function () {
        $("#story5-25-next").hide();
        $("#story5-25").hide()
    }, 50)
    fanye.play()
    $("#story5-26-next").show();
    $("#story5-26").show()
}
function story5next26() {
    setTimeout(function () {
        $("#story5-26-next").hide();
        $("#story5-26").hide()
    }, 50)
    fanye.play()
    $("#story5-27-next").show();
    $("#story5-27").show()
}
function story5next27() {
    setTimeout(function () {
        $("#story5-27-next").hide();
        $("#story5-27").hide()
    }, 50)
    fanye.play()
    $("#story5-28-next").show();
    $("#story5-28").show()
}
function story5next28() {
    setTimeout(function () {
        $("#story5-28-next").hide();
        $("#story5-28").hide()
    }, 50)
    fanye.play()
    $("#story5-29-next").show();
    $("#story5-29").show()
}
function story5next29() {
    setTimeout(function () {
        $("#story5-29-next").hide();
        $("#story5-29").hide()
    }, 50)
    fanye.play()
    $("#story5-30-next").show();
    $("#story5-30").show()
}
function story5next30() {
    setTimeout(function () {
        $("#story5-30-next").hide();
        $("#story5-30").hide()
    }, 50)
    fanye.play()
    $("#story5-31-next").show();
    $("#story5-31").show()
}
function story5next31() {
    setTimeout(function () {
        $("#story5-31-next").hide();
        $("#story5-31").hide()
    }, 50)
    fanye.play()
    $("#story5-32-next").show();
    $("#story5-32").show()
}
function story5next32() {
    setTimeout(function () {
        $("#story5-32-next").hide();
        $("#story5-32").hide()
    }, 50)
    fanye.play()
    $("#story5-33-next").show();
    $("#story5-33").show()
}
function story5next33() {
    setTimeout(function () {
        $("#story5-33-next").hide();
        $("#story5-33").hide()
    }, 50)
    fanye.play()
    $("#story5-34-next").show();
    $("#story5-34").show()
}
function story5next34() {
    setTimeout(function () {
        $("#story5-34-next").hide();
        $("#story5-34").hide()
    }, 50)
    fanye.play()
    $("#story5-35-next").show();
    $("#story5-35").show()
}
function story5next35() {
    setTimeout(function () {
        $("#story5-35-next").hide();
        $("#story5-35").hide()
    }, 50)
    fanye.play()
    bgma50.stop()
    bgma57.play()
    $("#story5-36-next").show();
    $("#story5-36").show()
}
function story5next36() {
    setTimeout(function () {
        $("#story5-36-next").hide();
        $("#story5-36").hide()
    }, 50)
    fanye.play()
    bgma54.play()
    $("#story5-37-next").show();
    $("#story5-37").show()
}
function story5next37() {
    setTimeout(function () {
        $("#story5-37-next").hide();
        $("#story5-37").hide()
    }, 50)
    fanye.play()
    $("#story5-38-next").show();
    $("#story5-38").show()
}
function story5next38() {
    setTimeout(function () {
        $("#story5-38-next").hide();
        $("#story5-38").hide()
    }, 50)
    fanye.play()
    $("#story5-39-next").show();
    $("#story5-39").show()
}
function story5next39() {
    setTimeout(function () {
        $("#story5-39-next").hide();
        $("#story5-39").hide()
    }, 50)
    fanye.play()
    bgma55.play()
    $("#story5-40-next").show();
    $("#story5-40").show()
}
function story5next40() {
    setTimeout(function () {
        $("#story5-40-next").hide();
        $("#story5-40").hide()
    }, 50)
    fanye.play()
    $("#story5-41-next").show();
    $("#story5-41").show()
}
function story5next41() {
    setTimeout(function () {
        $("#story5-41-next").hide();
        $("#story5-41").hide()
    }, 50)
    fanye.play()
    $("#story5-42-next").show();
    $("#story5-42").show()
}
function story5next42() {
    setTimeout(function () {
        $("#story5-42-next").hide();
        $("#story5-42").hide()
    }, 50)
    fanye.play()
    $("#story5-43-next").show();
    $("#story5-43").show()
}
function story5next43() {
    setTimeout(function () {
        $("#story5-43-next").hide();
        $("#story5-43").hide()
    }, 50)
    fanye.play()
    $("#story5-44-next").show();
    $("#story5-44").show()
}
function story5next44() {
    setTimeout(function () {
        $("#story5-44-next").hide();
        $("#story5-44").hide()
    }, 50)
    fanye.play()
    bgma56.play()
    $("#story5-45-next").show();
    $("#story5-45").show()
}
function story5next45() {
    setTimeout(function () {
        $("#story5-45-next").hide();
        $("#story5-45").hide()
    }, 50)
    fanye.play()
    bgma56.stop()
    bgma55.stop()
    bgma54.stop()
    bgma50.play()
    $("#story5-46-next").show();
    $("#story5-46").show()
}
function story5next46() {
    setTimeout(function () {
        $("#story5-46-next").hide();
        $("#story5-46").hide()
    }, 50)
    fanye.play()
    $("#story5-47-next").show();
    $("#story5-47").show()
}
function story5next47() {
    setTimeout(function () {
        $("#story5-47-next").hide();
        $("#story5-47").hide()
    }, 50)
    fanye.play()
    $("#story5-48-next").show();
    $("#story5-48").show()
}
function story5next48() {
    setTimeout(function () {
        $("#story5-48-next").hide();
        $("#story5-48").hide()
    }, 50)
    fanye.play()
    bgma50.stop()
    $("#story5-49-next").show();
    $("#story5-49").show()
}
function story5next49() {
    setTimeout(function () {
        $("#story5-49-next").hide();
        $("#story5-49").hide()
    }, 50)
    fanye.play()
    $("#story5-50-next").show();
    $("#story5-50").show()
}
function story5next50() {
    setTimeout(function () {
        $("#story5-50-next").hide();
        $("#story5-50").hide()
    }, 50)
    fanye.play()
    $("#story5-51-next").show();
    $("#story5-51").show()
}
function story5next51() {
    setTimeout(function () {
        $("#story5-51-next").hide();
        $("#story5-51").hide()
    }, 50)
    fanye.play()
    $("#story5-52-next").show();
    $("#story5-52").show()
}
function story5next52() {
    if (x5 == 1) {
        bgma57.stop()
        $("#story5-52-next").hide();
        $(".story5backhome").hide()
        $("#story5-52").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story5").hide()
        }, 2000)
        setTimeout(function () {
            $("#story5").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story5-52").animate({
                opacity: "1"
            }, 2);
        }, 2001)
        setTimeout(function () {
            $("#story5-52").hide()
        }, 2001)

    } else {
        bgma57.stop()
        $("#story5-52-next").hide();
        $(".story5backhome").hide()
        $("#story5-52").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $("#story5-52").hide()
        }, 1000)
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end5").show()
        }, 1000)
        setTimeout(function () {
            $("#end5").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end5btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end5btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        a = a + 1;
        b = b + 3;
        c = c + 1
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
    }
}

function story5end() {
    $("#story5").hide()
    $("#story5").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x5 = 1;
    setTimeout(function () {
        $("#story5-52").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end5").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    $("#end5btn").hide()
    a6open()
}
///////////////////////////////////

function songzhong() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-songzhong").show()

}

function baosang() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-songzhong").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-baosang").show()
}

function zhaohun() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-songzhong").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-zhaohun").show()
}

function diaoyan() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-songzhong").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-diaoyan").show()
}

function rulian() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-songzhong").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-rulian").show()
}

function qiling() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-songzhong").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-qiling").show()
}

function songsang() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songzhong").hide()
        $("#story4-xiazang").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-songsang").show()
}

function xiazang() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-songzhong").hide()
        $("#story4-zuoqi").hide()
    }, 50)
    fanye.play()
    $("#story4-xiazang").show()
}

function zuoqi() {
    setTimeout(function () {
        $("#story4-17").hide();
        $("#story4-baosang").hide()
        $("#story4-zhaohun").hide()
        $("#story4-diaoyan").hide()
        $("#story4-rulian").hide()
        $("#story4-qiling").hide()
        $("#story4-songsang").hide()
        $("#story4-xiazang").hide()
        $("#story4-songzhong").hide()
    }, 50)
    fanye.play()
    $("#story4-zuoqi").show()
}
///////////////////////////////////

function qin() {
    setTimeout(function () {
        $("#story6-19").hide();
        $("#story6-shouyi").hide()
        $("#story6-shouxie").hide()
        $("#story6-shoubei").hide()
        $("#story6-shoumao").hide()
    }, 50)
    fanye.play()
    $("#story6-qin").show()
}

function shouyi() {
    setTimeout(function () {
        $("#story6-19").hide();
        $("#story6-qin").hide()
        $("#story6-shouxie").hide()
        $("#story6-shoubei").hide()
        $("#story6-shoumao").hide()
    }, 50)
    fanye.play()
    $("#story6-shouyi").show()
}

function shouxie() {
    setTimeout(function () {
        $("#story6-19").hide();
        $("#story6-shouyi").hide()
        $("#story6-qin").hide()
        $("#story6-shoubei").hide()
        $("#story6-shoumao").hide()
    }, 50)
    fanye.play()
    $("#story6-shouxie").show()
}

function shoubei() {
    setTimeout(function () {
        $("#story6-19").hide();
        $("#story6-shouyi").hide()
        $("#story6-shouxie").hide()
        $("#story6-qin").hide()
        $("#story6-shoumao").hide()
    }, 50)
    fanye.play()
    $("#story6-shoubei").show()
}

function shoumao() {
    setTimeout(function () {
        $("#story6-19").hide();
        $("#story6-shouyi").hide()
        $("#story6-shouxie").hide()
        $("#story6-shoubei").hide()
        $("#story6-qin").hide()
    }, 50)
    fanye.play()
    $("#story6-shoumao").show()
}
///////////////////////////////////
function story6next1() {
    setTimeout(function () {
        $("#story6-1-next").hide();
        $("#story6-1").hide()
    }, 50)
    fanye.play()
    $("#story6-2-next").show();
    $("#story6-2").show()
}
function story6next2() {
    setTimeout(function () {
        $("#story6-2-next").hide();
        $("#story6-2").hide()
    }, 50)
    fanye.play()
    $("#story6-3-next").show();
    $("#story6-3").show()
}
function story6next3() {
    setTimeout(function () {
        $("#story6-3-next").hide();
        $("#story6-3").hide()
    }, 50)
    fanye.play()
    $("#story6-4-next").show();
    $("#story6-4").show()
}
function story6next4() {
    setTimeout(function () {
        $("#story6-4-next").hide();
        $("#story6-4").hide()
    }, 50)
    fanye.play()
    $("#story6-5-next").show();
    $("#story6-5").show()
}
function story6next5() {
    setTimeout(function () {
        $("#story6-5-next").hide();
        $("#story6-5").hide()
    }, 50)
    fanye.play()
    $("#story6-6-next").show();
    $("#story6-6").show()
}
function story6next6() {
    setTimeout(function () {
        $("#story6-6-next").hide();
        $("#story6-6").hide()
    }, 50)
    fanye.play()
    $("#story6-7-next").show();
    $("#story6-7").show()
}
function story6next7() {
    setTimeout(function () {
        $("#story6-7-next").hide();
        $("#story6-7").hide()
    }, 50)
    fanye.play()
    $("#story6-8-next").show();
    $("#story6-8").show()
}
function story6next8() {
    setTimeout(function () {
        $("#story6-8-next").hide();
        $("#story6-8").hide()
    }, 50)
    fanye.play()
    bgma62.play()
    bgma61.stop()
    $("#story6-9-next").show();
    $("#story6-9").show()
}
function story6next9() {
    setTimeout(function () {
        $("#story6-9-next").hide();
        $("#story6-9").hide()
    }, 50)
    fanye.play()
    $("#story6-10-next").show();
    $("#story6-10").show()
}
function story6next10() {
    setTimeout(function () {
        $("#story6-10-next").hide();
        $("#story6-10").hide()
    }, 50)
    fanye.play()
    bgma62.stop()
    $("#story6-11-next").show();
    $("#story6-11").show()
}
function story6next11() {
    setTimeout(function () {
        $("#story6-11-next").hide();
        $("#story6-11").hide()
    }, 50)
    fanye.play()
    $("#story6-12-next").show();
    $("#story6-12").show()
}
function story6next12() {
    setTimeout(function () {
        $("#story6-12-next").hide();
        $("#story6-12").hide()
    }, 50)
    fanye.play()
    $("#story6-13-next").show();
    $("#story6-13").show()
}
function story6next13() {
    setTimeout(function () {
        $("#story6-13-next").hide();
        $("#story6-13").hide()
    }, 50)
    fanye.play()
    $("#story6-14-next").show();
    $("#story6-14").show()
}
function story6next14() {
    setTimeout(function () {
        $("#story6-14-next").hide();
        $("#story6-14").hide()
    }, 50)
    fanye.play()
    $("#story6-15-next").show();
    $("#story6-15").show()
}
function story6next15() {
    setTimeout(function () {
        $("#story6-15-next").hide();
        $("#story6-15").hide()
    }, 50)
    fanye.play()
    $("#story6-16-next").show();
    $("#story6-16").show()
}
function story6next16() {
    setTimeout(function () {
        $("#story6-16-next").hide();
        $("#story6-16").hide()
    }, 50)
    fanye.play()
    $("#story6-17-next").show();
    $("#story6-17").show()
}
function story6next17() {
    setTimeout(function () {
        $("#story6-17-next").hide();
        $("#story6-17").hide()
    }, 50)
    fanye.play()
    $("#story6-18-next").show();
    $("#story6-18").show()
}
function story6next18() {
    setTimeout(function () {
        $("#story6-special").show()
        $("#story6-18-next").hide();
        $("#story6-18").hide()
    }, 50)
    fanye.play()
    $("#story6-19-next").show();
    $("#story6-19").show()
}
function story6next19() {
    setTimeout(function () {
        $("#story6-special").hide()
        $("#story6-qin").hide()
        $("#story6-shouyi").hide()
        $("#story6-shouxie").hide()
        $("#story6-shoubei").hide()
        $("#story6-shoumao").hide()
        $("#story6-19-next").hide();
        $("#story6-19").hide()
    }, 50)
    fanye.play()
    $("#story6-20-next").show();
    $("#story6-20").show()
}
function story6next20() {
    setTimeout(function () {
        $("#story6-20-next").hide();
        $("#story6-20").hide()
    }, 50)
    fanye.play()
    $("#story6-21-next").show();
    $("#story6-21").show()
}
function story6next21() {
    setTimeout(function () {
        $("#story6-21-next").hide();
        $("#story6-21").hide()
    }, 50)
    fanye.play()
    $("#story6-22-next").show();
    $("#story6-22").show()
}
function story6next22() {
    setTimeout(function () {
        $("#story6-22-next").hide();
        $("#story6-22").hide()
    }, 50)
    fanye.play()
    $("#story6-23-next").show();
    $("#story6-23").show()
}
function story6next23() {
    setTimeout(function () {
        $("#story6-23-next").hide();
        $("#story6-23").hide()
    }, 50)
    fanye.play()
    $("#story6-24-next").show();
    $("#story6-24").show()
}
function story6next24() {
    setTimeout(function () {
        $("#story6-24-next").hide();
        $("#story6-24").hide()
    }, 50)
    fanye.play()
    $("#story6-25-next").show();
    $("#story6-25").show()
}
function story6next25() {
    setTimeout(function () {
        $("#story6-25-next").hide();
        $("#story6-25").hide()
    }, 50)
    fanye.play()
    $("#story6-26-next").show();
    $("#story6-26").show()
}
function story6next26() {
    setTimeout(function () {
        $("#story6-26-next").hide();
        $("#story6-26").hide()
    }, 50)
    fanye.play()
    $("#story6-27-next").show();
    $("#story6-27").show()
}
function story6next27() {
    setTimeout(function () {
        $("#story6-27-next").hide();
        $("#story6-27").hide()
    }, 50)
    fanye.play()
    $("#story6-28-next").show();
    $("#story6-28").show()
}
function story6next28() {
    setTimeout(function () {
        $("#story6-28-next").hide();
        $("#story6-28").hide()
    }, 50)
    fanye.play()
    $("#story6-29-next").show();
    $("#story6-29").show()
}
function story6next29() {
    setTimeout(function () {
        $("#story6-29-next").hide();
        $("#story6-29").hide()
    }, 50)
    fanye.play()
    $("#story6-30-next").show();
    $("#story6-30").show()
}
function story6next30() {
    setTimeout(function () {
        $("#story6-30-next").hide();
        $("#story6-30").hide()
    }, 50)
    fanye.play()
    $("#story6-31-next").show();
    $("#story6-31").show()
}
function story6next31() {
    setTimeout(function () {
        $("#story6-31-next").hide();
        $("#story6-31").hide()
    }, 50)
    fanye.play()
    $("#story6-32-next").show();
    $("#story6-32").show()
}
function story6next32() {
    setTimeout(function () {
        $("#story6-32-next").hide();
        $("#story6-32").hide()
    }, 50)
    fanye.play()
    $("#story6-33-next").show();
    $("#story6-33").show()
}
function story6next33() {
    setTimeout(function () {
        $("#story6-33-next").hide();
        $("#story6-33").hide()
    }, 50)
    fanye.play()
    $("#story6-34-next").show();
    $("#story6-34").show()
}
function story6next34() {
    setTimeout(function () {
        $("#story6-34-next").hide();
        $("#story6-34").hide()
    }, 50)
    fanye.play()
    $("#story6-35-next").show();
    $("#story6-35").show()
}
function story6next35() {
    setTimeout(function () {
        $("#story6-35-next").hide();
        $("#story6-35").hide()
    }, 50)
    fanye.play()
    $("#story6-36-next").show();
    $("#story6-36").show()
}
function story6next36() {
    setTimeout(function () {
        $("#story6-36-next").hide();
        $("#story6-36").hide()
    }, 50)
    fanye.play()
    $("#story6-37-next").show();
    $("#story6-37").show()
}
function story6next37() {
    setTimeout(function () {
        $("#story6-37-next").hide();
        $("#story6-37").hide()
    }, 50)
    fanye.play()
    $("#story6-38-next").show();
    $("#story6-38").show()
}
function story6next38() {
    setTimeout(function () {
        $("#story6-38-next").hide();
        $("#story6-38").hide()
    }, 50)
    fanye.play()
    $("#story6-39-next").show();
    $("#story6-39").show()
}
function story6next39() {
    setTimeout(function () {
        $("#story6-39-next").hide();
        $("#story6-39").hide()
    }, 50)
    fanye.play()
    $("#story6-40-next").show();
    $("#story6-40").show()
}
function story6next40() {
    setTimeout(function () {
        $("#story6-40-next").hide();
        $("#story6-40").hide()
    }, 50)
    fanye.play()
    $("#story6-41-next").show();
    $("#story6-41").show()
}
function story6next41() {
    setTimeout(function () {
        $("#story6-41-next").hide();
        $("#story6-41").hide()
    }, 50)
    fanye.play()
    $("#choose").show();
    $("#story6-42").show();
}

function story6end() {

    $("#story6").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x6 = 1;
    setTimeout(function () {
        $("#story6-42").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#choose").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end6").animate({
            opacity: "0"
        }, 2)
    }, 1000)

    setTimeout(function () {
        $("#defen").hide()
        $("#end6").hide()
        $("#end6btn").hide()
        $("#story6").hide()
        $("#choose").hide();
        $("#story6-42").hide();
    }, 1000)
    a7open()
}


function choosefinish(){
    if (x6 == 1) {
        bgma60.stop()
        $(".story6backhome").hide()
        $("#story6-42").animate({
            opacity: "0"
        }, 1000);
        $("#choose").animate({
            opacity: "0"
        }, 1000);

        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)

        setTimeout(function () {
            $("#story6").hide()
        }, 2000)
        setTimeout(function () {
            $("#story6").animate({
                opacity: "0"
            }, 1)
        }, 2001)

        setTimeout(function () {
            $("#choose").animate({
                opacity: "1"
            }, 2);
        }, 2001)
        setTimeout(function () {
            $("#story6-42").animate({
                opacity: "1"
            }, 2);
        }, 2001)
        setTimeout(function () {
            $("#choose").hide()
        }, 2001)

        setTimeout(function () {
           $("#story6-42").hide();
        }, 2001)

    } else {
        bgma60.stop()
        $(".story6backhome").hide()
        $("#choose").animate({
            opacity: "0"
        }, 1000);
        $("#story6-42").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end6").show()
        }, 1000)
        setTimeout(function () {
            $("#end6").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end6btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end6btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#defen").show()
        }, 1000)
        setTimeout(function () {
            $("#defen").animate({
                opacity: "0.9"
            }, 1000)
        }, 1000)

        a = a + 1;
        b = b + 3;
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;

        d = Math.floor((Math.random()*100)+1);
        document.getElementById("defen").innerHTML = d;
    }
}


///////////////////////////////////
function story7next1() {
    setTimeout(function () {
        $("#story7-1-next").hide();
        $("#story7-1").hide()
    }, 50)
    fanye.play()
    $("#story7-2-next").show();
    $("#story7-2").show()
}
function story7next2() {
    setTimeout(function () {
        $("#story7-2-next").hide();
        $("#story7-2").hide()
    }, 50)
    fanye.play()
    $("#story7-3-next").show();
    $("#story7-3").show()
}
function story7next3() {
    setTimeout(function () {
        $("#story7-3-next").hide();
        $("#story7-3").hide()
    }, 50)
    fanye.play()
    $("#story7-4-next").show();
    $("#story7-4").show()
}
function story7next4() {
    setTimeout(function () {
        $("#story7-4-next").hide();
        $("#story7-4").hide()
    }, 50)
    fanye.play()
    $("#story7-5-next").show();
    $("#story7-5").show()
}
function story7next5() {
    setTimeout(function () {
        $("#story7-5-next").hide();
        $("#story7-5").hide()
    }, 50)
    fanye.play()
    $("#story7-6-next").show();
    $("#story7-6").show()
}
function story7next6() {
    setTimeout(function () {
        $("#story7-6-next").hide();
        $("#story7-6").hide()
    }, 50)
    fanye.play()
    $("#story7-7-next").show();
    $("#story7-7").show()
}
function story7next7() {
    setTimeout(function () {
        $("#story7-7-next").hide();
        $("#story7-7").hide()
    }, 50)
    fanye.play()
    $("#story7-8-next").show();
    $("#story7-8").show()
}
function story7next8() {
    setTimeout(function () {
        $("#story7-8-next").hide();
        $("#story7-8").hide()
    }, 50)
    fanye.play()
    $("#story7-9-next").show();
    $("#story7-9").show()
}
function story7next9() {
    setTimeout(function () {
        $("#story7-9-next").hide();
        $("#story7-9").hide()
    }, 50)
    fanye.play()
    $("#story7-10-next").show();
    $("#story7-10").show()
}
function story7next10() {
    setTimeout(function () {
        $("#story7-10-next").hide();
        $("#story7-10").hide()
    }, 50)
    fanye.play()
    $("#story7-11-next").show();
    $("#story7-11").show()
}
function story7next11() {
    setTimeout(function () {
        $("#story7-11-next").hide();
        $("#story7-11").hide()
    }, 50)
    fanye.play()
    $("#story7-12-next").show();
    $("#story7-12").show()
}
function story7next12() {
    setTimeout(function () {
        $("#story7-12-next").hide();
        $("#story7-12").hide()
    }, 50)
    fanye.play()
    $("#story7-13-next").show();
    $("#story7-13").show()
}
function story7next13() {
    setTimeout(function () {
        $("#story7-13-next").hide();
        $("#story7-13").hide()
    }, 50)
    fanye.play()
    $("#story7-14-next").show();
    $("#story7-14").show()
}
function story7next14() {
    setTimeout(function () {
        $("#story7-14-next").hide();
        $("#story7-14").hide()
    }, 50)
    fanye.play()
    $("#story7-15-next").show();
    $("#story7-15").show()
}
function story7next15() {
    setTimeout(function () {
        $("#story7-15-next").hide();
        $("#story7-15").hide()
    }, 50)
    fanye.play()
    $("#story7-16-next").show();
    $("#story7-16").show()
}
function story7next16() {
    setTimeout(function () {
        $("#story7-16-next").hide();
        $("#story7-16").hide()
    }, 50)
    fanye.play()
    $("#story7-17-next").show();
    $("#story7-17").show()
}
function story7next17() {
    setTimeout(function () {
        $("#story7-17-next").hide();
        $("#story7-17").hide()
    }, 50)
    fanye.play()
    $("#story7-18-next").show();
    $("#story7-18").show()
}
function story7next18() {
    setTimeout(function () {
        $("#story7-18-next").hide();
        $("#story7-18").hide()
        $("#story7-special").show();
    }, 50)
    fanye.play()
    bgma70.stop()
    $("#story7-19-next").show();
    $("#story7-19").show()
}
function story7next19() {
    setTimeout(function () {
        $("#story7-19-next").hide();
        $("#story7-19").hide()
    }, 50)
    fanye.play()
    bgma70.play()
    $("#story7-20-next").show();
    $("#story7-20").show()
    $("#story7-special").hide();
    $("#story7-18").hide();
    $("#story7-erhu").hide()
    $("#story7-luo").hide()
    $("#story7-sheng").hide()
    $("#story7-suona").hide()
    $("#story7-bo").hide()
    $("#story7-zhuangzhong").hide()
}
function story7next20() {
    setTimeout(function () {
        $("#story7-20-next").hide();
        $("#story7-20").hide()
    }, 50)
    fanye.play()
    bgma70.play()
    $("#story7-21-next").show();
    $("#story7-21").show()
}
function story7next21() {
    setTimeout(function () {
        $("#story7-21-next").hide();
        $("#story7-21").hide()
    }, 50)
    fanye.play()
    $("#story7-22-next").show();
    $("#story7-22").show()
}
function story7next22() {
    setTimeout(function () {
        $("#story7-22-next").hide();
        $("#story7-22").hide()
    }, 50)
    fanye.play()
    $("#story7-23-next").show();
    $("#story7-23").show()
}
function story7next23() {
    setTimeout(function () {
        $("#story7-23-next").hide();
        $("#story7-23").hide()
    }, 50)
    fanye.play()
    $("#story7-24-next").show();
    $("#story7-24").show()
}
function story7next24() {
    setTimeout(function () {
        $("#story7-24-next").hide();
        $("#story7-24").hide()
    }, 50)
    fanye.play()
    $("#story7-25-next").show();
    $("#story7-25").show()
}
function story7next25() {
    setTimeout(function () {
        $("#story7-25-next").hide();
        $("#story7-25").hide()
    }, 50)
    fanye.play()
    $("#story7-26-next").show();
    $("#story7-26").show()
}
function story7next26() {
    setTimeout(function () {
        $("#story7-26-next").hide();
        $("#story7-26").hide()
    }, 50)
    fanye.play()
    $("#story7-27-next").show();
    $("#story7-27").show()
}
function story7next27() {
    setTimeout(function () {
        $("#story7-27-next").hide();
        $("#story7-27").hide()
    }, 50)
    fanye.play()
    bgma70.stop()
    $("#story7-cidai").show()
    $("#story7nextcidai").show();
}
function story7nextcidai(){
    setTimeout(function () {
        $("#story7nextcidai").hide();
        $("#story7-cidai").hide()
    }, 50)
    fanye.play()
    bgma70.play()
    $("#story7-29-next").show();
    $("#story7-29").show()
}
function story7next29() {
    setTimeout(function () {
        $("#story7-29-next").hide();
        $("#story7-29").hide()
    }, 50)
    fanye.play()
    $("#story7-30-next").show();
    $("#story7-30").show()
}
function story7next30() {
    setTimeout(function () {
        $("#story7-30-next").hide();
        $("#story7-30").hide()
    }, 50)
    fanye.play()
    $("#story7-31-next").show();
    $("#story7-31").show()
}
function story7next31() {
    setTimeout(function () {
        $("#story7-31-next").hide();
        $("#story7-31").hide()
    }, 50)
    fanye.play()
    $("#story7-32-next").show();
    $("#story7-32").show()
}
function story7next32() {
    setTimeout(function () {
        $("#story7-32-next").hide();
        $("#story7-32").hide()
    }, 50)
    fanye.play()
    $("#story7-33-next").show();
    $("#story7-33").show()
}
function story7next33() {
    setTimeout(function () {
        $("#story7-33-next").hide();
        $("#story7-33").hide()
    }, 50)
    fanye.play()
    $("#story7-34-next").show();
    $("#story7-34").show()
}
function story7next34() {
    setTimeout(function () {
        $("#story7-34-next").hide();
        $("#story7-34").hide()
    }, 50)
    fanye.play()
    $("#story7-35-next").show();
    $("#story7-35").show()
}
function story7next35() {
    setTimeout(function () {
        $("#story7-35-next").hide();
        $("#story7-35").hide()
    }, 50)
    fanye.play()
    $("#story7-36-next").show();
    $("#story7-36").show()
}
function story7next36() {
    setTimeout(function () {
        $("#story7-36-next").hide();
        $("#story7-36").hide()
    }, 50)
    fanye.play()
    $("#story7-37-next").show();
    $("#story7-37").show()
}
function story7next37() {
    if (x7 == 1) {
        bgma70.stop()
        $("#story7-37-next").hide();
        $(".story7backhome").hide()
        $("#story7-37").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story7").hide()
        }, 2000)
        setTimeout(function () {
            $("#story7").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story7-37").animate({
                opacity: "1"
            }, 2);
        }, 2001)

    } else {
        bgma70.stop()
        $("#story7-37-next").hide();
        $(".story7backhome").hide()
        $("#story7-37").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end7").show()
        }, 1000)
        setTimeout(function () {
            $("#end7").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end7btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end7btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        a = a + 1;
        b = b + 3;
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
}}

////////////////////////////////////

function story7end() {
    $("#story7").hide()
    $("#story7").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x7 = 1;
    setTimeout(function () {
        $("#story7-37").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end7").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    a8open()
}

function story8end() {
    $("#story8").hide()
    $("#story8").animate({
        opacity: "0"
    }, 1)
    clickitem.play()
    x8 = 1;
    setTimeout(function () {
        $("#story8-59").animate({
            opacity: "1"
        }, 2);
    }, 1000)
    setTimeout(function () {
        $("#end8").animate({
            opacity: "0"
        }, 2)
    }, 1000)
    a8open()
}

/////////////////////////////////

function bo(){
setTimeout(function () {
    $("#story7-18").hide();
    $("#story7-erhu").hide()
    $("#story7-luo").hide()
    $("#story7-sheng").hide()
    $("#story7-suona").hide()
    $("#story7-zhuangzhong").hide()
}, 50)
bo2.play()
$("#story7-bo").show()
}

function erhu(){
    setTimeout(function () {
        $("#story7-18").hide();
        $("#story7-bo").hide()
        $("#story7-luo").hide()
        $("#story7-sheng").hide()
        $("#story7-suona").hide()
        $("#story7-zhuangzhong").hide()
    }, 50)
    erhu2.play()
    $("#story7-erhu").show()
    }

function luo(){
setTimeout(function () {
    $("#story7-18").hide();
    $("#story7-erhu").hide()
    $("#story7-bo").hide()
    $("#story7-sheng").hide()
    $("#story7-suona").hide()
    $("#story7-zhuangzhong").hide()
}, 50)
luo2.play()
$("#story7-luo").show()
}

function sheng(){
    setTimeout(function () {
        $("#story7-18").hide();
        $("#story7-erhu").hide()
        $("#story7-luo").hide()
        $("#story7-bo").hide()
        $("#story7-suona").hide()
        $("#story7-zhuangzhong").hide()
    }, 50)
    sheng2.play()
    $("#story7-sheng").show()
    }
 
function suona(){
setTimeout(function () {
    $("#story7-18").hide();
    $("#story7-erhu").hide()
    $("#story7-luo").hide()
    $("#story7-sheng").hide()
    $("#story7-bo").hide()
    $("#story7-zhuangzhong").hide()
}, 50)
suona2.play()
$("#story7-suona").show()
}

function zhuangzhong(){
    setTimeout(function () {
        $("#story7-18").hide();
        $("#story7-erhu").hide()
        $("#story7-luo").hide()
        $("#story7-sheng").hide()
        $("#story7-suona").hide()
        $("#story7-bo").hide()
    }, 50)
    zhuangzhong2.play()
    $("#story7-zhuangzhong").show()
    }

//////////////////////////////////


//////////////////////////////////
var c1 = 0;

function cloth1(){
    if(c1 == 0){
    $("#cloth1").css("background-image", "url(./img/cloth2-1.png)");
    $("#cloth1name").css("background-image", "url(./img/现代寿帽.png)");
    c1 = 1
}
    else if(c1 == 1){
        $("#cloth1").css("background-image", "url(./img/cloth3-1.png)");
        $("#cloth1name").css("background-image", "url(./img/西式礼帽.png)");
        c1 = 2
    }

    else if(c1 == 2){
        $("#cloth1").css("background-image", "url(./img/cloth4-1.png)");
        $("#cloth1name").css("background-image", "url(./img/军装帽.png)");
        c1 = 3
    }

    else if(c1 == 3){
        $("#cloth1").css("background-image", "url(./img/cloth5-1.png)");
        $("#cloth1name").css("background-image", "url(./img/贝雷帽.png)");
        c1 = 4
    }

    else if(c1 == 4){
        $("#cloth1").css("background-image", "url(./img/cloth1-1.png)");
        $("#cloth1name").css("background-image", "url(./img/复古寿帽.png)");
        c1 = 0
    }
    else{}
}

var c2 = 0;

function cloth2(){
    if(c2 == 0){
    $("#cloth2").css("background-image", "url(./img/cloth2-2.png)");
    $("#cloth2name").css("background-image", "url(./img/现代外衣.png)");
    c2 = 1
}
    else if(c2 == 1){
        $("#cloth2").css("background-image", "url(./img/cloth3-2.png)");
        $("#cloth2name").css("background-image", "url(./img/西式外衣.png)");
        c2 = 2
    }

    else if(c2 == 2){
        $("#cloth2").css("background-image", "url(./img/cloth4-2.png)");
        $("#cloth2name").css("background-image", "url(./img/军装上衣.png)");
        c2 = 3
    }

    else if(c2 == 3){
        $("#cloth2").css("background-image", "url(./img/cloth5-2.png)");
        $("#cloth2name").css("background-image", "url(./img/中山上衣.png)");
        c2 = 4
    }

    else if(c2 == 4){
        $("#cloth2").css("background-image", "url(./img/cloth1-2.png)");
        $("#cloth2name").css("background-image", "url(./img/复古长袍.png)");
        c2 = 0
    }
    else{}
}


var c3 = 0;

function cloth3(){
    if(c3 == 0){
    $("#cloth3").css("background-image", "url(./img/cloth2-3.png)");
    $("#cloth3name").css("background-image", "url(./img/现代寿裤.png)");
    c3 = 1
}
    else if(c3 == 1){
        $("#cloth3").css("background-image", "url(./img/cloth3-3.png)");
        $("#cloth3name").css("background-image", "url(./img/西式寿裤.png)");
        c3 = 2
    }

    else if(c3 == 2){
        $("#cloth3").css("background-image", "url(./img/cloth4-3.png)");
        $("#cloth3name").css("background-image", "url(./img/军装长裤.png)");
        c3 = 3
    }

    else if(c3 == 3){
        $("#cloth3").css("background-image", "url(./img/cloth5-3.png)");
        $("#cloth3name").css("background-image", "url(./img/中山寿裤.png)");
        c3 = 4
    }

    else if(c3 == 4){
        $("#cloth3").css("background-image", "url(./img/cloth1-3.png)");
        $("#cloth3name").css("background-image", "url(./img/复古寿裤.png)");
        c3 = 0
    }
    else{}
}


var c4 = 0;

function cloth4(){
    if(c4 == 0){
    $("#cloth4").css("background-image", "url(./img/cloth2-4.png)");
    $("#cloth4name").css("background-image", "url(./img/现代寿鞋.png)");
    c4 = 1
}
    else if(c4 == 1){
        $("#cloth4").css("background-image", "url(./img/cloth3-4.png)");
        $("#cloth4name").css("background-image", "url(./img/西式皮鞋.png)");
        c4 = 2
    }

    else if(c4 == 2){
        $("#cloth4").css("background-image", "url(./img/cloth4-4.png)");
        $("#cloth4name").css("background-image", "url(./img/军鞋.png)");
        c4 = 3
    }

    else if(c4 == 3){
        $("#cloth4").css("background-image", "url(./img/cloth5-4.png)");
        $("#cloth4name").css("background-image", "url(./img/中山皮鞋.png)");
        c4 = 4
    }

    else if(c4 == 4){
        $("#cloth4").css("background-image", "url(./img/cloth1-4.png)");
        $("#cloth4name").css("background-image", "url(./img/复古布鞋.png)");
        c4 = 0
    }
    else{}
}


///////////////////////////////////

function tanjiuwenlu() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    changejin()
    changemu()
    changeshui()
    changehuo()
    changetu()
    change1()
    change2()
    change3()
    change4()
    change5()
    setTimeout(function () {
        $('.main').hide()
        $('.book').show()
        $("#jiuwenlunext").show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}
///////////////////////////////

function jiuwenlunext(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $('.main').hide()
        $('.book').hide()
        $("#jiuwenlunext").hide()
        $('.book2').show()
        $("#jiuwenluback").show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}

function jiuwenluback(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $('.main').hide()
        $('.book').show()
        $("#jiuwenlunext").show()
        $('.book2').hide()
        $("#jiuwenluback").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}
/////////////////////////////////

function tanback2() {

    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $('.main').show()
        $('.map').hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
    $(".book").hide()
    $(".shouji").hide()
    $(".tag-qingbaozhan").hide()
    $(".iphonix-in2").animate({
        height: '701.1px'
    });
    $(".center-xy").css("display", "");
}

/////////////////////////////////

function tanback3() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $('.main').show()
        $('.book').hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

    $(".map").hide()
    $(".shouji").hide()
    $(".tag-qingbaozhan").hide()
    $(".iphonix-in2").animate({
        height: '701.1px'
    });
    $(".center-xy").css("display", "");
}

function jiuwenluask1on(){
    $("#jiuwenluask1").show()

}

function jiuwenluask1off(){
    $("#jiuwenluask1").hide()
}

function notget(){
    $("#notget").hide()
}

function notget2(){
    $("#notget2").hide()
}

////////////////////////////////

function qingbaozhanback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $('.main').show()
        $('#qingbaozhanzong').hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

    $(".map").hide()
    $(".shouji").hide()
    $(".tag-qingbaozhan").hide()
    $(".iphonix-in2").animate({
        height: '701.1px'
    });
    $(".center-xy").css("display", "");
}

function qingbaozhankai(){ 
    chengjiu()
    $("#huode").hide();
    $("#wancheng").hide();
    $("#yijingwancheng").hide();
    $("#yijingwanchengbtn").hide();
    $("#meiwancheng").hide();
    $("#meiwanchengbtn").hide();
    clickitem.play();
    clickthen.play();

    $('.change').show()
    setTimeout(function () {
        $('.main').hide()
        $("#qingbaozhanzong").show()

    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });
    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

    j = c + b/3;
    document.getElementById("renwushu2").innerHTML = a;
    document.getElementById("yinyangling2").innerHTML = b;
    document.getElementById("shengmingyin2").innerHTML = c;
    document.getElementById("tujian2").innerHTML = j;
}

/////////////////////////////////

function jin() {
    if(b >= 3){
        clickitem.play();
        clickthen.play();
        $('.change').show()
        setTimeout(function () {
            $("#book-pre").show(), $(".jin-1").show(), $(".book").hide(), $(".jinback").show(),$(".jingo").show(),$(".jin-2").show()
        }, 500);
        TweenMax.to('.leftchange', 0.5, {
            left: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
            onComplete: function () {
                $(".change").hide();
            }
        });
    
        TweenMax.to('.rightchange', 0.5, {
            right: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
        });
    }
    else{
        $("#notget").show()
    }

}

function jinback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").hide(), $(".jin-1").hide(), $(".book").show(), $(".jinback").hide(),$(".jingo").hide(),$(".jin-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

/////////////////////////////////


function mu() {
    if(b >= 6){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").show(), $(".mu-1").show(), $(".book").hide(), $(".muback").show(),$(".mugo").show(),$(".mu-2").show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}
else{
    $("#notget").show()
}

}

function muback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").hide(), $(".mu-1").hide(), $(".book").show(), $(".muback").hide(),$(".mugo").hide(),$(".mu-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

/////////////////////////////////

function shui() {
    if(b >= 9){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").show(), $(".shui-1").show(), $(".book").hide(), $(".shuiback").show(),$(".shuigo").show(),$(".shui-2").show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
    }
else{
    $("#notget").show()
}
}

function shuiback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").hide(), $(".shui-1").hide(), $(".book").show(), $(".shuiback").hide(),$(".shuigo").hide(),$(".shui-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

/////////////////////////////////

function huo() {
    if(b>=12){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").show(), $(".huo-1").show(), $(".book").hide(), $(".huoback").show(),$(".huogo").show(),$(".huo-2").show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}
    else{
        $("#notget").show()
    }
}

function huoback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").hide(), $(".huo-1").hide(), $(".book").show(), $(".huoback").hide(),$(".huogo").hide(),$(".huo-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

/////////////////////////////////

function tu() {
    if(b>=15){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").show(), $(".tu-1").show(), $(".book").hide(), $(".tuback").show(),$(".tugo").show(),$(".tu-2").show()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });
}
else{
    $("#notget").show()
}
}

function tuback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre").hide(), $(".tu-1").hide(), $(".book").show(), $(".tuback").hide(),$(".tugo").hide(),$(".tu-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

//////////////////////////////////////

function haitianzhixin(){
    if(c>=5){
        clickitem.play();
        clickthen.play();
        $('.change').show()
        setTimeout(function () {
            $("#book-pre2").show(), $(".haitianzhixin-1").show(), $(".book2").hide(), $(".haitianzhixin-back").show(),$(".haitianzhixingo").show(),$(".haitianzhixin-2").show()
        }, 500);

        TweenMax.to('.leftchange', 0.5, {
            left: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
            onComplete: function () {
                $(".change").hide();
            }
        });
    
        TweenMax.to('.rightchange', 0.5, {
            right: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
        });
    }
        else{
            $("#notget2").show()
        }
}

function haitianzhixinback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre2").hide(), $(".haitianzhixin-1").hide(), $(".book2").show(), $(".haitianzhixin-back").hide(),$(".haitianzhixingo").hide(),$(".haitianzhixin-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}
////////////////////////////////


function juanyongzhiqu(){
    if(c>=3){
        clickitem.play();
        clickthen.play();
        $('.change').show()
        setTimeout(function () {
            $("#book-pre2").show(), $(".juanyongzhiqu-1").show(), $(".book2").hide(), $(".juanyongzhiqu-back").show(),$(".juanyongzhiqugo").show(),$(".juanyongzhiqu-2").show()
        }, 500);

        TweenMax.to('.leftchange', 0.5, {
            left: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
            onComplete: function () {
                $(".change").hide();
            }
        });
    
        TweenMax.to('.rightchange', 0.5, {
            right: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
        });
    }
        else{
            $("#notget2").show()
        }
}

function juanyongzhiquback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre2").hide(), $(".juanyongzhiqu-1").hide(), $(".book2").show(), $(".juanyongzhiqu-back").hide(),$(".juanyongzhiqugo").hide(),$(".juanyongzhiqu-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

////////////////////////////////

function shenghuazhihai(){
    if(c>=2){
        clickitem.play();
        clickthen.play();
        $('.change').show()
        setTimeout(function () {
            $("#book-pre2").show(), $(".shenghuazhihai-1").show(), $(".book2").hide(), $(".shenghuazhihai-back").show(),$(".shenghuazhihaigo").show(),$(".shenghuazhihai-2").show()
        }, 500);

        TweenMax.to('.leftchange', 0.5, {
            left: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
            onComplete: function () {
                $(".change").hide();
            }
        });
    
        TweenMax.to('.rightchange', 0.5, {
            right: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
        });
    }
        else{
            $("#notget2").show()
        }
}

function shenghuazhihaiback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre2").hide(), $(".shenghuazhihai-1").hide(), $(".book2").show(), $(".shenghuazhihai-back").hide(),$(".shenghuazhihaigo").hide(),$(".shenghuazhihai-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

//////////////////////////////////

function miluozhige(){
    if(c>=1){
        clickitem.play();
        clickthen.play();
        $('.change').show()
        setTimeout(function () {
            $("#book-pre2").show(), $(".miluozhige-1").show(), $(".book2").hide(), $(".miluozhige-back").show(),$(".miluozhigego").show(),$(".miluozhige-2").show()
        }, 500);

        TweenMax.to('.leftchange', 0.5, {
            left: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
            onComplete: function () {
                $(".change").hide();
            }
        });
    
        TweenMax.to('.rightchange', 0.5, {
            right: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
        });
    }
        else{
            $("#notget2").show()
        }

}

function miluozhigeback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre2").hide(), $(".miluozhige-1").hide(), $(".book2").show(), $(".miluozhige-back").hide(),$(".miluozhigego").hide(),$(".miluozhige-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

//////////////////////////////////

function xinghuozhijing(){
    if(c>=4){
        clickitem.play();
        clickthen.play();
        $('.change').show()
        setTimeout(function () {
            $("#book-pre2").show(), $(".xinghuozhijing-1").show(), $(".book2").hide(), $(".xinghuozhijing-back").show(),$(".xinghuozhijinggo").show(),$(".xinghuozhijing-2").show()
        }, 500);

        TweenMax.to('.leftchange', 0.5, {
            left: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
            onComplete: function () {
                $(".change").hide();
            }
        });
    
        TweenMax.to('.rightchange', 0.5, {
            right: 0,
            repeat: 1,
            repeatDelay: 0.2,
            yoyo: true,
        });
    }
        else{
            $("#notget2").show()
        }
}

function xinghuozhijingback() {
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function () {
        $("#book-pre2").hide(), $(".xinghuozhijing-1").hide(), $(".book2").show(), $(".xinghuozhijing-back").hide(),$(".xinghuozhijinggo").hide(),$(".xinghuozhijing-2").hide()
    }, 500);
    TweenMax.to('.leftchange', 0.5, {
        left: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
        onComplete: function () {
            $(".change").hide();
        }
    });

    TweenMax.to('.rightchange', 0.5, {
        right: 0,
        repeat: 1,
        repeatDelay: 0.2,
        yoyo: true,
    });

}

/////////////////////////////////

function changejin(){
    if(b>=3){
        $(".jin").css("background-image", "url(./img/wengzang2.png)");
    }
}
function changemu(){
    if(b>=6){
        $(".mu").css("background-image", "url(./img/shuzang2.png)");
    }
}
function changeshui(){
    if(b>=9){
        $(".shui").css("background-image", "url(./img/haizang2.png)");
    }
}
function changehuo(){
    if(b>=12){
        $(".huo").css("background-image", "url(./img/huozang2.png)");
    }
}
function changetu(){
    if(b>=15){
        $(".tu").css("background-image", "url(./img/tuzang2.png)");
    }
}

//////////////////////////////////

function change1(){
    if(c>=1){
        $(".miluozhige").css("background-image", "url(./img/miluozhige2.png)");
    }
}
function change2(){
    if(c>=2){
        $(".shenghuazhihai").css("background-image", "url(./img/shenghuazhihai2.png)");
    }
}
function change3(){
    if(c>=3){
        $(".juanyongzhiqu").css("background-image", "url(./img/juanyongzhiqu2.png)");
    }
}
function change4(){
    if(c>=4){
        $(".xinghuozhijing").css("background-image", "url(./img/xinghuozhijing2.png)");
    }
}
function change5(){
    if(c>=5){
        $(".haitianzhixin").css("background-image", "url(./img/haitianzhixin2.png)");
    }
}

/////////////////////////////////

function mainaskon(){
    $("#mainask").show()
}
function mainaskoff(){
    $("#mainask").hide()
}

function tanask2(){
    x1=1   
    x2=1
    x3=1
    x4=1
    x5=1
    x6=1
    x7=1
    x8=1
    a2open()
    a3open()
    a4open()
    a5open()
    a6open()
    a7open()
    a8open()
}
function a2open(){
    if(x1 == 1){
    $("#lock2").hide()
    $("#a2").show()
    }else{
    $("#lock2").show()
    $("#a2").hide()}
}
function a3open(){
    if(x2 == 1){
    $("#lock3").hide()
    $("#a3").show()
    }else{
    $("#lock3").show()
    $("#a3").hide()}
}
function a4open(){
    if(x3 == 1){
    $("#lock4").hide()
    $("#a4").show()
    }else{
    $("#lock4").show()
    $("#a4").hide()}
}
function a5open(){
    if(x4 == 1){
    $("#lock5").hide()
    $("#a5").show()
    }else{
    $("#lock5").show()
    $("#a5").hide()}
}
function a6open(){
    if(x5 == 1){
    $("#lock6").hide()
    $("#a6").show()
    }else{
    $("#lock6").show()
    $("#a6").hide()}
}
function a7open(){
    if(x6 == 1){
    $("#lock7").hide()
    $("#a7").show()
    }else{
    $("#lock7").show()
    $("#a7").hide()}
}
function a8open(){
    if(x7 == 1){
    $("#lock8").hide()
    $("#a8").show()
    }else{
    $("#lock8").show()
    $("#a8").hide()}
}

/////////////////////////////////

function  jingo(){
  $(".jin-2").toggle()
}

function  mugo(){
    $(".mu-2").toggle()
}

function  shuigo(){
$(".shui-2").toggle()
}

function  huogo(){
$(".huo-2").toggle()
}

function  tugo(){
$(".tu-2").toggle()
}

/////////////////////////////////

function  miluozhigego(){
    $(".miluozhige-2").toggle()
}
  
function  xinghuozhijinggo(){
      $(".xinghuozhijing-2").toggle()
}
  
function  juanyongzhiqugo(){
  $(".juanyongzhiqu-2").toggle()
}
  
function  shenghuazhihaigo(){
$(".shenghuazhihai-2").toggle()
}

function  haitianzhixingo(){
$(".haitianzhixin-2").toggle()
}

/////////////////////////////////

function chengjiu(){
    if(a==1){
    $("#qingbaozhan2").css("height", "150px");
    }
    else if(a==2){
    $("#qingbaozhan2").css("height", "210px");
    }
    else if(a==3){
    $("#qingbaozhan2").css("height", "280px");
    }
    else if(a==4){
    $("#qingbaozhan2").css("height", "350px");
    }
    else if(a==5){
    $("#qingbaozhan2").css("height", "405px");
    }
    else if(a==6){
    $("#qingbaozhan2").css("height", "475px");
    }
    else if(a==7){
    $("#qingbaozhan2").css("height", "535px");
    }
    else if(a==8){
    $("#qingbaozhan2").css("height", "600px");
    }
    else{}
}

/////////////////////////////////

function story8next1() {
    setTimeout(function () {
        $("#story8-1-next").hide();
        $("#story8-1").hide()
    }, 50)
    fanye.play()
    $("#story8-2-next").show();
    $("#story8-2").show()
}
function story8next2() {
    setTimeout(function () {
        $("#story8-2-next").hide();
        $("#story8-2").hide()
    }, 50)
    fanye.play()
    $("#story8-3-next").show();
    $("#story8-3").show()
}
function story8next3() {
    setTimeout(function () {
        $("#story8-3-next").hide();
        $("#story8-3").hide()
    }, 50)
    fanye.play()
    $("#story8-4-next").show();
    $("#story8-4").show()
}
function story8next4() {
    setTimeout(function () {
        $("#story8-4-next").hide();
        $("#story8-4").hide()
    }, 50)
    fanye.play()
    $("#story8-5-next").show();
    $("#story8-5").show()
}
function story8next5() {
    setTimeout(function () {
        $("#story8-5-next").hide();
        $("#story8-5").hide()
    }, 50)
    fanye.play()
    $("#story8-6-next").show();
    $("#story8-6").show()
}
function story8next6() {
    setTimeout(function () {
        $("#story8-6-next").hide();
        $("#story8-6").hide()
    }, 50)
    fanye.play()
    $("#story8-7-next").show();
    $("#story8-7").show()
}
function story8next7() {
    setTimeout(function () {
        $("#story8-7-next").hide();
        $("#story8-7").hide()
    }, 50)
    fanye.play()
    $("#story8-8-next").show();
    $("#story8-8").show()
}
function story8next8() {
    setTimeout(function () {
        $("#story8-8-next").hide();
        $("#story8-8").hide()
    }, 50)
    fanye.play()
    $("#story8-9-next").show();
    $("#story8-9").show()
}
function story8next9() {
    setTimeout(function () {
        $("#story8-9-next").hide();
        $("#story8-9").hide()
    }, 50)
    fanye.play()
    $("#story8-10-next").show();
    $("#story8-10").show()
}
function story8next10() {
    setTimeout(function () {
        $("#story8-10-next").hide();
        $("#story8-10").hide()
    }, 50)
    fanye.play()
    $("#story8-11-next").show();
    $("#story8-11").show()
}
function story8next11() {
    setTimeout(function () {
        $("#story8-11-next").hide();
        $("#story8-11").hide()
    }, 50)
    fanye.play()
    $("#story8-12-next").show();
    $("#story8-12").show()
}
function story8next12() {
    setTimeout(function () {
        $("#story8-12-next").hide();
        $("#story8-12").hide()
    }, 50)
    fanye.play()
    $("#story8-13-next").show();
    $("#story8-13").show()
}
function story8next13() {
    setTimeout(function () {
        $("#story8-13-next").hide();
        $("#story8-13").hide()
    }, 50)
    fanye.play()
    $("#story8-14-next").show();
    $("#story8-14").show()
}
function story8next14() {
    setTimeout(function () {
        $("#story8-14-next").hide();
        $("#story8-14").hide()
    }, 50)
    fanye.play()
    $("#story8-15-next").show();
    $("#story8-15").show()
}
function story8next15() {
    setTimeout(function () {
        $("#story8-15-next").hide();
        $("#story8-15").hide()
    }, 50)
    fanye.play()
    $("#story8-16-next").show();
    $("#story8-16").show()
}
function story8next16() {
    setTimeout(function () {
        $("#story8-16-next").hide();
        $("#story8-16").hide()
    }, 50)
    fanye.play()
    $("#story8-17-next").show();
    $("#story8-17").show()
}
function story8next17() {
    setTimeout(function () {
        $("#story8-17-next").hide();
        $("#story8-17").hide()
    }, 50)
    fanye.play()
    $("#story8-18-next").show();
    $("#story8-18").show()
}
function story8next18() {
    setTimeout(function () {
        $("#story8-18-next").hide();
        $("#story8-18").hide()
    }, 50)
    fanye.play()
    $("#story8-19-next").show();
    $("#story8-19").show()
}
function story8next19() {
    setTimeout(function () {
        $("#story8-19-next").hide();
        $("#story8-19").hide()
    }, 50)
    fanye.play()
    $("#story8-20-next").show();
    $("#story8-20").show()
}
function story8next20() {
    setTimeout(function () {
        $("#story8-20-next").hide();
        $("#story8-20").hide()
    }, 50)
    fanye.play()
    $("#story8-21-next").show();
    $("#story8-21").show()
}
function story8next21() {
    setTimeout(function () {
        $("#story8-21-next").hide();
        $("#story8-21").hide()
    }, 50)
    fanye.play()
    $("#story8-22-next").show();
    $("#story8-22").show()
}
function story8next22() {
    setTimeout(function () {
        $("#story8-22-next").hide();
        $("#story8-22").hide()
    }, 50)
    fanye.play()
    $("#story8-23-next").show();
    $("#story8-23").show()
}
function story8next23() {
    setTimeout(function () {
        $("#story8-23-next").hide();
        $("#story8-23").hide()
    }, 50)
    fanye.play()
    $("#story8-24-next").show();
    $("#story8-24").show()
}
function story8next24() {
    setTimeout(function () {
        $("#story8-24-next").hide();
        $("#story8-24").hide()
    }, 50)
    fanye.play()
    $("#story8-25-next").show();
    $("#story8-25").show()
}
function story8next25() {
    setTimeout(function () {
        $("#story8-25-next").hide();
        $("#story8-25").hide()
    }, 50)
    fanye.play()
    $("#story8-26-next").show();
    $("#story8-26").show()
}
function story8next26() {
    setTimeout(function () {
        $("#story8-26-next").hide();
        $("#story8-26").hide()
    }, 50)
    fanye.play()
    $("#story8-27-next").show();
    $("#story8-27").show()
}
function story8next27() {
    setTimeout(function () {
        $("#story8-27-next").hide();
        $("#story8-27").hide()
    }, 50)
    fanye.play()
    $("#story8-28-next").show();
    $("#story8-28").show()
}
function story8next28() {
    setTimeout(function () {
        $("#story8-28-next").hide();
        $("#story8-28").hide()
    }, 50)
    fanye.play()
    $("#story8-29-next").show();
    $("#story8-29").show()
}
function story8next29() {
    setTimeout(function () {
        $("#story8-29-next").hide();
        $("#story8-29").hide()
    }, 50)
    fanye.play()
    $("#story8-30-next").show();
    $("#story8-30").show()
}
function story8next30() {
    setTimeout(function () {
        $("#story8-30-next").hide();
        $("#story8-30").hide()
    }, 50)
    fanye.play()
    $("#story8-31-next").show();
    $("#story8-31").show()
}
function story8next31() {
    setTimeout(function () {
        $("#story8-31-next").hide();
        $("#story8-31").hide()
    }, 50)
    fanye.play()
    $("#story8-32-next").show();
    $("#story8-32").show()
}
function story8next32() {
    setTimeout(function () {
        $("#story8-32-next").hide();
        $("#story8-32").hide()
    }, 50)
    fanye.play()
    $("#story8-33-next").show();
    $("#story8-33").show()
}
function story8next33() {
    setTimeout(function () {
        $("#story8-33-next").hide();
        $("#story8-33").hide()
    }, 50)
    fanye.play()
    $("#story8-34-next").show();
    $("#story8-34").show()
}
function story8next34() {
    setTimeout(function () {
        $("#story8-34-next").hide();
        $("#story8-34").hide()
    }, 50)
    fanye.play()
    $("#story8-35-next").show();
    $("#story8-35").show()
}
function story8next35() {
    setTimeout(function () {
        $("#story8-35-next").hide();
        $("#story8-35").hide()
    }, 50)
    fanye.play()
    $("#story8-36-next").show();
    $("#story8-36").show()
}
function story8next36() {
    setTimeout(function () {
        $("#story8-36-next").hide();
        $("#story8-36").hide()
    }, 50)
    fanye.play()
    $("#story8-37-next").show();
    $("#story8-37").show()
}
function story8next37() {
    setTimeout(function () {
        $("#story8-37-next").hide();
        $("#story8-37").hide()
    }, 50)
    fanye.play()
    $("#story8-38-next").show();
    $("#story8-38").show()
}
function story8next38() {
    setTimeout(function () {
        $("#story8-38-next").hide();
        $("#story8-38").hide()
    }, 50)
    fanye.play()
    $("#story8-39-next").show();
    $("#story8-39").show()
}
function story8next39() {
    setTimeout(function () {
        $("#story8-39-next").hide();
        $("#story8-39").hide()
    }, 50)
    fanye.play()
    $("#story8-40-next").show();
    $("#story8-40").show()
}
function story8next40() {
    setTimeout(function () {
        $("#story8-40-next").hide();
        $("#story8-40").hide()
    }, 50)
    fanye.play()
    $("#story8-41-next").show();
    $("#story8-41").show()
}
function story8next41() {
    setTimeout(function () {
        $("#story8-41-next").hide();
        $("#story8-41").hide()
    }, 50)
    fanye.play()
    $("#story8-42-next").show();
    $("#story8-42").show()
}
function story8next42() {
    setTimeout(function () {
        $("#story8-42-next").hide();
        $("#story8-42").hide()
    }, 50)
    fanye.play()
    $("#story8-43-next").show();
    $("#story8-43").show()
}
function story8next43() {
    setTimeout(function () {
        $("#story8-43-next").hide();
        $("#story8-43").hide()
    }, 50)
    fanye.play()
    $("#story8-44-next").show();
    $("#story8-44").show()
}
function story8next44() {
    setTimeout(function () {
        $("#story8-44-next").hide();
        $("#story8-44").hide()
    }, 50)
    fanye.play()
    $("#story8-45-next").show();
    $("#story8-45").show()
}
function story8next45() {
    setTimeout(function () {
        $("#story8-45-next").hide();
        $("#story8-45").hide()
    }, 50)
    fanye.play()
    $("#story8-46-next").show();
    $("#story8-46").show()
}
function story8next46() {
    setTimeout(function () {
        $("#story8-46-next").hide();
        $("#story8-46").hide()
    }, 50)
    fanye.play()
    $("#story8-47-next").show();
    $("#story8-47").show()
}
function story8next47() {
    setTimeout(function () {
        $("#story8-47-next").hide();
        $("#story8-47").hide()
    }, 50)
    fanye.play()
    $("#story8-48-next").show();
    $("#story8-48").show()
}
function story8next48() {
    setTimeout(function () {
        $("#story8-48-next").hide();
        $("#story8-48").hide()
    }, 50)
    fanye.play()
    $("#story8-49-next").show();
    $("#story8-49").show()
}
function story8next49() {
    setTimeout(function () {
        $("#story8-49-next").hide();
        $("#story8-49").hide()
    }, 50)
    fanye.play()
    $("#story8-50-next").show();
    $("#story8-50").show()
}
function story8next50() {
    setTimeout(function () {
        $("#story8-50-next").hide();
        $("#story8-50").hide()
    }, 50)
    fanye.play()
    $("#story8-51-next").show();
    $("#story8-51").show()
}
function story8next51() {
    setTimeout(function () {
        $("#story8-51-next").hide();
        $("#story8-51").hide()
    }, 50)
    fanye.play()
    $("#story8-52-next").show();
    $("#story8-52").show()
}
function story8next52() {
    setTimeout(function () {
        $("#story8-52-next").hide();
        $("#story8-52").hide()
    }, 50)
    fanye.play()
    $("#story8-53-next").show();
    $("#story8-53").show()
}
function story8next53() {
    setTimeout(function () {
        $("#story8-53-next").hide();
        $("#story8-53").hide()
    }, 50)
    fanye.play()
    $("#story8-54-next").show();
    $("#story8-54").show()
}
function story8next54() {
    setTimeout(function () {
        $("#story8-54-next").hide();
        $("#story8-54").hide()
    }, 50)
    fanye.play()
    $("#story8-55-next").show();
    $("#story8-55").show()
}
function story8next55() {
    setTimeout(function () {
        $("#story8-55-next").hide();
        $("#story8-55").hide()
    }, 50)
    fanye.play()
    $("#story8-56-next").show();
    $("#story8-56").show()
}
function story8next56() {
    setTimeout(function () {
        $("#story8-56-next").hide();
        $("#story8-56").hide()
    }, 50)
    fanye.play()
    $("#story8-57-next").show();
    $("#story8-57").show()
}
function story8next57() {
    setTimeout(function () {
        $("#story8-57-next").hide();
        $("#story8-57").hide()
    }, 50)
    fanye.play()
    $("#story8-58-next").show();
    $("#story8-58").show()
}
function story8next58() {
    setTimeout(function () {
        $("#story8-58-next").hide();
        $("#story8-58").hide()
    }, 50)
    fanye.play()
    $("#story8-59-next").show();
    $("#story8-59").show()
}
function story8next59() {
    setTimeout(function () {
        $("#story8-59-next").hide();
        $("#story8-59").hide()
    }, 50)
    fanye.play()
    if (x8 == 1) {
        bgma70.stop()
        $("#story8-59-next").hide();
        $(".story8backhome").hide()
        $("#story8-59").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 500)
        }, 1000)
        setTimeout(function () {
            $("#story8").hide()
        }, 2000)
        setTimeout(function () {
            $("#story8").animate({
                opacity: "0"
            }, 1)
        }, 2001)
        setTimeout(function () {
            $("#story8-59").animate({
                opacity: "1"
            }, 2);
        }, 2001)

    } else {
        bgma70.stop()
        $("#story8-59-next").hide();
        $(".story8backhome").hide()
        $("#story8-59").animate({
            opacity: "0"
        }, 1000);
        setTimeout(function () {
            $(".map").show()
        }, 1000)
        setTimeout(function () {
            $(".map").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end8").show()
        }, 1000)
        setTimeout(function () {
            $("#end8").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        setTimeout(function () {
            $("#end8btn").show()
        }, 1000)
        setTimeout(function () {
            $("#end8btn").animate({
                opacity: "1"
            }, 1000)
        }, 1000)

        a = a + 1;
        b = b + 3;
        c = c + 1;
        document.getElementById("renwushu").innerHTML = a;
        document.getElementById("yinyangling").innerHTML = b;
        document.getElementById("shengmingyin").innerHTML = c;
}
}

//////////////////////////////

function cidai4(){
    if(p4==0){  
        yizhihua.play()
        dakaimen.stop()
        huangtuqing.stop()
        fanzidiao.stop()
        p4=1
}
  else{
    yizhihua.stop()
    dakaimen.stop()
    huangtuqing.stop()
    fanzidiao.stop()
    p4=0
}
}

function cidai3(){
    if(p3==0){  
        yizhihua.stop()
        dakaimen.stop()
        huangtuqing.play()
        fanzidiao.stop()
        p3=1
}
  else{
    yizhihua.stop()
    dakaimen.stop()
    huangtuqing.play()
    fanzidiao.stop()
    p3=0
}
}

function cidai2(){
    if(p2==0){  
        yizhihua.stop()
        dakaimen.play()
        huangtuqing.stop()
        fanzidiao.stop()
        p2=1
}
  else{
    yizhihua.stop()
    dakaimen.stop()
    huangtuqing.stop()
    fanzidiao.stop()
    p2=0
}
}

function cidai1(){
    if(p1==0){  
        yizhihua.stop()
        dakaimen.stop()
        huangtuqing.stop()
        fanzidiao.play()
        p1=1
}
  else{
    yizhihua.stop()
    dakaimen.stop()
    huangtuqing.stop()
    fanzidiao.stop()
    p1=0
}
}

//////////////////////////////

function tijiaomima(){
        if(input.value == password){
            $(".shouji").animate({
                opacity: '0'
            },1000);
            $(".main").animate({
                opacity: '0'
            },1000);
            $(".main bg").animate({
                opacity: '0'
            },1000);
            $("#didi1").show()
            setTimeout(function () {
                $("#didi1").animate({
                    opacity: '1'
                },1000);
            }, 1000);

            setTimeout(function () {
                $(".shouji").hide();
                $('.main').hide()
                $('.main bg').hide()
            }, 1000);

        }else{
            alert("密码错误，登录失败")
            input.value = null;}
}

function didi1(){
    $("#didi1").animate({
        opacity: '0'
    },1000);

    $("#didi2").show()

    setTimeout(function () {
        $('#didi1').hide()
        $("#didi2").animate({
            opacity: '1'
        },1000);
    }, 1000);

    document.getElementById("yitishu").innerHTML = d;
}

function didiback(){
    $('.main').show()
    $('.main bg').show()

    $("#didi2").animate({
        opacity: "0"
    }, 1000)
    
    
    setTimeout(function () {
        $("#didi2").hide()
        $(".main").animate({
            opacity: "1"
        }, 1000)
        $(".main bg").animate({
            opacity: "1"
        }, 1000)
    }, 1000);

    setTimeout(function () {
        $("#didi2").animate({
            opacity: "0"
        }, 1)
    }, 1000);

}

//////////////////////////////

var s=0
var q1=0
var num=0//遗体数量
var r=0//道德

function getnew(){
    if(s==0){
        s=1;
        $("#zhuangtai").css("background-image", "url(./img/yijiedan.png)");
    }
    else if(s==1){alert("请先完成当前工作……")}
    else{}
}

function shootnew(){
    if(s==0){
        alert("请先领取新单！")
    }
    else if(s==1){
        if(q1>0 && q2>0 && q3>0 && q4>0){
            if(num<10 && num>=0 && r==0){
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                $("#chengjiu").css("background-image", "url(./img/chengjiu4.png)");
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num<20 && num>=10 && r==0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu5.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num>=20 && r==0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu6.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num<10 && num>=0 && r>0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu1.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num<20 &&num>=10 && r>0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu2.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num>=20 && r>0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu3.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num<10 && num>=0 && r<0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu7.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num<20 && num>=10 && r<0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu8.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }
            else if(num>=20 && r<0){
                $("#chengjiu").css("background-image", "url(./img/chengjiu9.png)");
                s=0;
                $("#zhuangtai").css("background-image", "url(./img/weijiedan.png)");
                
                $("#place2").css("background-image", "url(./img/place2-1.png)");
                $("#place2").css("width", "159px");
                $("#place1").css("background-image", "url(./img/place1-1.png)");
                $("#place1").css("width", "159px");
                $("#speed3").css("background-image", "url(./img/speed3-1.png)");
                $("#speed3").css("width", "113px")
                $("#speed1").css("background-image", "url(./img/speed1-1.png)");
                $("#speed1").css("width", "113px")
                $("#speed2").css("background-image", "url(./img/speed2-1.png)");
                $("#speed2").css("width", "113px")
                $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
                $("#liuceng3").css("width", "113px")
                $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
                $("#liuceng1").css("width", "113px")
                $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
                $("#liuceng2").css("width", "113px")
                $("#car2").css("filter", "brightness(50%)");
                $("#car1").css("filter", "brightness(50%)");
    
                num = num + 1;
                document.getElementById("yitishu").innerHTML = num;
                q1=0;
                q2=0;
                q3=0;
                q4=0;
    
            }else{} 
        }
        else{alert("请完整填写表单！")}
    }
    else{}
}

function place1(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q1==1){
    }
        else{        
            $("#place1").css("background-image", "url(./img/place1-2.png)");
            $("#place1").css("width", "165px");
            $("#place2").css("background-image", "url(./img/place2-1.png)");
            $("#place2").css("width", "159px");
        q1=1}
    }
    else{}
}

function place2(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q1==2){
    }
        else{        
            $("#place2").css("background-image", "url(./img/place2-2.png)");
            $("#place2").css("width", "165px");
            $("#place1").css("background-image", "url(./img/place1-1.png)");
            $("#place1").css("width", "159px");
        q1=2}
    }
    else{}
}

//////////////////////////////

var q2=0

function speed1(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q2==1){
    }
        else{        
        $("#speed1").css("background-image", "url(./img/speed1-2.png)");
        $("#speed1").css("width", "118px")
        $("#speed2").css("background-image", "url(./img/speed2-1.png)");
        $("#speed2").css("width", "113px")
        $("#speed3").css("background-image", "url(./img/speed3-1.png)");
        $("#speed3").css("width", "113px")
        q2=1}
    }
    else{}
   
}

function speed2(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q2==2){
    }
        else{        
            $("#speed1").css("background-image", "url(./img/speed1-1.png)");
            $("#speed1").css("width", "113px")
            $("#speed2").css("background-image", "url(./img/speed2-2.png)");
            $("#speed2").css("width", "118px")
            $("#speed3").css("background-image", "url(./img/speed3-1.png)");
            $("#speed3").css("width", "113px")
        q2=2}
    }
    else{}

}

function speed3(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q2==3){
    }
        else{        
            $("#speed1").css("background-image", "url(./img/speed1-1.png)");
            $("#speed1").css("width", "113px")
            $("#speed2").css("background-image", "url(./img/speed2-1.png)");
            $("#speed2").css("width", "113px")
            $("#speed3").css("background-image", "url(./img/speed3-2.png)");
            $("#speed3").css("width", "118px")
        q2=3}
    }
    else{}

}

//////////////////////////////

var q3=0

function liuceng1(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q3==1){
    }
        else{        
            $("#liuceng1").css("background-image", "url(./img/liucheng1-2.png)");
            $("#liuceng1").css("width", "118px")
            $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
            $("#liuceng2").css("width", "113px")
            $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
            $("#liuceng3").css("width", "113px")
        q3=1}
    }
    else{}

}

function liuceng2(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q3==2){
    }
        else{        
            $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
            $("#liuceng1").css("width", "113px")
            $("#liuceng2").css("background-image", "url(./img/liucheng2-2.png)");
            $("#liuceng2").css("width", "118px")
            $("#liuceng3").css("background-image", "url(./img/liucheng3-1.png)");
            $("#liuceng3").css("width", "113px")
        q3=2}
    }
    else{}

}

function liuceng3(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q3==3){
    }
        else{        
            $("#liuceng1").css("background-image", "url(./img/liucheng1-1.png)");
            $("#liuceng1").css("width", "113px")
            $("#liuceng2").css("background-image", "url(./img/liucheng2-1.png)");
            $("#liuceng2").css("width", "113px")
            $("#liuceng3").css("background-image", "url(./img/liucheng3-2.png)");
            $("#liuceng3").css("width", "118px")
        q3=3}
    }
    else{}

}

//////////////////////////////

var q4=0;

function car1(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q4==1){
    }
        else{        
            $("#car1").css("filter", "brightness(100%)");
            $("#car2").css("filter", "brightness(50%)");
        q4=1}
    }
    else{}

}

function car2(){
    if(s==0){alert("请先领取新单！")}
    else if(s==1){
        if(q4==2){
    }
        else{        
            $("#car2").css("filter", "brightness(100%)");
            $("#car1").css("filter", "brightness(50%)");
        q4=2}
    }
    else{}

}

//////////////////////////////

var bgm = new Howl({
    src: ["./bg1.mp3"],
    autoplay: true,
    loop: true,
    volume: 0.25,
});

var clickthen = new Howl({
    src: ['./clickthen.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,

});


var clickitem = new Howl({
    src: ['./clickitem.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,

});


var dong = new Howl({
    src: ['./dong.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,

});

var drawn = new Howl({
    src: ['./drawn.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,

});

var kaishirenwu = new Howl({
    src: [
        'kaishirenwu.mp3'
    ],
    autoplay: false,
    loop: false,
    volume: 0.5,
});

var fanye = new Howl({
    src: [
        'fanye.mp3'
    ],
    autoplay: false,
    loop: false,
    volume: 0.5,
})

var zhuangzhong2 = new Howl({
    src: ["./zhuangzhong.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.4,
});

var bo2 = new Howl({
    src: ["./bo.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.4,
});

var erhu2 = new Howl({
    src: ["./erhu.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.4,
});

var sheng2 = new Howl({
    src: ["./sheng.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.4,
});

var luo2 = new Howl({
    src: ["./luo.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.4,
});

var suona2 = new Howl({
    src: ["./suona.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.4,
});

var bgm7 = new Howl({
    src: ["./bgm7.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});

/////////////////////////

var bgma10 = new Howl({
    src: ["./bgm1-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.15,
});//医院背景

var bgma11 = new Howl({
    src: ["./bgm1-1.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.15,
});//音乐

var bgma12 = new Howl({
    src: ["./bgm1-2.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//滴滴

var bgma13 = new Howl({
    src: ["./bgm1-3.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.2,
});//男人咳嗽

var bgma14 = new Howl({
    src: ["./bgm1-4.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//手机来短信

/////////////////////////////////////

var bgma20 = new Howl({
    src: ["./bgm2-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//bgm

var bgma21 = new Howl({
    src: ["./bgm2-1.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.25,
});//哀乐

var bgma22 = new Howl({
    src: ["./bgm2-2.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
});//咳嗽

var bgma23 = new Howl({
    src: ["./bgm2-3.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//电话等待

var bgma24 = new Howl({
    src: ["./bgm2-4.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//风声

var bgma25 = new Howl({
    src: ["./bgm2-5.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//燃烧

/////////////////////////////////////

var bgma30 = new Howl({
    src: ["./bgm3-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//bgm

var bgma31 = new Howl({
    src: ["./bgm3-1.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.35,
});//男人哭

var bgma32 = new Howl({
    src: ["./bgm3-2.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//排风扇

var bgma33 = new Howl({
    src: ["./bgm2-5.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.1,
});//燃烧

/////////////////////////////////////

var bgma40 = new Howl({
    src: ["./bgm4-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//bgm

var bgma41 = new Howl({
    src: ["./bgm4-1.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.1,
});//车声

var bgma42 = new Howl({
    src: ["./bgm4-2.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//午后

/////////////////////////////////////

var bgma50 = new Howl({
    src: ["./bgm5-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//bgm

var bgma51 = new Howl({
    src: ["./bgm5-1.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
});//飞机降落

var bgma52 = new Howl({
    src: ["./bgm5-2.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
});//军号

var bgma53 = new Howl({
    src: ["./bgm5-3.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
});//齐步走

var bgma54 = new Howl({
    src: ["./bgm5-4.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//暴风雪

var bgma55 = new Howl({
    src: ["./bgm5-5.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//机枪

var bgma56 = new Howl({
    src: ["./bgm5-6.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
});//手雷

var bgma57 = new Howl({
    src: ["./bgm5-7.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//志愿军战歌

var bgma58 = new Howl({
    src: ["./bgm5-8.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//军魂

//////////////////////////////////

var bgma60 = new Howl({
    src: ["./bgm6-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//bgm

var bgma61 = new Howl({
    src: ["./bgm6-1.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.3,
});//大街

var bgma62 = new Howl({
    src: ["./bgm6-2.mp3"],
    autoplay: false,
    loop: false,
    volume: 0.3,
});//推门

//////////////////////////////////

var bgma70 = new Howl({
    src: ["./bgm7-0.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.17,
});//bgm

/////////////////////////////////

var yizhihua = new Howl({
    src: ["./yizhihua.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//bgm

var huangtuqing = new Howl({
    src: ["./huangtuqing.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//bgm

var dakaimen = new Howl({
    src: ["./dakaimen.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//bgm

var fanzidiao = new Howl({
    src: ["./fanzidiao.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.2,
});//bgm

///////////////////////////////
