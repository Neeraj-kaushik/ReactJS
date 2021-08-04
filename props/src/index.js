import React from 'react';
import ReactDOM from 'react-dom';
const books=[
{ id:1,
  img:'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg',
 title: 'The Dark Moon',
 author:'Neeraj Kaushik'
},
{id:2,
  img:'https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg',
 title: 'The Psychology of Money',
 author:'Morgan Housel'
},
{id:3,
  img:'https://images-eu.ssl-images-amazon.com/images/I/A17fPOnXNmL._AC_UL200_SR200,200_.jpg',
 title: 'General Knowledge',
 author:'Dr. Binay Karna'
},
]
function Booklist(){
  return(
    <section>
      {books.map((book)=>{
       
        return (
          <Book key={book.id} {...book}>
          </Book>
        )

      })}
      
    </section>
  );
};
const Book=(val) =>{
  const {img,title,author} =val
  return(
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDOM.render(<Booklist />,document.getElementById("root"))