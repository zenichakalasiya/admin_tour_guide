export const FREQUENT = [
  { ic: 'gWorkflow', name: 'Workflow',           desc: 'Automate processes with rule-based routing and actions.', go: 'workflow' },
  { ic: 'gSla',      name: 'SLA',                desc: 'Set service agreements to measure performance and ensure timely delivery.', go: 'sla' },
  { ic: 'gIncident', name: 'Incident Schedules', desc: 'Automate recurring incidents for routine maintenance.', go: 'incident' },
];

export const ATTENTION = [
  { ic: 'gWorkflow', name: 'Workflow', tag: 'new', desc: 'Automate processes with rule-based routing and actions.', link: 'Setup Now', go: 'workflow' },
  { ic: 'gApprove',  name: 'Request management', prog: [2, 4], desc: 'Track, categorize, and resolve issues efficiently with structured forms and workflows', link: 'Finish setup', go: 'reqmgmt' },
];

export const AUTOMATION_CARDS = [
  { ic: 'gWorkflow', name: 'Workflow',            desc: 'Automate processes with rule-based routing and actions.', go: 'workflow' },
  { ic: 'gSla',      name: 'SLA',                 desc: 'Set service agreements to measure performance and ensure timely delivery.', go: 'sla' },
  { ic: 'gApprove',  name: 'Approval Workflow',   desc: 'Configure multi-stage approvals across multiple modules.', go: 'approval' },
  { ic: 'gBell',     name: 'Event Notifications', desc: 'Manage automated alerts for system events.', go: 'appnotif' },
  { ic: 'gAssign',   name: 'Auto Assignment',     tag: 'upd', solid: true, desc: 'Distribute work across modules using round-robin or smart balancing.', go: 'autoassign' },
  { ic: 'gScenario', name: 'Scenario',            desc: 'Execute multiple request actions with a single click.', go: 'scenario' },
  { ic: 'gIncident', name: 'Incident Schedules',  tag: 'new', desc: 'Automate recurring incidents for routine maintenance.', go: 'incident' },
  { ic: 'gTask',     name: 'Task Schedule',       desc: 'Schedule recurring tasks for automatic creation.', go: 'taskschedule' },
  { ic: 'gIntegr',   name: 'Integrations',        desc: 'Manage API credentials and plugins to extend platform capabilities.', go: 'integrations' },
  { ic: 'gScript',   name: 'Custom Script',       desc: 'Automate processes with rule-based routing and actions.', go: 'customscript' },
];

export const USERS_CARDS = [
  { ic: 'user',      name: 'Technicians', desc: 'Manage agents who resolve and action requests.', go: 'technicians' },
  { ic: 'usercheck', name: 'Requesters',  desc: 'Manage end users who raise requests.', go: 'requesters' },
  { ic: 'tree',      name: 'Groups',      desc: 'Organize users into support and approval groups.', go: 'groups' },
];

export const ORG_CARDS = [
  { ic: 'box', name: 'Company Profile', desc: 'Configure global account settings and branding.', go: 'orgprofile' },
  { ic: 'cog', name: 'Business Hours',  desc: 'Define operational hours and holiday calendars.', go: 'businesshrs' },
];

export const COLLAPSES = [
  { id: 'c-auto',  title: 'Automation',    desc: 'Set up rules to automate workflows, request routing and SLA management', cards: AUTOMATION_CARDS },
  { id: 'c-users', title: 'Users',         desc: 'Manage technicians, requesters, groups and access permissions across the platform', cards: USERS_CARDS },
  { id: 'c-org',   title: 'Organizations', desc: 'Configure global account settings, security policies and business hours', cards: ORG_CARDS },
];

export const PLACEHOLDERS = ['Manage Users...', 'Create Workflow...', 'Configure Email...', 'Set SLA', 'Add Requester...'];

export const RECENT = [
  { ic: 'user', label: 'Requesters', go: 'requesters' },
  { ic: 'mail', label: 'Emails',     go: 'emails' },
  { ic: 'gSla', label: 'SLA',        go: 'sla' },
];
