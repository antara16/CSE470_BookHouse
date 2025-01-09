import React from 'react';

const Categories = () => (
  <section id="categories">
    <div className="cat-row">
      <div className="cat-header">
        <h2>Book Categories</h2>
        <p>Here are the categories of books:</p>
      </div>
      <div className="cat-books">
        {[
          { img: "textbook.jpeg", title: "Textbooks", desc: "These are textbooks" },
          { img: "Novels.jpeg", title: "Novels", desc: "These are Novels" },
          { img: "scifi.jpeg", title: "Science Fiction", desc: "These are Science Fiction books" },
          { img: "his2.jpeg", title: "History", desc: "These are Historical books" },
          { img: "horrrrrror.jpeg", title: "Horror", desc: "These are Horror genre books" },
          { img: "romantic.jpeg", title: "Romantic", desc: "These are Romantic books" },
        ].map((category, index) => (
          <div className="books" key={index}>
            <div className="book-img">
              <img src={category.img} alt={category.title} />
            </div>
            <h4>{category.title}</h4>
            <p>{category.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
