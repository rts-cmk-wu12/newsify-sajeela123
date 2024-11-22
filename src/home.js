const fetchMostPopolarByViews = require('./cnomonents/nyt');
 
document.addEventListener('DOMContentLoaded', async () => {
    const popularNews = await fetchMostPopolarByViews(7);
    console.log(popularNews);
 
    const sections = document.querySelectorAll('.news-section');
 
    popularNews.results.forEach(article => {
        sections.forEach(section => {
            const sectionName = section.querySelector('.section-heading__text').textContent.toLowerCase();
            if (article.section.toLowerCase().includes(sectionName)) {
                const dropdownContent = section.querySelector('.dropdown-content');
                const articleElement = document.createElement('article');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                         <img class="news-image" src="${article.media[0]?.['media-metadata'][0].url}" alt="${article.title}">
                          <div class= "news-text">
                           <h3>${article.title}</h3>
                              <p>${article.abstract}</p>
                             </div>`;
 
 
               
                dropdownContent.appendChild(articleElement);
 
            }
 
 
        });
    });
 
    sections.forEach(section => {
        const arrow = section.querySelector('.arrow');
 
 
        arrow.addEventListener('click', () => {
            const content = section.querySelector('.dropdown-content');
            section.classList.toggle('open');
 
 
            console.log('Arrow clicked:', section);
        });
    });
 
});  