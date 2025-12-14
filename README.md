# Certificate Generation System

A professional certificate generation system built with React, featuring an elegant user interface and beautiful certificate templates.

## Features

### 🎨 Professional UI Design
- **Modern Navigation**: Clean header with logo and branding
- **Sidebar Navigation**: Easy access to Dashboard, Generate Certificate, and History
- **Premium Color Scheme**: Gold/Navy/White theme for a professional feel
- **Responsive Design**: Works seamlessly on desktop and tablet devices

### 📜 Certificate Generation
- **Comprehensive Form**: Input fields for all certificate details
  - Participant Name
  - Course/Program Title
  - Completion Date
  - Certificate Number (auto-generated)
  - Institution/Organization Name
  - Additional custom details
- **Real-time Preview**: See your certificate as you type
- **Form Validation**: Ensures all required fields are filled
- **PDF Download**: Generate high-quality PDF certificates

### 🏆 Professional Certificate Template
The certificate features an elegant design with:
- Premium gold and navy color scheme
- Decorative corner elements
- Professional serif fonts (Playfair Display)
- Gold decorative borders and frames
- Seal designs with star icons
- Signature sections
- Certificate ID and completion date
- Centered, balanced composition

### 📊 Dashboard
- Statistics cards showing total certificates, today's count, and templates
- Quick action buttons
- Recent certificates list

### 📚 Certificate History
- View all generated certificates
- Search functionality by name, course, or certificate number
- Certificate cards with details
- View and download options

## Technologies Used

- **React** 18.2.0 - UI framework
- **React Router DOM** 6.20.0 - Navigation
- **jsPDF** 2.5.1 - PDF generation
- **html2canvas** 1.4.1 - HTML to image conversion
- **Google Fonts** - Playfair Display (serif) and Poppins (sans-serif)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Alouzious/CertificateGeneration.git
cd CertificateGeneration
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build/` directory.

## Usage

### Generating a Certificate

1. Click **"Generate Certificate"** in the sidebar
2. Fill in the certificate details:
   - Enter the participant's full name
   - Add the course or program title
   - Select the completion date
   - The certificate number is auto-generated
   - Enter your institution name
   - Add any additional achievement details
3. Click **"Preview"** to see the certificate
4. Click **"Download PDF"** to save the certificate
5. Click **"Save"** to add it to your history

### Viewing History

1. Click **"History"** in the sidebar
2. Use the search box to filter certificates
3. View certificate details in the card layout
4. Click action buttons to view or download certificates

## Project Structure

```
CertificateGeneration/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CertificateGeneration/
│   │   │   ├── GenerationForm.js
│   │   │   ├── GenerationForm.css
│   │   │   ├── CertificatePreview.js
│   │   │   └── CertificatePreview.css
│   │   ├── CertificateHistory/
│   │   │   ├── CertificateHistory.js
│   │   │   ├── CertificateHistory.css
│   │   │   ├── CertificateCard.js
│   │   │   └── CertificateCard.css
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.js
│   │   │   └── Dashboard.css
│   │   └── Layout/
│   │       ├── Header.js
│   │       ├── Header.css
│   │       ├── Sidebar.js
│   │       └── Sidebar.css
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── responsive.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Color Palette

- **Primary Navy**: #1a237e
- **Primary Gold**: #d4af37
- **White**: #ffffff
- **Light Gray**: #f5f5f5
- **Dark Gray**: #757575

## Typography

- **Formal Text**: Playfair Display (serif) - Used for headings and formal content
- **Body Text**: Poppins (sans-serif) - Used for general content

## Features in Detail

### Certificate Design Elements

1. **Corner Decorations**: Gold triangular elements in all four corners
2. **Double Border**: Outer gold border with inner decorative line
3. **Institution Header**: Logo icon and institution name
4. **Title Section**: "CERTIFICATE OF COMPLETION" with elegant typography
5. **Gold Divider**: Horizontal line with ornamental diamond
6. **Name Highlight**: Large, prominent participant name with underline
7. **Achievement Text**: Customizable description area
8. **Course Display**: Program name in italic serif font
9. **Footer Elements**:
   - Left: Seal with star icon and completion date
   - Center: Signature line with director title
   - Right: Seal with checkmark and certificate ID

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.

---

Made with ❤️ by the CertGen Team
