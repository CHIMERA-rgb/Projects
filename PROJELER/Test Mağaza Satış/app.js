let product = {
    name: 'T-Shirt',
    description: 'Günlük kullanım için tasarlanmış rahat ve şık bir üründür. Yumuşak pamuklu kumaşı sayesinde cilt dostudur ve her mevsim kullanılabilir. Modern kesimi ve geniş renk seçenekleriyle tarzınızı tamamlayacak mükemmel bir seçenek. Hem spor hem de şık kombinler için ideal olan bu tişört, gardırobunuzun vazgeçilmezi olacak.',
    image: 'image.png',
    price: '100 ~ 200',
    children: [
        {color: '#bfb1a4', size: 'M', price: 100},
        {color: '#bfb1a4', size: 'L', price: 120},
        {color: '#bfb1a4', size: 'XL', price: 170},
        {color: '#9c2f46', size: 'M', price: 140},
        {color: '#9c2f46', size: 'L', price: 120},
        {color: '#9c2f46', size: 'XL', price: 150},
    ]
};

let title = document.getElementById('title');
let description = document.getElementById('description');
let image = document.getElementById('image');
let price = document.getElementById('price');
let colorHTML = document.getElementById('colors'); 
let sizeHTML = document.getElementById('sizes'); 

let option = {
    size: null,
    color: null
};

const initApp = () => {
    title.innerText = product.name;
    description.innerText = product.description;
    image.src = product.image; // Ürün görseli dinamik olarak ayarlandı
    price.innerText = product.price;

    // Renk seçeneklerini dinamik olarak ekle
    let colors = product.children.map(child => child.color);
    colors = Array.from(new Set(colors)); // Yalnızca benzersiz renkler
    colors.forEach(color => {
        let li = document.createElement('li');
        li.style.backgroundColor = color;
        li.setAttribute('data-color', color);
        colorHTML.appendChild(li);
        li.addEventListener('click', () => {
            option.color = option.color !== color ? color : null;
            refreshInfo();
        });
    });

    // Beden seçeneklerini dinamik olarak ekle
    let sizes = product.children.map(child => child.size);
    sizes = Array.from(new Set(sizes)); // Yalnızca benzersiz bedenler
    sizes.forEach(size => {
        let li = document.createElement('li');
        li.innerText = size;
        li.setAttribute('data-size', size);
        sizeHTML.appendChild(li);
        li.addEventListener('click', () => {
            option.size = option.size !== size ? size : null;
            refreshInfo();
        });
    });
};

const refreshInfo = () => {
    // Seçilen rengin aktifliğini güncelle
    let colorOldActive = colorHTML.querySelector('li.active');
    if (colorOldActive) colorOldActive.classList.remove('active');
    if (option.color !== null) {
        let colorNewActive = colorHTML.querySelector('li[data-color="'+option.color+'"]');
        colorNewActive.classList.add('active');
    }

    // Seçilen bedenin aktifliğini güncelle
    let sizeOldActive = sizeHTML.querySelector('li.active');
    if (sizeOldActive) sizeOldActive.classList.remove('active');
    if (option.size !== null) {
        let sizeNewActive = sizeHTML.querySelector('li[data-size="'+option.size+'"]');
        sizeNewActive.classList.add('active');
    }

    document.getElementById('add-to-cart').addEventListener('click', function() {
        var notification = document.getElementById('notification');
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 3000);
    });
    

    // Fiyatı seçilen seçeneklere göre güncelle
    if (option.size === null || option.color === null) {
        price.innerText = product.price;
    } else {
        let childFound = product.children.find(child => 
            child.size === option.size && child.color === option.color
        );
        price.innerText = childFound ? childFound.price : product.price;
    }
};

initApp();
