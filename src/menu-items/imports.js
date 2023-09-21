// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const imports = {
  id: 'import',
  title: 'Import',
  type: 'group',
  children: [
    {
      id: 'recipients',
      title: 'recipients',
      type: 'item',
      url: '/import/recipients',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'organizations',
      title: 'Organizations',
      type: 'item',
      url: '/import/organizations',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default imports;
