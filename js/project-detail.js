// Project data
const projects = {
    1: {
        title: 'Instalación de Amarre Profesional',
        description: 'Proyecto completo de instalación de sistema de amarre para embarcación de 15 metros en puerto deportivo de Barcelona. Incluye diseño personalizado, instalación de hardware marino de alta calidad y pruebas de seguridad.',
        client: 'Puerto Deportivo Barcelona',
        duration: '2 meses',
        location: 'Barcelona, España',
        type: 'Instalación de Amarre',
        services: [
            'Diseño y planificación del sistema de amarre',
            'Instalación de cabos y defensas profesionales',
            'Instalación de hardware marino certificado',
            'Pruebas de resistencia y seguridad',
            'Capacitación del personal'
        ],
        results: 'Sistema de amarre de alta calidad instalado con éxito, mejorando significativamente la seguridad y eficiencia de las operaciones portuarias. El cliente reportó una reducción del 40% en el tiempo de amarre.'
    },
    2: {
        title: 'Mantenimiento Náutico Completo',
        description: 'Servicio integral de mantenimiento y restauración de yate de lujo de 25 metros. Trabajo detallado que incluyó revisión completa de sistemas, renovación de equipamiento y mejoras estéticas.',
        client: 'Cliente Privado',
        duration: '4 meses',
        location: 'Málaga, España',
        type: 'Mantenimiento y Restauración',
        services: [
            'Inspección completa de casco y sistemas',
            'Mantenimiento de motores y sistemas eléctricos',
            'Renovación de acabados interiores',
            'Actualización de sistemas de navegación',
            'Tratamiento anticorrosivo',
            'Limpieza y pulido profesional'
        ],
        results: 'Yate completamente renovado y en condiciones óptimas. El propietario expresó su satisfacción total con la calidad del trabajo y el cumplimiento de los plazos establecidos.'
    },
    3: {
        title: 'Servicios Portuarios Integrales',
        description: 'Gestión completa de flota comercial en puerto de Valencia, incluyendo servicios de amarre, mantenimiento preventivo y gestión administrativa para 15 embarcaciones comerciales.',
        client: 'Naviera Mediterráneo',
        duration: 'Contrato anual',
        location: 'Valencia, España',
        type: 'Gestión de Flota',
        services: [
            'Gestión de amarres y espacios portuarios',
            'Mantenimiento preventivo programado',
            'Gestión de documentación y permisos',
            'Coordinación con autoridades portuarias',
            'Servicio de emergencia 24/7',
            'Informes mensuales de estado'
        ],
        results: 'Mejora significativa en la eficiencia operativa de la flota con reducción del 30% en costos de mantenimiento. Cero incidentes de seguridad durante el período del contrato.'
    },
    4: {
        title: 'Asesoramiento Técnico Especializado',
        description: 'Consultoría integral para la compra y equipamiento de embarcación de alto rendimiento. Incluye evaluación técnica, negociación de compra, y supervisión de instalación de equipamiento especializado.',
        client: 'Cliente Privado',
        duration: '3 meses',
        location: 'Alicante, España',
        type: 'Consultoría Náutica',
        services: [
            'Evaluación técnica de embarcaciones',
            'Análisis de mercado y precios',
            'Inspección pre-compra detallada',
            'Asesoramiento en equipamiento',
            'Supervisión de instalaciones',
            'Capacitación en uso y mantenimiento'
        ],
        results: 'Cliente satisfecho con embarcación adquirida a precio competitivo y completamente equipada según sus necesidades. Ahorro estimado del 20% en costos de equipamiento.'
    },
    5: {
        title: 'Instalación de Sistemas de Seguridad',
        description: 'Proyecto de modernización completa de sistemas de seguridad marítima para marina deportiva, incluyendo sistemas de vigilancia, control de acceso y equipamiento de emergencia.',
        client: 'Marina Deportiva Costa del Sol',
        duration: '2.5 meses',
        location: 'Marbella, España',
        type: 'Sistemas de Seguridad',
        services: [
            'Diseño de sistema de seguridad integral',
            'Instalación de cámaras y sensores',
            'Sistema de control de acceso',
            'Equipamiento de emergencia certificado',
            'Capacitación del personal de seguridad',
            'Mantenimiento trimestral'
        ],
        results: 'Sistema de seguridad de última generación instalado con éxito. Mejora notable en el control de acceso y reducción de incidentes. Cliente muy satisfecho con el nivel de profesionalismo.'
    },
    6: {
        title: 'Reparación y Renovación',
        description: 'Proyecto de restauración completa de embarcación clásica de madera de 12 metros. Trabajo artesanal que respeta las características originales mientras moderniza sistemas críticos.',
        client: 'Coleccionista Privado',
        duration: '6 meses',
        location: 'Palma de Mallorca, España',
        type: 'Restauración Clásica',
        services: [
            'Evaluación estructural completa',
            'Restauración de casco de madera',
            'Renovación de acabados originales',
            'Modernización de motor y sistemas',
            'Actualización eléctrica certificada',
            'Documentación histórica y fotográfica'
        ],
        results: 'Embarcación clásica restaurada a su gloria original con sistemas modernos integrados discretamente. El propietario quedó encantado con la atención al detalle y la calidad artesanal del trabajo.'
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
