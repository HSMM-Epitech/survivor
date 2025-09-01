# GitHub Project Organization for Survivor

This document outlines how to organize the "survivor" GitHub Project to effectively manage all issues and development workflow.

## Project Board Setup

### Columns Configuration

The GitHub Project should include the following columns:

1. **📋 Backlog**
   - All new issues start here
   - Issues awaiting prioritization
   - Future feature requests

2. **🎯 Ready**
   - Issues that have been prioritized and refined
   - Clear acceptance criteria defined
   - Ready for development assignment

3. **🏗️ In Progress**
   - Issues currently being worked on
   - Should include assignee and progress updates
   - Split by area if needed (Frontend, Backend, Design)

4. **👀 Review**
   - Issues completed but awaiting review
   - Pull requests pending approval
   - Testing and quality assurance

5. **✅ Done**
   - Completed and approved issues
   - Deployed features
   - Closed issues

### Views Configuration

Create multiple views for different perspectives:

#### 1. **By Area View**
Filter by labels:
- Public Area (`public-area`)
- Admin Area (`admin-area`) 
- Startup Area (`startup-area`)
- Technical Infrastructure (`backend`, `frontend`, `ci-cd`, etc.)

#### 2. **By Priority View**
Sort by priority labels:
- High Priority
- Medium Priority  
- Low Priority

#### 3. **By Team Member View**
Filter by assignee:
- Morgan (CI/CD + GitHub Projects)
- Hugo (Maquettage)
- Kilian (Maquettage)
- Swan (Maquettage)
- Backend Team
- Frontend Team

#### 4. **By Milestone View**
Group by milestones:
- Public Area MVP
- Admin Area MVP
- Startup Area MVP
- Technical Foundation
- Quality & Deployment

## Issue Organization

### Existing Issues (1-18)
These issues already exist and should be organized:

