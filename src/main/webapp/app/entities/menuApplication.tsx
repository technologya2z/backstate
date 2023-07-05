import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { NavDropdown } from 'app/shared/layout/menus/menu-components';
import EntitiesMenuItems from 'app/entities/menu';

const ApplicationMenu = () => {
  return (
    <NavDropdown icon="th-list" name={'Quản lý'} id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
      <>
        {/* prettier-ignore */}
        <MenuItem icon="robot" to="/application">
          <Translate contentKey="global.menu.entities.application" />
        </MenuItem>
        <MenuItem icon="info-circle" to="/api-info">
          <Translate contentKey="global.menu.entities.apiInfo" />
        </MenuItem>
        <MenuItem icon="download" to="/api-in">
          <Translate contentKey="global.menu.entities.apiIn" />
        </MenuItem>
        <MenuItem icon="upload" to="/api-out">
          <Translate contentKey="global.menu.entities.apiOut" />
        </MenuItem>
        <MenuItem icon="database" to="/database-info">
          <Translate contentKey="global.menu.entities.databaseInfo" />
        </MenuItem>
        <MenuItem icon="database" to="/opera-unit">
          <Translate contentKey="global.menu.entities.operaUnit" />
        </MenuItem>

        <MenuItem icon="asterisk" to="/topic">
          <Translate contentKey="global.menu.entities.topic" />
        </MenuItem>

        <MenuItem icon="asterisk" to="/topic-in">
          <Translate contentKey="global.menu.entities.topicIn" />
        </MenuItem>
        <MenuItem icon="asterisk" to="/topic-out">
          <Translate contentKey="global.menu.entities.topicOut" />
        </MenuItem>

        {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
      </>
    </NavDropdown>
  );
};

export default ApplicationMenu as React.ComponentType<any>;
