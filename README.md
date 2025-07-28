# Bhartiya Jain Sangathan (BJS) College Website

A modern, responsive website for Bhartiya Jain Sangathan (BJS) College located in Wagholi, Pune, Maharashtra. This website provides comprehensive information about the college, its courses, and facilitates online admissions.

## 🌟 Features

### Core Functionality
- **Modern Responsive Design**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Comprehensive Course Information**: Detailed information about Commerce, Science, and Arts streams with eligibility criteria and career prospects
- **Online Admission System**: Complete online application form with validation and submission handling
- **Contact Information**: Detailed contact pages with address, phone numbers, email addresses, and location map
- **About Us**: Information about college history, mission, vision, faculty, and facilities

### Technical Features
- **Mobile-First Design**: Optimized for mobile devices with responsive navigation
- **Form Validation**: Client-side form validation with error handling and user feedback
- **Interactive Elements**: Smooth animations, hover effects, and interactive components
- **Accessibility**: Designed with accessibility best practices in mind
- **Modern CSS**: Uses CSS Grid, Flexbox, and modern CSS features for layout and styling
- **Cross-Browser Compatible**: Works across all modern browsers

## 📁 Project Structure

```
bjs-website/
├── index.html          # Homepage
├── courses.html        # Courses information page
├── admissions.html     # Admissions and application form
├── contact.html        # Contact information and form
├── about.html          # About the college
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── bjs-logo.png    # College logo (placeholder)
│   ├── college-building.jpg # Main building image (placeholder)
│   └── about-college.jpg    # About page image (placeholder)
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or download the project files**
   ```bash
   git clone <repository-url>
   cd bjs-website
   ```

2. **Add images to the assets folder**
   - Replace placeholder image references with actual college images:
     - `assets/bjs-logo.png` - College logo
     - `assets/college-building.jpg` - Main building photo
     - `assets/about-college.jpg` - Campus/about page image

3. **Open the website**
   - For simple viewing: Open `index.html` in your web browser
   - For development: Use a local web server (recommended)
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the website**
   - Open your browser and go to `http://localhost:8000` (or the port your server is using)

## 📱 Pages Overview

### 1. Homepage (`index.html`)
- Welcome section with college introduction
- Core values and principles
- Quick access links to important sections
- Latest news and updates
- Contact information in footer

### 2. Courses (`courses.html`)
- **Commerce Stream**: B.Com, BBA, B.Com A&F
- **Science Stream**: B.Sc CS, B.Sc IT, B.Sc Biotech, B.Sc Maths
- **Arts Stream**: B.A., B.A. Psychology, B.A. Mass Comm, BSW
- Each course includes eligibility criteria and career prospects

### 3. Admissions (`admissions.html`)
- Step-by-step admission process
- Important dates and deadlines
- Comprehensive online application form with:
  - Personal information
  - Academic details
  - Course selection
  - Parent/Guardian information
  - Additional information
- Required documents information

### 4. Contact (`contact.html`)
- Complete contact information including:
  - Campus address
  - Multiple phone numbers
  - Email addresses for different departments
  - Office hours
- Department-wise contact details
- Contact form for inquiries
- Embedded Google Maps location
- Transportation information

### 5. About Us (`about.html`)
- College history and story
- Mission and vision statements
- Leadership team information
- Facilities and infrastructure details
- Achievements and recognitions
- Statistical information

## 🎨 Design Features

### Color Scheme
- **Primary Color**: `#e74c3c` (Red - representing energy and passion)
- **Secondary Colors**: `#2c3e50` (Dark blue-gray for text)
- **Background**: `#f8f9fa` (Light gray for sections)
- **Text**: `#333` and `#555` (Dark grays for readability)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive font sizes** that adapt to screen size
- **Clear hierarchy** with consistent heading styles

### Layout
- **CSS Grid** for complex layouts
- **Flexbox** for component alignment
- **Mobile-first responsive design**
- **Consistent spacing** using a systematic approach

## 🛠️ Customization

### Updating College Information

1. **Contact Details**: Edit the contact information in all files, particularly:
   - Phone numbers
   - Email addresses
   - Physical address
   - Office hours

2. **Course Information**: Modify course details in `courses.html`:
   - Add/remove courses
   - Update eligibility criteria
   - Modify career prospects

3. **College Content**: Update the college-specific information:
   - History and establishment year
   - Leadership team details
   - Facilities information
   - Achievement and awards

### Styling Modifications

1. **Colors**: Update the CSS custom properties in `styles.css`
2. **Fonts**: Change the Google Fonts import and font-family declarations
3. **Layout**: Modify the grid and flexbox properties for different layouts

### Adding New Pages

1. Create new HTML file following the existing structure
2. Update navigation in all existing files
3. Add appropriate styling in `styles.css`
4. Update the footer links if necessary

## 📧 Form Handling

The website includes client-side form validation and submission handling. For production use, you'll need to:

1. **Set up server-side form processing** for the admission and contact forms
2. **Configure email sending** for form submissions
3. **Add database integration** for storing application data
4. **Implement file upload** functionality for document submission

### Form Validation Features
- Required field validation
- Email format validation
- Phone number format validation
- Pincode validation
- Real-time error display
- Success message on submission

## 🌐 Browser Support

This website supports all modern browsers:
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📄 License

This project is created for educational purposes. Please ensure you have the right to use any images or content you add to the website.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on different devices
5. Submit a pull request

## 📞 Support

For questions or issues with the website:
- Check the browser console for any JavaScript errors
- Ensure all image files are properly placed in the assets folder
- Verify that you're using a modern web browser
- Test the responsive design on different screen sizes

---

**Bhartiya Jain Sangathan (BJS) College**  
Excellence in Education, Values in Life  
📍 Wagholi, Pune, Maharashtra, India  
📞 +91 20 1234 5678  
📧 info@bjscollege.edu.in