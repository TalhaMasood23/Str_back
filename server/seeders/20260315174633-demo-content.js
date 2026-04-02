'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        id: uuidv4(),
        title: 'Full-Stack Web Development',
        description: 'Architecting high-performance, scalable web applications using React, Next.js, and Node.js with a focus on speed and SEO.',
        icon: '🌐',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Cloud Infrastructure & DevOps',
        description: 'Building resilient cloud-native solutions on AWS/GCP with automated CI/CD pipelines and Kubernetes orchestration.',
        icon: '☁️',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'Mobile App Engineering',
        description: 'Creating seamless cross-platform mobile experiences using React Native and Flutter for iOS and Android.',
        icon: '📱',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'AI & Machine Learning',
        description: 'Integrating advanced AI capabilities into your business workflows, from LLMs to predictive analytics.',
        icon: '🤖',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('Projects', [
      {
        id: uuidv4(),
        title: 'Striqora Business Intelligence',
        category: 'Analytics Dashboard',
        description: 'A real-time data visualization platform for enterprise-level business monitoring and forecasting.',
        image: 'https://images.unsplash.com/photo-1551288049-bbda38a5fbd7?auto=format&fit=crop&w=800&q=80',
        link: 'https://demo.striqora.com/analytics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'NexaHealth Patient Portal',
        category: 'Healthcare Management',
        description: 'Secure, HIPAA-compliant patient management system with integrated video consultations and health tracking.',
        image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=800&q=80',
        link: 'https://demo.striqora.com/nexahealth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        title: 'FinFlow Payment Gateway',
        category: 'Fintech Solution',
        description: 'A robust and secure payment processing API with multi-currency support and advanced fraud detection.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
        link: 'https://demo.striqora.com/finflow',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.bulkInsert('Skills', [
      {
        id: uuidv4(),
        name: 'React / Next.js',
        level: 'Expert',
        icon: '⚛️',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Node.js / Express',
        level: 'Expert',
        icon: '🟢',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Python / FastAPI',
        level: 'Advanced',
        icon: '🐍',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'AWS / Cloud Architecture',
        level: 'Advanced',
        icon: '☁️',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Docker / Kubernetes',
        level: 'Intermediate',
        icon: '🐋',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'Tailwind CSS',
        level: 'Expert',
        icon: '🌊',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
    await queryInterface.bulkDelete('Projects', null, {});
    await queryInterface.bulkDelete('Skills', null, {});
  }
};
