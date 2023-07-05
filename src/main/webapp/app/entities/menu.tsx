import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}

      <MenuItem icon="map" to="/area">
        <Translate contentKey="global.menu.entities.area" />
      </MenuItem>
      <MenuItem icon="sitemap" to="/organization">
        <Translate contentKey="global.menu.entities.organization" />
      </MenuItem>
      <MenuItem icon="people-group" to="/department">
        <Translate contentKey="global.menu.entities.department" />
      </MenuItem>
      <MenuItem icon="closed-captioning" to="/jobtitle">
        <Translate contentKey="global.menu.entities.jobtitle" />
      </MenuItem>
      <MenuItem icon="user" to="/humans">
        <Translate contentKey="global.menu.entities.humans" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu as React.ComponentType<any>;
