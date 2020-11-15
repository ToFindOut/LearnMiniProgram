// pages/home/home.js

// {} 表示对象自变量
Page({
  data: {
    name: 'Coderwhy',
    englishName: '旺仔牛奶',
    students:[
      {id:110, name:"kebe", age:35},
      {id:111, name:"jams", age:36}
    ],
    count: 0
  },
  handleBtnClick() {
    // 错误做法：虽然数据改变 但是界面不会改变
    // this.data.count++,
    // console.log('绑定函数发生了点击'+ this.data.count)

    // 2.this.setData()
    this.setData({
      count: this.data.count+1
    })
  },
  handleSubtraction() {
    console.log("点击了-号"),
    this.setData({
      count: this.data.count-1
    })
  }

})