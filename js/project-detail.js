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
        title: 'Complete Maritime Maintenance',
        description: 'Comprehensive maintenance and restoration service for a 25-meter luxury yacht. Detailed work that included complete system review, equipment renovation, and aesthetic improvements.',
        client: 'Private Client',
        duration: '4 months',
        location: 'Malaga, Spain',
        type: 'Maintenance and Restoration',
        services: [
            'Complete hull and systems inspection',
            'Engine and electrical systems maintenance',
            'Interior finishing renovation',
            'Navigation systems upgrade',
            'Anticorrosive treatment',
            'Professional cleaning and polishing'
        ],
        results: 'Yacht completely renovated and in optimal condition. Owner expressed complete satisfaction with work quality and timeline adherence.'
    },
    3: {
        title: 'Comprehensive Port Services',
        description: 'Complete commercial fleet management at Valencia port, including mooring services, preventive maintenance, and administrative management for 15 commercial vessels.',
        client: 'Mediterranean Shipping Line',
        duration: 'Annual contract',
        location: 'Valencia, Spain',
        type: 'Fleet Management',
        services: [
            'Mooring and port space management',
            'Scheduled preventive maintenance',
            'Documentation and permits management',
            'Port authority coordination',
            '24/7 emergency service',
            'Monthly status reports'
        ],
        results: 'Significant improvement in fleet operational efficiency with 30% reduction in maintenance costs. Zero safety incidents during contract period.'
    },
    4: {
        title: 'Specialized Technical Consulting',
        description: 'Comprehensive consulting for the purchase and outfitting of a high-performance vessel. Includes technical evaluation, purchase negotiation, and supervision of specialized equipment installation.',
        client: 'Private Client',
        duration: '3 months',
        location: 'Alicante, Spain',
        type: 'Maritime Consulting',
        services: [
            'Technical vessel evaluation',
            'Market and price analysis',
            'Detailed pre-purchase inspection',
            'Equipment consulting',
            'Installation supervision',
            'Use and maintenance training'
        ],
        results: 'Client satisfied with vessel acquired at competitive price and fully equipped to requirements. Estimated 20% savings on equipment costs.'
    },
    5: {
        title: 'Security System Installation',
        description: 'Complete modernization of maritime security systems for a sports marina, including surveillance systems, access control, and emergency equipment.',
        client: 'Costa del Sol Sports Marina',
        duration: '2.5 months',
        location: 'Marbella, Spain',
        type: 'Security Systems',
        services: [
            'Comprehensive security system design',
            'Camera and sensor installation',
            'Access control system',
            'Certified emergency equipment',
            'Security personnel training',
            'Quarterly maintenance'
        ],
        results: 'State-of-the-art security system successfully installed. Notable improvement in access control and incident reduction. Client very satisfied with professionalism level.'
    },
    6: {
        title: 'Repair and Renovation',
        description: 'Complete restoration of a 12-meter classic wooden vessel. Craftsmanship work that respects original characteristics while modernizing critical systems.',
        client: 'Private Collector',
        duration: '6 months',
        location: 'Palma de Mallorca, Spain',
        type: 'Classic Restoration',
        services: [
            'Complete structural evaluation',
            'Wooden hull restoration',
            'Original finishing renovation',
            'Engine and systems modernization',
            'Certified electrical upgrade',
            'Historical documentation and photography'
        ],
        results: 'Classic vessel restored to its original glory with modern systems discreetly integrated. Owner delighted with attention to detail and craftsmanship quality.'
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
