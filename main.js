document.addEventListener('DOMContentLoaded', function () {
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
        delay += 200; // Add 0.5 seconds delay for each element (adjust as needed)
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
        delay += 200; // Add 0.5 seconds delay for each element (adjust as needed)
      });
    }
  }

  const itemTitle1 = document.querySelector('.itemTitle-1');
  itemTitle1.visibleElements = true;
  itemTitle1.isAnimating = false;
  const elementsToToggle1 = Array.from(itemTitle1.parentElement.children).slice(1);

  itemTitle1.addEventListener('click', function () {
    toggleElements(itemTitle1, elementsToToggle1);
  });

  const itemTitle2 = document.querySelector('.itemTitle-2');
  itemTitle2.visibleElements = true;
  itemTitle2.isAnimating = false;
  const elementsToToggle2 = Array.from(itemTitle2.parentElement.children).slice(1);

  itemTitle2.addEventListener('click', function () {
    toggleElements(itemTitle2, elementsToToggle2);
  });

  const itemTitle3 = document.querySelector('.itemTitle-3');
  itemTitle3.visibleElements = true;
  itemTitle3.isAnimating = false;
  const elementsToToggle3 = Array.from(itemTitle3.parentElement.children).slice(1);

  itemTitle3.addEventListener('click', function () {
    toggleElements(itemTitle3, elementsToToggle3);
  });

  const itemTitle4 = document.querySelector('.itemTitle-4');
  itemTitle4.visibleElements = true;
  itemTitle4.isAnimating = false;
  const elementsToToggle4 = Array.from(itemTitle4.parentElement.children).slice(1);

  itemTitle4.addEventListener('click', function () {
    toggleElements(itemTitle4, elementsToToggle4);
  });
});
