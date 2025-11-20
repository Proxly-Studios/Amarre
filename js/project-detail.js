// Project data
const projects = {
    1: {
        title: 'Detachering Grontmij',
        description: 'Detachering bij ingenieursbureau Grontmij Nederland b.v. in De Bilt. Havens Rotterdam - Brammenterminal, Afmeersteiger Abengoa, Ligplaatsen voor de binnenvaart in het Calandkanaal, en constructief ontwerp remmingswerkconstructies.',
        client: 'Grontmij Nederland b.v.',
        duration: 'Multiple phases',
        location: 'De Bilt & Rotterdam, Netherlands',
        type: 'Engineering & Design',
        services: [
            'Brammenterminal: design document review',
            'Afmeersteiger Abengoa: preliminary design and D&C preparation',
            'Inland waterway berths: preliminary design',
            'Mooring structure design for 3 bridges',
            'Submerged tunnel section review',
            'New pier construction design',
            'Settlement-free plate design'
        ],
        results: 'Successfully completed multiple complex engineering projects for harbors in Rotterdam and the Netherlands. Projects included design review, construction preparation, and technical consultation for various maritime infrastructure components.'
    },
    2: {
        title: 'Detachering LievenseCSO',
        description: 'Detachment engineering services for LievenseCSO, working as senior structural engineer on major projects including the third lock of the Beatrixsluizen.',
        client: 'LievenseCSO',
        duration: 'Multiple phases',
        location: 'Netherlands',
        type: 'Hydraulic Engineering',
        services: [
            'Structural design for lock gates',
            'Hydraulic systems engineering',
            'Construction document review',
            'Technical consultation and inspection',
            'Foundation and substructure design',
            'Safety compliance verification'
        ],
        results: 'Successfully delivered structural engineering expertise for complex hydraulic infrastructure. Projects completed on schedule with full safety certification.'
    },
    3: {
        title: 'Krachtige IJsseldijken (KIJK)',
        description: 'Dike reinforcement project selected by Hoogheemraadschap van Schieland en de Krimpenerwaard in 2017 for the exploratory phase of major dike strengthening initiative.',
        client: 'Hoogheemraadschap van Schieland en de Krimpenerwaard',
        duration: 'Multi-year project',
        location: 'Schieland & Krimpenerwaard region, Netherlands',
        type: 'Dike Engineering',
        services: [
            'Exploratory phase engineering',
            'Dike reinforcement design',
            'Geotechnical assessment',
            'Environmental impact analysis',
            'Construction methodology planning',
            'Risk assessment and mitigation'
        ],
        results: 'Successfully completed exploratory phase with comprehensive reinforcement plan. Project advanced to full implementation phase with enhanced safety standards.'
    },
    4: {
        title: 'WBI-Beoordeling Kunstwerken Brabantse Delta',
        description: 'WBI assessment of hydraulic structures in dike section 34-2 for Waterschap Brabantse Delta. Comprehensive evaluation and safety review of all water management structures.',
        client: 'Waterschap Brabantse Delta',
        duration: 'Ongoing assessment',
        location: 'Brabantse Delta region, Netherlands',
        type: 'Water Management',
        services: [
            'Hydraulic structure assessment',
            'Safety compliance evaluation',
            'WBI (Water Board Instruments) assessment',
            'Condition monitoring',
            'Risk analysis and reporting',
            'Maintenance recommendations'
        ],
        results: 'Comprehensive structural assessment completed. Identified critical maintenance needs and provided actionable recommendations for water safety management.'
    },
    5: {
        title: 'Engineering Bureau Bos2Engineering Collaboration',
        description: 'Joint venture projects with Bos2Engineering specializing in multi-pile construction design and steel bridge design for maritime infrastructure.',
        client: 'Bos2Engineering',
        duration: 'Multiple projects',
        location: 'Cuijk & Amsterdam, Netherlands',
        type: 'Maritime Infrastructure',
        services: [
            'Multi-pile construction design',
            'Floating pier structures',
            'Steel bridge design and engineering',
            'Mooring infrastructure',
            'Structural analysis and modeling',
            'Construction supervision'
        ],
        results: 'Successfully delivered innovative floating pier designs and steel bridges. Projects enhanced marina facilities and maritime accessibility.'
    },
    6: {
        title: 'Detachering Projectbureau VNK2',
        description: 'Detachment services for VNK2 project office (Safety Netherlands in Maps), utilizing probabilistic modeling to determine flood risk and infrastructure safety assessment.',
        client: 'Projectbureau VNK2',
        duration: 'Multi-year program',
        location: 'Netherlands',
        type: 'Risk Assessment & Safety',
        services: [
            'Probabilistic risk modeling',
            'Flood risk assessment',
            'Dike ring safety evaluation',
            'Failure probability analysis',
            'Infrastructure vulnerability mapping',
            'Safety recommendations development'
        ],
        results: 'Contributed to nationwide flood risk mapping program. Advanced understanding of Dutch water safety infrastructure and identified critical vulnerability areas.'
    }
};

// Get project ID from URL
function getProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load project details
function loadProjectDetails() {
    const projectId = getProjectId();
    const project = projects[projectId];
    
    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-description').textContent = project.description;
        document.getElementById('project-client').textContent = project.client;
        document.getElementById('project-duration').textContent = project.duration;
        document.getElementById('project-location').textContent = project.location;
        document.getElementById('project-type').textContent = project.type;
        document.getElementById('project-results').textContent = project.results;
        
        // Load services list
        const servicesList = document.getElementById('project-services');
        servicesList.innerHTML = '';
        project.services.forEach(service => {
            const li = document.createElement('li');
            li.textContent = service;
            servicesList.appendChild(li);
        });
        
        // Update page title
        document.title = `Amarre - ${project.title}`;
    }
}

// Load project details when page loads
document.addEventListener('DOMContentLoaded', loadProjectDetails);
