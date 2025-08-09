import { Component } from '@angular/core';
import { Award, CircleDot, Filter, LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, Search, Settings, User, UserPlus, Users } from 'lucide-angular';
import { TeamHeaderCard } from '../../components/TeamComponents/team-header-card/team-header-card';
import { NgFor,NgClass } from '@angular/common';
import { filter } from 'rxjs';
import { TeamMemberDetailCard } from '../../components/TeamComponents/team-member-detail-card/team-member-detail-card';
@Component({
  selector: 'app-team',
  imports: [LucideAngularModule,TeamHeaderCard,NgClass,NgFor,TeamMemberDetailCard],
  standalone:true,
  templateUrl: './team.html',
  styleUrl: './team.css',
  providers:[
    {
      multi:true,
      provide:LUCIDE_ICONS,
      useValue : new LucideIconProvider({UserPlus,Users,CircleDot,Settings,Award,Search,Filter  })
    }
  ]
})
export class Team {

  // In parent component (e.g., TeamDashboard.ts)
cards = [
  { label: 'Total Members', value: 8, icon: 'Users', bgClass: 'bg-soft-blue' },
  { label: 'Online Now', value: 5, icon: 'CircleDot', bgClass: 'bg-soft-green' },
  { label: 'Departments', value: 5, icon: 'Settings', bgClass: 'bg-soft-purple' },
  { label: 'Avg Tasks/Member', value: 193, icon: 'Award', bgClass: 'bg-soft-orange' }
];

departments = [
  { name: 'All Departments', count: 8, active: true },
  { name: 'Engineering', count: 4, active: false },
  { name: 'Design', count: 1, active: false },
  { name: 'Management', count: 1, active: false },
  { name: 'Marketing', count: 1, active: false },
  { name: 'QA', count: 1, active: false }
];

selectDepartment(selected: any) {
  this.departments.forEach(dept => dept.active = false);
  selected.active = true;
}

teamMembers = [
  {
    imageUrl: 'assets/images/UserOne.jpg',
    name: 'Amit Sharma',
    role: 'Frontend Developer',
    email: 'amit.sharma@example.com',
    phone: '+91 9876543210',
    location: 'Mumbai, India',
    joinedDate: 'Jan 2022',
    tasksCompleted: 145,
    projectsLed: 3,
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS']
  },
  {
    imageUrl: 'assets/images/UserTwo.jpg',
    name: 'Sneha Reddy',
    role: 'UX Designer',
    email: 'sneha.reddy@example.com',
    phone: '+91 9123456789',
    location: 'Hyderabad, India',
    joinedDate: 'Mar 2021',
    tasksCompleted: 98,
    projectsLed: 1,
    skills: ['Figma', 'Sketch', 'User Research']
  },
  {
    imageUrl: 'assets/images/UserThree.jpg',
    name: 'Rahul Verma',
    role: 'Backend Developer',
    email: 'rahul.verma@example.com',
    phone: '+91 9998887776',
    location: 'Delhi, India',
    joinedDate: 'Jul 2020',
    tasksCompleted: 182,
    projectsLed: 4,
    skills: ['.NET Core', 'C#', 'SQL Server']
  },
  {
    imageUrl: 'assets/images/UserFour.jpg',
    name: 'Priya Mehta',
    role: 'QA Engineer',
    email: 'priya.mehta@example.com',
    phone: '+91 9871234560',
    location: 'Pune, India',
    joinedDate: 'Sep 2021',
    tasksCompleted: 122,
    projectsLed: 1,
    skills: ['Selenium', 'Jasmine', 'Postman']
  },
  {
    imageUrl: 'assets/images/UserFive.jpg',
    name: 'Karan Sinha',
    role: 'Project Manager',
    email: 'karan.sinha@example.com',
    phone: '+91 9958674321',
    location: 'Bangalore, India',
    joinedDate: 'Apr 2019',
    tasksCompleted: 75,
    projectsLed: 8,
    skills: ['Agile', 'Scrum', 'Trello']
  },
  {
    imageUrl: 'assets/images/UserSix.jpg',
    name: 'Ananya Gupta',
    role: 'Data Analyst',
    email: 'ananya.gupta@example.com',
    phone: '+91 9812345678',
    location: 'Chennai, India',
    joinedDate: 'Oct 2022',
    tasksCompleted: 101,
    projectsLed: 2,
    skills: ['Power BI', 'Excel', 'SQL']
  },
  {
    imageUrl: 'assets/images/UserSeven.jpg',
    name: 'Rohan Desai',
    role: 'DevOps Engineer',
    email: 'rohan.desai@example.com',
    phone: '+91 9801234567',
    location: 'Ahmedabad, India',
    joinedDate: 'Dec 2020',
    tasksCompleted: 160,
    projectsLed: 5,
    skills: ['Docker', 'Kubernetes', 'CI/CD']
  },
  {
    imageUrl: 'assets/images/UserEight.jpg',
    name: 'Nikita Joshi',
    role: 'Content Strategist',
    email: 'nikita.joshi@example.com',
    phone: '+91 9823456712',
    location: 'Kolkata, India',
    joinedDate: 'Feb 2023',
    tasksCompleted: 87,
    projectsLed: 1,
    skills: ['SEO', 'Content Planning', 'Copywriting']
  }
];







}