**Homepage (Issues #1-4)**
- #1: Homepage (parent)
- #2: Homepage - Maquette
- #3: Homepage - Intégration  
- #4: Homepage - Tests

**Events (Issues #5-8)**
- #5: Events (parent)
- #6: Events - Maquette
- #7: Events - Tests
- #8: Events - Intégration

**Projects Catalogue (Issues #9-12)**
- #9: Projects Catalogue (parent)
- #10: Projects Catalogue - Maquette
- #11: Projects Catalogue - Intégration
- #12: Projects Catalogue - Tests

**Important Choices (Issues #13-17)**
- #13: Choix importants (parent)
- #14: Choix Importants - Stack Front
- #15: Choix Importants - D.A
- #16: Choix Importants - Stack Back
- #17: Choix Importants - Tests utilisés

**Project Pages (Issue #18)**
- #18: Project Pages: Display Startup Details

### New Issues to Create (19-33)

**Public Area Features**
- #19: News Feed: Updates and Announcements
- #20: Advanced Search and Filters: Enhanced Project Discovery

**Admin Area Features**  
- #21: Admin Back Office: Management Interface
- #22: Admin Dashboard: Analytics and Statistics
- #23: Content Management: CRUD Operations
- #24: User Management: Roles and Permissions

**Startup Area Features**
- #25: Startup Profile: Creation and Updates
- #26: Internal Messaging: Startup-Investor Communication
- #27: Opportunity Tracking: Funding and Project Calls

**Technical Implementation**
- #28: Backend API Integration: Data Migration and Synchronization
- #29: Frontend Development: Responsive UI Implementation
- #30: Database Setup: Data Storage and Management
- #31: Testing Infrastructure: Automated Testing Setup
- #32: Documentation: Technical and User Documentation
- #33: CI/CD Pipeline: Automated Deployment and Testing

## Labels Organization

### Functional Area Labels
- `public-area` - Public-facing features
- `admin-area` - Administrative functionality  
- `startup-area` - Startup-specific features

### Technical Area Labels
- `frontend` - UI/UX development
- `backend` - Server-side development
- `database` - Data storage and management
- `api` - API integration and development
- `ci-cd` - Continuous integration/deployment
- `testing` - Quality assurance and testing
- `documentation` - Project documentation

### Task Type Labels
- `maquettage` - Design and mockup work
- `integration` - Implementation and integration
- `tests` - Testing and validation
- `migration` - Data migration tasks
- `architecture` - System design and architecture

### Priority Labels
- `priority-high` - Critical issues
- `priority-medium` - Important but not urgent
- `priority-low` - Nice to have features

### Status Labels  
- `blocked` - Cannot proceed due to dependencies
- `needs-review` - Awaiting review or approval
- `in-progress` - Currently being worked on

## Milestone Organization

### Phase 1: Foundation (Weeks 1-2)
**Technical Foundation Milestone**
- #13-17: Important technical choices
- #28: Backend API Integration
- #30: Database Setup
- #29: Frontend Development Setup
- #31: Testing Infrastructure

### Phase 2: Public Area MVP (Weeks 3-4)
**Public Area MVP Milestone**
- #1-4: Homepage features
- #9-12: Projects Catalogue
- #18: Project Pages
- #19: News Feed
- #20: Advanced Search

### Phase 3: Events & Calendar (Week 5)
**Events System Milestone**
- #5-8: Events Calendar features

### Phase 4: Admin Area (Weeks 6-7)
**Admin Area MVP Milestone**
- #21: Admin Back Office
- #22: Admin Dashboard
- #23: Content Management
- #24: User Management

### Phase 5: Startup Area (Weeks 8-9)
**Startup Area MVP Milestone**
- #25: Startup Profile
- #26: Internal Messaging
- #27: Opportunity Tracking

### Phase 6: Quality & Deployment (Week 10)
**Quality & Deployment Milestone**
- #32: Documentation
- #33: CI/CD Pipeline Enhancement

## Automation Rules

Configure GitHub Project automation:

### Auto-add Issues
- All new issues automatically added to Backlog column
- Issues with specific labels auto-assigned to appropriate team members

### Column Movement
- Move to "In Progress" when issue is assigned
- Move to "Review" when PR is created
- Move to "Done" when PR is merged

### Label-based Assignment
- `maquettage` label → Auto-assign to Hugo, Kilian, or Swan
- `ci-cd` label → Auto-assign to Morgan  
- `backend` label → Auto-assign to backend team
- `frontend` label → Auto-assign to frontend team

## Team Responsibilities

### Morgan (CI/CD + GitHub Projects)
**Primary Issues:**
- #31: Testing Infrastructure
- #33: CI/CD Pipeline Enhancement
- Project organization and management
- GitHub Actions workflow maintenance

**Secondary Issues:**
- Support maquettage when available
- Code review and quality assurance

### Hugo/Kilian/Swan (Maquettage Team)
**Primary Issues:**
- All issues with `maquettage` labels (#2, #6, #10)
- #19: News Feed (design)
- #20: Advanced Search (UI/UX)
- #22: Admin Dashboard (design)
- #25: Startup Profile (UI)
- #26: Internal Messaging (UI)
- #27: Opportunity Tracking (UI)
- #29: Frontend Development

### Backend Development Team
**Primary Issues:**
- #21: Admin Back Office
- #23: Content Management
- #24: User Management
- #28: Backend API Integration
- #30: Database Setup

### Documentation Team
**Primary Issues:**
- #32: Documentation
- Technical writing and user guides

## Project Metrics & KPIs

Track the following metrics in the project:

### Velocity Metrics
- Issues completed per week
- Story points completed (if using)
- Cycle time from start to completion

### Quality Metrics
- Bug rate per feature
- Test coverage percentage
- Code review feedback volume

### Team Metrics
- Individual contribution tracking
- Cross-functional collaboration
- Knowledge sharing activities

## Regular Project Reviews

### Daily Standups
- Focus on current day's work only
- Impediment identification
- Quick progress updates

### Evening Debriefs
- Review completed work
- Plan next day priorities
- Address any blockers or concerns
- Update project board status

### Weekly Sprint Reviews
- Milestone progress assessment
- Adjust priorities if needed
- Team performance review
- Stakeholder updates

## Getting Started Checklist

- [ ] Create GitHub Project "survivor"
- [ ] Set up column structure
- [ ] Configure project views
- [ ] Create all missing labels
- [ ] Set up automation rules
- [ ] Create milestones
- [ ] Organize existing issues (1-18)
- [ ] Create new issues (19-33)
- [ ] Assign issues to team members
- [ ] Set up project metrics tracking
- [ ] Schedule regular review meetings