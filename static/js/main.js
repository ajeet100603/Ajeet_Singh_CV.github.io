// Custom JS can go here

// Function to generate and download PDF resume using jsPDF
function downloadResume() {
    // Show loading message
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = 'Generating PDF...';
    button.disabled = true;

    // Create a temporary div to hold the resume content
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    // Slightly wider so content wraps less and fits nicely on 2 pages
    tempDiv.style.width = '900px';
    tempDiv.style.padding = '20px';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    // Increase base font size and line height for better readability in PDF
    tempDiv.style.fontSize = '13px';
    tempDiv.style.lineHeight = '1.5';
    
    // Resume content
    tempDiv.innerHTML = `
        <div style="text-align: center; border-bottom: 2px solid #0d6efd; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #0d6efd; margin: 0; font-size: 26px;">Ajeet Singh</h1>
            <p style="margin: 6px 0; color: #444; font-size: 14px;">Software/Web Developer Fresher | Python & Frontend Focus | MCA 2025</p>
            <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 12px; color: #555;">
                <span>📧 ajeetsing169@gmail.com</span>
                <span>📱 +91-6367231278</span>
                <span>📍 Bharatpur, Rajasthan, India</span>
            </div>
        </div>

        <div style="margin-bottom: 22px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Professional Summary</h2>
            <p style="margin: 8px 0 0 0;">MCA graduate (2025) with strong skills in Python, HTML, CSS, JavaScript (Basic) and web development fundamentals. Experienced in creating responsive web applications, solving problems, and building small-scale functional projects. Quick learner, team-oriented and highly motivated to begin a career in the IT industry as a Software Developer / Web Developer (Fresher).</p>
        </div>

        <div style="margin-bottom: 22px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Experience</h2>
            

            <div style="margin-bottom: 19px;">
                <h3 style="margin: 2px; color: #333; font-size: 16px;">Web Development Intern</h3>
                <h4 style="margin: 4px 0; color: #666; font-weight: normal; font-size: 14px;">WeConnect Soft Solutions Pvt. Ltd. , Kota , Rajasthan · | 01 December 2025 - 25 January 2026</h4>
                <p style="margin: 6px 0;">Completed a 45 days internship as a Web Developer Intern where I worked on real-time web developer projects. gained hands-on experience in frontend development , debugging , testing , and website optimisation.</p>
            <ul style="margin: 1px; padding-left: 18px;">
                    <li>Developed responsive web pages using HTML, CSS , and javaScript.</li>
                    <li>Assisted in UI/UX improvements and performance optimisation.</li>


                    
                    <li>Developed and tested features spanning both frontend and backend.</li>
                    <li>Practiced Git-based collaboration, code reviews, and documentation.</li>
                
                </ul>

                </div>
            
            
            
            <div style="margin-bottom: 19px;">


                <h3 style="margin: 2px; color: #333; font-size: 16px;">Full Stack Developer Intern</h3>
                <h4 style="margin: 4px 0; color: #666; font-weight: normal; font-size: 14px;">Codec Technologies Pvt. Ltd. | Jan 2025 – May 2025</h4>
                <p style="margin: 6px 0;">Completed AICTE & ICAC-approved internship covering the complete workflow of web application development. Worked on responsive UIs, backend integration, and repository structuring within sprints.</p>
                <ul style="margin: 0; padding-left: 18px;">
                    <li>Developed and tested features spanning both frontend and backend.</li>
                    <li>Practiced Git-based collaboration, code reviews, and documentation.</li>
                </ul>
            </div>
            <div>
                <h3 style="margin: 2px; color: #333; font-size: 16px;">Web Development Intern</h3>
                <h4 style="margin: 4px 0; color: #666; font-weight: normal; font-size: 14px;">Cognifyz Technologies | Nov 2024</h4>
                <p style="margin: 6px 0;">Developed dynamic web pages, handled basic backend tasks, and tuned UI/UX for better performance across devices.</p>
            </div>
        </div>

        <div style="margin-bottom: 22px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Skills</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">HTML</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">CSS</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">JavaScript (Basic)</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Python</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">SQL (Basic)</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Bootstrap</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">GitHub & VS Code</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Excel / PowerPoint</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Debugging</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Problem Solving</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Teamwork</span>
                <span style="border:1px solid #ddd; border-radius:16px; padding:4px 12px;">Canva</span>
            </div>
        </div>

        <div style="margin-bottom: 22px;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Education</h2>
            <p style="margin: 6px 0;"><strong>MCA</strong> — University of Kota | 2023–2025 (Completed)</p>
            <p style="margin: 6px 0;"><strong>B.Sc.</strong> — M.S.B. University, Bharatpur | 2021–2023</p>
            <p style="margin: 6px 0;"><strong>Senior Secondary (12th)</strong> — RBSE | 2020</p>
            <p style="margin: 6px 0;"><strong>Secondary (10th)</strong> — RBSE | 2018</p>
        </div>

       <div style="margin-bottom: 100px;">
    <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Projects</h2>

    <p style="margin: 8px 0;">
        <strong>Resume Builder Web Application:</strong> Built with HTML, CSS, JavaScript to help students generate polished resumes with live preview.
    </p>

    <p style="margin: 8px 0;">
        <strong>Computer Lab Inventory System:</strong> Python + HTML/CSS + Excel solution for tracking devices, maintenance, and allocations.
    </p>

    <p style="margin: 8px 0;">
        <strong>Interactive India Map Application:</strong> Bilingual Leaflet.js + OpenStreetMap app featuring real-time geocoding, search, and state/district boundaries.
    </p>

    <p style="margin: 8px 0;">
        <strong>Hospital Patient Management System:</strong> Developing a full-stack application using HTML, CSS, JavaScript, and Python (Flask) with SQLite, featuring Admin, Hospital, and Patient modules with OTP-based authentication and role-based access.
    </p>

    <p style="margin: 8px 0;">
        <strong>Luxury Travel Website Template:</strong> Designed a responsive travel website using HTML, CSS, and JavaScript with modern UI, smooth animations, and visually rich sections.
    </p>
</div>

        <div style="margin-bottom: 30px;">
    <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Certifications</h2>
    
    <ul style="margin: 2px; padding-left: 20px;">
        <li>Cybersecurity – Tech Mahindra Foundation (2025)</li>
        <li>Web Design & Development (Hindi) – NSDC / Skill India (2025)</li>
        <li>AI Internship Program – Agnirva (2025)</li>
        <li>Digital Quiz – राजस्थान को जानें – Rajasthan Knowledge Corporation Ltd. (2026)</li>
        <li>Prompt Engineering & AI – University of Kota (2024)</li>
        <li>Web Development Internship – Cognifyz (2024)</li>
        <li>RSCIT – VMOU (2021)</li>
    </ul>
</div>

        <div style="margin-bottom: 0;">
            <h2 style="color: #0d6efd; border-bottom: 1px solid #ddd; padding-bottom: 6px; font-size: 18px;">Contact & Links</h2>
            <p style="margin: 6px 0;"><strong>LinkedIn:</strong> linkedin.com/in/ajeetsingh100</p>
            <p style="margin: 6px 0;"><strong>GitHub:</strong> github.com/ajeet100603</p>
            <p style="margin: 6px 0;"><strong>Date of Birth:</strong> 10 June 2003</p>
        </div>
    `;
    
    document.body.appendChild(tempDiv);

    // Use html2canvas to capture the content
    html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Remove the temporary div
        document.body.removeChild(tempDiv);
        
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        
        // Add new pages if content is longer than one page (avoid extra blank page)
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }
        
        // Download the PDF
        pdf.save('Ajeet_Singh_Resume.pdf');
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    }).catch(error => {
        console.error('Error generating PDF:', error);
        // Fallback to print method
        const resumeWindow = window.open('static/resume.html', '_blank');
        resumeWindow.onload = function() {
            setTimeout(() => {
                resumeWindow.print();
            }, 1000);
        };
        
        // Reset button
        button.innerHTML = originalText;
        button.disabled = false;
    });
}

// Add event listeners to all download resume buttons
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('a[href="static/resume.pdf"]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResume();
        });
    });
});

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
}); 