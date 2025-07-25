# Varunah-KCE - Technical & Cultural Event Management Platform

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0.2-purple.svg)](https://getbootstrap.com/)

A modern, responsive web platform for Varunah 2k24 - the annual technical and cultural festival at Kathir College of Engineering. The platform showcases departmental associations, technical events, non-technical activities, and provides comprehensive event management capabilities with an intuitive user interface.

![Varunah Logo](src/assets/imgs/varunah-logo-3.png)

## ✨ Features

### 🎯 Event Management

- **Comprehensive Event Showcase** - Display technical and non-technical events across all departments
- **Department-wise Organization** - Events categorized by AI&DS, CSE, ECE, EEE, MECH, and MBA departments
- **Event Details & Descriptions** - Detailed information for each event with interactive modals
- **Registration Integration** - Direct links to Google Forms for event registration

### 🏢 Department Management

- **Multi-Department Support** - AI&DS, CSE, ECE, EEE, MECH, MBA associations
- **Coordinator Information** - Contact details for department coordinators
- **Technical Events Portfolio** - Paper presentations, project expos, coding competitions
- **Cultural Activities** - Gaming tournaments, treasure hunts, creative competitions

### 🎨 Modern UI/UX

- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Interactive Components** - Dynamic event cards with hover effects and animations
- **Modal-based Information** - Clean presentation of detailed event information
- **Professional Styling** - Modern color scheme with gold accents and dark theme

### 🚀 Technical Features

- **Static Website** - Fast loading with optimized performance
- **Bootstrap Integration** - Responsive grid system and components
- **Dynamic Content Loading** - JavaScript-powered interactive elements
- **Mobile-First Design** - Optimized for mobile user experience

## 🛠️ Tech Stack

### Frontend

- **HTML5** - Semantic markup and modern web standards
- **CSS3** - Advanced styling with custom properties and animations
- **JavaScript (ES6+)** - Dynamic functionality and DOM manipulation
- **Bootstrap 5.0.2** - Responsive framework and UI components
- **Font Awesome 6.5.1** - Professional iconography
- **Google Fonts** - Poppins and Roboto typography

### Assets & Resources

- **SCSS Architecture** - Organized stylesheets with mixins and variables
- **Responsive Images** - Optimized assets for different screen sizes
- **Custom Iconography** - Brand-specific icons and graphics
- **Document Resources** - PDF brochures and promotional materials

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (optional for local development)
- Text editor or IDE

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PraveenSiva77/Varunah-KCE.git
   cd Varunah-KCE
   ```

2. **Open the project**

   Open `src/index.html` in your web browser or serve using a local web server:

   ```bash
   # Using Python 3
   cd src
   python -m http.server 8000

   # Using Node.js (if you have http-server installed)
   npx http-server src

   # Using Live Server in VS Code
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **Access the application**

   Navigate to `http://localhost:8000` (or your chosen port) in your browser.

### 🏃‍♂️ File Structure

```text
Varunah-KCE/
├── src/
│   ├── index.html              # Main landing page
│   ├── event-depts.html        # Events and departments page
│   ├── team.html              # Team information page
│   ├── 404.html               # Error page
│   ├── index.css              # Main stylesheet
│   ├── event-depts.css        # Event-specific styles
│   ├── team.css               # Team page styles
│   ├── index.js               # Main JavaScript functionality
│   ├── event-depts.js         # Event management logic
│   ├── teams.js               # Team display functionality
│   ├── assets/
│   │   ├── css/               # Additional stylesheets
│   │   ├── imgs/              # Images and graphics
│   │   ├── files/             # Documents and PDFs
│   │   ├── js/                # JavaScript utilities
│   │   ├── scss/              # SCSS source files
│   │   └── vendors/           # Third-party libraries
│   ├── bootstrap-5.0.2-dist/  # Bootstrap framework
│   └── Dynamic/
│       └── Footer.html        # Reusable footer component
├── LICENSE                    # MIT License
└── README.md                  # Project documentation
```

## 🎯 Usage

### Navigation

- **Home Page** - Landing page with event overview and registration
- **Events** - Browse events by department with detailed descriptions
- **Associations** - View department-wise organizations and coordinators
- **Contact** - Get in touch with organizers and coordinators

### Event Categories

#### Technical Events

- **Paper Presentations** - Domain-specific research presentations
- **Project Exhibitions** - Showcase innovative engineering projects  
- **Coding Competitions** - Algorithm challenges and bot development
- **Design Competitions** - CAD modeling and circuit debugging

#### Non-Technical Events

- **Gaming Tournaments** - Esports and interactive competitions
- **Creative Contests** - Photography, meme creation, cosplay
- **Cultural Activities** - Treasure hunts, music competitions
- **Business Challenges** - IPL auctions, entrepreneurship events

### Event Information

Each event includes:

- Detailed descriptions and rules
- Department associations
- Coordinator contact information
- Registration links and deadlines

## 📱 Mobile Experience

- **Responsive Navigation** - Collapsible mobile menu
- **Touch-Friendly Interface** - Optimized for touch interactions
- **Fast Loading** - Compressed assets for mobile networks
- **Readable Typography** - Optimized font sizes for mobile screens

## 🎨 Departments & Events

### AI & Data Science (AI&DS)

- **Technical**: Paper Presentation, Algo Bridge, Bot Champ
- **Non-Technical**: Esports, Comic Con, Mr. & Ms. Varunah

### Computer Science Engineering (CSE)

- **Technical**: Paper Presentation, Coding Competition, CICADA
- **Non-Technical**: Photography, Can You Guess, Digiverse

### Electronics & Communication Engineering (ECE)

- **Technical**: Paper Presentation, Project Expo, Circuit Debugging
- **Non-Technical**: Treasure Hunt, Connections

### Electrical & Electronics Engineering (EEE)

- **Technical**: Paper Presentation, Project Expo, Electrical Fitting  
- **Non-Technical**: Tunomania, Smart Artist Contest

### Mechanical Engineering (MECH)

- **Technical**: Paper Presentation, Mr. Mechanic, CAD Modelling
- **Non-Technical**: IPL Auction

### Master of Business Administration (MBA)

- **Technical**: Paper Presentation, Business Samurai
- **Non-Technical**: Battle of Innovation, Meme Creator

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contributors

**Praveen Siva**

- Role: Frontend Developer
- GitHub: [@PraveenSiva77](https://github.com/PraveenSiva77)

**Sibi Siddharth**

- Role: Frontend Developer
- GitHub: [@sibisiddharth8](https://github.com/sibisiddharth8)

## 🏫 About Varunah

Varunah is the annual technical and cultural festival of Kathir College of Engineering, offering students a dynamic platform to showcase innovation, participate in technical challenges, and engage in diverse non-technical events for a holistic learning experience.

## 📞 Contact

For event inquiries and registration support:

- 📧 Email: Contact through event coordinators
- 📱 Registration: [Google Forms Registration](https://docs.google.com/forms/d/e/1FAIpQLSfu2q7ChGwiYq4dhoCY1wAbjnV0H_FVCNDMnYcSYtvnSoz84g/viewform?usp=sf_link)
- 📋 Brochure: [Download PDF](https://drive.google.com/file/d/1_78K48tBrVlBbNGNhLLFdLwbHSr8Z-3y/view?usp=sharing)

## 🙏 Acknowledgments

- Kathir College of Engineering for hosting Varunah 2k24
- All department coordinators and faculty members
- Student organizers and volunteers
- Bootstrap team for the responsive framework
- Font Awesome for the iconography
- Google Fonts for typography

---

Made with ❤️ for Varunah 2k24 - Kathir College of Engineering