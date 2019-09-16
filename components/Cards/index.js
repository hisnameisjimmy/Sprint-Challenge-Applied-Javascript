// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then((results) => {
//         console.log(results.data.articles.bootstrap.length);
//         bootstrapArticles = results.data.articles.bootstrap;
//         // Object.keys(articles);
//         // console.log(articles);

//         console.log(Object.keys(results.data.articles));

//         const articleTopLevel = Object.keys(results.data.articles);
        
//         articleTopLevel.forEach((element) => {
//             const secondLevel = Object.keys(results.data.articles.element);
//             console.log(Object.keys(results.data.articles.element));
//             console.log(secondLevel);
//             secondLevel.forEach((element) => {
//                 console.log(element);
//                 const articles = document.querySelector('.cards-container');
//                 articles.appendChild(articleCreator(element));
//             });
//         })
//     });

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then((results) => {
//         bootstrapArticles = results.data.articles.bootstrap;
//         javascriptArticles = results.data.articles.javascript;
//         nodeArticles = results.data.articles.node;
//         technologyArticles = results.data.articles.technology;
//         jqueryArticles = results.data.articles.jquery;

//         bootstrapArticles.forEach((element) => {
//             const articles = document.querySelector('.cards-container');
//             articles.appendChild(articleCreator(element));
//         });
//         javascriptArticles.forEach((element) => {
//             const articles = document.querySelector('.cards-container');
//             articles.appendChild(articleCreator(element));
//         });
//         nodeArticles.forEach((element) => {
//             const articles = document.querySelector('.cards-container');
//             articles.appendChild(articleCreator(element));
//         });
//         technologyArticles.forEach((element) => {
//             const articles = document.querySelector('.cards-container');
//             articles.appendChild(articleCreator(element));
//         });
//         jqueryArticles.forEach((element) => {
//             const articles = document.querySelector('.cards-container');
//             articles.appendChild(articleCreator(element));
//         });

        
//     });

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((results) => {
        overallArticles = results.data.articles;
        const articles = document.querySelector('.cards-container');
        Object.keys(overallArticles).forEach((element) => {
            overallArticles[element].forEach((element) => {
                console.log(element);
                
                articles.appendChild(articleCreator(element));
            });
        });
    });

const articleCreator = (articleData) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    headline.textContent = articleData.headline;
    authorName.textContent = articleData.authorName;
    image.setAttribute('src', articleData.authorPhoto);
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(authorName);

    return card;
}

