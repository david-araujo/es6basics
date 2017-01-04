/*
    Template literals are a vast improvement upon regular JavaScript strings. Instead of using single or double quotes, template literals are declared using backticks.
*/

// Simple Example
console.log(`Hey I can use " " and ' ' in my strings now !!! `);
console.log('******');

// Multiline Template Literals
console.log(
`We can break some lines here and

        keep some identation here.... \\o/`
);
console.log('******');

// String Interpolation
var name = 'Mario';
console.log(
`Hello !!!
It's me ${name}.
Today ${new Date().toLocaleString()} we can sum 2 + 3 = ${2+3}  with Template literals that can be inside another ${`
    Template Literal that call me, ${name + ' again'}...

Take a look bellow in another cool example using Template Literals.....`}
******
`
);

var book = {
  title: 'Modular ES6',
  excerpt: 'Here goes some properly sanitized HTML',
  tags: ['es6', 'template-literals', 'es6-in-depth']
};

var html = `<article>
  <header>
    <h1>${book.title}</h1>
  </header>
  <section>${book.excerpt}</section>
  <footer>
    <ul>
      ${
        book.tags
          .map(tag => `<li>${tag}</li>`)
          .join('\n      ')
      }
    </ul>
  </footer>
</article>`;

console.log(html);
