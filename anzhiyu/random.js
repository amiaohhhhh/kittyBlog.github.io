var posts=["2024/07/23/JavaScript/1.什么是JavaScript/","2024/07/23/JavaScript/2.HTML中的JavaSctipt/","2024/09/01/JavaScript/5.基本引用类型/","2024/08/12/JavaScript/4.变量、作用域与内存/","2024/08/07/JavaScript/3.语言基础/","2024/11/01/JavaScript/6.集合引用类型/","2024/11/11/JavaScript/7.迭代器与生成器/","2022/08/07/前端基础/ES6标准入门/","2025/02/25/工作随笔/前端各等级要求/","2023/07/30/前端基础/promise从入门到精通/","2025/02/25/工作随笔/招新人有感/","2024/03/07/工程化/浏览器渲染原理/","2025/02/10/工程化/浏览器工作原理/","2025/04/06/工程化/现代的开发概念/","2025/03/07/性能优化/设计模式/","2024/03/12/碎片化学习/JSON.parse(JSON.stringify())、object.assign()区别/","2024/03/22/碎片化学习/JS中浮点数的计算精度问题/","2024/08/07/碎片化学习/vue data为什么是一个函数/","2024/06/14/碎片化学习/vite个人认为必备的一些设置/","2023/02/25/碎片化学习/vue中方法加括号和直接传入方法名区别/","2025/04/07/碎片化学习/为什么Number(0.045).toFixed(2) 是0.04/","2024/08/02/碎片化学习/处理前端高并发/","2024/07/14/碎片化学习/有Composition API后，有些场景可以不需要pinia/","2022/06/05/碎片化学习/源码阅读arrify转数组/","2022/12/30/碎片化学习/用reduce解决数组对象分组问题/","2025/02/25/面试/OpenArt/","2024/05/17/碎片化学习/面向对象编程&原型&原型链/","2025/02/25/面试/字节面/","2025/02/25/面试/西安/","2025/03/27/工程化/脚手架/深入浅出vite/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };