import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
function Test() {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
};
const Book= () => {
  return (
    <div id="info">
  <Image></Image>
  <Name></Name>
  <Author></Author>
  </div>
  ); 
};
const Image = () => {
  return (
  <img className="img" src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg" alt="" />
  );
};
const Name = () => {
  return (<h1>The Alchemist</h1>);
};
const Author = () => {
  return (<h4>Paulo Coelho</h4>);
};

ReactDom.render(<Test />, document.getElementById('root'));