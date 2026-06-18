/* Sidebar navigation tree. `view` maps a node to a content page.
   Nodes with `children` and no `view` act as expandable groups. */
export const NAV = [
  { id: 'overview', label: 'Overview', view: 'overview', icon: null },

  { section: 'Intelligent Automation' },
  { id: 'automation', label: 'Automation', icon: 'gWorkflow', children: [
      { id: 'workflow',     label: 'Workflow',           icon: 'gWorkflow', view: 'workflow' },
      { id: 'sla',          label: 'SLA',                icon: 'gSla',      tag: 'new', view: 'generic' },
      { id: 'approval',     label: 'Approval Workflow',  icon: 'gApprove',  view: 'generic' },
      { id: 'autoassign',   label: 'Auto Assignment',    icon: 'gAssign',   view: 'generic' },
      { id: 'scenario',     label: 'Scenario',           icon: 'gScenario', view: 'generic' },
      { id: 'incident',     label: 'Incident Schedules', icon: 'gIncident', view: 'generic' },
      { id: 'taskschedule', label: 'Task Schedule',      icon: 'gTask',     tag: 'upd', view: 'generic' },
      { id: 'integrations', label: 'Integrations',       icon: 'gIntegr',   view: 'generic' },
      { id: 'customscript', label: 'Custom Script',      icon: 'gScript',   view: 'generic' },
      { id: 'eventnotif',   label: 'Event Notification', icon: 'gBell', children: [
          { id: 'appnotif', label: 'App Notification',          view: 'eventnotif' },
          { id: 'smsnotif', label: 'SMS Notification',          view: 'generic' },
          { id: 'smsgw',    label: 'SMS Gateway Configuration', view: 'generic' },
      ]},
  ]},
  { id: 'ai', label: 'AI', icon: 'gAi', children: [
      { id: 'aiagent', label: 'AI Agent',           view: 'generic' },
      { id: 'aifield', label: 'Field Suggestions',  view: 'generic' },
  ]},

  { section: 'Platform Configuration' },
  { id: 'users', label: 'Users', icon: 'user', children: [
      { id: 'technicians', label: 'Technicians', view: 'generic' },
      { id: 'requesters',  label: 'Requesters',  view: 'generic' },
      { id: 'groups',      label: 'Groups',      view: 'generic' },
  ]},
  { id: 'org', label: 'Organization', icon: 'box', children: [
      { id: 'orgprofile',  label: 'Company Profile', view: 'generic' },
      { id: 'businesshrs', label: 'Business Hours',   view: 'generic' },
  ]},
  { id: 'support', label: 'Support Channels', icon: 'mail', children: [
      { id: 'emails', label: 'Emails', view: 'generic' },
  ]},
  { id: 'survey', label: 'User Survey', icon: 'usercheck', children: [
      { id: 'surveycfg', label: 'Survey Configuration', view: 'generic' },
  ]},

  { section: 'Service Desk' },
  { id: 'reqmgmt',   label: 'Request Management',   icon: 'ticket',    children: [{ id: 'reqcat',   label: 'Categories',     view: 'generic' }] },
  { id: 'catalog',   label: 'Service Catalog',      icon: 'box',       children: [{ id: 'catitems', label: 'Catalog Items',  view: 'generic' }] },
  { id: 'problem',   label: 'Problem Management',   icon: 'bulb',      children: [{ id: 'probcat',  label: 'Categories',     view: 'generic' }] },
  { id: 'change',    label: 'Change Management',    icon: 'flow',      children: [{ id: 'changecab',label: 'CAB',            view: 'generic' }] },
  { id: 'release',   label: 'Release Management',   icon: 'upload',    children: [{ id: 'reltypes', label: 'Release Types',  view: 'generic' }] },
  { id: 'knowledge', label: 'Knowledge Management', icon: 'report',    children: [{ id: 'kbcat',    label: 'KB Categories',  view: 'generic' }] },
  { id: 'taskmgmt',  label: 'Task Management',      icon: 'checklist', children: [{ id: 'tasktypes',label: 'Task Types',     view: 'generic' }] },

  { section: 'IT Operations' },
  { id: 'discovery', label: 'Discovery', icon: 'tree', children: [{ id: 'disccfg', label: 'Discovery Settings', view: 'generic' }] },
];

/* Flatten the tree into an id -> node index (with parentId for ancestor reveal). */
export const NODE = {};
(function indexNav(list, parent) {
  list.forEach((n) => {
    if (n.section) return;
    NODE[n.id] = { ...n, parentId: parent };
    if (n.children) indexNav(n.children, n.id);
  });
})(NAV, null);
