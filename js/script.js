const projects = [
    {
        id: 1,
        title: 'Angular Citadel',
        image: '../img/img1.jpg', // Relative path from paginas/casestudy.html
        description: 'The Angular Citadel stands as a bold testament to the reimagining of brutalist architecture for the modern era, blending raw strength with refined elegance. Conceived in 2020 and completed in 2023, this project was a collaborative effort led by Brvtal’s founding architect, Mariana Costa, alongside a team of structural engineers and urban designers. The client, a forward-thinking cultural institution in Lisbon, sought a space that could serve as both a public gallery and a community hub, challenging traditional notions of spatial interaction. The design process began with an in-depth analysis of the site’s urban context in the heart of Lisbon, where the angular volumes were inspired by the city’s historic geometric patterns, reinterpreted through a brutalist lens. The structure features dynamic, sharp-angled volumes supported by robust concrete columns, creating a dramatic interplay of light and shadow that shifts throughout the day. The use of exposed concrete, a hallmark of Brvtal’s design philosophy, was paired with locally sourced limestone to add warmth and texture, ensuring the building harmonized with its surroundings while standing out as a sculptural landmark. One of the main challenges was balancing the building’s imposing presence with its functional requirements—large, open interior spaces were needed for exhibitions, while smaller, intimate areas were designed for community gatherings. The team employed advanced structural modeling to ensure the cantilevered sections of the building could support heavy loads without compromising the aesthetic vision. Sustainability was also a key focus, with passive ventilation systems integrated into the design to reduce energy consumption, aligning with Brvtal’s commitment to innovative and responsible architecture. The Angular Citadel has since become a celebrated addition to Lisbon’s architectural landscape, earning accolades for its fearless design and its ability to inspire new ways of experiencing public spaces.'
    },
    {
        id: 2,
        title: 'Concrete Prism',
        image: '../img/img2.jpg', // Relative path from paginas/casestudy.html
        description: 'Concrete Prism is a striking example of minimalist brutalist design, where simplicity meets robust functionality to create a visually arresting structure. Initiated in 2019 and finalized in 2022, this project was spearheaded by Brvtal’s lead architect, João Almeida, in collaboration with a multidisciplinary team of designers and engineers. The client, a tech startup based in Porto, Portugal, commissioned a new headquarters that would reflect their innovative ethos while providing a functional workspace for their growing team. The design process began with a series of workshops with the client to translate their abstract vision—modernity, transparency, and strength—into a tangible architectural form. The result was a cubic structure defined by its clean lines and sculpted oval openings, which serve both as windows and as artistic elements that break the monolithic concrete facade. The use of raw concrete, treated with a subtle texture to enhance its tactile quality, was a deliberate choice to emphasize the material’s honesty, a core principle of Brvtal’s brutalist approach. The oval openings were strategically placed to maximize natural light within the interior, reducing the need for artificial lighting and contributing to the building’s energy efficiency. One of the primary challenges was ensuring that the minimalist design did not compromise the building’s structural integrity, particularly given the large spans required for open-plan office spaces. The team employed advanced concrete casting techniques and worked closely with structural engineers to reinforce the building without adding unnecessary bulk. The interior spaces were designed to reflect the client’s brand identity, with custom concrete furniture and modular partitions that allow for flexibility as the company grows. Since its completion, Concrete Prism has been praised for its seamless integration of form and function, offering a workspace that is both inspiring and practical, while standing as a bold statement of modern brutalist architecture in Portugal’s urban landscape.'
    },
    {
        id: 3,
        title: 'Spiral Ascent',
        image: '../img/img3.jpg', // Relative path from paginas/casestudy.html
        description: 'Spiral Ascent is an architectural marvel that pushes the boundaries of form and technology, embodying Brvtal’s commitment to innovation and creativity in brutalist design. Launched in 2021 and completed in early 2024, this project was led by architect Sofia Mendes, a rising star in Brvtal’s team, known for her expertise in structural innovation. The client, a private developer in Lisbon, sought a mixed-use tower that could serve as a residential and commercial space while making a bold architectural statement in the city’s skyline. The design process began with an exploration of cylindrical forms, inspired by the client’s desire for a structure that would stand out while offering panoramic views of Lisbon. The result is a towering cylindrical building with external spiral staircases that wrap around its facade, creating a dynamic visual rhythm and providing residents with unique access to outdoor terraces on each level. The use of high-strength concrete, combined with steel reinforcements, allowed the team to achieve the slender profile of the tower while ensuring its stability against Lisbon’s seismic activity—a key challenge in the region. The external staircases, a signature element of the design, were meticulously engineered to be both functional and safe, with perforated concrete panels providing shade and safety without obstructing views. Inside, the building features a mix of residential apartments and commercial spaces, with flexible layouts that cater to the diverse needs of its occupants. Sustainability was a priority, with the integration of solar panels on the roof and a rainwater harvesting system that supports the building’s landscaping. The design process involved close collaboration with the client to ensure that every detail, from the placement of the staircases to the selection of interior finishes, aligned with their vision for a forward-thinking urban space. Spiral Ascent has since become a landmark in Lisbon, celebrated for its innovative design and its ability to blend cutting-edge technology with the timeless principles of brutalist architecture.'
    },
    {
        id: 4,
        title: 'Habitation Towers',
        image: '../img/img4.jpg', // Relative path from paginas/casestudy.html
        description: 'Habitation Towers represents a visionary approach to urban living, combining functionality, sustainability, and aesthetic boldness in a residential complex that redefines the concept of high-rise living. Initiated in 2020 and completed in late 2023, this project was a collaborative effort led by Brvtal’s co-founder, Pedro Santos, alongside a team of architects, urban planners, and sustainability consultants. The client, a Lisbon-based housing cooperative, aimed to create a residential development that could address the city’s growing housing needs while offering residents a sense of community and connection to nature. The design process began with a comprehensive study of the site, located on the outskirts of Lisbon, where the team identified opportunities to integrate green spaces into the vertical structure. The result is a pair of interconnected towers, each featuring a series of cantilevered concrete platforms that serve as communal gardens, providing residents with access to greenery at every level. The towers are constructed using a combination of precast concrete panels and sustainable timber, a nod to Brvtal’s commitment to environmentally responsible design. One of the main challenges was ensuring that the cantilevered platforms could support the weight of the gardens while maintaining the structural integrity of the towers—a feat achieved through advanced engineering and the use of lightweight, high-strength materials. The interiors of the apartments were designed with flexibility in mind, allowing residents to customize their living spaces to suit their needs. Energy efficiency was a key focus, with the towers incorporating passive solar design, cross-ventilation, and a geothermal heating system to minimize their environmental impact. The project also involved extensive community engagement, with workshops held to gather input from future residents, ensuring that the design met their practical and emotional needs. Since its completion, Habitation Towers has been hailed as a model for sustainable urban living, offering a harmonious blend of brutalist aesthetics, innovative engineering, and community-focused design.'
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const galleryImages = document.querySelectorAll('.gallery-image');

    // Mostrar el lightbox al hacer clic en una imagen
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex'; // Muestra el lightbox
        });
    });

    // Ocultar el lightbox al hacer clic en la "X"
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Ocultar el lightbox al hacer clic en el fondo
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});