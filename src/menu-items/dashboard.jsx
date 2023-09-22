// assets
import { IconDashboard, IconChecklist, IconOld, IconAffiliate } from '@tabler/icons';


// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'tasks',
      title: 'Cases',
      type: 'item',
      url: '/dashboard/Cases',
      icon: IconChecklist,
      breadcrumbs: false
    },
    {
      id: 'recipients',
      title: 'Recipients',
      type: 'item',
      url: '/dashboard/recipients',
      icon: IconOld,
      breadcrumbs: false
    },
    {
      id: 'organizations',
      title: 'Organizations',
      type: 'item',
      url: '/dashboard/organizations',
      icon: IconAffiliate,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
