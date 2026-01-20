import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  website?: string;
  description: string[];
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  link?: string;
}

interface Skills {
  [key: string]: string[];
}

interface Stat {
  icon: string;
  number: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activeSection: string = 'home';
  isScrolled: boolean = false;

  profileImage: string = 'assets/images/profile.jpg';

  navItems: string[] = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

  stats: Stat[] = [
    { icon: '🚀', number: '2+', label: 'Years Experience' },
    { icon: '💼', number: '5+', label: 'Projects Completed' },
    { icon: '⚡', number: '15+', label: 'Technologies' },
    { icon: '🎯', number: '100%', label: 'Commitment' }
  ];

  experiences: Experience[] = [
    {
      title: 'Full-Stack Development Intern',
      company: 'Atlato PTY LTD',
      location: 'North Sydney, Australia',
      period: 'August 2025 – Present',
      website: 'www.atlato.com',
      description: [
        'Developing responsive front-end components for web applications',
        'Integrating AI technologies to introduce intelligent features',
        'Collaborating within an agile team using Git for version control'
      ]
    },
    {
      title: 'Junior Full Stack Developer',
      company: 'Mancode',
      location: 'Sri Lanka',
      period: 'July 2024 – December 2024',
      website: 'mancode.lk',
      description: [
        'Developed and maintained front-end and back-end components using MERN stack',
        'Implemented dynamic features using React and Node.js',
        'Created responsive web interfaces and worked on internal PHP projects'
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'Face Detection Attendance System',
      description: 'Automated attendance marking using OpenCV and Python with facial recognition technology.',
      tech: ['Python', 'OpenCV', 'Database'],
      icon: '🎯'
    },
    {
      title: 'Personal Blog',
      description: 'A personal blog website built with HTML, CSS, and JavaScript, hosted on GitHub Pages.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/ArunJeganathan1909/ark-s-blog.git',
      icon: '📝'
    },
    {
      title: 'Todo App (MERN Stack)',
      description: 'Full-stack application with user authentication, task management, and MongoDB integration.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      link: 'https://github.com/ArunJeganathan1909/mern-todo-app.git',
      icon: '✅'
    },
    {
      title: 'Booking App',
      description: 'Online booking application with admin panel and MongoDB database integration.',
      tech: ['MERN Stack', 'MongoDB', 'Admin Panel'],
      link: 'https://github.com/ArunJeganathan1909/booking-app.git',
      icon: '📅'
    },
    {
      title: 'Chat App',
      description: 'Real-time chat application with WebSocket, multiple chat rooms, and user authentication.',
      tech: ['WebSocket', 'Node.js', 'Real-time'],
      icon: '💬'
    }
  ];

  skills: Skills = {
    'Languages': ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'PHP'],
    'Frameworks': ['Angular', 'MERN Stack', 'React JS', 'Node JS', 'Laravel', 'Spring Boot'],
    'Databases': ['MySQL', 'MongoDB', 'Firebase'],
    'Web Technologies': ['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap'],
    'Tools & Others': ['Git', 'WebSocket', 'Firebase', 'Linux', 'Agile', 'OOP']
  };

  ngOnInit(): void {
    // Initialize component
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50;

    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getSkillCategories(): string[] {
    return Object.keys(this.skills);
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '/assets/resume/Arun_Jeganathan_Resume.pdf';
    link.download = 'Arun_Jeganathan_Resume.pdf';
    link.click();
  }
}
