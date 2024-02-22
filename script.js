document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('.cart-icon');
    const shoppingCart = document.querySelector('.shopping-cart');
    const closeBtn = document.querySelector('.close-btn');
    const cartItems = document.querySelector('.cart-items');
    const proceedToCheckoutButton = document.getElementById('proceed-to-checkout');

   
    cartButton.addEventListener('click', function () {
        shoppingCart.classList.toggle('active');
    });

    closeBtn.addEventListener('click', function () {
        shoppingCart.classList.remove('active');
    });

    function addItemToCart(item) {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    }

    addItemToCart('Example item');

    proceedToCheckoutButton.addEventListener('click', function () {
        alert('Proceeding to checkout...');
    });
});

document.getElementById('add-funds').addEventListener('click', function() {
    alert('Adding funds...');
});

document.getElementById('make-payment').addEventListener('click', function() {
    alert('Making payment...');
});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview');
    const cropButton = document.getElementById('crop-button');
    let cropper;

    fileInput.addEventListener('change', function (e) {
        const files = e.target.files;
        const done = function (url) {
            fileInput.value = '';
            imagePreview.innerHTML = '<img src="' + url + '" id="selected-image" alt="Selected Image">';
            cropButton.style.display = 'block';
        };

        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.onload = function (event) {
                done(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }
    });

    cropButton.addEventListener('click', function () {
        if (typeof cropper !== 'undefined') {
            const croppedCanvas = cropper.getCroppedCanvas();
            if (!croppedCanvas) {
                alert('No image selected or failed to crop.');
                return;
            }
            const croppedDataUrl = croppedCanvas.toDataURL();
            alert('Cropped image data URL: ' + croppedDataUrl);
        }
    });

    imagePreview.addEventListener('load', function () {
        if (cropper) {
            cropper.destroy(); 
        }
        cropper = new Cropper(this, {
            aspectRatio: 16 / 9,
            viewMode: 1,
            autoCropArea: 1,
        });
    }, false);
});

