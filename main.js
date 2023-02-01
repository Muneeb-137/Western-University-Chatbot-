document.addEventListener('DOMContentLoaded', function() {
    const topics = document.querySelectorAll(".topic");
    topics.forEach((topic) => {
        topic.addEventListener("click", () => {
            topic.classList.toggle("active");
            
     
        });
    });

    
    });

    