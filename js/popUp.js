class Dialog{ //类
  //构造函数
  constructor(title='不努力你拿什么谈未来',content='信念支撑现实，好好努力才不会辜负未来更优秀的自己，你不努力你永远都不知道自己可以那么有能力。'){
    //实例属性
    this.title=title;
    this.content=content;
    this.init();

  }
  //实例化一个方法
  init(){
     this.createWrap();
     this.clicks();
  }
  //创建标题
 createTitle(){
    let h2=document.createElement('h2');
    let span=document.createElement('span');//用于存放点击关闭
    /*//箭头函数的指向对象本身
    span.addEventListener('click',(evnet)=>{
        this.hide();
    })*/
    h2.innerHTML=this.title;
    h2.className='title';
    span.innerHTML='X';
    span.className='span';
    h2.append(span)
    return h2;
  }
  //创建盒子内容
  createContent(){
    let p=document.createElement('p');
    let confirm=document.createElement('button');
    let cancel=document.createElement('button');
     p.innerHTML=this.content;
     p.className='p';
     confirm.innerHTML='确定';
     cancel.innerHTML='取消';
     confirm.className='btn';
     cancel.className='btn';
     p.append(confirm)
     p.append(cancel)
     return p;
  }
  //隐藏
  hide(){
    let divs=document.querySelectorAll('.bigBox')[0];
    divs.style.display='none';
  }
  clicks(){
    let span=document.querySelectorAll('.span');
    let btn=document.querySelectorAll('.btn');
    let that=this;
    span[0].onclick=function(event){
        that.hide()
    }
    btn[0].onclick=function(event){
        document.write('努力过后最好的自己');
    }
    btn[1].onclick=function(event){
        that.hide()
    }
  }
  //创建大盒子
  createWrap(){
    let divs=document.createElement('div');
    let title=this.createTitle();
    let content=this.createContent();

    divs.className='bigBox';

    divs.append(title);
    divs.append(content);

    document.body.append(divs);
  }
}
let bigBox=new Dialog();