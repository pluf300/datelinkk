document.getElementById('yes-heart').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Date Address: 123 Love St, 7:00 PM';
});

document.getElementById('no-heart').addEventListener('mouseover', function() {
    let noHeart = document.getElementById('no-heart');
    let container = noHeart.parentElement;
    
    let containerRect = container.getBoundingClientRect();
    let noHeartRect = noHeart.getBoundingClientRect();
    
    let newX = Math.random() * (containerRect.width - noHeartRect.width);
    let newY = Math.random() * (containerRect.height - noHeartRect.height);
    
    noHeart.style.transform = `translate(${newX}px, ${newY}px)`;
});
