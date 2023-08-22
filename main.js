
function toggleElements(itemTitleElement, elementsToToggle) {
  //ignore the click if animation still on
  if (itemTitleElement.isAnimating) {
    return;
  }

  // Toggle the visibility of the elements

  if (itemTitleElement.visibleElements) {
    // If elements are visible, hide them one by one from the last to the first
    let delay = 10;
    itemTitleElement.isAnimating = true; // Set the flag to indicate animation is in progress
    for (let i = elementsToToggle.length - 1; i >= 0; i--) {
      setTimeout(() => {
        elementsToToggle[i].classList.add('itemHidden');
        elementsToToggle[i].style.visibility = 'hidden'; // Hide the element using visibility
        // Check if this is the last element to be hidden
        if (i === 0) {
          itemTitleElement.isAnimating = false; // Set the flag to indicate animation is complete
          itemTitleElement.visibleElements = !itemTitleElement.visibleElements; // Toggle the visibility state for the next click
        }
      }, delay);
      delay += 50; // Add 0.1 seconds delay for each element (adjust as needed)
    }
  } else {
    // If elements are hidden, show them one by one in their original order
    let delay = 10;
    itemTitleElement.isAnimating = true; // Set the flag to indicate animation is in progress
    elementsToToggle.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove('itemHidden');
        element.style.visibility = 'visible'; // Show the element using visibility
        // Check if this is the last element to be shown
        if (index === elementsToToggle.length - 1) {
          itemTitleElement.isAnimating = false; // Set the flag to indicate animation is complete
          itemTitleElement.visibleElements = !itemTitleElement.visibleElements; // Toggle the visibility state for the next click
        }
      }, delay);
      delay += 50; // Add 0.1 seconds delay for each element (adjust as needed)
    });
  }
}




document.addEventListener('DOMContentLoaded', function () {

  const itemTitles = document.querySelectorAll('.itemTitle-1');
     
  const darkLightButton = document.querySelector('.darkLight');
  let isDarkMode = false;


   darkLightButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    const newBackgroundURL = isDarkMode ? 'RES/elliott-engelmann-DjlKxYFJlTc-unsplash.jpg' : 'RES/pexels-miguel-á-padriñán-19670.jpg';
    darkLightButton.style.backgroundImage = `url(${newBackgroundURL})`;
    
    // Toggle body class between body1 and body2
    const bodyElement = document.body;
    bodyElement.classList.toggle('body1');
    bodyElement.classList.toggle('body2');

    const github = document.querySelectorAll('.git');
    github.forEach(thumbnail => {
      thumbnail.classList.toggle('git_1');
      thumbnail.classList.toggle('git_0');
    });
  });


  itemTitles.forEach(itemTitleElement => {

    itemTitleElement.visibleElements = true;
    itemTitleElement.isAnimating = false;
    const elementsToToggle = Array.from(itemTitleElement.parentElement.children).slice(1);
     toggleElements(itemTitleElement, elementsToToggle);

    itemTitleElement.addEventListener('click', function () {

      toggleElements(itemTitleElement, elementsToToggle);
    
        });                                
        });
      });


      

                                                         