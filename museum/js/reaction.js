/*****************************Animate.css动画监听**************************************/
/*强调动画*/
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animate__' + animationName).one(animationEnd, function() {
            $(this).removeClass('animate__' + animationName);
        });
    }});

/*退出动画*/
$.fn.extend({
    animateOut: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animate__' + animationName).one(animationEnd, function() {
            $(this).removeClass('animate__' + animationName);
            this.style.display = "none";
        });
    }});

/*进入动画*/
//手动设定display属性再调用animateCss即可

/*****************************事件交互**************************************/

//点击导航按钮，展开菜单
function ShowNavMenu()
{
    $(NavMenu).css('display', 'block');
    $(NavMenu).animateCss('bounceInUp');
    $(NavBtn).css('background', 'red');
    $(NavBtn).removeClass('animate__bounceInUp');
    $(NavBtn).animateCss('heartBeat');
    $(NavBtnIcon).css('display', 'none');
    $(ShutNavIcon).css('display', 'block');
    NavBtn.setAttribute('onclick', 'ShutNavMenu()');
}

//点击导航按钮，关闭菜单
function ShutNavMenu()
{
    $(NavMenu).animateOut('bounceOutDown');
    $(NavBtn).css('background', 'orange');
    $(NavBtn).animateCss('heartBeat');
    $(NavBtnIcon).css('display', 'block');
    $(ShutNavIcon).css('display', 'none');
    NavBtn.setAttribute('onclick', 'ShowNavMenu()');
}

//点击形态生成阶段切换按钮，跳转下一阶段
var current_stage = 1;  //全局变量，用于指示当前形态生成呈现的阶段
const stage_descriptions = ['', '提取场地中游泳池的轮廓形状；', '对该轮廓形状经过两次翻转、缩放与叠合，确定建筑范围；', '在上述范围基础上拉起建筑形态，不同位置的挤出方向与高度存在差异，确定形态；', '将建筑放置在泳池南侧凸起的小土堆上，形成悬空之势。']; //数组，存储四个阶段的描述语
function NextFormStage(e)
{
    current_stage = current_stage + 1;
    if (current_stage == 4)
    {
        e.innerHTML = '返回第一步';
    }
    if (current_stage == 5)
    {
        current_stage = 1;
        e.innerHTML = '查看下一步';
    }
        $(FormStage).attr('src', 'img/Form' + current_stage +'.png');
        $(FormStage).animateCss('pulse');
        $(e).animateCss('heartBeat');
        $(StageIndex).text(current_stage);
        $('.StageDescription').text(stage_descriptions[current_stage]);
}

//点击按钮，展开远景切换界面
function StartFarView()
{
    $(FarViewPanel).css('display', 'block');
    $(FarViewPanel).animateCss('zoomIn');
    $(StartFarViewBtn).css('display', 'none');
}

//点击移动按钮，切换远景渲染图
var view_position = 1;  //全局变量，用于指示当前远景所在位置
function MoveLeft()
{
    $(LeftMoveBtn).animateCss('heartBeat');
    const LeaveImg = $('#FarView'+view_position);
    $(LeaveImg).css('display', 'none');
    view_position = view_position - 1;
    const EnterImg = $('#FarView'+view_position);
    $(EnterImg).css('display', 'block');
    $(EnterImg).animateCss('slideInLeft');
    $(RightMoveBtn).css('backgroundColor', 'rgb(42, 157, 143)');
    $(RightMoveBtn).attr('disabled', false);
    if(view_position == 1)
    {
        $(LeftMoveBtn).css('backgroundColor', '#aaaaaa');
        $(LeftMoveBtn).attr('disabled', true);
    }
}
function MoveRight()
{
    $(FarView1).removeClass('wow');
    $(FarView1).removeClass('zoomIn');
    
    $(RightMoveBtn).animateCss('heartBeat');
    const LeaveImg = $('#FarView'+view_position);
    $(LeaveImg).css('display', 'none');
    view_position = view_position + 1;
    const EnterImg = $('#FarView'+view_position);
    $(EnterImg).css('display', 'block');
    $(EnterImg).animateCss('slideInRight');
    $(LeftMoveBtn).css('backgroundColor', 'rgb(42, 157, 143)');
    $(LeftMoveBtn).attr('disabled', false);
    if(view_position == 3)
    {
        $(RightMoveBtn).css('backgroundColor', '#aaaaaa');
        $(RightMoveBtn).attr('disabled', true);
    }
}


//点击近景图片，切换内容
var NearViewPage = [1, 1, 1];   //全局变量，用于指示当前三个近景图所在页码
function NextNearView1()
{
    NearViewPage[0]++;
    if(NearViewPage[0]<4)
    {
        $(NearView1).attr('src', 'img/Rendering6-' + NearViewPage[0] +'.png');
    }
    $(NearView1).animateCss('pulse');
}
function NextNearView2()
{
    NearViewPage[1]++;
    const NearView2 = document.getElementById('NearView2');
    if(NearViewPage[1]<4)
    {
        $(NearView2).attr('src', 'img/Rendering7-' + NearViewPage[1] +'.png');
    }
    $(NearView2).animateCss('pulse');
}
function NextNearView3()
{
    NearViewPage[2]++;
    if(NearViewPage[2]<4)
    {
        $(NearView3).attr('src', 'img/Rendering8-' + NearViewPage[2] +'.png');
    }
    $(NearView3).animateCss('pulse');
}

//点击打开爆炸图
function Explode()
{
    $(ExplodeBtn).text('爆炸成功');
    $(ExplodeBtn).css('backgroundColor', '#aaaaaa');
    $(ExplodeBtn).animateCss('heartBeat');
    $(ExplosionContent).css('display', 'block');
    $(ExplosionContent).animateCss('heartBeat');
}