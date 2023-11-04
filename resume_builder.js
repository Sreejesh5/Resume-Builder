// JavaScript (script.js)

// // ***************************** Template Selector Start *******************************************************

const templateSelector = document.getElementById('template-selector');
const selectedTemplate = document.getElementById('selected-template');

function updateSelectedTemplate() {
    const selectedOption = templateSelector.value;

    selectedTemplate.innerHTML = '';

    if (selectedOption === 'Template1') {
        // Load and display Template 1 content
        fetch('Template1.html')
            .then(response => response.text())
            .then(data => {
                selectedTemplate.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading template: ' + error);
            });
    } else if (selectedOption === 'Template2') {
        // Load and display Template 2 content
        fetch('Template2.html')
        .then(response => response.text())
        .then(data => {
            selectedTemplate.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading template: ' + error);
        });
    } else if (selectedOption === 'Template3') {
        // Load and display Template 3 content
        fetch('Template3.html')
        .then(response => response.text())
        .then(data => {
            selectedTemplate.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading template: ' + error);
        });
    }
}

templateSelector.addEventListener('change', updateSelectedTemplate);

// // ***************************** Template Selector END *******************************************************


// ****************************** Profile Picture Start ********************************************************

const profilePictureInput = document.getElementById('profile-picture');

templateSelector.addEventListener('change', function () {
    const selectedTemplate = templateSelector.value;

    if (selectedTemplate === 'Template1') {
        profilePictureInput.disabled = true;
    } else {
        profilePictureInput.disabled = false;
    }
});

