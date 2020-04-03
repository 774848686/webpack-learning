import './index.css';
import './index.less';
import testImg from '../assets/images/test.png'
import moment from 'moment';
import 'moment/locale/zh-cn'; //手动引入
import React from 'react';
import {render} from 'react-dom';
import clac from './test.js';
const testStr = 'zdf';
// 解析es6 + 的高级语法配置
class A{
    a=1
}
console.log([1,2].includes(1))


// 图片的引入 
//  1. js引入
// file-loader 默认会将内部生成一张图片 到dist 目录下
//  2. css引入
//  3. html引入
let image = new Image();
image.src=testImg;
document.body.appendChild(image);

// ajax 请求
let xhr = new XMLHttpRequest();
// xhr.open('GET','http://localhost:3000/api/user',true);//浏览器的同源策略，会不允许跨域但是请求已经发出 Access to XMLHttpRequest at 'http://localhost:3000/api/user' from origin 'http://localhost:3001' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
xhr.open('GET','/api/user',true);
xhr.onload=()=>{
    console.log(xhr.response)
}
xhr.send();


// IgnorePlugin 插件演示案例
moment.locale('zh-cn');
const t = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(t);

// react react-dom 等框架一些代码不需要进行多次解析打包
render('jsx',window.root)

// import 在生产环境下会自动去掉没用的代码，而require 不会删除没用的代码
// let clac = require('./test.js') es6模块会将结果挂在default上面 
// tree-shaking 把没用的代码 自动删除
console.log(clac.sum(1,2));

// scope hosting 作用域提升
let a = 1；
let b= 2;
let c = 3;
let d = a+b+c;
console.log(d); // 在webpack中自动简化一些代码；避免浏览器多次申明不必要的变量