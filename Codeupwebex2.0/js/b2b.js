let bugButton = document.querySelector(".bugs");
    
bugButton.addEventListener("click", function() {
    const collection = document.body.children;
    for (let i = 0; i < collection.length; i++) {
       
        collection[i].classList.toggle("red-bor");
        
    }
});
