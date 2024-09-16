import React from "react";

// import programming from '../assets/blogs/programming.gif' 
const Categories = [
    {
      title: "Programming & Tech",
      imgSrc: "",
    },
    {
      title: "Graphics & Design",
      imgSrc:
        "https://image.shutterstock.com/image-vector/graphic-design-icon-260nw-1626569122.jpg",
    },
    {
      title: "Digital Marketing",
      imgSrc:
        "https://image.shutterstock.com/image-vector/digital-marketing-icon-vector-illustration-260nw-1522688062.jpg",
    },
    {
      title: "Writing & Translation",
      imgSrc:
        "https://image.shutterstock.com/image-vector/writing-icon-edit-text-document-260nw-1559324426.jpg",
    },
    {
      title: "Video & Animation",
      imgSrc:
        "https://image.shutterstock.com/image-vector/video-icon-vector-flat-design-260nw-1566194965.jpg",
    },
    {
      title: "AI Services",
      imgSrc:
        "https://image.shutterstock.com/image-vector/ai-icon-vector-artificial-intelligence-260nw-1556925174.jpg",
    },
    {
      title: "Music & Audio",
      imgSrc:
        "https://image.shutterstock.com/image-vector/music-note-icon-vector-isolated-260nw-1515456269.jpg",
    },
    {
      title: "Business",
      imgSrc:
        "https://image.shutterstock.com/image-vector/business-icon-vector-isolated-on-260nw-1488816818.jpg",
    },
    {
      title: "Consulting",
      imgSrc:
        "https://image.shutterstock.com/image-vector/consulting-icon-vector-flat-style-260nw-1467873692.jpg",
    },
  ];

const Blogs = () => {
  // Categories data with images
  

  return (
    <>
    
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Video editing</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'></p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Video editing</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="grid gap-4">
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Video editing</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Programming & Tech</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Graphics & Design</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="grid gap-4">
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Digital Marketing</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Writing & Translation</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Video & Animation</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="grid gap-4">
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>AI Services</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Music & Audio</p>
                      </div>
                  </div>
              </div>
              <div data-aos="fade-in" data-aos-duration="15000" class=''>
                  <div class='relative overflow-hidden'>
                      <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="Loading" class='rounded-md duration-200 hover:scale-105 w-full'/>
                      <div class='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-green-600 to-green-20 opacity-70'></div>
                      <div class='absolute bottom-10 left-2.5 w-full text-white'>
                          <p class='text-left text-xl'>Consulting</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>

  );
};

export default Blogs;