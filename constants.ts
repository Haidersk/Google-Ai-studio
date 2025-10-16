// FIX: Import missing Certification and BlogPost types.
import type { NavLink, SkillCategory, Project, GithubRepo, Certification, BlogPost } from './types';
import {
    AwsIcon, AzureIcon, GcpIcon, DockerIcon, KubernetesIcon, JenkinsIcon, TerraformIcon,
    AnsibleIcon, GitIcon, PrometheusIcon, GrafanaIcon, PythonIcon, LinuxIcon
} from './components/icons';

export const PERSONAL_INFO = {
  name: "Haider Shaikh",
  title: "DevOps Engineer | Cloud Enthusiast",
  tagline: "I'm a DevOps Engineer and Cloud Enthusiast. I strive to build immersive and beautiful applications through carefully crafted code and user-centric design.",
  email: "haidershaikh2050@gmail.com",
  github: "https://github.com/haidershaikh",
  linkedin: "https://linkedin.com/in/haidershaikh",
  resumeUrl: "/haider-shaikh-resume.pdf",
};

export const SECTIONS = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  github: 'github',
  contact: 'contact'
};

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: `#${SECTIONS.about}` },
  { name: 'Skills', href: `#${SECTIONS.skills}` },
  { name: 'Projects', href: `#${SECTIONS.projects}` },
  { name: 'Repositories', href: `#${SECTIONS.github}` },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: AwsIcon },
      { name: 'Azure', icon: AzureIcon },
      { name: 'GCP', icon: GcpIcon },
    ],
  },
  {
    title: 'DevOps Tools',
    skills: [
      { name: 'Docker', icon: DockerIcon },
      { name: 'Kubernetes', icon: KubernetesIcon },
      { name: 'Jenkins', icon: JenkinsIcon },
      { name: 'Terraform', icon: TerraformIcon },
      { name: 'Ansible', icon: AnsibleIcon },
    ],
  },
  {
    title: 'Monitoring & Logging',
    skills: [
      { name: 'Prometheus', icon: PrometheusIcon },
      { name: 'Grafana', icon: GrafanaIcon },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'Git', icon: GitIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Linux', icon: LinuxIcon },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Kubernetes Cluster on AWS with EKS & Terraform',
    description: 'Provisioned a production-ready EKS cluster using Terraform, incorporating best practices for security, networking (VPC), and scalability (Cluster Autoscaler).',
    techStack: ['AWS', 'EKS', 'Terraform', 'Kubernetes', 'VPC'],
    githubLink: '#',
    liveDemoLink: '#',
    imageUrl: 'https://picsum.photos/seed/k8s-aws/1000/800',
    architectureDiagramUrl: 'https://picsum.photos/seed/arch-k8s/1000/600',
  },
  {
    title: 'CI/CD Pipeline for Microservices with Jenkins & Docker',
    description: 'Designed and implemented a multi-stage Jenkins pipeline to build, test, and deploy containerized microservices to a Kubernetes cluster, reducing deployment time by 80%.',
    techStack: ['Jenkins', 'Docker', 'Kubernetes', 'Groovy', 'GitHub'],
    githubLink: '#',
    imageUrl: 'https://picsum.photos/seed/cicd-jenkins/1000/800',
    architectureDiagramUrl: 'https://picsum.photos/seed/arch-cicd/1000/600',
  },
  {
    title: 'Centralized Monitoring with Prometheus & Grafana',
    description: 'Set up a robust monitoring and alerting system for a distributed application using Prometheus for metric collection and Grafana for visualization, improving issue detection time.',
    techStack: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker'],
    githubLink: '#',
    liveDemoLink: '#',
    imageUrl: 'https://picsum.photos/seed/monitoring-grafana/1000/800',
    architectureDiagramUrl: 'https://picsum.photos/seed/arch-monitoring/1000/600',
  },
  {
    title: 'Automated Server Configuration with Ansible',
    description: 'Developed Ansible playbooks to automate the configuration and hardening of a fleet of Linux servers, ensuring consistency and compliance with security policies.',
    techStack: ['Ansible', 'YAML', 'Linux', 'Bash'],
    githubLink: '#',
    imageUrl: 'https://picsum.photos/seed/ansible-server/1000/800',
    architectureDiagramUrl: 'https://picsum.photos/seed/arch-ansible/1000/600',
  },
];

export const MOCK_GITHUB_REPOS: GithubRepo[] = [
  {
    id: 1,
    name: 'devops-toolkit',
    description: 'A collection of essential scripts and tools for automating DevOps workflows. Includes setup for CI/CD, monitoring, and cloud provisioning.',
    language: 'Python',
    stars: 128,
    forks: 32,
    url: '#',
  },
  {
    id: 2,
    name: 'kubernetes-helm-charts',
    description: 'A repository of production-ready Helm charts for deploying common applications like Prometheus, Grafana, and Elasticsearch on Kubernetes.',
    language: 'YAML',
    stars: 95,
    forks: 45,
    url: '#',
  },
  {
    id: 3,
    name: 'terraform-modules-aws',
    description: 'Reusable and modular Terraform configurations for spinning up common AWS infrastructure patterns like VPCs, EKS clusters, and RDS instances.',
    language: 'HCL',
    stars: 210,
    forks: 78,
    url: '#',
  },
  {
    id: 4,
    name: 'ansible-playbooks-collection',
    description: 'A comprehensive set of Ansible playbooks for server configuration, security hardening, and application deployment on Linux systems.',
    language: 'YAML',
    stars: 76,
    forks: 19,
    url: '#',
  },
];

// FIX: Add missing CERTIFICATIONS constant to fix import error in components/Certifications.tsx.
export const CERTIFICATIONS: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    link: '#',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    link: '#',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    link: '#',
  },
];

// FIX: Add missing BLOG_POSTS constant to fix import error in components/Blog.tsx.
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'GitOps with Kubernetes: A Practical Guide',
    summary: 'A deep dive into implementing GitOps workflows for continuous deployment to Kubernetes using tools like Argo CD and Flux.',
    date: 'Oct 15, 2023',
    link: '#',
    publication: 'Medium',
  },
  {
    title: 'Serverless vs. Containers: Choosing the Right Tool for the Job',
    summary: 'An analysis of the trade-offs between serverless architectures (AWS Lambda) and container orchestration (Kubernetes) for modern applications.',
    date: 'Jul 02, 2023',
    link: '#',
    publication: 'Dev.to',
  },
];