document.addEventListener('DOMContentLoaded', () => {
    const newProjectBtn = document.getElementById('new-project-btn');
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const tagsInput = document.getElementById('tags');
    const taskList = document.querySelector('.task-list');
    const projectManagement = document.getElementById('project-management');
    const dashboard = document.getElementById('dashboard');
    const teamManagement = document.getElementById('team-management');
    const navProjects = document.getElementById('nav-projects');
    const navTeam = document.getElementById('nav-team');
    const navDashboard = document.getElementById('nav-dashboard');
    const addMemberBtn = document.getElementById('add-member-btn');
    const addMemberForm = document.getElementById('add-member-form');
    const newMemberForm = document.getElementById('new-member-form');
    const memberNameInput = document.getElementById('member-name');
    const memberEmailInput = document.getElementById('member-email');
    const cancelMemberBtn = document.getElementById('cancel-member-btn');
    const teamMembersContainer = document.querySelector('.team-members');

    let projects = [];
    let teamMembers = [];

    // Yeni proje oluşturma
    newProjectBtn.addEventListener('click', () => {
        const projectName = prompt('Proje adını girin:');
        if (projectName) {
            const newProject = { name: projectName, tasks: [] };
            projects.push(newProject);
            displayProjects();
        }
    });

    // Projeleri göster
    function displayProjects() {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
        projects.forEach((project, index) => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.innerHTML = `
                <h4>${project.name}</h4>
                <p>Toplam Görev: ${project.tasks.length}</p>
                <button onclick="viewProject(${index})">Projeyi Görüntüle</button>
            `;
            projectList.appendChild(projectItem);
        });
    }

    // Proje detaylarını göster
    function viewProject(index) {
        const project = projects[index];
        dashboard.style.display = 'none';
        projectManagement.style.display = 'block';
        const projectDetails = document.querySelector('.project-details');
        projectDetails.innerHTML = `
            <h4>${project.name}</h4>
            <p>Toplam Görev: ${project.tasks.length}</p>
            <button onclick="addTask(${index})">Görev Ekle</button>
        `;
    }

    // Görev ekleme
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskContent = taskInput.value.trim();
        if (taskContent === '') return;
        const newTask = {
            content: taskContent,
            dueDate: dueDateInput.value,
            priority: priorityInput.value,
            tags: tagsInput.value.split(',').map(tag => tag.trim()),
            completed: false
        };
        projects[0].tasks.push(newTask); // Varsayılan olarak ilk projeye görev ekleniyor
        displayTasks(projects[0]);
        taskForm.reset();
    });

    // Görevleri listele
    function displayTasks(project) {
        taskList.innerHTML = '';
        project.tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <div class="task-content">${task.content}</div>
                <div class="task-priority">${capitalize(task.priority)}</div>
                <div class="task-due-date">${task.dueDate}</div>
                <button class="btn-complete" onclick="completeTask('${task.content}')">Tamamla</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // Görev tamamlama
    function completeTask(content) {
        const project = projects[0]; // İlk projeyi varsayılan alıyoruz
        const task = project.tasks.find(t => t.content === content);
        if (task) {
            task.completed = true;
            alert(`Görev Tamamlandı: ${task.content}`);
            displayTasks(project);
        }
    }

    // Sayfa geçişleri
    navDashboard.addEventListener('click', () => {
        dashboard.style.display = 'block';
        projectManagement.style.display = 'none';
        teamManagement.style.display = 'none';
    });

    navProjects.addEventListener('click', () => {
        dashboard.style.display = 'none';
        projectManagement.style.display = 'block';
        teamManagement.style.display = 'none';
    });

    navTeam.addEventListener('click', () => {
        dashboard.style.display = 'none';
        projectManagement.style.display = 'none';
        teamManagement.style.display = 'block';
    });

    // Takım üyeleri ekleme
    addMemberBtn.addEventListener('click', () => {
        addMemberForm.style.display = 'block';
    });

    // Takım üyesi ekleme formunu gönderme
    newMemberForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = memberNameInput.value.trim();
        const email = memberEmailInput.value.trim();
        if (name && email) {
            const newMember = { name, email };
            teamMembers.push(newMember);
            displayTeamMembers();
            addMemberForm.style.display = 'none';
            newMemberForm.reset();
        }
    });

    // Takım üyelerini listeleme
    function displayTeamMembers() {
        teamMembersContainer.innerHTML = '';
        teamMembers.forEach((member, index) => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('team-member');
            memberDiv.innerHTML = `
                <span>${member.name} (${member.email})</span>
                <button onclick="removeMember(${index})">Sil</button>
            `;
            teamMembersContainer.appendChild(memberDiv);
        });
    }

    // Takım üyesi silme
    window.removeMember = function(index) {
        teamMembers.splice(index, 1);
        displayTeamMembers();
    }

    // Başlangıçta eklenen takım üyelerini gösterme
    displayTeamMembers();
});