function displayProfilePicture() {
    const fileInput = document.getElementById('profile-picture');
    const preview = document.getElementById('profile-picture-preview');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

// ****************************** Profile Picture End ********************************************************


// ********************* Education Field Start *******************************************
let educationFieldCounter = 0; // Initialize to 0
function addneweducation() {
    educationFieldCounter++;
    const educationInput = document.createElement('input');
    educationInput.type = 'text';
    educationInput.className = 'form-control educationfield';
    educationInput.id = `educationInput${educationFieldCounter}`;
    educationInput.placeholder = `[School/College Name, Year of Passing]`;
    educationInput.addEventListener('input', updateUserData);
    document.getElementById('ED').appendChild(educationInput);

    // Create a new list item and add it to the education list
    const newListElement = document.createElement('li');
    newListElement.textContent = ''; // Leave it empty for now
    document.getElementById('education-list').appendChild(newListElement);
}
// ********************* Education Field End *************************************************


// ********************* Work-Experience Field *******************************************
let WEFieldCounter = 0; // Initialize to 0
function addNewWE() {
    WEFieldCounter++;
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.className = 'form-control workexperiencefield';
    newInput.id = `workexperienceInput${WEFieldCounter}`;
    newInput.placeholder = `[Company Name, Job Title, Total Duration Worked in Years]`;
    newInput.addEventListener('input', updateUserData);
    document.getElementById('WE').appendChild(newInput);

    // Create a new list item and add it to the education list
    const newListElement = document.createElement('li');
    newListElement.textContent = ''; // Leave it empty for now
    document.getElementById('experience-list').appendChild(newListElement);
}
// ********************* Work-Experience Field *******************************************


// ********************* Skill Field Start *******************************************
let skillFieldCounter = 0; // Initialize to 0
function addNewSkill() {
    skillFieldCounter++;
    const skillInput = document.createElement('input');
    skillInput.type = 'text';
    skillInput.className = 'form-control skillfield';
    skillInput.id = `skillInput${skillFieldCounter}`;
    skillInput.placeholder = `Skill Input ${skillFieldCounter}`;
    skillInput.addEventListener('input', updateUserData);
    document.getElementById('SK').appendChild(skillInput);

    // Create a new list item and add it to the education list
    const newListElement = document.createElement('li');
    newListElement.textContent = ''; // Leave it empty for now
    document.getElementById('skills-list').appendChild(newListElement);
}
// ********************* Skill Field End *************************************************


// ********************* Hobby Field Start *******************************************
let hobbyFieldCounter = 0; // Initialize to 0
function addNewHobby() {
    hobbyFieldCounter++;
    const hobbyInput = document.createElement('input');
    hobbyInput.type = 'text';
    hobbyInput.className = 'form-control hobbyfield';
    hobbyInput.id = `hobbyInput${hobbyFieldCounter}`;
    hobbyInput.placeholder = `Hobby Input ${hobbyFieldCounter}`; 
    hobbyInput.addEventListener('input', updateUserData);
    document.getElementById('HB').appendChild(hobbyInput);

    // Create a new list item and add it to the education list
    const newListElement = document.createElement('li');
    newListElement.textContent = ''; // Leave it empty for now
    document.getElementById('hobby-list').appendChild(newListElement);
}
// ********************* Hobby Field End *************************************************


// ********************* Language Field Start *******************************************
let languageFieldCounter = 0; // Initialize to 0
function addNewLanguage() {
    languageFieldCounter++;
    const languageInput = document.createElement('input');
    languageInput.type = 'text';
    languageInput.className = 'form-control languagefield';
    languageInput.id = `languageInput${languageFieldCounter}`;
    languageInput.placeholder = `Language Input ${languageFieldCounter}`; 
    languageInput.addEventListener('input', updateUserData);
    document.getElementById('LG').appendChild(languageInput);

    // Create a new list item and add it to the education list
    const newListElement = document.createElement('li');
    newListElement.textContent = ''; // Leave it empty for now
    document.getElementById('language-list').appendChild(newListElement);
}
// ********************* Language Field End *************************************************


// Initialize variables to store user data
let userData = {
    
    profilePicture: '',
    name: '',
    jobTitle: '',
    about: '',
    phone: '',
    email: '',
    address: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    education: [],
    experience: [],
    skill: [],
    hobby: [],
    language: [],
};

function updateUserData() {
  
    if (profilePictureInput.disabled === false) {
        
        userData.profilePicture = document.getElementById('profile-picture-preview').src;
    }
  // Input Field to userData
    userData.name = document.getElementById('full-name').value;
    userData.jobTitle = document.getElementById('job-title').value;
    userData.about = document.getElementById('about-me').value;
    userData.phone = document.getElementById('phone-number').value;
    userData.email = document.getElementById('email-id').value;
    userData.address = document.getElementById('address').value;
    userData.facebook = document.getElementById('facebook').value;
    userData.instagram = document.getElementById('instagram').value;
    userData.linkedin = document.getElementById('linkedin').value;

    // userData to template
    document.getElementById('name').textContent = userData.name;
    document.getElementById('job').textContent = userData.jobTitle;
    document.getElementById('about-content').textContent = userData.about;
    document.getElementById('phone').textContent = userData.phone;    
    document.getElementById('email').textContent = userData.email;
    document.getElementById('addressT').textContent = userData.address;
    document.getElementById('FB').textContent = userData.facebook;
    document.getElementById('IG').textContent = userData.instagram;
    document.getElementById('LIN').textContent = userData.linkedin;

  
    // // *************************** Education Start-Section ***************************

    const educationList = document.getElementById('education-list');
    const educationItems = educationList.getElementsByTagName('li');

    while (educationList.firstChild) {
        educationList.removeChild(educationList.firstChild);
    }

    userData.education = [];
    for (let i = 1; i <= educationFieldCounter; i++) {
        const inputId = `educationInput${i}`;
        const educationField = document.getElementById(inputId);
        const education = educationField.value;
        userData.education.push(education);
    }
  
    const educationListElement = document.getElementById('education-list');
    userData.education.forEach((education) => {
        const listItem = document.createElement('li');
        listItem.textContent = education;
        educationListElement.appendChild(listItem);
    });
  
    // // *************************** Education End-Section ***************************


    // // *************************** Work Experience Start-Section ***************************

    const experienceList = document.getElementById('experience-list');
    const experienceItems = experienceList.getElementsByTagName('li');

    while (experienceList.firstChild) {
        experienceList.removeChild(experienceList.firstChild);
    }

    userData.experience = [];
    for (let i = 1; i <= WEFieldCounter; i++) {
        const inputId = `workexperienceInput${i}`;
        const inputField = document.getElementById(inputId);
        const experience = inputField.value;
        userData.experience.push(experience);
    }

    const experienceListElement = document.getElementById('experience-list');
    userData.experience.forEach((experience) => {
        const listItem = document.createElement('li');
        listItem.textContent = experience;
        experienceListElement.appendChild(listItem);
    });
  
    // // *************************** Work Experience End-Section ***************************


    // // *************************** Skill Start-Section ***************************

    const skillList = document.getElementById('skills-list');
    const skillItems = skillList.getElementsByTagName('li');

    while (skillList.firstChild) {
        skillList.removeChild(skillList.firstChild);
    }

    userData.skill = [];
    for (let i = 1; i <= skillFieldCounter; i++) {
        const inputId = `skillInput${i}`;
        const inputField = document.getElementById(inputId);
        const skill = inputField.value;
        userData.skill.push(skill);
    }

    const skillListElement = document.getElementById('skills-list');
    userData.skill.forEach((skill) => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillListElement.appendChild(listItem);
    });
  
    // // *************************** Skill End-Section ***************************


    // // *************************** Hobby Start-Section ***************************

    const hobbyList = document.getElementById('hobby-list');
    const hobbyItems = hobbyList.getElementsByTagName('li');

    while (hobbyList.firstChild) {
        hobbyList.removeChild(hobbyList.firstChild);
    }

    userData.hobby = [];
    for (let i = 1; i <= hobbyFieldCounter; i++) {
        const inputId = `hobbyInput${i}`;
        const inputField = document.getElementById(inputId);
        const hobby = inputField.value;
        userData.hobby.push(hobby);
    }

    const hobbyListElement = document.getElementById('hobby-list');
    userData.hobby.forEach((hobby) => {
        const listItem = document.createElement('li');
        listItem.textContent = hobby;
        hobbyListElement.appendChild(listItem);
    });
  
    // // *************************** Hobby End-Section ***************************


    // // *************************** Language Start-Section ***************************

    const languageList = document.getElementById('language-list');
    const languageItems = languageList.getElementsByTagName('li');

    while (languageList.firstChild) {
        languageList.removeChild(languageList.firstChild);
    }

    userData.language = [];
    for (let i = 1; i <= languageFieldCounter; i++) {
        const inputId = `languageInput${i}`;
        const inputField = document.getElementById(inputId);
        const language = inputField.value;
        userData.language.push(language);
    }

    const languageListElement = document.getElementById('language-list');
    userData.language.forEach((language) => {
        const listItem = document.createElement('li');
        listItem.textContent = language;
        languageListElement.appendChild(listItem);
    });
  
    // // *************************** Language End-Section ***************************
    
}

