 // Get the current year
 const currentYear = new Date().getFullYear();

 // Create the copyright text
 const copyrightText = `&copy; ${currentYear} Hafiz Sloutions. All rights reserved.`;

 // Insert the text into the footer
 document.getElementById('copyright').innerHTML = copyrightText;
     // Spinner Animation Style
     const spinnerStyle = `
         .loader {
             border-top-color: #ffffff;
             animation: spin 1s linear infinite;
         }
         @keyframes spin {
             0% {
                 transform: rotate(0deg);
             }
             100% {
                 transform: rotate(360deg);
             }
         }
     `;
     const styleSheet = document.createElement("style");
     styleSheet.type = "text/css";
     styleSheet.innerText = spinnerStyle;
     document.head.appendChild(styleSheet);

    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

     // Define content for each section
     const sections = {
         home:
          `
        <header class="bg-black text-white py-6">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold">Hafiz Solution</h1>
                <p class="mt-2">Empowering Small Businesses with Innovative Software Solutions</p>
            </div>
        </header>
        <div class="container mx-auto  lg:mt-0 mt-10 flex flex-col lg:flex-row items-center">
                <!-- Left Section -->
                <div class="lg:w-1/2 px-6 mb-8 lg:mb-0">
                    <h1 class="text-4xl font-bold text-black mb-4">Standard Web-Based Software Solutions</h1>
                    <p class="text-gray-700 text-lg mb-6">
                                Hafiz solution is a team of visionary software professionals, dedicated to Empowering Small Businesses with Standard Web-Based Software Solutions.
                            </p>
                            <a href="#" class="bg-orange-600 text-white py-3 px-5 rounded-full text-lg hover:bg-orange-700">About iCog Labs</a>
                        </div>

                        <!-- Right Section: Image Slider -->
                        <div class="lg:w-1/2 px-6">
                            <div  class="relative w-full">
                                <div class= "relative overflow-hidden ">
                                    <img src="../public/images/2024-08-24_17-47-removebg-preview.png" alt="iCog Labs Team 1" class="w-full">
                                </div>

                            </div>
                        </div>
                    </div>
                        <section class="bg-gray-800 text-white py-16">
                            <div class="container mx-auto text-center">
                                <h2 class="text-3xl font-bold">Ready to take your business to the next level?</h2>
                                <p class="mt-4">Contact us today to get started!</p>
                                <a href="#contact" class="mt-8 inline-block bg-black text-white py-4 px-8 rounded hover:bg-gray-700">Contact Us</a>
                            </div>
                        </section>
                        <!-- New Section at the Bottom -->
                    <div class="bg-white py-10">
                    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                        <!-- Services Section -->
                        <div class="text-center">
                            <img src="../public/images/igor-miske-Px3iBXV-4TU-unsplash.jpg" alt="Services" class="w-full mb-4 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold text-black mb-2">SERVICES</h3>
                            <p class="text-gray-700 text-sm mb-4">
                                Hafiz Solutions provides a variety of Web-Based solutions and development services for any customers, including Landing websites, E-commerce websites, and application software development.
                            </p>
                            <a href="#services" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700"><button>Read More</button></a>
                        </div>

                        <!-- iCog Blog Section -->
                        <div class="text-center">
                            <img src="../public/images/jess-bailey-q10VITrVYUM-unsplash (1).jpg" alt="H-S Blog" class="w-full mb-4 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold text-black mb-2">H-S BLOG</h3>
                            <p class="text-gray-700 text-sm mb-4">
                                Hafiz-solutions blog gives a window into some of the broader issues that interest our  software development team. Technological, philosophical, and sociocultural themes intermix, all in the spirit of creating a radically better future for Ethiopia, Africa, and the world.
                            </p>
                            <a href="#blog" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700"><button>Read More</button></a>
                        </div>

                        <!-- Latest News Section -->
                        <div class="text-center">
                            <img src="../public/images/1690462453130.png" alt="Latest News" class="w-full mb-4 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold text-black mb-2">LATEST NEWS</h3>
                            <p class="text-gray-700 text-sm mb-4">
                                Hafiz Solution, a leading provider of web development services, is excited to announce the launch of its latest software product designed specifically for small business owners.
                            </p>
                            <a href="#blog" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700">Read More</a>
                        </div>

                        <!-- Partners Section -->
                        <div class="text-center">
                            <img src="../public/images/ian-schneider-TamMbr4okv4-unsplash.jpg" alt="Partners" class="w-full mb-4 rounded-lg shadow-lg">
                            <h3 class="text-2xl font-bold text-black mb-2">About</h3>
                            <p class="text-gray-700 text-sm mb-4">
                                Hafiz Solution is a forward-thinking web development company committed to empowering small businesses through innovative digital solutions. Established with a passion for technology and a dedication to excellence.
                            </p>
                            <a href="#about" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700">Read More</a>
                        </div>
                    </div>
                </div>
         `,
         services: `
        <section class="py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold">Our Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div class="bg-white p-8 shadow-lg">
                        <h3 class="text-xl font-semibold">E-commerce Website</h3>
                        <p class="mt-4 text-gray-600">Transform your online store with a seamless, secure, and scalable e-commerce solution.</p>
                    </div>
                    <div class="bg-white p-8 shadow-lg">
                        <h3 class="text-xl font-semibold">Company Website</h3>
                        <p class="mt-4 text-gray-600">Create a strong online presence with a professionally designed company website.</p>
                    </div>
                    <div class="bg-white p-8 shadow-lg">
                        <h3 class="text-xl font-semibold">Portfolio Website</h3>
                        <p class="mt-4 text-gray-600">Showcase your work with an elegant and customizable portfolio website.</p>
                    </div>
                    <div class="bg-white p-8 shadow-lg">
                        <h3 class="text-xl font-semibold">Booking System</h3>
                        <p class="mt-4 text-gray-600">Streamline your bookings with a user-friendly and efficient system.</p>
                    </div>
                    <div class="bg-white p-8 shadow-lg">
                        <h3 class="text-xl font-semibold">Landing Website for Hotels</h3>
                        <p class="mt-4 text-gray-600">Engage guests and increase bookings with a dedicated landing website.</p>
                    </div>
                    <div class="bg-white p-8 shadow-lg">
                        <h3 class="text-xl font-semibold">And Other web-based developments</h3>
                        <p class="mt-4 text-gray-600">To elevate your business to the next level.</p>
                    </div>
                </div>
            </div>
        </section>
        <header class="bg-black text-white py-6">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold">Our Pricing</h1>
            </div>
        </header> 
        <!-- Pricing Section -->
        <section class="py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">Choose for your business</h2>
       
                <div id="pricing-plans" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-6">
                    <!-- Plan 1 -->
                    <div class="bg-white p-8 shadow-lg rounded-lg plan-card">
                        <h3 class="text-2xl font-semibold mb-4">Landing Website</h3>
                        <p class="text-xl font-bold mb-4" id="basic-price-monthly">20K birr</p>
                        <p class="text-gray-600 mb-6">For small business owners needing a website to showcase their service.</p>
                        <ul class="list-disc list-inside mb-6 text-left">
                            <li>User-friendly</li>
                            <li>Multi Language support</li>
                            <li>Resposive Design</li>
                            <li>less than 8 pages</li>
                        </ul>
                        <a href="#contact" class="bg-black text-white py-3 px-6 rounded-lg inline-block hover:bg-gray-700">Get Started</a>
                    </div>
                    <!-- Plan 2 -->
                    <div class="bg-white p-8 shadow-lg rounded-lg plan-card">
                        <h3 class="text-2xl font-semibold mb-4">E-commerce</h3>
                        <p class="text-xl font-bold mb-4" id="standard-price-monthly">Above 30k birr</p>
                        <p class="text-gray-600 mb-6">For business owners looking to build an online shop.</p>
                        <ul class="list-disc list-inside mb-6 text-left">
                            <li>User-friendly</li>
                            <li>Responsive Design</li>
                            <li>Multi Language support</li>
                            <li>Supports online payemnt</li>
                        </ul>
                        <a href="#contact" class="bg-black text-white py-3 px-6 rounded-lg inline-block hover:bg-gray-700">Get Started</a>
                    </div>
                    <!-- Plan 3 -->
                    <div class="bg-white p-8 shadow-lg rounded-lg plan-card">
                        <h3 class="text-2xl font-semibold mb-4">Hotels booking system</h3>
                        <p class="text-xl font-bold mb-4" id="premium-price-monthly">50K birr</p>
                        <p class="text-gray-600 mb-6">For hotels seeking websites with an online booking system..</p>
                        <ul class="list-disc list-inside mb-6 text-left">
                            <li>User-friendly</li>
                            <li>High standard</li>
                            <li>Supports online payment</li>
                            <li>online booking</li>
                        </ul>
                        <a href="#contact" class="bg-black text-white py-3 px-6 rounded-lg inline-block hover:bg-gray-700">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white text-black py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold">Need a different service?</h2>
                <p class="mt-4">Contact us today to discuss your needs!</p>
                <a href="#contact" class="mt-8 inline-block bg-black text-white py-4 px-8 rounded hover:bg-gray-700">Contact Us</a>
            </div>
        </section>
         `,
         blog: `
       <section class="bg-black py-12">
            <div class="container mx-auto text-center text-white">
                <h2 class="text-3xl font-bold mb-4">Welcome to My Blog!</h2>
                <p class="text-lg mb-8 text-white">
                    Here, you'll find the latest news and expert advice on everything tech. Stay informed and get ahead with insights from professionals in the field.
                </p>
            </div>
        </section>
        <div class="container mx-auto mt-10 flex flex-col lg:flex-row items-center lg:px-24">
            <!-- Left Section -->
            <div class="lg lg:px-24 mb-8 lg:mx-24 lg:mb-0">
                    <img src="../public/images/ian-schneider-TamMbr4okv4-unsplash.jpg" alt="Partners" class="w-full mb-4 rounded-lg shadow-lg">

                <h1 class="text-4xl font-bold text-black mb-4 text-center">Our mission</h1>
                <p class="text-gray-700 text-lg mb-6 text-center">
                    Is to bridge the gap between small business owners and the ever-evolving digital landscape. We understand that navigating the complexities of technology can be challenging, especially for small enterprises.</p>
                <a href="#" class="bg-orange-600 text-white py-3 px-5 rounded-full text-lg hover:bg-orange-700">About iCog Labs</a>
            </div>
            </div>
        <div class="bg-white py-10">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                <!-- Services Section -->
                <div class="text-center">
                    <img src="../public/images/igor-miske-Px3iBXV-4TU-unsplash.jpg" alt="Services" class="w-full mb-4 rounded-lg shadow-lg">
                    <h3 class="text-2xl font-bold text-black mb-2">SERVICES</h3>
                    <p class="text-gray-700 text-sm mb-4">
                        Hafiz Solutions provides a variety of Web-Based solutions and development services for any customers, including Landing websites, E-commerce websites, and application software development.
                    </p>
                    <a href="#services" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700"><button>Read More</button></a>
                </div>

                <!-- iCog Blog Section -->
                <div class="text-center">
                    <img src="../public/images/jess-bailey-q10VITrVYUM-unsplash (1).jpg" alt="H-S Blog" class="w-full mb-4 rounded-lg shadow-lg">
                    <h3 class="text-2xl font-bold text-black mb-2">H-S BLOG</h3>
                    <p class="text-gray-700 text-sm mb-4">
                        Hafiz-solutions blog gives a window into some of the broader issues that interest our  software development team. Technological, philosophical, and sociocultural themes intermix, all in the spirit of creating a radically better future for Ethiopia, Africa, and the world.
                    </p>
                    <a href="#blog" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700"><button>Read More</button></a>
                </div>

                <!-- Latest News Section -->
                <div class="text-center">
                    <img src="../public/images/1690462453130.png" alt="Latest News" class="w-full mb-4 rounded-lg shadow-lg">
                    <h3 class="text-2xl font-bold text-black mb-2">LATEST NEWS</h3>
                    <p class="text-gray-700 text-sm mb-4">
                        Hafiz Solution, a leading provider of web development services, is excited to announce the launch of its latest software product designed specifically for small business owners.
                    </p>
                    <a href="#blog" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700">Read More</a>
                </div>

                <!-- Partners Section -->
                <div class="text-center">
                    <img src="../public/images/ian-schneider-TamMbr4okv4-unsplash.jpg" alt="Partners" class="w-full mb-4 rounded-lg shadow-lg">
                    <h3 class="text-2xl font-bold text-black mb-2">About</h3>
                    <p class="text-gray-700 text-sm mb-4">
                        Hafiz Solution is a forward-thinking web development company committed to empowering small businesses through innovative digital solutions. Established with a passion for technology and a dedication to excellence.
                    </p>
                    <a href="#about" class="bg-orange-600 text-black py-2 px-4 rounded-full text-sm hover:bg-orange-700">Read More</a>
                </div>
            </div>
        </div>
         `,
         about: `
                    <div class="container mx-auto mt-10 flex flex-col lg:flex-row items-center">
                        <!-- Left Section -->
                        <div class="lg:w-1/2 px-6 mb-8 lg:mb-0">
                            <h1 class="text-4xl font-bold text-black mb-4">About Us</h1>
                            <p class="text-gray-700 text-lg mb-6">
                                Hafiz Solution is a forward-thinking web development company committed to empowering small businesses through innovative digital solutions. Established with a passion for technology and a dedication to excellence, Hafiz Solution specializes in creating custom software products, websites, and digital tools that drive business growth and efficiency.                            </p>
                            <a href="#" class="bg-orange-600 text-white py-3 px-5 rounded-full text-lg hover:bg-orange-700">About iCog Labs</a>
                        </div>

                        <!-- Right Section: Image Slider -->
                        <div class="lg:w-1/2 px-6">
                            <div class="relative w-full">
                                <!-- Slides -->
                                <div class="slides relative overflow-hidden rounded-lg shadow-lg">
                                    <img src="../public/images/ian-schneider-TamMbr4okv4-unsplash.jpg" alt="iCog Labs Team 1" class="w-full">
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- New Section at the Bottom -->
                        <div class="container mx-auto mt-10 flex flex-col lg:flex-row items-center lg:px-24">
                            <!-- Left Section -->
                            <div class="lg lg:px-24 mb-8 lg:mx-24 lg:mb-0">
                                <h1 class="text-4xl font-bold text-black mb-4 text-center">Our mission</h1>
                                <p class="text-gray-700 text-lg mb-6 text-center">
                                    Is to bridge the gap between small business owners and the ever-evolving digital landscape. We understand that navigating the complexities of technology can be challenging, especially for small enterprises.</p>
                                <a href="#" class="bg-orange-600 text-white py-3 px-5 rounded-full text-lg hover:bg-orange-700">About iCog Labs</a>
                            </div>
                    </div>
                    <section class="bg-gray-800 text-white py-16 rounded-3xl">
                        <div class="container mx-auto text-center">
                            <h2 class="text-3xl font-bold">Want to know more?</h2>
                            <p class="mt-4">We’re here to help your business succeed. Contact us today to learn more about how we can support your business goals.</p>
                            <a href="#contact" class="mt-8 inline-block bg-black text-white py-4 px-8 rounded hover:bg-gray-700">Get in Touch</a>
                        </div>
                    </section>

                    <section class="py-16">
                        <div class="container mx-auto">
                            <h2 class="text-3xl font-bold text-center mt-12">Meet Our Team</h2>
                            <p class="mt-4 text-gray-600 text-center max-w-3xl mx-auto">Our team is composed of passionate professionals, from software developers to designers, all committed to your success.</p>
                        </div>
                    </section>
         `,
         contact: `
                     <div class="container mx-auto mt-10 flex flex-col lg:flex-row items-center">
            <!-- Left Section -->
            <div class="lg:w-1/2 px-6 mb-8 lg:mb-0">
                <div class="py-16">
                    <div class="container mx-auto ">
                        <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
                        <p class="text-gray-600 mb-4">We would love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
            
                        <div class="mt-8">
                            <h3 class="text-xl font-semibold">Email Us</h3>
                            <p class="text-gray-600 mt-2">muhammedabdulhafiz1993@gmail.com</p>
                        </div>
            
                        <div class="mt-8">
                            <h3 class="text-xl font-semibold">Call Us</h3>
                            <p class="text-gray-600 mt-2">+251 988179643</p>
                        </div>
                        <div class="mt-8">
                            <h3 class="text-xl font-semibold">Follow Us on Social Media</h3>
                            <div class="flex justify-start space-x-4 mt-4">
                                                            <a href="#" class="mx-2">
                                <svg class="w-6 h-6 fill-current text-gray-600 hover:text-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                                </svg>
                            </a>
                            <a href="#" class="mx-2">
                                <svg class="w-6 h-6 fill-current text-gray-600 hover:text-black" viewBox="0 0 24 24">
                                    <!-- Facebook Icon -->
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                </svg>
                            </a>
                            <a href="#" class="mx-2">
                                <svg class="w-6 h-6 fill-current text-gray-600 hover:text-black" viewBox="0 0 24 24">
                                    <!-- Instagram Icon -->
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                                </svg>
                            </a>
                            <a href="#" class="mx-2">
                                <svg class="w-6 h-6 fill-current text-gray-600 hover:text-black" viewBox="0 0 24 24">
                                    <!-- LinkedIn Icon -->
                                    <path d="M19.708 3H4.292A1.294 1.294 0 003 4.292v15.416A1.294 1.294 0 004.292 21h15.416A1.294 1.294 0 0021 19.708V4.292A1.294 1.294 0 0019.708 3zm-9.375 14.668h-2.5v-6.792h2.5v6.792zm-1.25-7.742a1.47 1.47 0 110-2.939 1.47 1.47 0 010 2.94zm10 7.742h-2.5v-3.584c0-1.078-.02-2.466-1.504-2.466-1.506 0-1.737 1.178-1.737 2.392v3.658h-2.5v-6.792h2.403v.93h.034c.335-.636 1.155-1.305 2.375-1.305 2.543 0 3.012 1.672 3.012 3.85v3.317z"></path>
                                </svg>
                            </a>
                            <a href="#" class="mx-2">
                                <svg class="w-6 h-6 fill-current text-gray-600 hover:text-black" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z"></path></g></svg>
                            </a>                            </div>
                        </div>
                    </div>
                </div>
        
            </div>

                    <!-- Right Section: Image Slider -->
                    <div class="lg:w-1/2 px-0">
                        <div  class="relative w-full">
                            <div class= "relative overflow-hidden ">
                                <img src="../public/images/[removal.ai]_d495d517-c61f-45be-95ef-dcdde7989ac8-quino-al-8gweaaxjjti-unsplash.png" alt="iCog Labs Team 1" class="w-full rounded-lg">
                            </div>

                        </div>
                    </div>
        </div>
         `
     };

     // Function to show the loading spinner
     function showLoading() {
         document.getElementById('loading').classList.remove('hidden');
     }

     // Function to hide the loading spinner
     function hideLoading() {
         document.getElementById('loading').classList.add('hidden');
     }

     // Function to load content based on hash in URL with loading effect
     function loadContent() {
         const hash = window.location.hash.substring(1) || 'home';

         // Remove the font-bold class from all nav links
         document.querySelectorAll('.nav-link').forEach(link => {
             link.classList.remove('font-bold');
         });

         // Add the font-bold class to the active nav link
         const activeLink = document.querySelector(`.nav-link[href="#${hash}"]`);
         if (activeLink) {
             activeLink.classList.add('font-bold');
         }

         // Show the loading spinner
         showLoading();

         // Simulate loading delay (e.g., for fetching data)
         setTimeout(() => {
             document.getElementById('content').innerHTML = sections[hash];

             // Hide the loading spinner
             hideLoading();
         }, 500); // 500ms delay to simulate loading time
     }

     // Event listener for hash change
     window.addEventListener('hashchange', loadContent);

     // Load content for the first time
     loadContent();

const slides = document.querySelectorAll('.slides img');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

// Initialize the slider by showing the first slide
