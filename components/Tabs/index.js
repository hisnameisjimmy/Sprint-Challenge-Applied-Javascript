// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const topicList = () => {
//     axios.get('https://lambda-times-backend.herokuapp.com/topics')
//         .then((results) => {
//             // console.log(results.data.topics);
//             // return results.data.topics;
//             results.data.topics.forEach((topic) => {
//                 tabElement.appendChild(tabs(topic));
//             });
//         });
// }

// const topicList = () => {
//     let arrayResults = [];
//     axios.get('https://lambda-times-backend.herokuapp.com/topics')
//         .then((results) => {
//             console.log(results.data.topics);
//             array.push(results.data.topics);
//         });
//         return arrayResults;
// }

let topicListArray = [];

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((results) => {
        // console.log(results.data.topics);
        // return results.data.topics;
        results.data.topics.forEach((topic) => {
            // tabElement.appendChild(tabs(topic));
            topicListArray.push(topic);
        });
    })
    .then(() => {
        const tabElement = document.querySelector('.topics');

        topicListArray.forEach((topic) => {
            tabElement.appendChild(tabs(topic));
        });
    });


const tabs = (tabData) => {
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = tabData;

    return tab;
}