// Event listeners to input fields to trigger updates
document.getElementById('full-name').addEventListener('input', updateUserData);
document.getElementById('job-title').addEventListener('input', updateUserData);
document.getElementById('about-me').addEventListener('input', updateUserData);
document.getElementById('email-id').addEventListener('input', updateUserData);
document.getElementById('phone-number').addEventListener('input', updateUserData);
document.getElementById('address').addEventListener('input', updateUserData);
document.getElementById('facebook').addEventListener('input', updateUserData);
document.getElementById('instagram').addEventListener('input', updateUserData);
document.getElementById('linkedin').addEventListener('input', updateUserData);



// "Download PDF" button
document.getElementById('download-pdf-button').addEventListener('click', function () {
    updateUserData();
    
    const printWindow = window.open('', '', 'width=100%,height=100%');
    
    const selectedOption = templateSelector.value;
    const templateUrl = `${selectedOption}.html`;

    fetch(templateUrl)
        .then(response => response.text())
        .then(templateContent => {
            const populatedTemplate = templateContent
                .replace('{{profilePicture}}', userData.profilePicture)
                .replace('{{name}}', userData.name)
                .replace('{{jobTitle}}', userData.jobTitle)
                .replace('{{about}}', userData.about)
                .replace('{{email-id}}', userData.email)
                .replace('{{phone-number}}', userData.phone)
                .replace('{{address}}', userData.address)
                .replace('{{facebook}}', userData.facebook)
                .replace('{{instagram}}', userData.instagram)
                .replace('{{linkedin}}', userData.linkedin)
                .replace('{{educationItems}}', userData.education.map(edu => `<li>${edu}</li>`).join(''))
                .replace('{{experienceItems}}', userData.experience.map(exp => `<li>${exp}</li>`).join(''))
                .replace('{{skillItems}}', userData.skill.map(skill => `<li>${skill}</li>`).join(''))
                .replace('{{hobbyItems}}', userData.hobby.map(hby => `<li>${hby}</li>`).join(''))
                .replace('{{languageItems}}', userData.language.map(lge => `<li>${lge}</li>`).join(''));

            // Populated content to the new window
            printWindow.document.open();
            printWindow.document.write('<html><head><title>Resume</title><style>');
            printWindow.document.write('<link rel="stylesheet" type="text/css" href="Template1/Template1.css">');
            printWindow.document.write('</style></head><body>');
            printWindow.document.write(populatedTemplate);
            printWindow.document.write('</body></html>');
            printWindow.document.close();
        })
        .catch(error => {
            console.error('Error fetching the template:', error);
        });
});

