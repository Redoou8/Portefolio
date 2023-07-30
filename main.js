
function toggleElements(itemTitleElement, elementsToToggle) {
  // If animation is in progress, return and ignore the click
  if (itemTitleElement.isAnimating) {
    return;
  }

  // Toggle the visibility of the elements based on their current state
  if (itemTitleElement.visibleElements) {
    // If elements are visible, hide them one by one from the last to the first
    let delay = 0;
    itemTitleElement.isAnimating = true; // Set the flag to indicate animation is in progress
    for (let i = elementsToToggle.length - 1; i >= 0; i--) {
      setTimeout(() => {
        elementsToToggle[i].classList.add('itemHidden');
        // Check if this is the last element to be hidden
        if (i === 0) {
          itemTitleElement.isAnimating = false; // Set the flag to indicate animation is complete
          itemTitleElement.visibleElements = !itemTitleElement.visibleElements; // Toggle the visibility state for the next click
        }
      }, delay);
      delay += 100; // Add 0.1 seconds delay for each element (adjust as needed)
    }
  } else {
    // If elements are hidden, show them one by one in their original order
    let delay = 0;
    itemTitleElement.isAnimating = true; // Set the flag to indicate animation is in progress
    elementsToToggle.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove('itemHidden');
        // Check if this is the last element to be shown
        if (index === elementsToToggle.length - 1) {
          itemTitleElement.isAnimating = false; // Set the flag to indicate animation is complete
          itemTitleElement.visibleElements = !itemTitleElement.visibleElements; // Toggle the visibility state for the next click
        }
      }, delay);
      delay += 100; // Add 0.1 seconds delay for each element (adjust as needed)
    });
  }
}






document.addEventListener('DOMContentLoaded', function () {

  const itemTitles = document.querySelectorAll('.itemTitle-1');
     
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

