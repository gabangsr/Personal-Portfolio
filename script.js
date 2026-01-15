const sections = document.querySelectorAll(".split");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

const revealOnScroll = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {
    revealOnScroll.observe(section);
});

const hobbyBoxes = document.querySelectorAll(".hobby-box");

hobbyBoxes.forEach(box => {
    box.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

    box.addEventListener("mouseenter", () => {
        box.style.transform = "translateY(-10px) scale(1.03)";
        box.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "translateY(0) scale(1)";
        box.style.boxShadow = "none";
    });
});
