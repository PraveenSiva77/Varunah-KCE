  document.addEventListener('DOMContentLoaded', function () {
    //Department data
    var departments = [
        {   
            icon: 'AD', 
            title: 'AI & DS', 
            igid:'https://www.instagram.com/adept_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'www.linkedin.com/company/adeptkce',
            description: 'Elevating expertise in AI & Data Science through collaboration & innovation. Exclusive events, clubs, and resources for students to excel in ethical practices and career paths' 
        },

        {   
            icon: 'CS', 
            title: 'CSE', 
            igid:'https://www.instagram.com/computech_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'https://www.linkedin.com/groups/14383475',
            description: 'Uniting tech enthusiasts to innovate and excel! From coding challenges to hackathons, we foster skill enhancement and meaningful connections within the dynamic realm of computer science.' 
        },

        {   
            icon: 'EC',
            title: 'ECE', 
            igid:'https://www.instagram.com/groundbreakers_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'https://www.linkedin.com/groups/14392303/',
            description: 'Empowering students through industry-aligned activities. Join our workshops, projects, and interactions to prepare for future challenges and foster professional growth.' 
        },

        {   
            icon: 'EE',
            title: 'EEE', 
            igid:'https://www.instagram.com/faradayz_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'src/404.html',
            description: 'Faradays, your gateway to excellence in Electrical and Electronic Engineering (EEE). Named after the legendary Michael Faraday, we are a passionate community dedicated to pushing the boundaries of EEE knowledge and application.' 
        },

        {   
            icon: 'ME',
            title: 'Mech', 
            igid:'https://www.instagram.com/mexoltz_kce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
            lnid:'src/404.html',
            description: "Innovation hub for Mechanical Engineering enthusiasts! Join workshops, guest lectures, and projects to explore Industry 4.0 and Robotics. Let's innovate together!"
        },

        {   
            icon: 'MB',
            title: 'MBA', 
            igid:'src/404.html',
            lnid:'src/404.html',
            description: "Kathir College's 2015 initiative boosts managerial skills through workshops and guest lectures, fostering growth via diverse clubs." 
        }
    ];
  
    // Get the container to append department cards
    var deptCardContainer = document.getElementById('dept-card-container');
  
    // Function to create department card HTML
    function createDeptCard(dept) {
      var deptCard = document.createElement('div');
      deptCard.classList.add('dept-card-base', 'gap-3');
  
      deptCard.innerHTML = `
        <div class="part1 d-flex">
          <span class="dept-icon">${dept.icon}</span>
          <h2>${dept.title}</h2>
        </div>
        <div class="part2">
          <p>${dept.description}</p>
        </div>
        <div class="Dept-socialmedia">
          <a href="${dept.igid}" target="_blank" class="text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="${dept.lnid}" target="_blank" class="text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      `;
  
      return deptCard;
    }
  
    // Function to populate department cards
    function populateDeptCards() {
      departments.forEach(function (dept) {
        var deptCard = createDeptCard(dept);
        deptCardContainer.appendChild(deptCard);
      });
    }
  
    // Call function to populate department cards
    populateDeptCards();
  });
  

  async function loadFiles() {
    console.log("Attempting to load footer...");
    const footerElement = document.getElementById("footer");
    
    try {
      // Try to fetch footer content
      const FooterResponse = await fetch("Footer.html");
      
      if (!FooterResponse.ok) {
        throw new Error(`HTTP error! status: ${FooterResponse.status}`);
      }
      
      const FooterHTML = await FooterResponse.text();
      
      if (footerElement) {
        footerElement.innerHTML = FooterHTML;
        console.log("Footer loaded successfully from Footer.html");
      }
    } 
    catch (error) {
      console.error("Error loading footer from Footer.html:", error);
      
      // Try alternative path
      try {
        console.log("Trying alternative path: src/Dynamic/Footer.html");
        const FooterResponse2 = await fetch("src/Dynamic/Footer.html");
        
        if (FooterResponse2.ok) {
          let FooterHTML = await FooterResponse2.text();
          // Fix paths in the loaded HTML for root context
          FooterHTML = FooterHTML.replace(/\.\//g, 'src/')
                               .replace(/event-depts\.html/g, 'src/event-depts.html')
                               .replace(/Team\.html/g, 'src/team.html');
          
          if (footerElement) {
            footerElement.innerHTML = FooterHTML;
            console.log("Footer loaded successfully from src/Dynamic/Footer.html with path corrections");
          }
        } else {
          throw new Error("Alternative path also failed");
        }
      } catch (error2) {
        console.error("Both footer loading methods failed:", error2);
        
        // Show inline fallback content
        if (footerElement) {
          footerElement.innerHTML = `
            <!-- Social media -->
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks</span>
              </div>
              <div>
                <a href="https://www.facebook.com/Kathir-college-of-engineering-131790130221798/" target="_blank" rel="noopener" class="me-4 text-reset">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/kathir_college_of_engineering/" target="_blank" rel="noopener" class="me-4 text-reset">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/kathirce/" target="_blank" rel="noopener" class="me-4 text-reset">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </section>
            
            <!-- Links -->
            <section class="">
              <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                      <img src="src/assets/imgs/Varunah Icon.svg" alt="Varunah" style="height: 30px; margin-right: 10px;">
                      Varunah
                    </h6>
                    <p>Varunah, offering students a dynamic platform to showcase innovation, participate in technical challenges, and engage in diverse non-technical events for a holistic learning experience.</p>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                    <p><a href="src/event-depts.html">Events</a></p>
                    <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfu2q7ChGwiYq4dhoCY1wAbjnV0H_FVCNDMnYcSYtvnSoz84g/viewform?usp=sf_link">Register</a></p>
                    <p><a href="src/team.html">Team</a></p>
                    <p><a href="mailto:varunahkce@kathir.ac.in">Help</a></p>
                  </div>
                  <div class="contacts col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><a href="https://maps.app.goo.gl/ScWiBXoJ6oYxwWW66"><i class="fas fa-home me-3"></i>Kathir College of Engineering, Neelumbur - 641062</a></p>
                    <p><a href="mailto:varunahkce@kathir.ac.in"><i class="fas fa-envelope me-3"></i>varunahkce@kathir.ac.in</a></p>
                    <p><a href="tel:+91 8838031163"><i class="fas fa-phone me-3"></i>+91 8838031163</a></p>
                    <p><a href="https://api.whatsapp.com/send?phone=918438633936"><i class="fab fa-whatsapp me-3"></i>+91 8438633936</a></p>
                  </div>
                </div>
              </div>
            </section>
            
            <!-- Copyright -->
            <div class="text-center p-4">
              © 2024 Copyright <a class="text-reset fw-bold" href="https://kathir.ac.in">Kathir College of Engineering</a>
            </div>
            <p class="soc-credits text-center">Designed & Developed by <a href="https://sibisiddharth08.github.io/SquadofCreators/" target="_blank" rel="noopener">Squad of Creators</a></p>
          `;
          console.log("Fallback footer content loaded directly in JavaScript");
        }
      }
    }
  }
  window.onload = function() {
    console.log("Window loaded, attempting to load footer...");
    loadFiles();
  };

  // Also try loading when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, checking if footer needs to be loaded...");
    const footerElement = document.getElementById("footer");
    if (footerElement && footerElement.innerHTML.trim() === "<!-- Load Content from Dynamic folder-->") {
      console.log("Footer is empty, loading content...");
      loadFiles();
    }
  });