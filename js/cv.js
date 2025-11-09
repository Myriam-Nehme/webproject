function addEducation() {
  const container = document.getElementById('educationContainer');
  const div = document.createElement('div');
  div.classList.add('edu-item');
  div.innerHTML = `
    <input type="text" name="school" placeholder="Institution Name" required />
    <input type="text" name="degree" placeholder="Degree / Program" required />
    <input type="text" name="dates" placeholder="Date Range (e.g. 2020–2024)" required />
    <input type="text" name="location" placeholder="Location" />
    <textarea name="details" placeholder="Details / Relevant Coursework"></textarea>
  `;
  container.appendChild(div);
}

function addExperience() {
  const container = document.getElementById('experienceContainer');
  const div = document.createElement('div');
  div.classList.add('exp-item');
  div.innerHTML = `
    <input type="text" name="title" placeholder="Job Title — Company" required />
    <input type="text" name="expDates" placeholder="Dates (e.g. 2023–Present)" required />
    <textarea name="expDetails" placeholder="Duties / Achievements"></textarea>
  `;
  container.appendChild(div);
}

document.getElementById('cvForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const preview = document.getElementById('cvPreview');
  preview.style.display = 'block';
  preview.innerHTML = `
  <header class="cv-header">
    <h1>${form.name.value}</h1>
    <p>
      📧 <a href="mailto:${form.email.value}">${form.email.value}</a> |
      📱 ${form.phone.value} |
      <a href="${form.linkedin.value}" target="_blank">${form.linkedin.value}</a>
    </p>
  </header>

  <section class="cv-section education">
    <h2>Education</h2>
    ${[...form.querySelectorAll('#educationContainer .edu-item')].map(ed => `
      <div class="edu-item">
        <h3>${ed.querySelector('[name=school]').value}</h3>
        <p><strong>${ed.querySelector('[name=degree]').value}</strong></p>
        <p><em>${ed.querySelector('[name=dates]').value} | ${ed.querySelector('[name=location]').value}</em></p>
        <ul><li>${ed.querySelector('[name=details]').value}</li></ul>
      </div>
    `).join('')}
  </section>

  <section class="cv-section experience">
    <h2>Professional Experience</h2>
    ${[...form.querySelectorAll('#experienceContainer .exp-item')].map(exp => `
      <div class="exp-item">
        <h3>${exp.querySelector('[name=title]').value}</h3>
        <p><em>${exp.querySelector('[name=expDates]').value}</em></p>
        <ul><li>${exp.querySelector('[name=expDetails]').value}</li></ul>
      </div>
    `).join('')}
  </section>

  <section class="cv-section skills">
    <h2>Skills</h2>
    <ul>${form.skills.value.split(',').map(s => `<li>${s.trim()}</li>`).join('')}</ul>
  </section>

  <section class="cv-section languages">
    <h2>Languages</h2>
    <ul>${form.languages.value.split(',').map(l => `<li>${l.trim()}</li>`).join('')}</ul>
  </section>

  <section class="cv-section interests">
    <h2>Interests</h2>
    <ul>${form.interests.value.split(',').map(i => `<li>${i.trim()}</li>`).join('')}</ul>
  </section>
  `;
});
