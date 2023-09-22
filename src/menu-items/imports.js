// assets
import { IconOld, IconAffiliate } from '@tabler/icons';


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
      icon: IconOld,
      breadcrumbs: false
    },
    {
      id: 'organizations',
      title: 'Organizations',
      type: 'item',
      url: '/import/organizations',
      icon: IconAffiliate,
      breadcrumbs: false
    }
  ]
};

export default imports;
