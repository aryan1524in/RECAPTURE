function updateProfilePhoto() {
    var fileInput = document.getElementById('photoInput');
    var profilePhoto = document.getElementById('profilePhoto');

    // Check if a file is selected
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            // Set the source of the image to the selected file
            profilePhoto.src = e.target.result;
        }

        // Read the selected file as a URL
        reader.readAsDataURL(fileInput.files[0]);
    }
}
//upload images

function addImage() {
    var input = document.getElementById('imageInput');
    var gallery = document.getElementById('gallery');
  
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = new Image();
        img.src = e.target.result;
        img.onload = function() {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          var maxWidth = 200; // Max width for the thumbnail
          var maxHeight = 150; // Max height for the thumbnail
          var ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
          canvas.width = img.width * ratio;
          canvas.height = img.height * ratio;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          var thumb = new Image();
          thumb.src = canvas.toDataURL('image/jpeg');
          thumb.alt = 'New Image';
          thumb.onclick = function() {
            // Add click functionality if needed
            alert('You clicked on image');
          };
          gallery.appendChild(thumb);
        };
      };
      reader.readAsDataURL(input.files[0]);
    }
  }