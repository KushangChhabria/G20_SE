
 // Function to toggle the bookmark state
function toggleBookmark() {
    const button = document.querySelector('.bookmark-button');
    const icon = button.querySelector('.material-icons');  // If you're using the Material Icons version
    
    // Check if the button already has the 'bookmarked' class
    if (button.classList.contains('bookmarked')) {
      // If bookmarked, remove the 'bookmarked' class
      button.classList.remove('bookmarked');
      // Optionally, change the icon to a regular one (if using Material Icons)
      icon.textContent = 'star'; // Replace with a filled star
    } else {
      // If not bookmarked, add the 'bookmarked' class
      button.classList.add('bookmarked');
      // Optionally, change the icon to the filled star (if using Material Icons)
      icon.textContent = 'star_rate';  // Filled star icon for "bookmarked"
    }
  }
  
  
  